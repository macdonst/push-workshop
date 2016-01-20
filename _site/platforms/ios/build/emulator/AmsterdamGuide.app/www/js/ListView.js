var ListView = function () {

    var items;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setListItems = function(list) {
        items = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(items));
        return this;
    };

    this.initialize();

}