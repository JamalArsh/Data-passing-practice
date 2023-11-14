import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataList = ['1', '2', '3'];

  constructor() {}

  addData(value: string) {
    this.dataList.push(value);
  }

  getData() {
    return this.dataList;
  }
}
