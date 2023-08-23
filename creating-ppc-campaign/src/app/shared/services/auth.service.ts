import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { login, loginSuccess, logout } from 'src/app/store/auth/user.action';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private store: Store
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        // User is logged in
        // Dispatch to your NgRx store or perform other logic here
        const email = user.email;
        const currentUser= {email:email, password:null, loginStatus: true};
        this.store.dispatch(loginSuccess({user:currentUser}));
      } else {
        // User is not logged in
        // Dispatch logout or other cleanup logic
        this.store.dispatch(logout());
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
                // If you want to return a User object even in case of an error, use resolve instead of reject
                // Otherwise, you can just reject the promise
                reject(error);  
            });
    });
}


  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }



  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
   
      this.router.navigate(['login']);
    });
  }
}