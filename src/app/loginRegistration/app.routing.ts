import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {HomeComponent} from './home.component';
import {RegistrationComponent} from './registration.component'

import {AuthGuard} from './services/auth.guard'
const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegistrationComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);