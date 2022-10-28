import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { editmemberComponent } from './editmember/editmember.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ViewmemberComponent,
    editmemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'edit/:id', component: editmemberComponent},
      {path: 'view', component: ViewmemberComponent },
      {path: '', redirectTo: '/view', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


