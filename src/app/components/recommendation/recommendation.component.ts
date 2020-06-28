import {Component, OnInit, Output} from '@angular/core';
import { Tender } from '../../dtos/tender';
import { TenderService } from '../../service/tender.service';
import {IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  providers:  [ TenderService ]
})
export class RecommendationComponent implements OnInit {

  date: any = { year: 2020, month: 1, day: 20 };

  // le: LanguageEntity[] = [{ language: "DE", title: "Bauarbeiten", description: "Die Landstrasse soll erneuert werden."}]
  // tenders: Tender[] = [ { id: "EU01-123456", cpvs: ["72000000"], languageentities: this.le}];

  @Output() tenders: Tender[] = [];

  constructor(private tenderService: TenderService) { }

  ngOnInit() {
    this.loadTenders();
  }

  onDateChanged(event: IMyDateModel) {
    this.date = event.date;
    this.loadTenders();
  }


  loadTenders() {

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    let dateStr: string = this.date.year + "" + zeroPad(this.date.month,2) + "" + zeroPad(this.date.day,2)

    this.tenderService.getRecommendations(dateStr).subscribe(
          (t: Tender[]) => {
             this.tenders = t;
           },
           error => {

           }
        );
  }

}
