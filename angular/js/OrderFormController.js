function OrderFormController($scope) {

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

	$scope.toggleActive = function(s) {
		s.active = !s.active
	}
}