import { Address } from "./Address";

export type Customer = {
    id: number;
    name: string;
    cpf: string;
    address: Address;
    category: string;
    telephone: string;
}