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
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const sqlite3 = require('sqlite3').verbose();
let Rcon = require('srcds-rcon');
let rcon = Rcon({
    address: '167.179.175.30:27015',
    password: 'CHANGEME'
});
rcon.connect().then(() => {
    console.log('connected');
}).catch(console.error);
let SteamService = (() => {
    let SteamService = class SteamService {
        constructor() {
        }
        get() {
            return rxjs_1.from(rcon.connect()).pipe(operators_1.catchError((e, caught) => {
                console.error('error');
                console.error(e);
                return rxjs_1.of(undefined);
            }), operators_1.switchMap((strin) => {
                if (!strin) {
                    return rcon.command('status');
                }
                return rxjs_1.of(undefined);
            }));
        }
        getStatusOnTimer() {
            return rxjs_1.timer(0, 5000).pipe(operators_1.switchMap(() => this.get()));
        }
        getRanks() {
            return new Promise((res, rej) => {
                const db = new sqlite3.Database('../../../../hlserver/steamapps/common/Team Fortress 2 Dedicated Server/tf/addons/sourcemod/data/sqlite/playerranksback.sq3');
                db.serialize(() => {
                    db.all("SELECT * FROM players", (e, d) => {
                        res(d);
                    });
                });
            });
        }
    };
    SteamService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SteamService);
    return SteamService;
})();
exports.SteamService = SteamService;
//# sourceMappingURL=steam.service.js.map