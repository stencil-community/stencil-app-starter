exports.config = {
  bundles: [
    { components: ['my-name'] },
    { components: ['my-form', 'my-list'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpeg}',
      '*.{js,css,json,html,ico,png,jpeg}'
    ]
  },
  copy: [
    { src: 'bootswatch_slate.css' }
    ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
