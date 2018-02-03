angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },
  
  controller: function () {
    this.eventHandler = (event) => {
      if (event.code === 'Enter' || event === 'clicked') {
        this.result(this.search);
      }
    };
  },

  templateUrl: 'src/templates/search.html'
});
