"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteamService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let SteamService = (() => {
    let SteamService = class SteamService {
        constructor(httpClient) {
            this.httpClient = httpClient;
        }
        status() {
            return this.httpClient.get(`http://167.179.175.30:4444/steam`, { responseType: "text" })
                .pipe(operators_1.tap(e => {
            }), operators_1.map((e) => e));
        }
        getRanks() {
            return this.httpClient.get(`http://167.179.175.30:4444/steam/rank`)
                .pipe(operators_1.map((e) => e));
        }
        getStatusOnTimer() {
            return rxjs_1.timer(0, 5000).pipe(operators_1.switchMap(() => this.status()));
        }
    };
    SteamService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SteamService);
    return SteamService;
})();
exports.SteamService = SteamService;
//# sourceMappingURL=steam.service.js.map