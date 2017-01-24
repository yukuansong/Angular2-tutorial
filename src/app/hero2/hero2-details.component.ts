
import {Component, OnInit} from '@angular/core';
import{ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'

import {Hero} from './Hero'
import {Hero2Service} from './hero2.service'

@Component({
    selector: "hero2-details",
    templateUrl:"hero2-details.component.html",
    styleUrls:["hero2-details.component.css"]
})
export class Hero2DetailsComponent implements OnInit{
    hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: Hero2Service,
        private location:Location
    ){

    }

    ngOnInit(){
        this.route.params
            .switchMap((params:Params)=>this.heroService.getHero(+params['id']))
            .subscribe(hero=>this.hero = hero)
    }
    
    goBack(){
        this.location.back();
    }
}