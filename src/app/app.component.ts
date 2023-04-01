import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  public requiredData: any = 'any data';
  public name: string = 'input name';

  @ViewChild('data') dataFromChild: any;
  @ViewChild('name1') dataFromView!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.requiredData = this.dataFromChild.secondName;
    this.dataFromView.nativeElement.focus();
    console.log('view -1111111---checked', this.dataFromView);
  }

  ngAfterViewChecked() {
    if (!this.dataFromView.nativeElement.value) {
      return;
    }
    console.log('view ----checked', this.dataFromView);
  }
}
