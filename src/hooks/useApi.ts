import axios from "axios";

// Cria a instância de conexão com a API
const api = axios.create({
    baseURL: "http://localhost:8000",
    // timeout: 1000,
})

const token = localStorage.getItem("authToken");

// Exporta o objeto "useApi" para logar, deslogar e validar token
export const useApi = () => ({
    // Chama a rota "/api/validate" da API para validar o token
    validateToken: async () => {
        const response = await api.get("/api/user", { headers: { 'Authorization': 'Bearer ' + token }});
        return response.data;
    },
    // Chama a rota "/api/authenticate" da API para autenticar o usuário e gerar o seu token
    signin: async (email: string, password: string) => {
        const response = await api.post("/api/authenticate", { email, password });
        return response.data;
    },
    // Chama a rota "/api/logout" da API para destruir o token na sessão
    logout: async () => {
        const token = localStorage.getItem("authToken");

        const response = await api.get("/api/logout", { headers: { 'Authorization': 'Bearer ' + token }});
        return response.data;
    },
    allCustomers: async () => {
        const response = await api.get("/api/users/customers", { headers: { 'Authorization': 'Bearer ' + token }});
        return response.data;
    },
});