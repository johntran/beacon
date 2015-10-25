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
      url: '/product-page',
      templateUrl: 'app/productpage/productpage.html',
      controller: 'ProductPageController as ProductPage',
      controllerAs: 'productPage'
    })
    .state('checkout', {
      url: '/checkout',
      templateUrl: 'app/checkout/checkout.html',
      controller: 'CheckoutController as Checkout',
      controllerAs: 'checkout'
    })
    .state('checkout-copy', {
      url: '/checkout-copy',
      templateUrl: 'app/checkout-copy/checkout-copy.html',
      controller: 'CheckoutCopyController as CheckoutCopy',
      controllerAs: 'checkoutCopy'
    })
    .state('offer-page', {
      url: '/offer-page',
      templateUrl: 'app/offerpage/offerpage.html',
      controller: 'OfferPageController as OfferPage',
      controllerAs: 'offerPage'
    });

  $urlRouterProvider.otherwise('/');
}
