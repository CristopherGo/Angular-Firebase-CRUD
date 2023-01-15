import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';

  constructor(private log: LoginService) { }

  ngOnInit(): void {

    firebase.initializeApp(
      {
        apiKey: "xxxxxxxxxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxxxxx",

      }
    )
  }

  loged() {
    return this.log.getIdToken();
  }

  logout() {
    this.log.logOut();
  }
}
