import {Component} from '@angular/core'

import {Hero} from './hero'

@Component({
    selector: 'hero-form',
    templateUrl: "hero-form.component.html"
})
export class HeroFormComponent{
    submitted: boolean = false;

    powers =['Really Smart', 'Super Flexible',
            ' Super Hot', 'Weather Changer'];
    
    model = new Hero(18, 'Dr IQ', this.powers[0], 'onverstreet');

    onSubmit(){
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {return JSON.stringify(this.model)}

    onSubmitted():void{
        console.log("====== I am working ......");
        this.submitted = true;
    }

    newHero():void {
        this.model = new Hero(42, '', '');
    }
}
