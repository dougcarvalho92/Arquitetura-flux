import { ApiService } from "./ApiService";
const endpoint = "todo";

export const TodoService = {
  list() {
    return ApiService.get(endpoint);
  },
  create(item) {
    return ApiService.post(endpoint, item);
  },
  update(item) {
    return ApiService.put(endpoint, item);
  },
  delete(item) {
    return ApiService.delete(endpoint, item);
  },
};
