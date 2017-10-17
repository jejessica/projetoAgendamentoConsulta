var medicosModulo = angular.module('medicosModulo',[]);

medicosModulo.controller("medicosController", function ($scope, $http) {
   $http.get('controller/medicos.json').then(function (response) {
      $scope.medicos = response.data.medicos;
   })
});