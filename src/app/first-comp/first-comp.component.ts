import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
})
export class FirstCompComponent implements OnChanges {
  @Input('input-data') data: string = 'none';
  public emptyVal: string = '';
  public isEmpty: boolean = true;

  constructor() {}

  addFun() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, '-----');
    this.addFun();
  }
}
