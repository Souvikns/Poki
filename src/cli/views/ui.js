'use strict';
const React = require('react');
const {Text} = require('ink');
const PropTypes = require('prop-types')

const App = ({name = 'Stranger'}) => (
	<Text>
		Hello, <Text color="green">{name}</Text>
	</Text>
);

App.propTypes = {
	name: PropTypes.string
}

module.exports = App;
