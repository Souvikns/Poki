const Airtable = require('airtable');
const { pokemonsDTO } = require('./utils');

var base = new Airtable({ apiKey: process.env.API_KEY }).base(process.env.BASE);

const list = async () => {
	try {
		let records = await base('Table 1').select({ view: 'Grid view' }).all();
		let response = pokemonsDTO(records);
		return { response };
	} catch (error) {
		return { undefined, error };
	}

}

module.exports = {
	list
};