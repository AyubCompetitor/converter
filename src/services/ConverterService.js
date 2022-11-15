class ConverterService {
	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllValutes = async () => {
		const res = await this.getResource(
			`https://www.cbr-xml-daily.ru/daily_json.js`
		);
		return res;
	};

	getValute = async (name) => {
		const res = await this.getResource(
			`https://www.cbr-xml-daily.ru/daily_json.js`
		);
		return res.Valute[name];
	};
}

export default ConverterService;
