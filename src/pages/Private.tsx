import { useCallback, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Customer } from "../types/Customer";

export const Private = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const api = useApi();

    const deleteData = async (id: number | undefined) => {
        await api.deleteCustomer(id);
    }

    const getData = useCallback(async () => {
        try {
            const data = await api.allCustomers();
            setCustomers(data);
        } catch (err) {
            throw err
        }
    }, []);

    // Ainda no contexto de autenticação, o useEffect será chamado para validar o token
    // Isso permite que apenas sessões com token acessem as páginas do sistema após login
    useEffect(() => {
        getData()
    }, [api, getData]);

    return (
        <div className="px-4 py-5 my-5 text-center">
            <div className="container rounded shadow bg-light p-4 mb-3">
                <a href="/create/customer" className="btn btn-primary">Cadastrar cliente</a>
            </div>

            <div className="container rounded shadow bg-light p-4">
                <table className="table table-striped">
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
                                                {value.rua}, {value.complemento} - {value.bairro} | CEP: {value.cep} | {value.cidade}/{value.uf}
                                            </small>
                                        </td>
                                        <td>
                                            <a href="/create/customer" className="btn btn-secondary">Editar</a>
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