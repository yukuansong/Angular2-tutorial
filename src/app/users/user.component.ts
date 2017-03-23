import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

import {User} from './user'

@Component({
    selector: 'user-app',
    templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {

    public myForm: FormGroup; // our model-driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] =[]; //use later to display form changes.

    constructor(private _fb: FormBuilder){} //form builder simplify form initialization


    ngOnInit(){
        // we initialize our form model here
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            address: new FormGroup({
                street: new FormControl('14409 autumn crest', <any>Validators.required),
                postcode: new FormControl('8000')
            })
        });

        // set the form control value
        this.myForm.controls['name'].setValue('John Smith', {onlyself: true});

        // set the form value (or set the form model)
            // for testing only
        const people = {
            name: 'Jane whatever',
            address: {
                street: 'High Street',
                postcode: '20841'
            }
        }
        this.myForm.setValue(people, {onlySelf: true});

        this.subscribeToFormChanges();
    }

    /**
     * With reactive forms, we can listen to form or control changes easily.
     * Each form group or form control expose a few events which we can subscribe to (
     * e.g. statusChange, valuesChanges, etc.)
     * 
     * Let say we want to do something every time when any form values changed. wes can
     * do this:
     */
    subscribeToFormChanges(){
        // initialzie stream
        const myFormValuesChanges = this.myForm.valueChanges;

        // subscribe to the stream
        myFormValuesChanges.subscribe(x => this.events.push({event: 'STATUS CHANGEED', object:x}));
    }

    save(model: User, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is Validator
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}