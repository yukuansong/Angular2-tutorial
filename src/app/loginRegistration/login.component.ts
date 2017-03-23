import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'

import {AlertService} from './services/alert.service'
import {AuthenticationService} from './services/authentication.service'
@Component({
    selector: 'login',
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit{

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute,
        ){

    }

    ngOnInit(){
        // this.alertService.clear();
        // this.alertService.error("Something is wrong with the login component", false);

        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(){
        this.loading = true;     

        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                }
            )
    }

}