
import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router'

import {Hero2Component} from './hero2.component'
import {DashBoardComponent} from './dash-board.component'
import {Hero2DetailsComponent} from './hero2-details.component'

var routes: Route[] = [
    {
    path: "heroes",
    component: Hero2Component
    },
    {
        path: "dashboard",
        component: DashBoardComponent
    },
    {
        path: "details/:id",
        component: Hero2DetailsComponent
    }
    ]

@NgModule({
    imports:[
                RouterModule.forRoot(routes)
            ],
    exports:[RouterModule]
})

export class Hero2RoutingModule{}