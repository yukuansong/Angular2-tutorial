import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {HeroService} from './hero.service'
import {Hero} from './Hero'

@Component({

    selector:'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:["dashboard.component.css"]
})
export class DashboardComponent implements OnInit{

heroes: Hero[];

selectedHero: Hero;

constructor(
    private heroService:HeroService,
    private router:Router
    ){};

ngOnInit():void{
                this.heroService.getHeroes()
                    .then(heroes=>this.heroes = heroes.slice(1,5));
}

onSelected(hero: Hero):void{
    this.selectedHero = hero;
    this.gotoDetail();
}

gotoDetail():void {
    this.router.navigate(["/heroes", this.selectedHero.id])
}

}