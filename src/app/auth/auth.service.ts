import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, GuardsCheckEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  
  newUser: any;
  
  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore, 
              private router: Router) { }

    getUserState() {
      return this.afAuth.authState;
    }

    login( email: string, password: string) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/home'])
        }
      })
    }

    createUser(user) {
      console.log(user)
      this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password )
        .then(userCredential => {  //promise
          this.newUser = user;
          console.log(userCredential)
          userCredential.user.updateProfile({
             displayName: user.fullname
          });
        
          this.incertUserData(userCredential)
          .then(()=> {
            this.router.navigate(['/home'])
          })
          
        })
        .catch( error => {
            this.eventAuthError.next(error)
        })
      }
      //!"write 2 database" module
    incertUserData(userCredential: firebase.auth.UserCredential) {
      return this.db.doc(`Users/${userCredential.user.uid}`).set({
        fullname: this.newUser.fullname,
        email: this.newUser.email,
        password: this.newUser.password,      
        role: 'network user'
      })
    }
    
    
    logout() {
      return this.afAuth.auth.signOut(); 
    }
    
    loggedIn() {
      return !!this.afAuth.auth.currentUser;
    }
  }

  

