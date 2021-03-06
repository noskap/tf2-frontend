import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {PlayerRankInterface} from './playerRankInterface';
import {Lebowski} from './lebowski';

@Injectable({
    providedIn: 'root'
})
export class SteamService {


    constructor(private httpClient: HttpClient) {
    }

    public quote(): Observable<Lebowski> {
        return this.httpClient.get(`https://steam.meatloaf.tf:8443/quote`)
            .pipe(tap(console.log));
    }

    public status(): Observable<string> {
        return this.httpClient.get(`https://steam.meatloaf.tf:8443/steam`, {responseType: 'text'})// {observe: 'response'})
            // return this.httpClient.get(`https://localhost:80/steam`, {responseType: "text"})//{observe: 'response'})
            .pipe(tap(e => {
                // console.log(e)
            }), map((e: string) => e));
    }

    public getRanks(): Observable<Array<PlayerRankInterface>> {
        return this.httpClient.get(`https://steam.meatloaf.tf:8443/steam/rank`, )// {observe: 'response'})
            // return this.httpClient.get(`https://localhost:80/steam/rank`,)//{observe: 'response'})
            .pipe(map((e: Array<PlayerRankInterface>) => {
                return e
                    .sort((a, b) => {
                        return a.points > b.points ? -1 : 0;
                    })
                    .slice(0, 20);
            }));
    }

    public getStatusOnTimer() {
        return timer(0, 5000).pipe(switchMap(() => this.status()));
    }
}
