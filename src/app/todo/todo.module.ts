import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {Todo } from './todo.component';

@NgModule({
    imports: [FormsModule, /*HttpModule,*/ BrowserModule],
    declarations:[Todo],
    exports: [Todo],
    bootstrap: [Todo]

})
export class TodoModule{}
