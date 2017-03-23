import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {UserService} from './services/user.service'
import {AlertService} from './services/alert.service'

@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent implements OnInit{
    model: any = {};
    loading = false;

    constructor(
        private userService: UserService,
        private alertService: AlertService,
        private router: Router
    ){
    }

    ngOnInit(){
        this.alertService.clear();
    }
    register(){
        this.loading = true;

        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registraton successful', true);
                    this.router.navigate(['/login'])
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                }
            )
        
    }
}