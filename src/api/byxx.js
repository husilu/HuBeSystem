import ajax from "@/utils/request";

const urls = {
	htsearch: "/ht_study",
	jssearch: "/js_study",
	banner: "/api/banner"
};

export default {
	htsearch() {
		return ajax.get(urls.htsearch, { notify: true });
	},
	jssearch() {
		return ajax.get(urls.jssearch, { notify: true });
	},
	banner() {
		return ajax.get(urls.banner);
	 }
};
