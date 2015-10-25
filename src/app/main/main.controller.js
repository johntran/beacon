/*jshint esnext: true */

// import {Modo} from '../../../plugins/com-modo-modokit/www/modoBeacon.js';


export class MainController {
  constructor ($state, $timeout, webDevTec, toastr, $ionicPlatform, $cordovaBeacon) {
    'ngInject';

    // let cbsuccess = () =>{console.log('success');};
    // let cbfail = () =>{console.log('fail');};
    // this.createBeacon();
    this.runningBeacon = false;
    this.largeResponse = {};
    this.proximityBeacons = {};
    this.initialize();
    this.getUUID($ionicPlatform);
    //.then(this.getProximityBeacons(response));
    this.beacons = {};
    this.app = {};
    this.bee = '0';
    // this.largeResponse = 'we';
    //this.proximityBeacons = this.largeResponse.zones.proximityBeacons;
    // $cordovaBeacon.createBeaconRegion(string identifier, string uuid, int major, int minor);

  }

  // getProximityBeacons(response) {
  //   this.proximityBeacons = this.response.zones.proximityBeacons;
  //   console.log('prox', this.proximityBeacons);
  // }
  //
  // initialize(){
	// document.addEventListener(
	// 	'deviceready',
	// 	app.onDeviceReady,
	// 	false);
  // 	// .gotoPage(app.currentPage);
  // }
  //
  getUUID($ionicPlatform) {
    var form = new FormData();
    form.append("key", "P8990)#a9kDFoa33F3");
    form.append("secret", "modo");
    form.append("lat", "36.121373");
    form.append("lon", "-115.169696");
    var largeResponse;
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
      this.largeResponse = JSON.parse(response);
      console.log('l-response', this.largeResponse);
      let zone = this.largeResponse.zones[0];
      this.proximityBeacons = zone.proximity_beacons;
      console.log('prox', this.proximityBeacons);

      $ionicPlatform.ready(function() {

          $cordovaBeacon.requestWhenInUseAuthorization();

          $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
              var uniqueBeaconKey;
              for(var i = 0; i < pluginResult.beacons.length; i++) {
                  uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                  $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
              }
              $scope.$apply();
          });
          console.log('im here');
          var beaconRegion = $cordovaBeacon.createBeaconRegion(zone.zone_name, zone_proximity_uuid);
          $cordovaBeacon.startRangingBeaconsInRegion(beaconRegion);
          $cordovaBeacon.startMonitoringForRegion(beaconRegion);

      });
    });
    // $.ajax(settings).then(successfn, failfn);

    let successfn = (response) =>{
      console.log('settings1', settings);
      console.log(response);
      this.responseUU = response;

    };
    let failfn = (response) =>{
      console.log('settings2', settings);
      console.log(response);
      this.responseUU = response;

    };
  }

  // Regions that define which page to show for each beacon.
  // app = this.app;
  // beaconRegions =
  // [
  // 	{
  // 		id: 'page-feet',
  // 		uuid:'A4950001-C5B1-4B44-B512-1370F02D74DE',
  // 		major: 1,
  // 		minor: 1
  // 	},
  // 	{
  // 		id: 'page-shoulders',
  // 		uuid:'A4950001-C5B1-4B44-B512-1370F02D74DE',
  // 		major: 1,
  // 		minor: 2
  // 	},
  // 	{
  // 		id: 'page-face',
  // 		uuid:'A4950001-C5B1-4B44-B512-1370F02D74DE',
  // 		major: 1,
  // 		minor: 3
  // 	}
  // ];

  // Currently displayed page.
  // app.currentPage = 'page-default';

  initialize() {
  	document.addEventListener(
  		'deviceready',
  		this.onDeviceReady,
  		false);
  };

  // Called when Cordova are plugins initialised,
  // the iBeacon API is now available.
  onDeviceReady() {
  	// Specify a shortcut for the location manager that
  	// has the iBeacon functions.
  	window.locationManager = cordova.plugins.locationManager;

  	// Start tracking beacons!
  	startScanForBeacons();
  };

  startScanForBeacons() {
  	//console.log('startScanForBeacons')

  	// The delegate object contains iBeacon callback functions.
  	// The delegate object contains iBeacon callback functions.
  	var delegate = new cordova.plugins.locationManager.Delegate();

  	delegate.didDetermineStateForRegion = function(pluginResult)
  	{
  		//console.log('didDetermineStateForRegion: ' + JSON.stringify(pluginResult))
  	};

  	delegate.didStartMonitoringForRegion = function(pluginResult)
  	{
  		//console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult))
  	};

  	delegate.didRangeBeaconsInRegion = function(pluginResult)
  	{
  		//console.log('didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult))
  		didRangeBeaconsInRegion(pluginResult);
  	};

  	// Set the delegate object to use.
  	locationManager.setDelegate(delegate);

  	// Start monitoring and ranging our beacons.
  	for (var r in beaconRegions)
  	{
  		var region = beaconRegions[r];

  		var beaconRegion = new locationManager.BeaconRegion(
  			region.id, region.uuid, region.major, region.minor);

  		// Start monitoring.
  		locationManager.startMonitoringForRegion(beaconRegion)
  			.fail(console.error)
  			.done();

  		// Start ranging.
  		locationManager.startRangingBeaconsInRegion(beaconRegion)
  			.fail(console.error)
  			.done();
  	}
  }

  // Display pages depending of which beacon is close.
  didRangeBeaconsInRegion(pluginResult) {
  	// There must be a beacon within range.
  	if (0 == pluginResult.beacons.length)
  	{
      this.bee = 'change 1';
  		return
  	}

  	// Our regions are defined so that there is one beacon per region.
  	// Get the first (and only) beacon in range in the region.
  	var beacon = pluginResult.beacons[0];

  	// The region identifier is the page id.
  	var pageId = pluginResult.region.identifier

  	//console.log('ranged beacon: ' + pageId + ' ' + beacon.proximity)

  	// If the beacon is close and represents a new page, then show the page.
  	if ((beacon.proximity == 'ProximityImmediate' || beacon.proximity == 'ProximityNear')
  		&& currentPage != pageId) {
        this.bee = 'change 2';
  		return
  	}

  	// If the beacon represents the current page but is far away,
  	// then show the default page.
  	if ((beacon.proximity == 'ProximityFar' || beacon.proximity == 'ProximityUnknown')
  		&& currentPage == pageId)
  	{
      this.bee = 'change 3';
  		return
  	}
  }

  // gotoPage(pageId) {
  // 	hidePage(currentPage)
  // 	showPage(pageId)
  // 	currentPage = pageId
  // }

  showPage(pageId) {
  	document.getElementById(pageId).style.display = 'block'
  }

  hidePage(pageId) {
  	document.getElementById(pageId).style.display = 'none'
  }

  // Set up the application.
}
