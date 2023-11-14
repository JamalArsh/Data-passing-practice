import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
})
export class ChildOneComponent {
  @Input() inputVariable = '';

  @Output() outputVariable = new EventEmitter<string>();

  emitValue(value: string) {
    this.outputVariable.emit(value);
  }
}
