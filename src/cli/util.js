const path = require("path");

/**
 *
 * @param {string} fileName
 * @returns string
 */
const viewFileFinder = (fileName) => path.resolve(__dirname, "views", fileName);

module.exports = {
	viewFileFinder,
};
