import {Injectable} from "@angular/core";
import {UserService} from "../../pages/users/user.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoadUsers, LoadUsersDone, UsersActionType} from "./users.actions";
import {map, switchMap} from "rxjs/operators";
import {UserModel} from "../../pages/users/user.model";


@Injectable()
export class UsersEffects {

  //
  onLoadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(UsersActionType.LoadUsers),
      switchMap((action: LoadUsers) => this._service.load()
        .pipe(
          map((res: UserModel[]) => {
            return new LoadUsersDone(res)
          })
        )
      )
    ))

  constructor(private _service: UserService,
              private actions$: Actions) {
  }
}
