import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { RosterComponent} from './roster/roster.component';
import { BoardComponent} from './board/board.component';
import { AdvertisingComponent} from './advertising/advertising.component';
import { DonationsComponent} from './donations/donations.component';
import { ContactComponent} from './contact/contact.component';
import { JoinComponent} from './join/join.component';
import { NewsComponent} from './news/news.component';
import { StatsComponent} from './stats/stats.component';
import { VetsparkComponent} from './vetspark/vetspark.component';
import { StoreComponent} from './store/store.component';

const routes: Routes = [
    { path: '',             component: HomeComponent },
    { path: 'schedule',             component: ScheduleComponent },
    { path: 'roster',             component: RosterComponent },
    { path: 'board',             component: BoardComponent },
    { path: 'advertising',             component: AdvertisingComponent },
//    { path: 'donations',             component: DonationsComponent },
//    { path: 'contact',             component: ContactComponent },
    { path: 'join',             component: JoinComponent },
    { path: 'news',             component: NewsComponent },
//    { path: 'stats',             component: StatsComponent },
    { path: 'vetspark',             component: VetsparkComponent },
//    { path: 'store',             component: StoreComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
