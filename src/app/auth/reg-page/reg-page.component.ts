import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService)  { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  createUser(form) {
    this.auth.createUser(form.value);
  }
 
}
