import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => { 
        this.user = user;
      })
  }


  login() {
    this.router.navigate(['/login'])
  }
  
  logout() {
    this.auth.logout(); 
  }

  register() {
    this.router.navigate(['/register'])
  }
}
