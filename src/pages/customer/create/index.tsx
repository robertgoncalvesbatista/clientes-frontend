import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useMaskHook from "../../../hooks/useMaskHook";
import { useApi } from "../../../gateways/useApi";

function CreateCustomer() {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [category, setCategory] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cep, setCEP] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUF] = useState("");
  const [complemento, setComplemento] = useState("");

  const mask = useMaskHook();
  const api = useApi();

  const navigate = useNavigate();

  const fetchCEP = (cep: string) => {
    const cepSplited = cep.split("-");

    fetch(`https://viacep.com.br/ws/${cepSplited[0]}${cepSplited[1]}/json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setRua(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUF(data.uf);
      })
      .catch((err) => {
        throw err;
      });
  };

  const handleCreate = async () => {
    if (name && cpf && cep) {
      const customer = {
        name,
        cpf,
        category,
        telephone,
        cep,
        rua,
        bairro,
        cidade,
        uf,
        complemento,
      };
      await api.createCustomer(customer);
      navigate("/customers");
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <h3 className="mb-3">Cadastrar cliente</h3>

      <div className="p-4 p-md-5 border rounded-3 bg-light">
        <div className="d-flex mb-3">
          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputName">
              Nome
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="inputName"
              placeholder="Digite o nome..."
            />
          </div>

          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputCPF">
              CPF
            </label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCPF(mask.cpf(e.target.value))}
              className="form-control"
              id="inputCPF"
              placeholder="Digite o CPF..."
            />
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputCategoria">
              Categoria
            </label>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              id="inputCategoria"
              placeholder="Digite a categoria..."
            />
          </div>

          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputTelefone">
              Telefone
            </label>
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(mask.phone(e.target.value))}
              className="form-control"
              id="inputTelefone"
              placeholder="Digite o telefone..."
            />
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputCEP">
              CEP
            </label>
            <input
              type="text"
              value={cep}
              onChange={(e) => {
                fetchCEP(e.target.value);
                setCEP(mask.cep(e.target.value));
              }}
              className="form-control"
              id="inputCEP"
              placeholder="Digite o CEP..."
            />
          </div>
          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputRua">
              Rua
            </label>
            <input
              type="text"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              className="form-control"
              id="inputRua"
              placeholder="Digite a rua..."
            />
          </div>

          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputBairro">
              Bairro
            </label>
            <input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="form-control"
              id="inputBairro"
              placeholder="Digite o bairro..."
            />
          </div>
        </div>

        <div className="d-flex mb-3">
          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputCidade">
              Cidade
            </label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="form-control"
              id="inputCidade"
              placeholder="Digite a cidade..."
            />
          </div>

          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputUF">
              UF
            </label>
            <input
              type="text"
              value={uf}
              onChange={(e) => setUF(e.target.value)}
              className="form-control"
              id="inputUF"
              placeholder="Digite o UF..."
            />
          </div>

          <div className="w-100 mx-4">
            <label className="form-label" htmlFor="inputComplemento">
              Complemento
            </label>
            <input
              type="text"
              onChange={(e) => setComplemento(e.target.value)}
              className="form-control"
              id="inputCPF"
              placeholder="Digite o complemento..."
            />
          </div>
        </div>
        <button className="w-100 btn btn-lg btn-primary" onClick={handleCreate}>
          Criar
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
