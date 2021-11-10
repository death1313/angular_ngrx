import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {
  }


  load() {
    return this._http.get('http://localhost:8080/api/v1/users');
  }
}
