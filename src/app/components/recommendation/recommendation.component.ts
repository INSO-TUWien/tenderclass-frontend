import {Component, OnInit, Output} from '@angular/core';
import { Tender } from '../../dtos/tender';
import { TenderService } from '../../service/tender.service';
import {IMyDateModel} from 'mydatepicker';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  providers:  [ TenderService ]
})
export class RecommendationComponent implements OnInit {

  date: any = { year: 0, month: 0, day: 0 };

  @Output() tenders: Tender[] = [];

  constructor(private tenderService: TenderService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadTenders();
  }

  onDateChanged(event: IMyDateModel) {
    this.date = event.date;
    this.loadTenders();
  }


  loadTenders() {
    this.spinner.show();

    const zeroPad = (num, places) => String(num).padStart(places, '0')
    let dateStr: string = this.date.year + "" + zeroPad(this.date.month,2) + "" + zeroPad(this.date.day,2)

    //null date
    if(/^0*$/.test(dateStr)) {
      dateStr = undefined
    }

    this.tenderService.getRecommendations(dateStr).subscribe(
          (t: Tender[]) => {
            this.tenders = t;
            this.spinner.hide();
           },
           error => {
             this.spinner.hide();
           }
        );
  }

}
