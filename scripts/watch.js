process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const paths = require('../config/paths');
const webpack = require('webpack');
const config = require('../config/webpack.config.dev.js');

// removes react-dev-utils/webpackHotDevClient.js at first in the array
config.entry.shift();

config.output.publicPath = process.env.PUBLIC_URL;

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log('copyPublicFolder');
    copyPublicFolder();
  }
  console.error(stats.toString({
    chunks: false,
    colors: true
  }));
});

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
}
