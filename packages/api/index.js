const express = require('express');
const { list } = require('./api');

const app = express();

app.get('/', (req, res) => {
	return res.status(200).send("Welcome to POKI's public API");
})

app.get('/pokemons', async (req, res) => {
	let { response, error } = await list();
	if (error) {
		return res.status(404).send(error);
	}
	return res.status(200).json(response);
})

module.exports = app;
