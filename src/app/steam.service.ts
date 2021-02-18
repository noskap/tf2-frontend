import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, timer} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {PlayerRankInterface} from "./playerRankInterface";

@Injectable({
  providedIn: 'root'
})
export class SteamService {


  constructor(private httpClient: HttpClient) {
  }

  public quote():Observable<any> {
      return this.httpClient.get(`http://167.179.175.30:8880/quote`)
          .pipe(tap(console.log));
  }

  public status(): Observable<string> {
    return this.httpClient.get(`http://167.179.175.30:8880/steam`, {responseType: "text"})//{observe: 'response'})
    // return this.httpClient.get(`http://localhost:80/steam`, {responseType: "text"})//{observe: 'response'})
      .pipe(tap(e => {
        // console.log(e)
      }), map((e: string) => e));
  }

  public getRanks(): Observable<Array<PlayerRankInterface>> {
    return this.httpClient.get(`http://167.179.175.30:8880/steam/rank`,)//{observe: 'response'})
    // return this.httpClient.get(`http://localhost:80/steam/rank`,)//{observe: 'response'})
      .pipe(map((e: Array<PlayerRankInterface>) => e));
  }

  public getStatusOnTimer() {
    return timer(0, 5000).pipe(switchMap(() => this.status()));
  }
}
