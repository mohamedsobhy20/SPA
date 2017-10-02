contactGallery.controller('loginController', ['$scope', '$timeout','$location', function ($scope, $timeout,$location) {
    $scope.login = {
        userName: '',
        password: ''
    };
    $scope.loginAuth = loginAuth;


    $timeout(function () {
        $('.ui.form')
            .form({
                fields: {
                    userName: {
                        identifier: 'userName',
                        rules: [{
                            type: 'empty',
                            prompt: 'Please enter a username'
                        }]
                    },
                    password: {
                        identifier: 'password',
                        rules: [{
                                type: 'empty',
                                prompt: 'Please enter a password'
                            },
                            {
                                type: 'minLength[5]',
                                prompt: 'Your password must be at least {ruleValue} characters'
                            }
                        ]
                    }

                },
                onSuccess: function () {
                    $scope.loginAuth();
                }
            });
    }, 200);




    function loginAuth() {
        var adminsData = {

            admin1: {
                name: "admin@mail.com",
                pass: "admin"
            },

            admin2: {
                name: "sobhy@mail.com",
                pass: "sobhy"
            }

        };

        for ( var admin in adminsData ){
            if ($scope.login.userName == adminsData[admin].name && $scope.login.password == adminsData[admin].pass){
                $location.url('/gallery');

            }
        }

        }


}]);