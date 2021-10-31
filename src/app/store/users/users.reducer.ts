import {UserModel} from "../../pages/users/user.model";
import {UsersActions, UsersActionType} from "./users.actions";
import {AppState} from "../index";
import {createSelector} from "@ngrx/store";


export interface UsersState {
  users: UserModel[];
  selectedUser: UserModel | null;
  total: number | null;
}

const initUsersState: UsersState = {
  users: [
    {id: 1, name: 'John Doe', email: 'john@doe.com'},
    {id: 2, name: 'Jane Doe', email: 'jj@doe.com'},
  ],
  selectedUser: null,
  total: 1
}

export function usersReducer(state: UsersState = initUsersState, action: UsersActions): UsersState {

  switch (action.type) {

    case UsersActionType.LoadUsers:
      return state;

    case UsersActionType.SelectUser :
      return {
        ...state,
        selectedUser: action.payload
      }

    default:
      return state;
  }
}

export const selectUsersState = (app: AppState) => app.users;
export const selectUsers = createSelector(selectUsersState, state => state.users);
export const selectUsersTotal = createSelector(selectUsersState, state => state.total);
export const selectSelectedUser = createSelector(selectUsersState, state => state.selectedUser);
