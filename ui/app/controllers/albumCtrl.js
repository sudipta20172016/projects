(function() {

    angular.module("musicApp")
        .controller("albumCtrl", ["$rootScope", "$scope", "$http", "$location", function($rootScope, $scope, $http, $location) {

            $http.get("json/music.json")
                .then(
                    function(res) {
                        var singer = $rootScope.selectedSinger;
                        if (singer != undefined) {
                            $scope.albums = $.grep(res.data.list, function(album) {
                                return album.singerName == singer.singerName;
                            });
                        }
                         angular.forEach($scope.albums, function(album) {
  if(album.imageAlbum==""){
     album.imageAlbum="data/song-icon.png";
  }
                         });
                    },
                    function(error) {});

            $scope.onAlbumClick = function(album) {
                $rootScope.selectedAlbum = album;
                $location.path("/song");
            };
        }]);
})();