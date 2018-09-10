angular.module('video-player')

.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})

.directive('search', function() {
  return {
    // TODO
    scope: {
      service: '<',
      result: '<'
    },

    controllerAs: 'ctrl',
    controller: 'SearchController', 
    bindToController: true,
  

    templateUrl: 'src/templates/search.html'
  };
});
