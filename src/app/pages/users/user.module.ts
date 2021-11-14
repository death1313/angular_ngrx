import {NgModule} from "@angular/core";
import {UserService} from "./user.service";
import {UsersComponent} from "./users.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {UsersEffects} from "../../store/users/users.effects";



const routes: Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      UsersEffects
    ])
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
