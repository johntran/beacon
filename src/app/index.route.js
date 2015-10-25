export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/signin/signin.html',
      controller: 'SignInController as SignIn',
      controllerAs: 'signinPage'
    })
    // .state('home', {
    //   url: '/',
    //   templateUrl: 'app/main/main.html',
    //   controller: 'MainController as Main',
    //   controllerAs: 'main'
    // })
    .state('modal', {
      url: '/modal',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as Main',
      controllerAs: 'main'
    })
    .state('product-page', {
      url: '/product-page',
      templateUrl: 'app/productpage/productpage.html',
      controller: 'ProductPageController as ProductPage',
      controllerAs: 'productPage'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController as Dashboard',
      controllerAs: 'dashboard'
    })
    .state('offer-page', {
      url: '/offer-page',
      templateUrl: 'app/offerpage/offerpage.html',
      controller: 'OfferPageController as OfferPage',
      controllerAs: 'offerPage'
    });

  $urlRouterProvider.otherwise('/');
}
