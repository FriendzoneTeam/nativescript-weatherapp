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
    weather = new Weather(this._apiService)
    isLoading = false;
    
    // @ViewChild("searchedCity") searchedCity: ElementRef;
    testDone () {
        console.log("U Click me :-D")
        console.log(`SearchedCity: ${this.weather.searchedCity}`)
    }
    constructor(private _apiService: ApiService, private page: Page){}
    ngOnInit () {
        console.log('OnInit :-)')
        
        this.page.actionBarHidden = true;
    }
}