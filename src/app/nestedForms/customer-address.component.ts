import {Component, Input} from '@angular/core'
import {FormGroup} from '@angular/forms'

@Component({
    selector: "my-address",
    templateUrl: "customer-address.component.html"
})
export class CustomerAddressComponent{
    // we will pass in address from the UserComponent
    @Input()
    addressForm: FormGroup;
}