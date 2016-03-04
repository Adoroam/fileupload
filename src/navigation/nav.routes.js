app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        redirectTo: "/home"
      })
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl as home'
      })
     .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'abtCtrl as abt'
     })
     .when('/posts', {
        templateUrl: 'templates/posts.html',
        controller: 'postsCtrl as posts'
     })
      .otherwise({
        redirectTo: "/home"
      });
}]);
