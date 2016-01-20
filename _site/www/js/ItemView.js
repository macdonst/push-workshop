var ItemView = function(place) {
    var favorites = [];

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.mapBtn', this.mapIt);
        this.$el.on('click', '.favoriteBtn', this.favorite);
        this.$el.on('click', '.shareBtn', this.share);
     };

    this.render = function() {
        this.$el.html(this.template(place));
        return this;
    };

    this.favorite = function() {
        favorites.push(place);

        if (window.cordova)
            window.plugins.toast.showShortCenter(place.name + " at " + place.location + " has been added to your favorites.");
        else alert(place.name + " at " + place.location + " has been added to your favorites.");
    }

    this.share = function() {
        if (window.plugins.socialsharing) {
            window.plugins.socialsharing.share("Look what I'm going to check out next: " + place.name + ".",
                'My Amsterdam Trip', null, place.website,
                function () {
                    console.log("Success")
                },
                function (error) {
                    console.log("Share fail " + error)
                });
        }
        else console.log("Share plugin not found");
    }

    this.mapIt = function() {
        var coords = new google.maps.LatLng(place.latitude,place.longitude);

        var mapOptions = {
            center: { lat: place.latitude, lng:place.longitude },
            zoom: 20
        };

        $('#map_canvas').css('height','400px');
        var map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: place.name + " " + place.location
        });

    }

    this.initialize();

}
