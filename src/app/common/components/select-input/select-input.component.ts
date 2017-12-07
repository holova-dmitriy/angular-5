import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface SelectInputDataInterface {
  value: string;
  name: string;
}

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})

export class SelectInputComponent implements OnInit {
  @Input()
  public data: SelectInputDataInterface[];

  @Input()
  public placeholder: string = 'Favorite item';

  @Input()
  public model: string;

  @Output()
  public modelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(item: string): void {
    this.modelChange.emit(item);
  }
}
