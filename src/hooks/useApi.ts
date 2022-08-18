import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post("/api/validate", { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: "robert", email: "robert.contapessoal@gmail.com" },
            token: "123456789"
        }

        const response = await api.post("/api/authenticate", { email, password });
        return response.data;
    },
    logout: async () => {
        const response = await api.post("/api/logout");
        return response.data;
    }
});