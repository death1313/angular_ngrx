import {Component} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {DeleteUser, LoadUsers, SelectUser, UpdateUser} from "../../store/users/users.actions";
import {selectSelectedUser, selectUsers, selectUsersTotal} from "../../store/users/users.reducer";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'page-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent {

  users$: Observable<UserModel[]>;
  total$: Observable<number>;
  selectedUser$: Observable<UserModel>;
  editForm: FormGroup;


  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new LoadUsers({}));
    this.users$ = this._store.pipe(select(selectUsers));
    this.total$ = this._store.pipe(select(selectUsersTotal));
    this.selectedUser$ = this._store.pipe(select(selectSelectedUser));
    this.buildForm();
  }

  selectUser(user: UserModel) {
    this._store.dispatch(new SelectUser(user));
  }

  deselectUser() {
    this._store.dispatch(new SelectUser(null));
  }

  delete(id: number) {
    this._store.dispatch(new DeleteUser(id));
  }

  editUser(user: UserModel) {
    this.selectUser(user);
    this.editForm.patchValue(user);
  }

  private buildForm() {
    this.editForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
    })
  }

  updateUser() {
    const user: UserModel = this.editForm.value;
    this._store.dispatch(new UpdateUser(user));
  }
}
