import {Component, OnInit} from '@angular/core'
import {Validators, FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms'

import {Customer} from './customer'
@Component({
    selector: 'my-customer',
    templateUrl:"customer.component.html"
})

export class CustomerComponent implements OnInit{

    public myForm: FormGroup; //our form model

    constructor(private _fb: FormBuilder){}
     
    ngOnInit(){
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        })
    };

    initAddress(){
        // initialize our addresses
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        })
    };


    addAddress(){
        // add address to the list
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress())
    }

    removeAddress(i: number){
        // remove address from the list
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }
    save(model: Customer){
        // call API to save Customer
        console.log(model);
    }
}