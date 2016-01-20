---
layout: module
title: Module 3&#58; Best Practice - Single Page Architecture
---

### Overview
Single page applications are popular and considered the best approach for hybrid app development. In a single page application, state changes occur via JavaScript using templates and DOM manipulation rather than making calls to a server to return an HTML page. The logic stays on the client side and routing and templates are used to manipulate views when actions occur. 
 
 >Numerous popular frameworks support this concept (Angular, Ember etc) and have it built-in to the framework. In those cases you will define your routes and templates as the framework prescribes.

 
## Steps
1. Open up the **lib/router.js** file and look through the code. This library is just a simple routing mechanism based on hash tag routing.
             
2. Now open **www/js/app.js** and take a look at the routes being used for this application:
 
       service.initialize().done(function () {
            router.addRoute('', function() {
                slider.slidePage(new HomeView(service).render().$el);
            });
       
           router.addRoute('items/:id', function(id) {
               service.findById(parseInt(id)).done(function(item) {
                   slider.slidePage(new ItemView(item).render().$el);
               });
           });
       
           router.start();
       });

  When the URL is empty (no additional parameters), we show the home view with the list of items. However if we find the URL contains
  `/items` with a given id, then we look up the id and show the `ItemView` for that item.

> [PageSlider](https://github.com/ccoenraets/PageSlider) is a simple library providing hardware accelerated page transitions for Mobile Apps

3. Open **www/js/HomeView.js** and notice how you can render template content within another template, for example, the `ListView` items are populated here within the `content` tag of the home template when the `HomeView` is rendered.

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

> See [this workshop](http://hollyschinsky.github.io/phonegap-workshop/) for a better understanding of how this architecture was put together. 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module4.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
