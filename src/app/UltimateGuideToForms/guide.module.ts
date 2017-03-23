import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

import {GuideComponent} from './guide.component'
@NgModule({
    declarations:[GuideComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [GuideComponent]
})
export class GuideModule{

}