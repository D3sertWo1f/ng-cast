angular.module('video-player')
// .controller('videoListController', function (scope) {
//   scope.videoListEntry = videoList[0];
//   // $scope.console = function() { console.log('test'); };
// })
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<',
    },

    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },

    templateUrl: 'src/templates/videoList.html'
  };

});
