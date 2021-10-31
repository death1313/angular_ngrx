import {Component} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {LoadUsers, SelectUser} from "../../store/users/users.actions";
import {selectSelectedUser, selectUsers, selectUsersTotal} from "../../store/users/users.reducer";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";


@Component({
  selector: 'page-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent {

  users$: Observable<UserModel[]>;
  total$: Observable<number>;
  selectedUser$: Observable<UserModel>;


  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new LoadUsers({}));
    this.users$ = this._store.pipe(select(selectUsers));
    this.total$ = this._store.pipe(select(selectUsersTotal));
    this.selectedUser$ = this._store.pipe(select(selectSelectedUser));
  }

  selectUser(user: UserModel) {
    this._store.dispatch(new SelectUser(user));
  }

  deselectUser() {
    this._store.dispatch(new SelectUser(null));
  }
}
