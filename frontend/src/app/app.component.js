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
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const steam_service_1 = require("./steam.service");
const operators_1 = require("rxjs/operators");
const platform_browser_1 = require("@angular/platform-browser");
let AppComponent = (() => {
    let AppComponent = class AppComponent {
        constructor(steamService, titleService) {
            this.steamService = steamService;
            this.titleService = titleService;
            this.show = false;
            this.playerList = [];
            this.serverStatus = steamService.getStatusOnTimer()
                .pipe(operators_1.map(text => {
                const te = text.split('\n');
                this.titleService.setTitle(te[0].split('hostname: ')[1]);
                const players = te.slice(10);
                this.playerList = players.map(e => {
                    const g = e.split('"');
                    const f = g[0].split(" ");
                    const h = (g[2] ? g[2].split("  ") : ['']);
                    let isbot = false;
                    h.map(rt => {
                        if (rt === ' BOT') {
                            isbot = true;
                        }
                    });
                    if (isbot) {
                        return { name: undefined };
                    }
                    let vars = [];
                    if (g[1]) {
                        h.map(e => {
                            vars = [...vars, ...e.split(" ")];
                        });
                        vars = vars.filter(e => e);
                    }
                    return {
                        userid: f.filter(e => e)[1],
                        name: g[1],
                        uniqueid: vars[0],
                        connected: vars[1],
                        ping: vars[2],
                        loss: vars[3],
                        state: vars[4],
                    };
                }).filter(e => e.name);
                return te.slice(0, 9);
            }));
            this.playerRanks = steamService.getRanks().pipe(operators_1.map(ranks => {
                ranks = ranks.map(e => {
                    e.seen = new Date(e.seen);
                    return e;
                });
                return ranks.sort((a, b) => {
                    if (a.points > b.points) {
                        return 1;
                    }
                    return -1;
                });
            }));
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [steam_service_1.SteamService, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map