export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
