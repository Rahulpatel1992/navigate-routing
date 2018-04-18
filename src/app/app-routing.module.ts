import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { HomeComponent }  from './home/home.component';
import { ViewDetailComponent }  from './home/view-detail.component';
import { AddBookComponent }  from './add-book/add-book.component';
import { UpdateBookComponent }  from './manage-book/update-book.component';
import { ManageBookComponent }  from './manage-book/manage-book.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {AuthguardGuard} from './authguard.guard'
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
	// { path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '', component: LoginFormComponent },
	{ path: 'login', canActivate: [AuthguardGuard], component: LoginFormComponent },
	{ path: 'logout', component: LogoutComponent},
	{ path: 'home', component: HomeComponent },
	{ path: 'view-detail/:id', component: ViewDetailComponent },		  
	{ path: 'add-book', component: AddBookComponent },
	{ path: 'manage-book', component: ManageBookComponent },
	{ path: 'update-book/:id',  component: UpdateBookComponent }, 
	{ path: '**', component: LoginFormComponent },


];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
