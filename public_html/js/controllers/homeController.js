/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var controllerModule = angular.module('geneticSyndromeCatalogAppControllers');

controllerModule.controller('homeController', ['$scope', 'catalogService', '_', function ($scope, catalogService, _) {
        $scope.features = [];
        $scope.selectedFeatures = [];
        $scope.allSyndromes = [];
        $scope.filteredSyndromes = [];

        $scope.getAllSyndromes = function () {
            $scope.allSyndromes = catalogService.getAllSyndromes();
            $scope.filteredSyndromes = $scope.allSyndromes;
        };
        $scope.getAllFeatures = function () {
            $scope.features = catalogService.getAllFeatures();
        };

        $scope.filterSyndromes = function (item, model) {
            if ($scope.selectedFeatures.length === 0) {
                $scope.filteredSyndromes = $scope.allSyndromes;
            } else {
                var ids = _.map($scope.selectedFeatures, 'id');
                $scope.filteredSyndromes = _.filter($scope.allSyndromes, function (s) {
                    var t = _.every(ids, function (i) {
                        return _.find(s.features, function (f) {
                            return i === f;
                        }) !== undefined;
                    });
                    return t;
                });
            }


        };
        $scope.getAllFeatures();
        $scope.getAllSyndromes();


    }]);


