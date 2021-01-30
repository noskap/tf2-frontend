import { EmployeeModel } from './employee.model';
import { Model } from 'mongoose';
import { BaseService } from "../base.service";
export declare class EmployeeService extends BaseService<EmployeeModel> {
    private readonly employeeModel;
    constructor(employeeModel: Model<EmployeeModel>);
}
