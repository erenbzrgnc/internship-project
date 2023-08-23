import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const login = createAction(

    '[Login Page] User Login',props<{ user: User }>()
)

export const logout = createAction(
    "[Logout] User Logout" 
)

export const loginSuccess = createAction(
    "[Login Page] User Login Success", props<{ user: User }>()
)
export const loginFailure = createAction(
    "[Login Page] User Login Failure", props<{ error: any }>()
)

export const logoutSuccess = createAction(
    "[Logout] User Logout Success"
)

export const logoutFailure = createAction(
    "[Logout] User Logout Failure", props<{ error: any }>()

)