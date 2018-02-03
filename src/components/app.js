angular.module('video-player')

.component('app', {
  // TODO
  controller: function (youTube) {
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    this.result = (data) => {
      this.videos = data;
      this.currentVideo = this.videos[0];
    };

    this.searchResults = (data) => {
      var options = {
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: data,
        maxResults: 5,
        embeddable: true,
        type: 'video'
      };

      youTube.search(options, this.result);
    };

    this.searchResults('dog');

  },
  
  
  templateUrl: 'src/templates/app.html'
  
});
