(function () {

    var lastId = 0,
        successCallbacks = {};

    navigator.geolocation.watchPosition = function (successCallback) {
        var watchId = "watchID_" + lastId++;
        successCallbacks[watchId] = {
            callback: successCallback
        };
        return watchId;
    };

    navigator.geolocation.getPosition = function (successCallback) {
        var watchId = "watchID_" + lastId++;
        successCallbacks[watchId] = {
            callback: successCallback,
            remove: true
        };
        return watchId;
    };

    navigator.geolocation.clearWatch = function (watchId) {
        delete(successCallbacks[watchId]);
    };

    window.simulateGPS = function (lat, lon) {
        var gpsData = {
            coords: {
                latitude: lat,
                longitude: lon
            }, timestamp: Date.now()
        },
            callbackIDs = Object.keys(successCallbacks);
        for (var i = 0; i < callbackIDs.length; i++) {
            successCallbacks[callbackIDs[i]].callback(gpsData);
            if (successCallbacks[callbackIDs[i]].remove) {
                navigator.geolocation.clearwatch(callbackIDs[i]);
            }
        }
    };
    
    window.showLocationChooser = function() {
        window.open('LocationChooser.html', '', "width=400, height=300");
    };

})();