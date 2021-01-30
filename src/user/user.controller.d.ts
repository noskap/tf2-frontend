import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(username: string, password: string): import("./user.model").UserModel;
    login(username: string, password: string): void;
    details(id: string): import("./user.model").UserModel;
}
