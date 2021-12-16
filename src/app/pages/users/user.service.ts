import {Injectable} from "@angular/core";
import {HttpService} from "../../services/http-service";


@Injectable()
export class UserService {

  constructor(private _http: HttpService) {
  }

  load() {
    return this._http.get('users');
  }

  delete(id: number) {
    return this._http.delete(`users/${id}`);
  }
}
