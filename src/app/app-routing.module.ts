
import {NgModule} from '@angular/core';
import {Router, RouterModule, Route} from '@angular/router'

import {LoginComponent} from './loginRegistration/login.component';
import {RegistrationComponent} from './loginRegistration/registration.component'
import {HomeComponent} from './loginRegistration/home.component'
import {AuthGuard} from './loginRegistration/services/auth.guard';
import { Todo } from './todo/todo.component'
import {DynamicFormComponent} from './dynamicForm/dynamic-form.component';
import {CustomerComponent} from './nestedForms/customer.component';
import {DashboardComponent} from './dashboard/dashboard.component'

const appRoutes: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegistrationComponent},
    {path: 'todo', component: Todo},
    {path: 'dynamicForm', component: DynamicFormComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'customer', component: CustomerComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports:[
              RouterModule.forRoot(appRoutes)  
            ],
    exports:[RouterModule]
})

export class AppRoutingModule{}