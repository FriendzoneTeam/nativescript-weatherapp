import {ApiService} from '../../shared/api/api.service';
var weatherIcon = require('../../shared/icons').icon;

var colorModule = require("color");
var Color = colorModule.Color;

export class Weather {
    private _hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f")
    isLoading = false;
    city = "Buscareti";
    country = "Romania";
    weatherType = "Clear";
    temperature = 21;
    searchedCity = "Buscareti";
    currentColor = "white";
    nextColor = this._randomColor();
    icon = weatherIcon()
    constructor (private _apiService: ApiService) {}
    _rgb2hex (rgb) {
        return "#" + this._hex(rgb[0]) + this._hex(rgb[1]) + this._hex(rgb[2]);
    }
    _hex (x) {
        return isNaN(x) ? "00" : this._hexDigits[(x - x % 16) / 16] + this._hexDigits[x % 16];
    }
    _randomColor () {
        var colors = [0,1,2].map(function(){
			return Math.ceil(Math.random() *255);
		});
        var color = this._rgb2hex(colors);
        return color;
    }
    getWeather () {
        this._apiService.fetchWeather(this.searchedCity)
            .subscribe(
                weather => {
                    console.log(weather)
                }
            );
        this.isLoading = false;
    }
}