const pokemonsDTO = (records) => {
	return records.map(record => ({
		id: record.get('id'),
		name: record.get('name'),
		type: record.get('type'),
		sprite: record.get('sprite')
	}));
}


module.exports = {
	pokemonsDTO
}