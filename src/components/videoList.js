angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
  },
  // TODO
  templateUrl: 'src/templates/videoList.html'
});
