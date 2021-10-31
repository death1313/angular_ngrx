import {Action} from "@ngrx/store";
import {UserModel} from "../../pages/users/user.model";


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


export type  UsersActions =
  | LoadUsers
  | SelectUser
