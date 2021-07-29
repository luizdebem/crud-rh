import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EmployeeListComponent } from './components/shared/employee-list/employee-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    NavbarComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
