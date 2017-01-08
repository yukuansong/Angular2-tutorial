import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http'

import {AppRoutingModule} from './app-routing.module'
import { TodoModule } from './todo/todo.module';
import { HeroModule } from './heroes/hero.module';


@NgModule({
  imports: [
            BrowserModule, 
            TodoModule, 
            HeroModule,
            AppRoutingModule,
            HttpModule
           ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
