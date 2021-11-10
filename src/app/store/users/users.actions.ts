import {Action} from "@ngrx/store";
import {UserModel} from "../../pages/users/user.model";
import {HttpErrorResponse} from "@angular/common/http";


export enum UsersActionType {
  LoadUsers = '[USERS] load users trigger',
  LoadUsersDone = '[USERS] load users done',
  LoadUsersFailed = '[USERS] load users failed',

  SelectUser = '[USERS] select user',
}


export class LoadUsers implements Action {
  readonly type = UsersActionType.LoadUsers;

  constructor(public payload: any) {
  }
}

export class SelectUser implements Action {
  readonly type = UsersActionType.SelectUser;

  constructor(public payload: UserModel | null) {
  }
}

export class LoadUsersDone implements Action {
  readonly type = UsersActionType.LoadUsersDone;

  constructor(public payload: UserModel[]) {
  }
}

export class LoadUsersFailed implements Action {
  readonly type = UsersActionType.LoadUsersFailed;

  constructor(public payload: HttpErrorResponse) {
  }
}


export type  UsersActions =
  | LoadUsers
  | SelectUser
  | LoadUsersDone
  | LoadUsersFailed
