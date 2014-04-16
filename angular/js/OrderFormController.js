function OrderFormController($scope, $http) {

   $http.get('http://api.ipic.tv/demo.json').then(function(result) {
      $scope.services = result.data;
   })

//'https://api.ipic.tv/demo.json
/*function OrderFormController($scope) {

	$scope.services = [
		{
			name: "Web Development",
			price: 300,
			active: true
		},
		{
			name: "Design",
			price: 400,
			active: false
		},
		{
			name: "Intergration",
			price: 350,
			active: false
		},
		{
			name: "Training",
			price: 220,
			active: false
		}
	]
*/
	$scope.toggleActive = function(s) {
		s.active = !s.active
	}
		
	$scope.total = function() {
		var total = 0;

		angular.forEach($scope.services, function(s){
			if(s.active) {
				total += s.price;
			}
		})
		return total;
	};
}