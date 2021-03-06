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
const map: any = {
};

const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
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
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// System.config({
//   baseURL: '/js'
// });

// Apply the user's configuration.
System.config({ map, packages });
