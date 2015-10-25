/*jshint esnext: true */

// import {Modo} from '../../../plugins/com-modo-modokit/www/modoBeacon.js';


export class SignInController {
  constructor ($state, $timeout, webDevTec, toastr, $ionicPlatform, $cordovaBeacon, $ionicModal, $rootScope, $http, $scope) {
    'ngInject';

    this.openModal = function() {
      this.modal.show()
    };

    this.closeModal = function() {
      this.modal.hide();
    };

    // this.$on('$destroy', function() {
    //   this.modal.remove();
    // });

    $scope.rest = function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/users?name=john&phone=7146228644'
        }).then(function successCallback(response) {
          console.log('success!');
        }, function errorCallback(response) {
          console.log('fail!');
        });
    };

   $scope.goHome = function() {
     $state.go('modal', {
       url: '/modal'
   });

   $.ajax(settings).done(function (response) {
    console.log('successful!');
   });
 };
}
}
