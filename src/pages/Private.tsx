import { useCallback, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Customer } from "../types/Customer";

export const Private = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const api = useApi();


    const getData = useCallback(async () => {
        try {
            const data = await api.allCustomers();
            setCustomers(data);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
        //Note in the line below 
    }, []);

    // Ainda no contexto de autenticação, o useEffect será chamado para validar o token
    // Isso permite que apenas sessões com token acessem as páginas do sistema após login
    useEffect(() => {
        getData()
    }, [api, customers]);

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Parabéns!!!</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Você está logado.</p>
            </div>
            <div className="container shadow p-4">
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
                            customers.map((value: Customer, index) => {
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
                                            <button className="btn btn-secondary">Editar</button>
                                            <button className="btn btn-danger">Excluir</button>
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