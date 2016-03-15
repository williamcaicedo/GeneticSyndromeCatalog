/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var controllerModule = angular.module('geneticSyndromeCatalogAppControllers');

controllerModule.controller('detailController', ['$scope', 'catalogService', '_', '$routeParams', '$location',
    function ($scope, catalogService, _, $routeParams, $location) {
       
        
        
        $scope.getSyndrome = function(id) {
            var features = [];
            $scope.syndrome = catalogService.getSyndromeById(id);
            
            _.each($scope.syndrome.features, function(f) {
                features.push(catalogService.getFeatureById(f));
            });
            $scope.syndrome.completeFeatures = features;
            
        };

        
        
        
        if ($routeParams.syndromeId) {
            $scope.getSyndrome(parseInt($routeParams.syndromeId));
        } else {
            $location.path('/');
        }


    }]);


