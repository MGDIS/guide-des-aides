/**
 * Exports all resources related to the "guide-des-aides" contract for node.js programs
 */

var fs = require('fs');

exports.jsonSchema = {
	aide: require('./aide.json'),
	aideNoAdditionalProperties: require('./aide-noAdditionalProperties'),
	masterDataRecord: require('./master-data-record.json'),
	masterDataRecordNoAdditionalProperties: require('./master-data-record-noAdditionalProperties'),
};

exports.version = require('./package.json').version;
