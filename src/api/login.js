import ajax from "@/utils/request";

const urls = {
	login: "/login"
};

export default {
	login(param) {
		return ajax.post(urls.login, param, { notify: true });
	}
};
