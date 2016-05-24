"use strict";
exports.icon = function (iconCode) {
    var map = {
        '01d': '\uf00d',
        '02d': '\uf002',
        '03d': '\uf041',
        '04d': '\uf013',
        '09d': '\uf019',
        '10d': '\uf008',
        '11d': '\uf016',
        '13d': '\uf064',
        '50d': '\uf014',
        '01n': '\uf077',
        '02n': '\uf086',
        '03n': '\uf041',
        '04n': '\uf031',
        '09n': '\uf028',
        '10n': '\uf028',
        '11n': '\uf016',
        '13n': '\uf016',
        '50n': '\uf014'
    };
    return map[iconCode] || '\uf03e';
};
//# sourceMappingURL=icons.js.map