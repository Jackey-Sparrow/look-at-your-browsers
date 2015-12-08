/**
 * Created by Jackey Li on 2015/12/3.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopBodyHttpService',
		['$http',
		 function ($http) {
			 var service = {};

			 service.getData = function () {
				 return $http.get('desktop/content/data/body.json');
			 };

			 return service;
		 }]);
})(angular);