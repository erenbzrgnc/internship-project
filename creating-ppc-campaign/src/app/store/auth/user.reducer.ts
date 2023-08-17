import { createReducer } from "@ngrx/store";
import { User } from "../auth/user";
 
export const initialState:User = {name:"", password:""};
 
export const userReducer = createReducer(
    initialState
);