//user.module.ts

import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {UserComponent} from './user.component'

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    declarations:[UserComponent],
    exports: [UserComponent]
})

export  class UserModule{ }