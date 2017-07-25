exports.config = {
  publicPath: 'build',
  bundles: [
    { components: ['my-name'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
