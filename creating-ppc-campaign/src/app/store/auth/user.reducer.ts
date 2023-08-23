import { createReducer, on } from "@ngrx/store";
import { User } from "../auth/user";
import { login, loginSuccess, logout, logoutSuccess } from "./user.action";
 
export const initialState:User = {email:null, password:null, loginStatus:null};
 
export const userReducer = createReducer(
    initialState,
    on(loginSuccess, (state, {user}) => {
        return user;
    }),
    on(logoutSuccess, (state) => {
        return initialState;
    }),

);