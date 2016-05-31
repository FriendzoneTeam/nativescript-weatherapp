"use strict";
var core_1 = require('@angular/core');
var page_1 = require('ui/page');
var weather_1 = require('./weather');
var api_service_1 = require('../../shared/api/api.service');
var WeatherPage = (function () {
    function WeatherPage(_apiService, page) {
        this._apiService = _apiService;
        this.page = page;
        this.isLoading = false;
        this.searchedCity = "Bucareti";
        this.weather = new weather_1.Weather(this._apiService);
    }
    // @ViewChild("searchedCity") searchedCity: ElementRef;
    WeatherPage.prototype.getWeather = function () {
        console.log("U Click me :-D");
        console.log("SearchedCity 2: " + this.searchedCity);
        this._apiService.fetchWeather(this.searchedCity)
            .subscribe(function (loadedWeather) {
            console.log(JSON.stringify(loadedWeather));
        });
    };
    WeatherPage.prototype.ngOnInit = function () {
        console.log('OnInit :-)');
        this.page.actionBarHidden = true;
    };
    WeatherPage = __decorate([
        core_1.Component({
            selector: 'weather',
            templateUrl: 'pages/weather/weather.html',
            styleUrls: ['pages/weather/weather.css'],
            providers: [api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, page_1.Page])
    ], WeatherPage);
    return WeatherPage;
}());
exports.WeatherPage = WeatherPage;
//# sourceMappingURL=weather.component.js.map