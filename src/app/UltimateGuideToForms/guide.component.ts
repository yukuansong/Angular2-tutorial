import {Component} from '@angular/core'
import {FormBuilder, FormGroup, AbstractControl, Validators, FormControl} from '@angular/forms'

@Component({
    selector: 'my-guide',
    templateUrl:"guide.component.html"
})
export class GuideComponent{
    private myForm: FormGroup;

    constructor(_fb: FormBuilder){
        this.myForm = _fb.group({
            sku:['', Validators.compose([
                Validators.required, this.skuValidator
            ])]
        });

        this.myForm.controls['sku'].valueChanges.subscribe((value:string)=>{
            console.log('sku changed to: ', value);
        })

        this.myForm.valueChanges.subscribe((form: any) =>{
            console.log('form changed to:', form);
        })
    }

    onSubmit(form: string){
        console.log("Form value is :" + form);
    }

    skuValidator(control: FormControl): any {
        if(!control.value.match(/^123/)){
            return {invalidSku: true};
        }
    }
}