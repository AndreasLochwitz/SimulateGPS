# SimulateGPS

A little drop-in JavaScript library to simulate GPS-Data in WebApps.

It overrides the following functions:

- navigator.geolocation.watchPosition
- navigator.geolocation.getPosition
- navigator.geolocation.clearWatch

Additional it provides this functions:

- simulateGPS(lat, lng)
- showLocationChooser()

## Function simulateGPS

Example usage:

```
simulateGPS(53.075890463535174, 8.807328343391418); // Position of the Roland statue in Bremen, Germany
```

## Function showLocationChooser

Example usage:

```
showLoationChooser();
```

Open a window with map and a single marker - move the marker to trigger gps updates.

**Note**: It's possible that the browser prevents the window from opening.