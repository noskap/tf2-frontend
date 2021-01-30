import { SteamService } from "./steam.service";
import { Observable } from "rxjs";
import { PlayerListInterface, PlayerRankInterface } from "./playerRankInterface";
import { Title } from "@angular/platform-browser";
export declare class AppComponent {
    steamService: SteamService;
    private titleService;
    serverStatus: Observable<any>;
    playerRanks: Observable<Array<PlayerRankInterface>>;
    show: boolean;
    playerList: Array<PlayerListInterface>;
    constructor(steamService: SteamService, titleService: Title);
}
