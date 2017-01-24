
import {NgModule} from '@angular/core';

import {Hero2RoutingModule} from './hero2/hero2-routing.module'


@NgModule({
    imports:[
                Hero2RoutingModule
            ],
    exports:[Hero2RoutingModule]
})

export class AppRoutingModule{}