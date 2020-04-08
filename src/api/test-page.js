import ajax from "@/utils/request";

const urls = {
	playlist: "/api/top/playlist",
	search: '/api/example/get',
	register: '/api/example/post'
};

export default {
	playlist(param) {
		return ajax.get(`${urls.playlist}?limit=${param.limit}&order=${param.order}`, { notify: true }); // limit = 30, order = 'hot', cat
	},
	search() {
		return ajax.get(urls.search);
	},
	register(param) {
		return ajax.post(urls.register, {msg: '11111111'});
	}
};
