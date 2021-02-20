export interface Lebowski {
    quote: Quote;
}

export interface Quote {
    id: number;
    lines: Line[];
}

export interface Line {
    id: number;
    text: string;
    character: Character;
    quote_ids: number[];
}

export interface Character {
    name: string;
}
