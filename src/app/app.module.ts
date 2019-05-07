import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UniversitiesComponent } from './universities/universities.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Router, RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes : Routes = [
  {
    path:'universities',
    component:UniversitiesComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'', //default path
    component:UniversitiesComponent,
    pathMatch:'full'
  },
  {
    path:'**', //error route
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    UniversitiesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //we can use http requests in our app
    FormsModule, // forms and data binding
    RouterModule.forRoot(appRoutes, {enableTracing: true}) //routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
