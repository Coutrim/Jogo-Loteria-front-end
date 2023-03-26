import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table, TableService } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from "primeng/table";
import { DashboardComponent } from './app/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    TieredMenuModule,
    HttpClientModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
