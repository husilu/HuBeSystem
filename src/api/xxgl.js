import ajax from "@/utils/request";

const urls = {
  search_nrgl: "/search_nrgl",
  add_nrgl: "/add_nrgl",
  search_nrglid: "/search_nrglid/",
  edit_nrgl: "/edit_nrgl",
  delete_nrgl: "/delete_nrgl/"
};

export default {
	search_nrgl(param) {
		return ajax.get(urls.search_nrgl, param, { notify: true });
  },
  add_nrgl(param) {
    return ajax.post(urls.add_nrgl, param, { notify: true });
  },
  search_nrglid(id) {
    return ajax.get(urls.search_nrglid + `?id=${id}`, { notify: true });
  },
  edit_nrgl(param) {
    return ajax.post(urls.edit_nrgl, param, { notify: true });
  },
  delete_nrgl(id) {
    return ajax.get(urls.delete_nrgl + `?id=${id}`, { notify: true });
  }
};
