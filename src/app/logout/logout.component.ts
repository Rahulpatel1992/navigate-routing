import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private user:UserService) { }

  ngOnInit(){
    this.user.logout();
    this.router.navigate(['login']);
  }

  logoutUser(e){
    e.preventDefault();
  	console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    }
  }

}
