import axios from "axios";

const API_URL = "/api/certifications/";

export default {
  async getAll() {
    try {
      const response = await axios.get(API_URL);
      return response.data; // já retorna array
    } catch (error) {
      console.error("Erro ao buscar certificações:", error);
      throw error;
    }
  },

  async create(certData) {
    try {
      const response = await axios.post(API_URL, certData);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar certificação:", error);
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await axios.get(`${API_URL}${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar certificação com id ${id}:`, error);
      throw error;
    }
  }
};
