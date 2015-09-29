/**
 * Created by Answer1215 on 9/19/2015.
 */

//include dependences
require('./vendor')();

//create angular module
const angular = require('angular'),
      ngModule = angular.module('app', []);

if (MODE.production) { // jshint ignore:line
    require('./config/production')(ngModule);
}

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

//include layout of app
require('./layout')(ngModule);

//bootstrap angular
angular.element(document).ready(function () {
    angular.bootstrap(document, [ngModule.name], {});
});