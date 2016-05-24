"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var app = require("application");
var fontModule = require("ui/styling/font"); // for iOS
if (app.ios) {
    fontModule.ios.registerFont("WeatherIcons-Regular.ttf");
}
application_1.nativeScriptBootstrap(app_component_1.AppComponent);
//# sourceMappingURL=main.js.map