import {Component, OnInit} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'
import {Router} from '@angular/router'

import {Hero} from './Hero'
import {Hero2SearchService} from './hero2-search.service'
@Component({
    selector: 'hero-search',
    templateUrl: "hero2-search.component.html",
    providers: [Hero2SearchService]
})
export class Hero2SearchComponent implements OnInit{
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
                private http: Http,
                private searchService: Hero2SearchService,
                private router: Router){}


    ngOnInit(): void {
        // this.heroes = this.searchTerms
        //                 .debounceTime(300)
        //                 .distinctUntilChanged()
        //                 .switchMap(term=>term?this.searchService.searchHeroes(term)
        //                                 :Observable.of<Hero[]>([]))
        //                 .catch(error=>{
        //                     console.log(error);
        //                     return Observable.of<Hero[]>([]);
        //                 });

    }

    search(term: string){
        // this.searchTerms.next(term);
        if(term)
                this.heroes = this.searchService.searchHeroes(term);
        else    
            this.heroes= Observable.of<Hero[]>([]);
    }

    gotoDetails(hero: Hero):void {
        let link = ["/details", hero.id];
        this.router.navigate(link);
    }
}