/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { ngCordovaBeacon } from '../assets/js/ng-cordova-beacon'
import { DashboardController } from './dashboard/dashboard.controller';
import { OfferPageController } from './offerpage/offerpage.controller';
import { SignInController } from './signin/signin.controller';
import { ProductPageController } from './productpage/productpage.controller';


angular.module('beacon', ['ionic', 'ngCordovaBeacon', 'ngCordova','ionic.service.core',
  'ionic.service.push', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .controller('DashboardController', DashboardController)
  .controller('OfferPageController', OfferPageController)
  .controller('SignInController', SignInController)
  .controller('ProductPageController', ProductPageController)
  .config(['$ionicAppProvider', function($ionicAppProvider) {
  $ionicAppProvider.identify({
    app_id: 'a821b9b22fc4ac7bd71677308aa39247fac54c316b602308',
    api_key: '05a027317c231363649389c1007219a4c7899ad255037f6c',
    dev_push: true
  });
}]);
