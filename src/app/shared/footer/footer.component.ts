import { Component, OnInit, Input } from '@angular/core';
import { SponsorService, Sponsor } from '../../services/sponsor.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    now: Date = new Date();
    sponsors: Sponsor[];

    constructor(public sponsorservice: SponsorService) { }

    ngOnInit() {
        this.sponsorservice.getSponsors().subscribe(
            data => {
              this.sponsors = data;
            }
          );
    }
}
