import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

class TodoService {
  getAllTodo() {
    return axios.get(`${API_URL}/todos`);
  }
}

export default new TodoService();
