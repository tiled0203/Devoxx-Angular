// Karma configuration
// Generated on Thu Jan 04 2018 15:30:33 GMT+0100 (Romance Standard Time)

module.exports = function (config) {
  var appBase    = 'src/';       // transpiled app JS and map files
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', '@angular/cli'],
    plugins: [
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require.resolve('karma-mocha'),
      require.resolve('karma-chai'),
      require.resolve('karma-sinon'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      builtPaths: [appBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      'src/**/*.spec.ts',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
    ],

    angularCli: {
      environment: 'dev'
    },
    reporters: ['mocha', 'progress'],
    mochaReporter: {
      showDiff: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
};
