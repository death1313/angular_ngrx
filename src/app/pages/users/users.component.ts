import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {LoadUsers} from "../../store/users/users.actions";


@Component({
  selector: 'page-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent {


  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new LoadUsers({}));
  }
}
