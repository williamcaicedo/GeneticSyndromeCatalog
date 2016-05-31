/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



app = angular.module('geneticSyndromeCatalogApp',['geneticSyndromeCatalogAppControllers', 'geneticSyndromeCatalogAppServices', 
    'geneticSyndromeCatalogAppDirectives', 'ngSanitize', 'ngRoute', 'angular-loading-bar', 'angular.filter', 'ui.select', 'ui.bootstrap', 'lodash']);

app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/detail/:syndromeId', {
            templateUrl: 'js/views/detail.html',
            controller: 'detailController'
        }).when('/', {
            templateUrl: 'js/views/home.html',
            controller: 'homeController'
        }).otherwise({
            redirectTo: '/'
        });

        

    }]);