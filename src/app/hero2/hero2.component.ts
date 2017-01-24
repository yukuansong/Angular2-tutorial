import {
            Component, 
            Input, 
            Output, 
            EventEmitter,
            OnInit
        } from '@angular/core'
import {Router} from '@angular/router'

import {Hero} from './Hero'
import {HEROES} from './hero2.mock'
import {Hero2Service} from './hero2.service'

@Component({
    selector: "hero2",
    templateUrl: "hero2.component.html",
    styleUrls: ["hero2.component.css"],
    providers: []
})
export class Hero2Component implements OnInit{

    constructor(
        private heroService: Hero2Service,
        private router: Router
        ){}

    heroes: Hero[];

    ngOnInit(){
        this.heroService.getHeroesSlowly()
            .then(heroes=>this.heroes = heroes);
    }

    selectedHero: Hero;

    onSelected(hero){
        this.selectedHero = hero;
    }

    gotoDetail(){
        this.router.navigate(['/details', this.selectedHero.id]);
    }

}