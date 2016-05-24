"use strict";
var core_1 = require('@angular/core');
var weather_1 = require('./weather');
var api_service_1 = require('../../shared/api/api.service');
var WeatherPage = (function () {
    function WeatherPage(_apiService) {
        this._apiService = _apiService;
        this.weather = new weather_1.Weather(this._apiService);
        this.isLoading = false;
    }
    WeatherPage.prototype.ngOnInit = function () {
        console.log('OnInit :-)');
    };
    __decorate([
        core_1.ViewChild("searchedCity"), 
        __metadata('design:type', core_1.ElementRef)
    ], WeatherPage.prototype, "searchedCity", void 0);
    WeatherPage = __decorate([
        core_1.Component({
            selector: 'weather',
            templateUrl: 'pages/weather/weather.html',
            styleUrls: ['pages/weather/weather.css'],
            providers: [api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], WeatherPage);
    return WeatherPage;
}());
exports.WeatherPage = WeatherPage;
//# sourceMappingURL=weather.component.js.map