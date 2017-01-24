import {Component, OnInit} from '@angular/core'

import {Hero} from './Hero'
import {Hero2Service } from './hero2.service'

@Component({
    selector: "dash-board",
    templateUrl: "dash-board.component.html",
    styleUrls:["dash-board.component.css"]
})
export class DashBoardComponent implements OnInit{
    heroes: Hero[]=[];

    constructor(private heroService: Hero2Service){

    }

    ngOnInit(){
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
    }
}