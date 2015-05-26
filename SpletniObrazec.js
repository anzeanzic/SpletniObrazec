// bonus (dinamicno spremenljiv tekst, pass classov -> direktiva 2)
// dinamicna direktiva (z inputom spreminjat classe - watcher -> how to observe attributtes changing in angularjs directive)
angular.module('SpletniObrazec', []);

angular.module('SpletniObrazec').controller('SOController', function($scope) {
	
});

// directive 1
angular.module('SpletniObrazec').directive('signs', function() {
	return {
		scope: { 
			number: '@'
		},
		template: '<p ng-class="number > 10 ? \'text-danger\': \'green\'">Število znakov: {{ number.length > 0 ? number : 0 }}</p>'
	};
});

// directive 2
angular.module('SpletniObrazec').directive('newsletter', function() {
	return {
		restrict: 'E',
		scope: {
			email: '@'
		}, // naredi svoj scope, da bo local email
		template: '<form name="newsletterForm">Email:<input type="email" class="form-control" ng-model="email" ng-required="true" />'+
				  '<button class="btn btn-primary" ng-click="SendApplication()" ng-disabled="newsletterForm.$invalid">Prijavi</button></form>',
		controller: function($scope) {
			$scope.SendApplication = function() {
				alert("Uspešno ste prijavljeni z email naslovom: "+$scope.email+"!");
			}
		}
	}
});

// directive 3
angular.module('SpletniObrazec').directive('monthname', function() {
	return {
		scope: {
			month: '@'
		},
		template: '<p>Ime meseca: {{ GetMonthName() }}</p>',
		controller: function($scope) {
			$scope.monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
			$scope.GetMonthName = function() {
				return ($scope.month >= 1 && $scope.month <= 12) ? $scope.monthNames[$scope.month - 1] : 'N/A';
			}
		}
	}
});