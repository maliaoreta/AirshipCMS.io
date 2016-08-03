// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
// const map: any = {
//   'jquery': 'vendor/jquery',
//   'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.js'
// };
// /** User packages configuration. */
// const packages: any = {
//   'jquery': {
//     format: 'global',
//     defaultExtension: 'js',
//     main: 'dist/jquery'
//   },
//   'bootstrap': {
//     format: 'global',
//   }
// };
// const meta: any = {
//   'bootstrap': {
//     deps: ['jquery']
//   }
// }
//
var map = {};
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/email-form',
    'app/aircraft-selection',
    'app/thank-you',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    baseURL: '/assets/scripts',
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map
