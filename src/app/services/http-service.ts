import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

export type  verbs = 'PUT' | 'GET' | 'POST' | 'PATCH' | 'DELETE';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly #baseApi: string = environment.BASE_API;

  constructor(private _http: HttpClient) {
  }

  get(url: string, relative: boolean = true) {
    return this.request('GET', url, null, relative);
  }

  post<T = any>(url: string, params: T, relative: boolean = true) {
    return this.request('POST', url, params, relative);
  }

  request<T = any>(type: verbs, url: string, params?: T, relative: boolean = true) {
    if (relative) {
      url = this.#baseApi + `/${url}`;
    }
    switch (type) {
      case "GET":
        return this._http.get<T>(url);
      case "POST":
        return this._http.post(url, params);
      default:
        return this._http.get<T>(url);
    }
  }

}