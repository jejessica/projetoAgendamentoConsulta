var especialidadesModulo = angular.module('especialidadesModulo',[]);

especialidadesModulo.controller("especialidadesController", function ($scope){
	$scope.especialidades = [
		{cdEspecialidade: 1, nmEspecialidade:'Pediatria'},
		{cdEspecialidade: 2, nmEspecialidade:'Oftalmo'},
		{cdEspecialidade: 3, nmEspecialidade:'Psiquiatra'}
	];

	$scope.selecionaEspecialidade = function(especialidadeSelecionado){
		$scope.especialidade = especialidadeSelecionado;
	}

   	$scope.limparCampos = function(){
   		$scope.especialidade = {};
   	}

   	$scope.salvar = function(){
   		$scope.especialidades.push($scope.especialidade);
   		$scope.limparCampos();
   	}

   	$scope.excluir = function(){
   		$scope.especialidades.splice($scope.especialidades.indexOf($scope.especialidade,1));

   	}
});