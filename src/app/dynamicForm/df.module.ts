import {NgModule} from '@angular/core'
import {ReactiveFormsModule } from '@angular/forms'
import {CommonModule} from '@angular/common'

import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component'
@NgModule({
    imports:[ReactiveFormsModule, CommonModule],
    providers:[],
    declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
    exports:[DynamicFormComponent]

})
export class DfModule{


}