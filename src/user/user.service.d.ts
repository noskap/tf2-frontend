import { Model } from 'mongoose';
import { BaseService } from "../base.service";
import { UserModel } from "./user.model";
export declare class UserService extends BaseService<UserModel> {
    private readonly userModel;
    constructor(userModel: Model<UserModel>);
}
