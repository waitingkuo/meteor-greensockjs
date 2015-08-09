Package.describe({

  summary: "GreenSock's JavaScript libraries",
  version: '0.0.1',
  name: 'waitingkuo:greensockjs'
  git: 'https://github.com/waitingkuo/meteor-greensockjs'

});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.1.0.2');
  api.addFiles([
    'GreenSock-JS/src/uncompressed/TweenLite.js',
    'GreenSock-JS/src/uncompressed/TweenMax.js',
    'GreenSock-JS/src/uncompressed/TimelineLite.js',
    'GreenSock-JS/src/uncompressed/TimelineMax.js'
  ]);

});
