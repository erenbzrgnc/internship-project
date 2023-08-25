import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { login, loginSuccess, logout, logoutFailure } from 'src/app/store/auth/user.action';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; 

  constructor(
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public router: Router,
    public ngZone: NgZone, 
    private store: Store
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {

        const email = user.email;
        const currentUser= {email:email, password:null, loginStatus: true};
        this.store.dispatch(loginSuccess({user:currentUser}));
      } else {

        const error = "user is not logged in";
        this.store.dispatch(logoutFailure({error:error}));
      }
    });

    

  }

  
  // Sign in with email/password
  SignIn(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
        this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log("result", result);
                let loginStatus = result.user != null;
                resolve({ email: email, password: null, loginStatus: loginStatus });
            })
            .catch((error) => {
                console.log("error", error);
                resolve({ email: email, password: null, loginStatus: false });
                window.alert(error.message);

                reject(error);  
            });
    });
}






  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
   
      this.router.navigate(['login']);
    });
  }
}