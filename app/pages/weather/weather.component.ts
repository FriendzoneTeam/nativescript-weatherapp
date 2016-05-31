import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TextField} from 'ui/text-field';
import {Page} from 'ui/page';
import {Weather} from './weather';
import {ApiService} from '../../shared/api/api.service'

@Component({
    selector: 'weather',
    templateUrl: 'pages/weather/weather.html',
    styleUrls: ['pages/weather/weather.css'],
    providers: [ApiService]
})

export class WeatherPage implements OnInit {
    weather: Weather;
    isLoading = false;
    searchedCity: string = "Bucareti";
    
    // @ViewChild("searchedCity") searchedCity: ElementRef;
    getWeather () {
        console.log("U Click me :-D")
        console.log(`SearchedCity 2: ${this.searchedCity}`)
        this._apiService.fetchWeather(this.searchedCity)
        .subscribe(loadedWeather => {
            console.log(JSON.stringify(loadedWeather))
        });
    }
    
    constructor(private _apiService: ApiService, private page: Page){
        this.weather = new Weather(this._apiService)
    }
    
    ngOnInit () {
        console.log('OnInit :-)')
        
        this.page.actionBarHidden = true;
    }
}