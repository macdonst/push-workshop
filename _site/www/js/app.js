// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope.
// There is no need for a name, because it will be self-invoked once when encountered, not specifically called.

(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    ListView.prototype.template = Handlebars.compile($("#list-tpl").html());
    ItemView.prototype.template = Handlebars.compile($("#item-tpl").html());

    // Handlebars Helper for iterating stars for rating
    Handlebars.registerHelper('for', function(from, to, incr, block) {
        var str = '';
        for(var i = from; i < to; i += incr)
            str += block.fn(i);
        return str;
    });

    var service = new DataService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute('items/:id', function(id) {
            console.log('details');
            service.findById(parseInt(id)).done(function(item) {
                slider.slidePage(new ItemView(item).render().$el);
            });
        });

        router.start();
    });


    /* -------------- Cordova/PhoneGap APIs ready when deviceready fires ------------------- */
    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);

        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByHexString('#ec4549');
        StatusBar.styleLightContent();

        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,                // message
                    null,                   // callback
                    "Pocket Guide", // title
                    'OK'                    // buttonName
                    );
            };
        } else console.log("Notification plugin not found");

        if (cordova.plugins.Keyboard)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        else  console.log("Keyboard plugin not found");

    }, false);

}());