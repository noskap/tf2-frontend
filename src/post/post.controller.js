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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
let PostController = (() => {
    let PostController = class PostController {
        constructor(postService) {
            this.postService = postService;
        }
        list(user, channel) {
            return this.postService.find({ user, channel });
        }
        create(content, user, channel) {
            console.log(content, user, channel);
            return this.postService.create({
                content,
                user,
                channel,
            });
        }
    };
    __decorate([
        common_1.Post('list'),
        __param(0, common_1.Body('user')),
        __param(1, common_1.Body('channel')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], PostController.prototype, "list", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body('content')),
        __param(1, common_1.Body('user')),
        __param(2, common_1.Body('channel')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], PostController.prototype, "create", null);
    PostController = __decorate([
        common_1.Controller('post'),
        __metadata("design:paramtypes", [post_service_1.PostService])
    ], PostController);
    return PostController;
})();
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map