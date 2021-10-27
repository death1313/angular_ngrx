import {ActionReducerMap} from "@ngrx/store";
import * as fromUsers from "./users/users.reducer";

export interface AppState {
  users: fromUsers.UsersState
}


export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.usersReducer
}
