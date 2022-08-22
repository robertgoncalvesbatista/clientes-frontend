import { Address } from "./Address";

export type Customer = {
    id?: number;
    name: string;
    cpf: string;
    category?: string;
    telephone?: string;
    address: Address;
}

export type CustomerAddress = {
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