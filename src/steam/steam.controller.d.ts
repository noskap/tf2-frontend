import { SteamService } from "./steam.service";
export declare class SteamController {
    private readonly steamService;
    constructor(steamService: SteamService);
    testUsers(): import("rxjs").Observable<string>;
    getRanks(): Promise<any>;
}
