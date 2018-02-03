angular.module('video-player')

.component('app', {
  // TODO
  controller: function () {
    this.videos = window.exampleVideoData;
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.currentVideo = this.videos[0];
    this.searchResults = () => {
      console.log('hi');
    };
    this.result = () => {};
  },
  
  
  templateUrl: 'src/templates/app.html'
  
});
