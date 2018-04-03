import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

import { FormTplComponent } from './form-tpl/form-tpl.component';
import { ErrorFormComponent } from './error-form/error-form.component';


@NgModule({
  declarations: [
    AppComponent,      
    FormComponent,
    FormTplComponent,
    ErrorFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
