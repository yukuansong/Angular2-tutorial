import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http'
// import {FormsModule} from '@angular/forms'
// import {CommonModule} from '@angular/common'

// import {AppRoutingModule} from './app-routing.module'
// import { TodoModule } from './todo/todo.module';
// import { HeroModule } from './heroes/hero.module';

// import the app modules
// import {Hero2Module} from './hero2/hero2.module';
import {HeroFormModule} from './formApp/hero-form.module'

import {NotFoundComponent} from './page-not-found.component';
// import {Hero2Service} from './hero2/hero2.service'
@NgModule({
  imports: [
            BrowserModule, 
            // TodoModule, 
            // HeroModule,
            // FormsModule,
            // CommonModule,
            // AppRoutingModule,
            HttpModule,
            // Hero2Module
            HeroFormModule,
           ],
  declarations: [AppComponent,
                 NotFoundComponent],
  // providers: [Hero2Service],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
