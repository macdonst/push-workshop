var HomeView = function (service) {

    var listView;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        this.$el.on('click', '.infoBtn', this.info);

        listView = new ListView();
        this.findAll(); // Default to showing all list items unless search text entered

        this.render();
    };

    this.info = function() {
        alert("PhoneGap Day Workshop App version 1.0");
    }

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(listView.$el);


        return this;
    };

    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(items) {
            listView.setListItems(items);
        });
    };

    this.findAll = function() {
        service.findAll().done(function(items) {
            listView.setListItems(items);
        });
    };

    this.initialize();
}