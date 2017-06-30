(function() {

    angular.module("musicApp")
        .controller("songCtrl", ["$rootScope", "$scope", "$http", "$location", "$timeout", "$sce", function ($rootScope, $scope, $http, $location, $timeout,$sce) {
            controller=this;
			controller.API = null;
			
			$scope.config = {
				onPlayerReady:function(API){
					controller.API = API;
					
				},
                preload: "none",
                sources: [
                    { src: $sce.trustAsResourceUrl("data/video/demo.mp4"), type: "video/mp4" },
                    { src: $sce.trustAsResourceUrl("data/video/demo.webm"), type: "video/webm" },
                    { src: $sce.trustAsResourceUrl("data/video/demo.ogg"), type: "video/ogg" }
                ],
                tracks: [
                    {
                        src: "pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: ""
                    }
                ],
                theme: {
                    url: "libs/video.min.css"
                },
                plugins: {
                    controls: {
                        autoHide: false
                    }
                }
            };
            $http.get("json/music.json")
                .then(
                    function(res) {
                        var album = $rootScope.selectedAlbum;
                        if (album != undefined) {
                            $scope.songs = $.grep(res.data.list, function(song) {
                                return song.FlimName == album.FlimName;
                            });
                        }
                    },
                    function(error) {
                        alert(error);
                    });

            $scope.onSongClick = function(song) {
                $scope.selectedSong = song;
				controller.API.play();
            //     $scope.configmp3 = {
            //         sources: [
            //             { src: $sce.trustAsResourceUrl(song.fileurl), type: "audio/mpeg" },
            //             { src: $sce.trustAsResourceUrl(song.fileurl), type: "audio/ogg" }
            //         ],
            //         theme: {
            //             url: "libs/video.min.css"
            //         }
            //     };
                 $timeout(function() {
                initPlayer();
                }, 200);
             };
			 
			 



        }]);
})();