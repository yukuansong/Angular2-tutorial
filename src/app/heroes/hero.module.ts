import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'


import {HeroComponent} from './hero.component';
import {HeroDetailsComponent} from './hero-details.component';
import {HeroService} from './hero.service'

import {DashboardComponent} from './dashboard.component'
import {HeroSearchComponent} from './hero-search.component'

@NgModule({
    imports:[
        FormsModule, 
        CommonModule
    ],

    declarations:[HeroComponent, HeroDetailsComponent, DashboardComponent, HeroSearchComponent],
    providers:[HeroService],
    exports: [HeroComponent, DashboardComponent, HeroDetailsComponent],
    bootstrap:[HeroComponent]
})
export class HeroModule{

}