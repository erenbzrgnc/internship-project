import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/services/user';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/auth/user.selector';
import { logout } from 'src/app/store/auth/user.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user$ : Observable<User>;
  constructor(private store: Store) {
    this.user$ = store.select(selectUser);

   }
   logout() {
    
    this.store.dispatch(logout());
   }

}
