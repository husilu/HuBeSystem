import ajax from "@/utils/request";

const urls = {
	login: "http://localhost:8880/login"
};

export default {
	login(param) {
		return ajax.post(urls.login, param, { notify: true });
	}
};
