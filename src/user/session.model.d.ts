import { UserModel } from "./user.model";
export declare const SessionSchema: any;
export interface SessionModel {
    _id: string;
    user: UserModel;
    token: string;
    expiry: Date;
    remember: boolean;
    ipAddress: string;
    userAgent: string;
    browser: string;
    os: string;
    device: string;
    osVersion: string;
}
