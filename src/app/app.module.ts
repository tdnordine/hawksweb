import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { NewsComponent } from './news/news.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StatsComponent } from './stats/stats.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { DonationsComponent } from './donations/donations.component';
import { StoreComponent } from './store/store.component';
import { JoinComponent } from './join/join.component';
import { BoardComponent } from './board/board.component';
import { ContactComponent } from './contact/contact.component';
import { VetsparkComponent } from './vetspark/vetspark.component';
import { NewsreelComponent } from './newsreel/newsreel.component';

import { NewsService } from './services/news.service';
import { ScheduleService } from './services/schedule.service';
import { RosterService } from './services/roster.service';
import { SortPipe } from './utilities/sort.pipe';
import { LiveComponent } from './live/live.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    RosterComponent,
    ScheduleComponent,
    StatsComponent,
    AdvertisingComponent,
    DonationsComponent,
    StoreComponent,
    JoinComponent,
    BoardComponent,
    ContactComponent,
    VetsparkComponent,
    NewsreelComponent,
    HomeComponent,
    SortPipe,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService, RosterService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
