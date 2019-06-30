import ajax from "@/utils/request";

const urls = {
	htsearch: "http://localhost:8880/ht_study",
	jssearch: "http://localhost:8880/js_study"
};

export default {
	htsearch() {
		return ajax.get(urls.htsearch, { notify: true });
	},
	jssearch() {
		return ajax.get(urls.jssearch, { notify: true });
	}
};
