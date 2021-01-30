export interface PlayerRankInterface {
    assists?: number;
    backstabs?: number;
    capcaptures?: number;
    capdefends?: number;
    deaths?: number;
    deflects?: number;
    dominationsbad?: number;
    dominationsgood?: number;
    feigns?: number;
    flagcaptures?: number;
    flagdefends?: number;
    headshots?: number;
    hhhkills?: number;
    kills?: number;
    merkills?: number;
    merlvl?: number;
    monkills?: number;
    monlvl?: number;
    playtime?: number;
    points?: number;
    roundsplayed?: number;
    seen?: number | Date;
    streak?: number;
    nickname?: string;
    steamid?: string;
}
export interface PlayerListInterface {
    userid?: string;
    name?: string;
    uniqueid?: string;
    connected?: string;
    ping?: string;
    loss?: string;
    state?: string;
    adr?: string;
}
