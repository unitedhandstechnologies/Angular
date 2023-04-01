import { Component, Input } from '@angular/core';

@Component({
  selector: 'second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
})
export class SecondCompComponent {
  @Input('new-input') secondName: string = 'second compo data';
  public listItems: string[] = [];

  constructor() {}

  getVal() {
    console.log(this.secondName);
  }
}
