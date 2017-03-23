// customer.module.ts
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

import {CustomerComponent} from './customer.component'
import {CustomerAddressComponent} from './customer-address.component'
@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [CustomerComponent, CustomerAddressComponent],
    exports: [CustomerComponent]
})

export class CustomerModule{


}