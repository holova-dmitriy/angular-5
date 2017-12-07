export interface Contract {
  contract_key: { [key: string]: string };
  fields: ContractFields;
  previous_data: any;
}

export interface ContractFields {
  type: string;
  name: string;
  label: string;
  data: { value: string, name: string }[];
  selected: string;
  required: boolean;
  hidden: boolean;
}
