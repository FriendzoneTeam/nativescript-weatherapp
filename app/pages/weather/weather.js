"use strict";
var weatherIcon = require('../../shared/icons').icon;
var colorModule = require("color");
var Color = colorModule.Color;
var Weather = (function () {
    function Weather(_apiService) {
        this._apiService = _apiService;
        this._hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
        this.isLoading = false;
        this.city = "Buscareti";
        this.country = "Romania";
        this.weatherType = "Clear";
        this.temperature = 21;
        this.searchedCity = "Buscareti";
        this.currentColor = "white";
        this.nextColor = this._randomColor();
        this.icon = weatherIcon();
    }
    Weather.prototype._rgb2hex = function (rgb) {
        return "#" + this._hex(rgb[0]) + this._hex(rgb[1]) + this._hex(rgb[2]);
    };
    Weather.prototype._hex = function (x) {
        return isNaN(x) ? "00" : this._hexDigits[(x - x % 16) / 16] + this._hexDigits[x % 16];
    };
    Weather.prototype._randomColor = function () {
        var colors = [0, 1, 2].map(function () {
            return Math.ceil(Math.random() * 255);
        });
        var color = this._rgb2hex(colors);
        return color;
    };
    Weather.prototype.getWeather = function () {
        this._apiService.fetchWeather(this.searchedCity)
            .subscribe(function (weather) {
            console.log(weather);
        });
        this.isLoading = false;
    };
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=weather.js.map