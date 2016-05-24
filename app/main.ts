// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";

import app = require("application");
import fontModule = require("ui/styling/font"); // for iOS
if (app.ios) {
    fontModule.ios.registerFont("WeatherIcons-Regular.ttf");
}
nativeScriptBootstrap(AppComponent);