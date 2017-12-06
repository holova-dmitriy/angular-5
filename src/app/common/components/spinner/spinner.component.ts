import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input()
  public color: string = 'primary';

  @Input()
  public mode: string = 'indeterminate';

  @Input()
  public isShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
