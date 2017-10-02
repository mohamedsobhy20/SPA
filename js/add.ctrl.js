contactGallery.controller('addContactController', ['$scope','$rootScope' ,'$location', function ($scope , $rootScope,$location) {
    $scope.btnFlag = true;
    $rootScope.list = [];
    $scope.addContacts = function () {

        // check if all inputs filled with data
        if ($scope.name && $scope.phone && $scope.email) {

            $scope.errMsg = '';
            // push data into contacts list array
            $rootScope.list.push(
                {
                    "Name" : $scope.name,
                    "Phone": $scope.phone,
                    "Email": $scope.email
                });

            // make the input fields empty
            $scope.name  = '';
            $scope.phone = '';
            $scope.email = '';

            $location.url('/gallery');

            // display warning msg if there is missing data
        } else {
            $scope.errMsg = "All Fields Are Required";
        }
    };
}]);