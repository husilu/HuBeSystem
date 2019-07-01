import ajax from "@/utils/request";

const urls = {
	htsearch: "/ht_study",
	jssearch: "/js_study"
};

export default {
	htsearch() {
		return ajax.get(urls.htsearch, { notify: true });
	},
	jssearch() {
		return ajax.get(urls.jssearch, { notify: true });
	}
};
