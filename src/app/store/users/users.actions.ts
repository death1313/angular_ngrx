import {Action} from "@ngrx/store";


export enum UsersActionType{
  LoadUsers = '[USERS] load users trigger',
  LoadUsersDone = '[USERS] load users done',
  LoadUsersFailed = '[USERS] load users failed',
}



export class LoadUsers implements Action {
  readonly type = UsersActionType.LoadUsers;
  constructor(public payload : any) {
  }
}


export type  UsersActions =
  | LoadUsers
