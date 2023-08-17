import { createFeatureSelector } from '@ngrx/store';
import { User } from './user';
 
export const selectUser = createFeatureSelector<User>('user');