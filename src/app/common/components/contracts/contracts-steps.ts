import {SelectInputDataInterface} from '../select-input/select-input.component';

export interface StepInterface {
  label: string;
  disabled?: boolean;
  data: SelectInputDataInterface[],
  model: string;
  name: string;
}

export default class ContractsSteps {
  public readonly steps: StepInterface[];

  constructor() {
   this.steps = [
      {
        label: 'Step 1',
        data: [],
        model: '',
        name: ''
      },
      {
        label: 'Step 2',
        disabled: true,
        data: [],
        model: '',
        name: ''
      }
    ];
  }
}
