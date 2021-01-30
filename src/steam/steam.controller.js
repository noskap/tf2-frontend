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
exports.SteamController = void 0;
const common_1 = require("@nestjs/common");
const steam_service_1 = require("./steam.service");
let SteamController = (() => {
    let SteamController = class SteamController {
        constructor(steamService) {
            this.steamService = steamService;
        }
        testUsers() {
            return this.steamService.get();
        }
        getRanks() {
            return this.steamService.getRanks();
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SteamController.prototype, "testUsers", null);
    __decorate([
        common_1.Get('rank'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SteamController.prototype, "getRanks", null);
    SteamController = __decorate([
        common_1.Controller('steam'),
        __metadata("design:paramtypes", [steam_service_1.SteamService])
    ], SteamController);
    return SteamController;
})();
exports.SteamController = SteamController;
//# sourceMappingURL=steam.controller.js.map