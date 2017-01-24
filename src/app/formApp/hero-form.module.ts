import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

import {HeroFormComponent} from './hero-form.component'

@NgModule({
    imports:[FormsModule, CommonModule],
    declarations:[HeroFormComponent],
    exports: [HeroFormComponent]
})
export class HeroFormModule{}