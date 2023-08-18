import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/auth/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from '../store/auth/user.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffect])
   
  ]
})
export class LoginModule { }
