import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {HeroComponent} from './hero.component';
import {HeroDetailsComponent} from './hero-details.component';
import {DashboardComponent} from './dashboard.component'

@NgModule({
    imports:[RouterModule.forRoot(
        [
            {
                path: "heroes",
                component: HeroComponent
            },
            {
                path: "heroes/:id",
                component: HeroDetailsComponent
            },
            {
                path: "",
                redirectTo: "/dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                component: DashboardComponent
            }
        ]
    )
    ],
    exports: [RouterModule]
})

export class HeroRoutingModule{}