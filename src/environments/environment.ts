// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherAPIURL: 'https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml',
  XRapidAPIKeyName: 'X-RapidAPI-Key',
  XRapidAPIKeyValue: '77694bf86fmsh7d3c41edb2a69abp18a385jsnfa382dc1c972',
  XRapidAPIHostName: 'XRapid-API-Host',
  XRapidAPIHostValue: 'community-open-weather-map.p.rapidapi.com'



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
