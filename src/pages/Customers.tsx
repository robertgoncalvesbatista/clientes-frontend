import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Customer } from "../types/Customer";

export const Customers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const api = useApi();

    (async () => {
        try {
            const data = await api.allCustomers();

            setCustomers(data);
        } catch (err) {
            throw err
        }
    })()

    const deleteData = async (id: number | undefined) => {
        await api.deleteCustomer(id);
    }

    return (
        <div className="px-4 py-5 my-5 text-center">
            <div className="container-fluid rounded shadow bg-light p-4 mb-3">
                <div className="w-100 d-flex justify-content-evenly">
                    <h3>Clientes cadastrados</h3>
                    <a href="/create/customer" className="btn btn-primary">Cadastrar cliente</a>
                </div>
            </div>

            <div className="container-fluid rounded shadow bg-light p-4">
                <table className="table table-striped mb-3">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Config</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((value, index) => {
                                return (
                                    <tr>
                                        <td>{value.name}</td>
                                        <td>{value.cpf}</td>
                                        <td>{value.category}</td>
                                        <td>{value.telephone}</td>
                                        <td>
                                            <small>
                                                {value.address.rua}, {value.address.complemento} - {value.address.bairro} | CEP: {value.address.cep} | {value.address.cidade}/{value.address.uf}
                                            </small>
                                        </td>
                                        <td>
                                            <a href={"/update/customer/" + value.id} className="btn btn-secondary">Editar</a>
                                            <button className="btn btn-danger" onClick={() => deleteData(value.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}