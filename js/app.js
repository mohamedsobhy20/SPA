var contactGallery = angular.module('contactGallery', ['ngRoute']);

contactGallery.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/gallery', {
            emplateUrl: 'views/gallery.html',
            controller: 'galleryController'
        });
    $locationProvider.hashPrefix('');

});

