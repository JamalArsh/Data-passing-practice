import { Component, ViewChild } from '@angular/core';
import { ChildThreeComponent } from './child-three/child-three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-passing-practice';

  input = 'Passing from parent to child via @input';

  output = ['one', 'two'];

  @ViewChild(ChildThreeComponent) viewChild!: ChildThreeComponent;

  addOutput(newItem: string) {
    this.output.push(newItem);
  }

  checking() {
    console.log(this.viewChild.list);
  }
}
