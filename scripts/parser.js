axios.defaults.baseURL = "https://blackboxbasic.herokuapp.com/";

const parser = {
	dataFetch: async (_uid) =>
	{
		// return axios.get(config.query_url + _uid);
		return dummyJson;
	},
	getUid: () =>
	{
		let get_url = document.location.href;
		let url = new URL(get_url);
		let _uid = url.searchParams.get("_uid");

		return _uid;
	}
}

let dummyJson = {
	sets: {
		name: "firstSet",
		imageSets: [
			[
				"img/slider1.jpg",
				"img/slider2.jpg",
			],
			[
				"img/slider2.jpg",
				"img/slider3.jpg",
			],
			[
				"img/slider3.jpg",
				"img/slider1.jpg",
			]
		]
	}
}