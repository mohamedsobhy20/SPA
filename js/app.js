var contactGallery = angular.module('contactGallery', ['ngRoute']);

contactGallery.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/add', {
            templateUrl: 'views/add-contact.html',
            controller: 'addContactController'
        })
        .when('/gallery', {
            templateUrl: 'views/contacts-gallery.html',
            controller: 'galleryController'
        });
    $locationProvider.hashPrefix('');

});

//rootscope

contactGallery.run(function($rootScope) {

});