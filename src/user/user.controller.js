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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = (() => {
    let UserController = class UserController {
        constructor(userService) {
            this.userService = userService;
        }
        create(username, password) {
            console.log('CREATE ');
            return this.userService.create({ username, password });
        }
        login(username, password) {
            console.log('login');
            return;
        }
        details(id) {
            console.log('details');
            return this.userService.findById(id);
        }
    };
    __decorate([
        common_1.Post('create'),
        __param(0, common_1.Body('username')),
        __param(1, common_1.Body('password')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "create", null);
    __decorate([
        common_1.Post('login'),
        __param(0, common_1.Body('username')),
        __param(1, common_1.Body('password')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "login", null);
    __decorate([
        common_1.Post('details'),
        __param(0, common_1.Body('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "details", null);
    UserController = __decorate([
        common_1.Controller('user'),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map