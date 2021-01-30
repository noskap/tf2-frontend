export declare const UserSchema: any;
export interface UserModel {
    _id: string;
    username: string;
    password: string;
    email: string;
    channels?: Array<string>;
}
