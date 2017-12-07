import {SelectInputDataInterface} from '../select-input/select-input.component';

export interface StepInterface {
  label: string;
  disabled?: boolean;
  data: SelectInputDataInterface[],
  model: string;
  name: string;
  placeholder?: string;
  viewType: string;
}

export enum StepViewType {
  SELECT_INPUT = 'select-input',
  CARD_INFO = 'card-info'
}

export class ContractsSteps {
  public readonly steps: StepInterface[];

  constructor() {
   this.steps = [
      {
        label: 'Step 1',
        data: [],
        model: '',
        name: '',
        placeholder: 'Favorite contract',
        viewType: StepViewType.SELECT_INPUT
      },
      {
        label: 'Step 2',
        disabled: true,
        data: [],
        model: '',
        name: '',
        placeholder: 'Favorite contract',
        viewType: StepViewType.SELECT_INPUT
      },
      {
        label: 'Step 3',
        disabled: true,
        data: [],
        model: '',
        name: '',
        viewType: StepViewType.CARD_INFO
      },
    ];
  }
}
