import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token:string='';
  
  constructor(private router: Router, private cookie: CookieService) { }

  login(email: string, password: string) {
   
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookie.set('token', this.token);
            this.router.navigate(['/']);
           // window.location.reload;
          }
        )
      }
    )
  }

 getIdToken() {
  return this.cookie.get('token'); 
  }


  logOut() {
    firebase.auth().signOut().then(() => {
      this.token = "";
      this.cookie.set('token', this.token);
      return this.token;
    })
  }
}
