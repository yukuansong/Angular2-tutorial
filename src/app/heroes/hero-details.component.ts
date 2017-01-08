import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap';

import {Hero} from './hero';
import {HeroService} from './hero.service'

@Component({
    selector: "heroDetail",
    templateUrl:"hero-details.component.html"
})

export class HeroDetailsComponent implements OnInit {

    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ){};

    ngOnInit(){
        this.route.params
            .switchMap((params:Params)=>this.heroService.getHero(+params['id']))
            .subscribe(hero=>this.hero=hero);
    }

    goBack(): void{
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

}