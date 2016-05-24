import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TextField} from 'ui/text-field';
import {Weather} from './weather';
import {ApiService} from '../../shared/api/api.service'

@Component({
    selector: 'weather',
    templateUrl: 'pages/weather/weather.html',
    styleUrls: ['pages/weather/weather.css'],
    providers: [ApiService]
})

export class WeatherPage implements OnInit {
    weather = new Weather(this._apiService)
    isLoading = false;
    
    @ViewChild("searchedCity") searchedCity: ElementRef;
    
    constructor(private _apiService: ApiService){}
    ngOnInit () {
        console.log('OnInit :-)')
    }
}