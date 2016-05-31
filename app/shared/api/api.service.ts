
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Config} from '../config';
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {
    constructor(private _http: Http){}
    fetchWeather (city) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        var url = `${Config.apiUrl}${city}&appid=b1b15e88fa797225412429c1c50c122a&apiKey=${Config.apiKey}`;
        console.log(`Url => ${url}`);
        return this._http.get(url, {
            headers: headers
        })
        .map(res => { return res.json() })
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error)
    }
}