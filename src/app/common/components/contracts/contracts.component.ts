import { Component, OnInit } from '@angular/core';
import {Contract, ContractFields} from '../../interfaces/contract';
import {ContractService} from '../../services/contract/contract.service';
import ContractsSteps, {StepInterface} from './contracts-steps';

@Component({
  selector: 'contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  providers: [ContractsSteps]
})
export class ContractsComponent implements OnInit {
  public contracts: ContractFields;
  public contractKeyList: {[key: string]: string};

  private _steps: StepInterface[] = this.contractsSteps.steps;
  private _previousContractData = {};

  constructor(protected contractService: ContractService,
              protected contractsSteps: ContractsSteps) {
  }

  ngOnInit() {
    this.contractService.all()
      .subscribe((contract: Contract) => this.refreshStep(contract));
  }

  get steps(): StepInterface[] {
    return this._steps;
  }

  get currentStep(): number {
    return this.contractService.step;
  }

  set currentStep(step: number) {
    this.contractService.step = step;
  }

  refreshStep(contract: Contract): void {
    const step = this._steps[this.currentStep];
    const fields = contract.fields;

    if (fields && (fields.data && fields.data.length > 0)) {
      step.data = contract.fields.data;
      step.name = contract.fields.name;
      step.disabled = false;
    }
  }

  selectInputModelChange(value: string): void {
    this.contractService.create({
      previous_data: Object.keys(this._previousContractData).length > 0 ? this._previousContractData : null,
      [this._steps[this.currentStep++].name]: value,
    })
      .subscribe((contract: Contract) => {
        const previousData: {[key: string]: string} = contract.previous_data;

        Object.keys(previousData)
          .forEach((item) => this._previousContractData[item] = previousData[item]);

        this.refreshStep(contract);
        this.contractKeyList = contract.contract_key;
      });
  }

  selectedIndexChange(selectedIndex: number): void {
    this.currentStep = selectedIndex;
    this._steps.forEach((step: StepInterface, index: number) => step.disabled = index > selectedIndex);
  }
}
