import { http } from "../API_Interceptor";

class userService {
	login(body: any) {
		return http.post("/login", body);
	}
}

export default new userService();
