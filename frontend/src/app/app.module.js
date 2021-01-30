"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const app_component_1 = require("./app.component");
const youtube_component_1 = require("./youtube/youtube.component");
const theme_1 = require("@nebular/theme");
const eva_icons_1 = require("@nebular/eva-icons");
const animations_1 = require("@angular/platform-browser/animations");
const app_routing_module_1 = require("./app-routing.module");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                youtube_component_1.YoutubeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                theme_1.NbLayoutModule,
                theme_1.NbSidebarModule.forRoot(),
                eva_icons_1.NbEvaIconsModule,
                theme_1.NbThemeModule.forRoot({ name: 'default' }, [theme_1.DEFAULT_THEME,
                ]),
                theme_1.NbIconModule,
                theme_1.NbActionsModule,
                theme_1.NbButtonModule,
                theme_1.NbTooltipModule,
                animations_1.BrowserAnimationsModule,
                theme_1.NbThemeModule.forRoot({ name: 'default' }),
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map