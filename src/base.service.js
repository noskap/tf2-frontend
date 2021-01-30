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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let BaseService = (() => {
    var _a;
    let BaseService = class BaseService {
        constructor(BaseModel) {
            this.BaseModel = BaseModel;
        }
        find(query) {
            return this.BaseModel.find(query);
        }
        create(createObject) {
            const newBaseModel = new this.BaseModel(createObject);
            return newBaseModel.save();
        }
        findById(id) {
            return this.BaseModel.findById(id);
        }
        findOne(query) {
            return this.BaseModel.findOne(query);
        }
        findByIdAndUpdate(id, update) {
            return this.BaseModel.findByIdAndUpdate(id, update);
        }
    };
    BaseService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
    ], BaseService);
    return BaseService;
})();
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map