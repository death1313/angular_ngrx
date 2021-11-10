import {NgModule} from "@angular/core";
import {UserService} from "./user.service";
import {UsersComponent} from "./users.component";
import {EffectsModule} from "@ngrx/effects";
import {UsersEffects} from "../../store/users/users.effects";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";


const routes: Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      UsersEffects,
    ]),
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule {

}
