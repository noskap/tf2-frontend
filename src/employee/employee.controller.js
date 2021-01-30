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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
let EmployeeController = (() => {
    let EmployeeController = class EmployeeController {
        constructor(appService) {
            this.appService = appService;
        }
        testUsers() {
            return this.appService.find();
        }
        addEmployee(newEmployee) {
            return this.appService.create(newEmployee);
        }
        testPost(test1, test2, test3) {
            console.log(test1, test2, test3);
            return `${test1} ${test2} ${test3.toString()}`;
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EmployeeController.prototype, "testUsers", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], EmployeeController.prototype, "addEmployee", null);
    __decorate([
        common_1.Post('test'),
        __param(0, common_1.Body('test1')),
        __param(1, common_1.Body('test2')),
        __param(2, common_1.Body('test3')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", void 0)
    ], EmployeeController.prototype, "testPost", null);
    EmployeeController = __decorate([
        common_1.Controller('employee'),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeController);
    return EmployeeController;
})();
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map