import {NgModule} from '@angular/core'
import {ReactiveFormsModule } from '@angular/forms'

import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component'
@NgModule({
    imports:[ReactiveFormsModule],
    providers:[],
    declarations: [DynamicFormComponent, DynamicFormQuestionComponent]

})
export class DfModule{


}