import { NgModule}  from '@angular/core';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

import {LoginRegistrationComponent} from './login-registration.component';
import {LoginComponent} from './login.component';
import {HomeComponent} from './home.component';
import {RegistrationComponent} from './registration.component'
import {AlertComponent} from './alert.component'

import {AlertService} from './services/alert.service';
import {UserService} from './services/user.service'
import {AuthenticationService} from './services/authentication.service'
import {AuthGuard} from './services/auth.guard'

import {routing} from './app.routing'
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        routing,
    ],
    declarations: [
        LoginRegistrationComponent,
        LoginComponent,
        HomeComponent,
        RegistrationComponent,
        AlertComponent,
    ],
    providers: [
        AlertService,
        AuthGuard,
        UserService,
        AuthenticationService,
        ],
    exports: [
        LoginRegistrationComponent,
        LoginComponent,
        ]
})
export class LoginRegistrationModule{

}