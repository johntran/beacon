/*jshint esnext: true */

// import {Modo} from '../../../plugins/com-modo-modokit/www/modoBeacon.js';


export class MainController {
  constructor ($state, $timeout, webDevTec, toastr, $ionicPlatform, $cordovaBeacon, $ionicModal, $rootScope) {
    'ngInject';

    $ionicModal.fromTemplateUrl('app/main/modal.html', {
      scope: this,
      animation: 'slide-in-up'
    }).then(function(modal) {
      this.modal = modal;
    });

    this.openModal = function() {
      this.modal.show()
    };

    this.closeModal = function() {
      this.modal.hide();
    };

    // this.$on('$destroy', function() {
    //   this.modal.remove();
    // });

   this.getUUID = function() {
   var settings = {
     "async": true,
     "crossDomain": true,
     "url": "http://localhost:3000/api/users?name=john&phone=7146228644",
     "method": "POST",
     "headers": {
       "cache-control": "no-cache",
     },
     "processData": false,
     "contentType": false,
     "data": form
   };

   $.ajax(settings).done(function (response) {
    console.log('successful!');
   });
 };
}
}
