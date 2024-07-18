import { Address } from "./Address";

export interface Customer {
  id?: number;
  name: string;
  cpf: string;
  category?: string;
  telephone?: string;
  address: Address;
}

export interface CustomerAddress {
  name: string;
  cpf: string;
  category?: string;
  telephone?: string;
  cep: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  complemento?: string;
}
