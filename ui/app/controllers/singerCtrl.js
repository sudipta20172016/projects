(function() {

    angular.module("musicApp")
        .controller("singerCtrl", ["$rootScope", "$scope", "$http", "$location", function($rootScope, $scope, $http, $location) {

            $http.get("json/music.json")
                .then(
                    function(res) {
                        $scope.singers = res.data.list;
                        angular.forEach($scope.singers, function(singer) {
  if(singer.imageSinger==""){
      singer.imageSinger="data/no-artist.png";
  }
});

                    },
                    function(error) {

                    });

            $scope.onSingerClick = function(singer) {
                $rootScope.selectedSinger = singer;
                $location.path("/album");
            };
        }]);
})();