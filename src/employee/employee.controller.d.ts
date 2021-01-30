import { EmployeeModel } from "./employee.model";
import { EmployeeService } from "./employee.service";
export declare class EmployeeController {
    private readonly appService;
    constructor(appService: EmployeeService);
    testUsers(): EmployeeModel[];
    addEmployee(newEmployee: EmployeeModel): EmployeeModel;
    testPost(test1: string, test2: string, test3: object): string;
}
