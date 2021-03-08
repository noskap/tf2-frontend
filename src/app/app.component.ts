import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Lebowski} from './lebowski';
import {PlayerListInterface, PlayerRankInterface} from './playerRankInterface';
import {SteamService} from './steam.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public serverStatus: Observable<any>;
    public playerRanks: Observable<Array<PlayerRankInterface>>;
    public show = false;
    public playerList: Array<PlayerListInterface> = [];
    public quote: Observable<Lebowski>;

    constructor(private meta: Meta, public steamService: SteamService, private titleService: Title) {
        this.meta.addTags([
            // tslint:disable-next-line:max-line-length
            {
                name: 'description',
                content: 'Australian TF2 Arena maps, more beef less heat. This is not Nam. This is TF2. There are rules.'
            },
            {name: 'author', content: 'meatloaf'},
            {name: 'keywords', content: 'TF2, Meatloaf, meatloaf.tf, arena, Angular'}
        ]);
        this.quote = this.steamService.quote();
        this.serverStatus = steamService.getStatusOnTimer()
            .pipe(catchError(() => of(false)), map(text => {
                if (!text) {
                    return false;
                }
                if (typeof text !== 'string') {
                    return;
                }
                const te = text.split('\n');
                this.titleService.setTitle(te[0].split('hostname: ')[1]);

                const players = te.slice(10);
                // console.log(players);
                this.playerList = players.map(e => {
                    const g = e.split('"');
                    const f = g[0].split(' ');
                    // const r = g[2].split(" ");
                    const h = (g[2] ? g[2].split('  ') : ['']);
                    let isbot = false;
                    h.map(rt => {
                        if (rt === ' BOT') {
                            isbot = true;
                        }
                    });
                    if (isbot) {
                        return {name: undefined};
                    }
                    let vars = [];
                    if (g[1]) {
                        h.map(u => {
                            vars = [...vars, ...u.split(' ')];
                        });
                        vars = vars.filter(m => m);
                        // console.log(vars);
                    }
                    return {
                        userid: f.filter(y => y)[1],
                        name: g[1],
                        uniqueid: vars[0],
                        connected: vars[1],
                        ping: vars[2],
                        loss: vars[3],
                        state: vars[4],
                    };
                }).filter(e => e.name);
                // console.log(this.playerList);
                return te.slice(0, 9);
            }));
        this.playerRanks = steamService.getRanks().pipe(map(ranks => {
            ranks = ranks.map(e => {
                e.seen = new Date(e.seen);
                return e;
            });
            return ranks.sort((a, b) => {
                if (a.points > b.points) {
                    return -1;
                }
                return 1;
            });
        }));
    }

    splice = function (stri, idx, rem, str) {
        return stri.slice(0, idx) + str + stri.slice(idx + Math.abs(rem));
    };

    public calculateRatio(num_1, num_2) {
        for (let num = num_2; num > 1; num--) {
            if ((num_1 % num) === 0 && (num_2 % num) === 0) {
                num_1 = num_1 / num;
                num_2 = num_2 / num;
            }
        }
        // console.log(num_1 + ':' + num_2);
        const reduced = this.reduce(num_1, num_2);
        let resA, resB;
        // console.log(reduced);
        if ((reduced[0] > 99 && reduced[1] > 99) || (reduced[0] > 9 && reduced[1] > 9)) {
            // console.log(this.splice(reduced[0].toString(), 1, 0, '.'), this.splice(reduced[1].toString(), 1, 0, '.'));
            resA = this.splice(reduced[0].toString(), 1, 0, '.');
            resB = this.splice(reduced[1].toString(), 1, 0, '.');
        } else {
            // console.log(reduced[0], reduced[1]);
            resA = reduced[0];
            resB = reduced[1];
        }
        const perc = this.round(resA) / this.round(resB);
        // console.log(perc, ((this.round(resA )) / (this.round(resB ))));
        // return this.round(resA ) + ':' + this.round(resB );
        return this.round(perc);
    }

    public round(num) {
        return (Math.round(num * 10) / 10);
    }

    public reduce(numerator, denominator) {
        const gcd = (a, b) => {
            return b ? gcd(b, a % b) : a;
        };
        const val = gcd(numerator, denominator);
        return [numerator / val, denominator / val];
    }
}
