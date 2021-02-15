import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  public safeUrl: SafeUrl;

  constructor(private san: DomSanitizer) {
  }

  ngOnInit(): void {
    this.buildUrl('xJAnQkgJeqI');
  }

  buildUrl(id:string) {
    this.safeUrl = this.san.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0');
  }
}
