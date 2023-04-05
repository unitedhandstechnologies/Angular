import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-book-comp',
  templateUrl: './book-comp.component.html',
  styleUrls: ['./book-comp.component.css'],
})
export class BookCompComponent implements AfterViewInit, AfterViewChecked {
  public name: any = 'input name';

  @ViewChild('name1') dataFromView!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.dataFromView.nativeElement.focus();
    console.log('view child in initial mount', this.dataFromView);
  }

  ngAfterViewChecked() {
    // if (!this.dataFromView.nativeElement.value) {
    //   return;
    // }
    console.log('view child in changes triggered', this.dataFromView);
  }
}
