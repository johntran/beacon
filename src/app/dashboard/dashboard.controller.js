/*jshint esnext: true */

// import {Modo} from '../../../plugins/com-modo-modokit/www/modoBeacon.js';


export class DashboardController {
  constructor ($timeout, webDevTec, toastr, $ionicPlatform, $cordovaBeacon, $ionicUser, $ionicPush, $rootScope) {
    'ngInject';
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1445721867634;
    this.toastr = toastr;
    // let cbsuccess = () =>{console.log('success');};
    // let cbfail = () =>{console.log('fail');};
    // ModoBeaconPlugin.setLocation(cbsuccess, cbfail, 37.4038142,-122.1162865);
    // this.createBeacon();
    this.runningBeacon = false;
    this.activate($timeout, webDevTec);
    // this.getUUID();
    this.beacons = {};
    this.largeResponse = 'we';
    console.log('in dashboard');
    // $ionicPlatform.ready(function() {
    //
    //     $cordovaBeacon.requestWhenInUseAuthorization();
    //
    //     $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
    //         var uniqueBeaconKey;
    //         for(var i = 0; i < pluginResult.beacons.length; i++) {
    //             uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
    //             $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
    //         }
    //         $scope.$apply();
    //     });
    //
    //     $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "b9407f30-f5f8-466e-aff9-25556b57fe6d"));
    //
    // });
//
//     $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
//   alert("Successfully registered token " + data.token);
//   console.log('Ionic Push: Got token ', data.token, data.platform);
//   $scope.token = data.token;
// });
//
// $scope.identifyUser = function() {
//  var user = $ionicUser.get();
//  if(!user.user_id) {
//  // Set your user_id here, or generate a random one.
//  user.user_id = $ionicUser.generateGUID();
//  };
//
//  // Metadata
//  angular.extend(user, {
//  name: 'Simon',
//  bio: 'Author of Devdactic'
//  });
//
//  // Identify your user with the Ionic User Service
//  $ionicUser.identify(user).then(function(){
//  $scope.identified = true;
//  console.log('Identified user ' + user.name + '\n ID ' + user.user_id);
//  });
// };
//
// $scope.pushRegister = function() {
//  console.log('Ionic Push: Registering user');
//
//  // Register with the Ionic Push service.  All parameters are optional.
//  $ionicPush.register({
//    canShowAlert: true, //Can pushes show an alert on your screen?
//    canSetBadge: true, //Can pushes update app icon badges?
//    canPlaySound: true, //Can notifications play a sound?
//    canRunActionsOnWake: true, //Can run actions outside the app,
//    onNotification: function(notification) {
//      // Handle new push notifications here
//      return true;
//    }
//  });
// };
//
// $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
//   alert("Successfully registered token " + data.token);
//   console.log('Ionic Push: Got token ', data.token, data.platform);
//   $scope.token = data.token;
// });

  }




  createBeacon() {

    var uuid = 'DA5336AE-2042-453A-A57F-F80DD34DFCD9'; // mandatory
    var identifier = 'beaconAtTheMacBooks'; // mandatory
    var minor = 1000; // optional, defaults to wildcard if left empty
    var major = 5; // optional, defaults to wildcard if left empty

    // throws an error if the parameters are not valid
    // var beaconRegion = new $cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
    console.log('created beacon');
    this.runningBeacon = true;
    return beaconRegion;
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    // console.log('in activate');
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  getUUID() {
    var form = new FormData();
    form.append("key", "P8990)#a9kDFoa33F3");
    form.append("secret", "modo");
    form.append("lat", "36.121373");
    form.append("lon", "-115.169696");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api",
      "method": "POST",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "df2d4917-ef48-950b-4e8e-be0519c251a3"
      },
      "processData": false,
      "contentType": false,
      //"dataType":"jsonp",
      "mimeType": "multipart/form-data",
      // "Access-Control-Request-Headers": "*",
      "data": form
    };
    $.ajax(settings).done(function (response) {
      console.log('settings', settings);
      console.log(response);
      this.largeResponse = response;
    });
    // $.ajax(settings).then(successfn, failfn);
    //
    // let successfn = (response) =>{
    //   console.log('settings', settings);
    //   console.log(response);
    //   this.responseUU = response;
    //
    // };
    // let failfn = (response) =>{
    //   console.log('settings', settings);
    //   console.log(response);
    //   this.responseUU = response;
    //
    // };
  }
}
