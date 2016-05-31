import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {WeatherPage} from "./pages/weather/weather.component";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS],
    template: "<page-router-outlet></page-router-outlet>"
})

@RouteConfig([
    {path: "/Weather", component: WeatherPage, name: "Weather", useAsDefault: true}
])

export class AppComponent {}
