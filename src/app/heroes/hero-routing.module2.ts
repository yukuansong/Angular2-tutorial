import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component'

@NgModule({
    imports:[RouterModule.forRoot(
        [

            {
                path: "dashboard",
                component: DashboardComponent
            }
        ]
    )
    ],
    exports: [RouterModule]
})

export class HeroRoutingModule2{}