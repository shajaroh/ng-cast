angular.module('video-player')
.service('youTube', function($http) {

  this.search = function(options, callback) {
    return $http({
      url: 'https://www.googleapis.com/youtube/v3/search?',
      method: 'GET',
      params: options
    }).then(function(data) {
      console.log(data);
      callback(data.data.items);
    }, function(data) {
      console.log(options);
    });
  };
  // TODO
});