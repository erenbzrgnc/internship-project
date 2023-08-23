import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, catchError, from, map, mergeMap, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { login, loginFailure, loginSuccess, logoutSuccess } from "./user.action";
import { User } from "../../shared/services/user";
import { Router } from '@angular/router';

@Injectable()
export class UserEffect {

    constructor(
        private actions$: Actions,
        private authService:AuthService,
        public router: Router,
        private store: Store ) { }

        login$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(login),
                mergeMap((action) => 
                    from(this.authService.SignIn(action.user.email, action.user.password)).pipe(
                        map(loginInfo => {
                            //console.log(loginInfo);
        
                            if (loginInfo && loginInfo.loginStatus) {
                                let userData = loginInfo;
                           
                                this.router.navigate(['choose-campaign']).catch(err => {
                                    console.error("Navigation Error:", err);
                                });
                                return loginSuccess({ user: loginInfo });
                            } else {
                                window.alert('User not found');
                               
                                return loginFailure({ error: 'User not found' });
                            }
                        }),
                        catchError(err => of(loginFailure({ error: err.message })))
                    )
                )
            );
        });

    
logout$ = createEffect(() => {
    return this.actions$.pipe(
        ofType('[Logout] User Logout'),
        tap(() => {
            this.authService.SignOut();
            this.router.navigate(['login']);
        }),
        mergeMap(() => of({ type: '[Logout] User Logout Success' }))
    );
});

    


}
