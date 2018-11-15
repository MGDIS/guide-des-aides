var fs = require('fs');
var util = require('util');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
	del.sync([
    './aide-noAdditionalProperties.json',
    './master-data-record-noAdditionalProperties.json',
    './engagement-noAdditionalProperties.json',
    './ng-schemas.js'
  ]);
});

gulp.task('dist',function(){
	return gulp.src(['*.json','*.js','*.md']).pipe(gulp.dest('dist'));
});

var recursiveNoAddProp = function(o) {
	for (var i in o) {
		if (typeof o[i] === 'object') {
			if (o[i].properties) {
			    o[i].additionalProperties = false;
			}
			recursiveNoAddProp(o[i]);
		}
	}
};

gulp.task('noAddProp', function(callback) {
	var schema = JSON.parse(fs.readFileSync('./aide.json', 'utf8'));
	recursiveNoAddProp(schema);
	fs.writeFileSync('./aide-noAdditionalProperties.json', JSON.stringify(schema, null, 2));
	var mdm = JSON.parse(fs.readFileSync('./master-data-record.json', 'utf8'));
	recursiveNoAddProp(mdm);
  fs.writeFileSync('./master-data-record-noAdditionalProperties.json', JSON.stringify(mdm, null, 2));
	var engagement = JSON.parse(fs.readFileSync('./engagement.json', 'utf8'));
	recursiveNoAddProp(engagement);
  fs.writeFileSync('./engagement-noAdditionalProperties.json', JSON.stringify(engagement, null, 2));
  callback();
});

// Generate an angular module with a constant that holds the JSON schema
gulp.task('ngConstant', function(callback) {
	var angularModule = util.format(
		'angular.module("guide-des-aides.contract", [])\n.constant("GUIDE_AIDE_SCHEMA", %s);',
		fs.readFileSync('./aide.json', 'utf8')
	);
	fs.writeFile('./ng-schemas.js', angularModule, callback);
});
