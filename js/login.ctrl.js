contactGallery.controller('loginController', ['$scope', '$timeout','$location', function ($scope, $timeout,$location,$locationProvider) {
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
        var contactsData = {

            contact1: {
                name: "admin@mail.com",
                pass: "admin"
            },

            contact2: {
                name: "sobhy@mail.com",
                pass: "sobhy"
            }

        };

        for ( var contact in contactsData ){
            if ($scope.login.userName == contactsData[contact].name && $scope.login.password == contactsData[contact].pass){
                $location.url('/gallery');

            }
        }

        }


}]);