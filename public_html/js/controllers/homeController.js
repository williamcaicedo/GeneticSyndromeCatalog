/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var controllerModule = angular.module('geneticSyndromeCatalogAppControllers');

controllerModule.controller('homeController', ['$scope', '$rootScope', 'catalogService', '_',
    function ($scope, $rootScope, catalogService, _) {
        $scope.features = [];

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
            if ($rootScope.selectedFeatures.length === 0) {
                $scope.filteredSyndromes = $scope.allSyndromes;
            } else {
                var ids = _.map($rootScope.selectedFeatures, 'id');
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

        if ($rootScope.selectedFeatures) {
            $scope.filterSyndromes();
        }

        if (!$rootScope.showFirstTab) {
            $rootScope.showFirstTab = true;
        }

        $scope.clearSearchQuery = function (tab) {
            if (tab === 'one') {
                $rootScope.selectedFeatures=[];
                $scope.filterSyndromes();
            } else {
                $rootScope.syndromeSearchQuery = '';
            }
        };


    }]);


