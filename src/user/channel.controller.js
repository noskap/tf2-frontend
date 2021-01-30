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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let ChannelController = (() => {
    let ChannelController = class ChannelController {
        constructor(userService) {
            this.userService = userService;
        }
        create(id, name) {
            return this.userService.findByIdAndUpdate(id, { $push: { channels: name } });
        }
        channels(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.userService.findById(id);
                return user.channels;
            });
        }
    };
    __decorate([
        common_1.Post('create'),
        __param(0, common_1.Body('userId')),
        __param(1, common_1.Body('channelName')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ChannelController.prototype, "create", null);
    __decorate([
        common_1.Post('channels'),
        __param(0, common_1.Body('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ChannelController.prototype, "channels", null);
    ChannelController = __decorate([
        common_1.Controller('channel'),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ChannelController);
    return ChannelController;
})();
exports.ChannelController = ChannelController;
//# sourceMappingURL=channel.controller.js.map