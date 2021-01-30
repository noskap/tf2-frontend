import { OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
export declare class YoutubeComponent implements OnInit {
    private san;
    safeUrl: SafeUrl;
    constructor(san: DomSanitizer);
    ngOnInit(): void;
    buildUrl(id: string): void;
}
