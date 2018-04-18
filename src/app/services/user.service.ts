import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private username;

  constructor() {
    
   }

   setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  }

   getUserLoggedIn() {
  	return this.isUserLoggedIn;
   }

   logout() {
    this.isUserLoggedIn = false;
  }

}
