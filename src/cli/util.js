const path = require('path');

exports.viewFileFinder = fileName => path.resolve(__dirname, "views", fileName);