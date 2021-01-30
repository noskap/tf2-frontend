import { UserService } from "./user.service";
export declare class ChannelController {
    private userService;
    constructor(userService: UserService);
    create(id: string, name: string): import("./user.model").UserModel;
    channels(id: string): Promise<string[]>;
}
