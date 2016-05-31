"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require('../config');
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.fetchWeather = function (city) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var url = "" + config_1.Config.apiUrl + city + "&appid=b1b15e88fa797225412429c1c50c122a&apiKey=" + config_1.Config.apiKey;
        console.log("Url => " + url);
        return this._http.get(url, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    ApiService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map