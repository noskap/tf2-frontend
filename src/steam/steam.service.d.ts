import { Observable } from "rxjs";
export declare class SteamService {
    constructor();
    get(): Observable<string>;
    getStatusOnTimer(): Observable<string>;
    getRanks(): Promise<any>;
}
