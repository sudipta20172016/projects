(function() {

    angular.module("musicApp", ["ngRoute", "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls"])
        .config(["$routeProvider", function($routeProvider) {
            $routeProvider
				.when("/",{
					templateUrl: "app/templates/step0.html"
					
				})
                .when("/singer", {
                    templateUrl: "app/templates/singer.html",
                    controller: "singerCtrl"
                })
                .when("/album", {
                    templateUrl: "app/templates/album.html",
                    controller: "albumCtrl"
                })
                .when("/song", {
                    templateUrl: "app/templates/song.html",
                    controller: "songCtrl"
                });

        }]);
})();