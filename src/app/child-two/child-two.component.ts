import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent {
  constructor(private dataService: DataService) {}

  addService(value: string) {
    this.dataService.addData(value);
  }
}
