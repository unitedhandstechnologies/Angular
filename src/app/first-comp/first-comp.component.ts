import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
})
export class FirstCompComponent implements OnChanges, OnInit, DoCheck {
  @Input('input-data') data: string = 'none';
  public emptyVal: string = '';
  public isEmpty: boolean = true;
  public serviceData: any = [];
  public errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (value) => {
        console.log(value, 'value');
        this.serviceData = value;
      },
      error: (e) => {
        if (e.status > 400) {
          this.errorMessage = 'not found';
        }
      },
      complete: () => console.info('complete'),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, '-----');
  }

  ngDoCheck(): void {
    console.log(this.serviceData, 'userservice docheck');
  }
}
