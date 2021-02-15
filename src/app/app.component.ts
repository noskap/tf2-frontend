import {Component} from '@angular/core';
import {SteamService} from "./steam.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {PlayerListInterface, PlayerRankInterface} from "./playerRankInterface";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public serverStatus: Observable<any>;
  public playerRanks: Observable<Array<PlayerRankInterface>>;
  public show = false;
  public playerList: Array<PlayerListInterface> = [];

  constructor(public steamService: SteamService, private titleService: Title) {
    this.serverStatus = steamService.getStatusOnTimer()
      .pipe(map(text => {
        const te = text.split('\n');
        this.titleService.setTitle(te[0].split('hostname: ')[1])

        const players = te.slice(10);
        // console.log(players);
        this.playerList = players.map(e => {
          const g = e.split('"');
          const f = g[0].split(" ");
          // const r = g[2].split(" ");
          const h = (g[2] ? g[2].split("  ") : ['']);
          let isbot = false;
          h.map(rt => {
            if (rt === ' BOT') {
              isbot = true;
            }
          })
          if (isbot) {
            return {name: undefined}
          }
          let vars = [];
          if (g[1]) {
            h.map(e => {
              vars = [...vars, ...e.split(" ")];
            })
            vars = vars.filter(e => e)
            // console.log(vars);
          }
          return {
            userid: f.filter(e => e)[1],
            name: g[1],
            uniqueid: vars[0],
            connected: vars[1],
            ping: vars[2],
            loss: vars[3],
            state: vars[4],
          }
        }).filter(e => e.name);
        // console.log(this.playerList);
        return te.slice(0, 9);
      }));
    this.playerRanks = steamService.getRanks().pipe(map(ranks => {
      ranks = ranks.map(e => {
        e.seen = new Date(e.seen);
        return e;
      })
      return ranks.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        }
        return 1;
      })
    }));
  }

  public calculateRatio(num_1, num_2) {
    for (let num = num_2; num > 1; num--) {
      if ((num_1 % num) == 0 && (num_2 % num) == 0) {
        num_1 = num_1 / num;
        num_2 = num_2 / num;
      }
    }
    return num_1 + ":" + num_2;
  }
}
