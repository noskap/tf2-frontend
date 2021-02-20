import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {YoutubeComponent} from './youtube/youtube.component';
import {
    DARK_THEME,
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule,
    NbTooltipModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

// import * as f from './db';
@NgModule({
    declarations: [
        AppComponent,
        YoutubeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NbLayoutModule,
        NbSidebarModule.forRoot(), //if this is your app.module
        NbEvaIconsModule,
        // NbMenuModule.forRoot(),
        NbThemeModule.forRoot({name: 'dark'}, [
            // DEFAULT_THEME,
            // COSMIC_THEME,
            DARK_THEME,
            // CORPORATE_THEME
        ]),
        NbIconModule,
        // NbDatepickerModule.forRoot(),
        NbActionsModule,
        NbButtonModule,
        NbTooltipModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'dark'}),
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
