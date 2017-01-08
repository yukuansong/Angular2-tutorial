import {Component, OnInit} from '@angular/core'

import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'


import {HeroSearchService} from './hero-search.service'
import {Hero} from './hero'

@Component({
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: [ 'hero-search.component.css' ],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit{

    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
    ){}

    ngOnInit():void {

        this.heroes = this.searchTerms
            .debounceTime(300) //wait for 300ms pause in events
            .distinctUntilChanged() //ignore if next search term is same as previous
            .switchMap(term => term?this.heroSearchService.search(term)
            :Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([])
            });
    }

    search(term:string):void {
        this.searchTerms.next(term);
    }



}