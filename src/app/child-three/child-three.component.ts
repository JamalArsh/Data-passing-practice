import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css'],
})
export class ChildThreeComponent implements OnInit {
  list: string[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.list = this.dataService.getData();
  }
}
