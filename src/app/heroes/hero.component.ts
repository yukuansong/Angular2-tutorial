import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'


import { Hero } from './hero';
import {HeroService} from './hero.service'

// Create metadata with the '@Component' decorator
@Component({
    selector: 'hero',
    styleUrls: ["hero.component.css"],

    templateUrl: "hero.component.html",
    providers:[]
 
})
export class HeroComponent implements OnInit{
    title: string = 'Tour of Heroes';

    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router){};

    ngOnInit(): void{
        this.getHeroes();
    };

    getHeroes(): void{
        this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
    };
    onSelected(hero:Hero): void {
        this.selectedHero = hero;
    };
    gotoDetails(){
        this.router.navigate(['/heroes', this.selectedHero.id]);
    }

    addHero(heroName:string, heroId: string):void {
        heroName = heroName.trim();
        heroId = heroId.trim();
        if (!heroName || !heroId){return;}

        this.heroService.create(heroName, +heroId)
                            .then((heroes)=>{
                                for(var i =0; i<heroes.length; i++){
                                this.heroes.push(heroes[i]); 
                                }
                                this.selectedHero=null;
                            });

        console.log(this.heroes);
    }

    deleteHero(hero:Hero): void {
        this.heroService.delete(hero.id).then(()=>
            {
                this.heroes = this.heroes.filter(h=>h!==hero);
                if (hero == this.selectedHero){
                    this.selectedHero = null;
                }
            }
        )
    }
}