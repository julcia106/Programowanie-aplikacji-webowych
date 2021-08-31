var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_KEY = "f15b0bd90f5940c496c160503212208";
var API_URL = "http://api.weatherapi.com/v1/current.json?key=" + API_KEY;
var WeatherApp = /** @class */ (function () {
    function WeatherApp(element) {
        var _this = this;
        this.element = element;
        this.cities = [];
        this.element = element;
        var citiesJson = localStorage.getItem('cities');
        var cities = [];
        //retrieve data from local storage
        if (citiesJson)
            cities = JSON.parse(citiesJson);
        this.cities = cities.map(function (c) { return new City(c.name, _this); });
        this.render();
    }
    WeatherApp.prototype.addCity = function (city) {
        this.cities.push(city);
        this.render();
        this.saveIntoStorage();
    };
    WeatherApp.prototype.removeCity = function (city) {
        // Way 1
        //const index = this.cities.findIndex(city => city.name === c.name);
        //this.cities.splice(index,1);
        // Way 2
        this.cities = this.cities.filter(function (city) { return city.name !== city.name; });
        this.render();
        this.saveIntoStorage();
    };
    WeatherApp.prototype.render = function () {
        var _this = this;
        this.element.innerHTML = '';
        this.cities.forEach(function (city) { return city.render(_this.element); });
    };
    WeatherApp.prototype.saveIntoStorage = function () {
        localStorage.setItem('cities', JSON.stringify(this.cities));
    };
    return WeatherApp;
}());
var City = /** @class */ (function () {
    function City(name, app) {
        this.name = name;
        this.app = app;
    }
    City.prototype.getWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(API_URL + "&q=" + this.name)
                            .then(function (response) { return response.json(); })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.current.temp_c];
                }
            });
        });
    };
    City.prototype.getPressure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(API_URL + "&q=" + this.name)
                            .then(function (response) { return response.json(); })]; // i tutaj tak samo! typ
                    case 1:
                        res = _a.sent() // i tutaj tak samo! typ
                        ;
                        return [2 /*return*/, res.current.pressure_mb];
                }
            });
        });
    };
    City.prototype.getHumidity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(API_URL + "&q=" + this.name)
                            .then(function (response) { return response.json(); })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.current.humidity];
                }
            });
        });
    };
    City.prototype.getCondition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(API_URL + "&q=" + this.name)
                            .then(function (response) { return response.json(); })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.current.condition.icon];
                }
            });
        });
    };
    City.prototype.render = function (ctr) {
        return __awaiter(this, void 0, void 0, function () {
            var temp, pressure, humidity, icon, cityEl, close;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWeather()];
                    case 1:
                        temp = _a.sent();
                        return [4 /*yield*/, this.getPressure()];
                    case 2:
                        pressure = _a.sent();
                        return [4 /*yield*/, this.getHumidity()];
                    case 3:
                        humidity = _a.sent();
                        return [4 /*yield*/, this.getCondition()];
                    case 4:
                        icon = _a.sent();
                        cityEl = document.createElement('div');
                        cityEl.className = 'city-el d-flex flex-column align-items-center';
                        cityEl.innerHTML = "\n            <span class = \"city-temp\">" + temp + "\u2103</span>\n            <span class = \"city-name\">" + this.name + "</span>\n            <span class = \"city-other\">" + pressure + " mbar</span>\n            <span class = \"city-other\">" + humidity + "%</span>\n            <span><img src=" + icon + "></span>\n            \n            <span class = \"city-close\"><i class=\"fas fa-times\"></i></span>\n        ";
                        ctr.appendChild(cityEl);
                        close = cityEl.querySelector('.city-close');
                        close.addEventListener('click', function () { return _this.app.removeCity(_this); });
                        return [2 /*return*/];
                }
            });
        });
    };
    City.prototype.toJSON = function () {
        return { name: this.name };
    };
    return City;
}());
//const app2: WeatherApp = new WeatherApp();
var app = new WeatherApp(document.querySelector('.weather-locations'));
