export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      controllerAs: 'main'
    })
    .state('product-page', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      controllerAs: 'main'
    })
    .state('checkout', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      controllerAs: 'main'
    })
    .state('checkout-copy', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
