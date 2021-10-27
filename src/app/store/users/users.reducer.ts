import {UserModel} from "../../pages/users/user.model";
import {UsersActions, UsersActionType} from "./users.actions";


export interface UsersState {
  users: UserModel[];
  selectedUser: UserModel | null;
  total: number | null;
}

const initUsersState: UsersState = {
  users: [
    {id: 1, name: 'John Doe', email: 'john@doe.com'}
  ],
  selectedUser: null,
  total: 1
}

export function usersReducer(state: UsersState = initUsersState, action: UsersActions): UsersState {

  switch (action.type) {

    case UsersActionType.LoadUsers:
      return state;

    default:
      return state;
  }
}
