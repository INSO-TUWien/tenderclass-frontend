import { Component, OnInit } from '@angular/core';
import {CreateModelCriteria} from "../../dtos/createModelCriteria";
import {TenderService} from "../../service/tender.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  private readonly createModelCriteria: CreateModelCriteria;

  constructor(
    private tenderService: TenderService
  ) {
    this.createModelCriteria = new CreateModelCriteria();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.createModelCriteria);
    this.tenderService.newModel(this.createModelCriteria).subscribe((res) => console.log(res), () => {});
  }

}
