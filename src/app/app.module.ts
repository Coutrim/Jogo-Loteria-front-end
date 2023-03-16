import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng-lts/button';
import { HeaderComponent } from './header/header.component';
import {PanelModule} from 'primeng-lts/panel';
import {TabViewModule} from 'primeng-lts/tabview';
import {ToolbarModule} from 'primeng-lts/toolbar';
import {MenuModule} from 'primeng-lts/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng-lts/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
    ToolbarModule,
    MenuModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextModule,
    BrowserAnimationsModule,
    SidebarModule,
    TieredMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
