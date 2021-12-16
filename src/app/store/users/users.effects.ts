import {Injectable} from "@angular/core";
import {UserService} from "../../pages/users/user.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  DeleteUser,
  DeleteUserDone,
  LoadUsers,
  LoadUsersDone,
  UpdateUser,
  UpdateUserDone,
  UsersActionType
} from "./users.actions";
import {map, switchMap} from "rxjs/operators";
import {UserModel} from "../../pages/users/user.model";

;


@Injectable()
export class UsersEffects {

  onLoadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(UsersActionType.LoadUsers),
      switchMap((actions: LoadUsers) => this._service.load()
        .pipe(
          map((res: UserModel[]) => {
            return new LoadUsersDone(res);
          })
        )
      )
    )
  )

  onDelete$ = createEffect(() => this.actions$
    .pipe(
      ofType(UsersActionType.DeleteUser),
      switchMap((action: DeleteUser) => this._service.delete(action.payload)
        .pipe(
          map((r) => {
            return new DeleteUserDone(action.payload);
          })
        )
      )
    )
  )

  onUpdate$ = createEffect(() => this.actions$
    .pipe(
      ofType(UsersActionType.UpdateUser),
      switchMap((action: UpdateUser) => this._service.update(action.payload)
        .pipe(
          map((res : UserModel ) => {
            return new UpdateUserDone(res);
          })
        )
      )
    )
  )

  constructor(private _service: UserService,
              private actions$: Actions) {
  }
}
