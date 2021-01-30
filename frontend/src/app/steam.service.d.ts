import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PlayerRankInterface } from "./playerRankInterface";
export declare class SteamService {
    private httpClient;
    constructor(httpClient: HttpClient);
    status(): Observable<string>;
    getRanks(): Observable<Array<PlayerRankInterface>>;
    getStatusOnTimer(): Observable<string>;
}
