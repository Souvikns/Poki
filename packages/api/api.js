const Airtable = require('airtable');

var base = new Airtable({ apiKey: process.env.API_KEY }).base(process.env.BASE);

const list = async () => {
	try {
		let records = await base('Table 1').select({ view: 'Grid view' }).all();
		let response = records.map(record => ({
			id: record.get('id'),
			name: record.get('name'),
			type: record.get('type'),
			sprite: record.get('sprite')[0].url
		}))
		return { response };
	} catch (error) {
		return { undefined, error };
	}

}

module.exports = {
	list
};