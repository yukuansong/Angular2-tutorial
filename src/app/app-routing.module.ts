
import {NgModule} from '@angular/core';

import{HeroRoutingModule} from './heroes/hero-routing.module'

@NgModule({
    imports:[HeroRoutingModule],
    exports:[HeroRoutingModule]
})

export class AppRoutingModule{}