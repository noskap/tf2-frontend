"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const employee_model_1 = require("./employee/employee.model");
const employee_service_1 = require("./employee/employee.service");
const employee_controller_1 = require("./employee/employee.controller");
const post_controller_1 = require("./post/post.controller");
const post_service_1 = require("./post/post.service");
const post_model_1 = require("./post/post.model");
const user_model_1 = require("./user/user.model");
const user_service_1 = require("./user/user.service");
const user_controller_1 = require("./user/user.controller");
const session_model_1 = require("./user/session.model");
const channel_controller_1 = require("./user/channel.controller");
const auth_service_1 = require("./user/auth.service");
const steam_service_1 = require("./steam/steam.service");
const steam_controller_1 = require("./steam/steam.controller");
const connection = 'mongodb+srv://noskap:TLGn1ARnf4UJ6bYy@cluster0-n3pmz.mongodb.net/nest?retryWrites=true&w=majority';
const models = [
    { name: 'Employee', schema: employee_model_1.EmployeeSchema },
    { name: 'Session', schema: session_model_1.SessionSchema },
    { name: 'Post', schema: post_model_1.PostSchema },
    { name: 'User', schema: user_model_1.UserSchema },
];
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forRoot(connection),
                mongoose_1.MongooseModule.forFeature(models)
            ],
            controllers: [
                channel_controller_1.ChannelController,
                employee_controller_1.EmployeeController,
                post_controller_1.PostController,
                user_controller_1.UserController,
                steam_controller_1.SteamController,
            ],
            providers: [
                auth_service_1.AuthService,
                employee_service_1.EmployeeService,
                post_service_1.PostService,
                user_service_1.UserService,
                steam_service_1.SteamService,
            ],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map