app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/home', { templateUrl: '/views/admin/home.html', controller: 'ctrl1' })
        .when('/edit', { templateUrl: '/views/admin/edit.html', controller: 'ctrl1' })
        .when('/create', { templateUrl: '/views/admin/create.html', controller: 'ctrl2' })
        .otherwise({ templateUrl: '/views/admin/home.html', controller: 'ctrl1' });
});