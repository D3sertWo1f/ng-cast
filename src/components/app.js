angular.module('video-player', [])

.controller('appController', function (youTube) {
  this.searchService = youTube;
  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };
  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  youTube.search('Little Kitten', this.searchResults);
})


 
.filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + val);
  };
}])

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'appController',
    //   $scope.test = 1;
    //   $scope.ctrl.videos = window.exampleVideoData;
    //   $scope.ctrl.currentVideo = window.exampleVideoData[0];
    //   $scope.ctrl.onClick = function (selection) {
    //     $scope.ctrl.currentplaying = selection;
    //     console.log(selection);
    //   };
    //   $scope.ctrl.url = window.exampleVideoData[0].id.videoId;
    //   $scope.ctrl.searchResults = function() {

    //   };

    // },
    templateUrl: 'src/templates/app.html'
  };



});
