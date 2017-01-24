import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule} from '@angular/common'
import { HttpModule} from '@angular/http'

import {Hero2Component } from './hero2.component'
import {Hero2DetailsComponent} from './hero2-details.component'
import {DashBoardComponent} from './dash-board.component'
import {Hero2SearchComponent } from './hero2-search.component'

import {Hero2RoutingModule} from './hero2-routing.module'
@NgModule({
    imports:[
        FormsModule, 
        CommonModule, 
        HttpModule, 
        Hero2RoutingModule
        ],
    declarations:[
        Hero2Component, 
        Hero2DetailsComponent, 
        DashBoardComponent,
        Hero2SearchComponent,
        ],
    exports: [Hero2Component, DashBoardComponent, Hero2RoutingModule]

})
export class Hero2Module{}