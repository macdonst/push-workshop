---
layout: module
title: Module 7&#58; Handing URL re-direction
---
In this lesson we'll learn how to share a destination's information through the device's native sharing options.

### Steps

1. In **index.html**, add the following tab to the tab bar in the *item-tpl* template:

    ```
    <div class="shareBtn tab-item">
        <span class="icon icon-share"></span>
        <span class="tab-label">Share</span>
    </div>
    ```

1. In the **initialize()** function of **ItemView.js**, register an event listener for the click event of the *share* button.

        this.$el.on('click', '.shareBtn', this.share);    

1. While in **ItemView.js**, define the `share` event handler as follows:

         this.share = function(event) {
            if (window.cordova && window.plugins && window.plugins.socialsharing) {
                window.plugins.socialsharing.share("Hey look where I'm going next: " + place.name + ".",
                    'My Amsterdam Trip', null, place.website,
                    function () {
                        console.log("Success")
                    },
                    function (error) {
                        console.log("Share fail " + error)
                    });
            }
            else alert("Social sharing plugin not found or not supported.");
        }


1. Run the application again and click the share button to ensure you see the following:

    <img class="screensho-lgt" src="images/flow5-social-share.jpg"/>

>The options shown here will depend on your particular devices' native sharing options.

### Dependencies

    - [Toast 3rd Party Plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)

     $ phonegap plugin add nl.x-services.plugins.socialsharing


 > The Social Sharing plugin is already included in the config.xml from the repo and will be added automatically if you are using it with the
  CLI locally.  If you're using the PhoneGap Developer App to preview your app however, this will not work since it is a 3rd party plugin.


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="add-to-calendar.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i>
Previous</a>
<a href="statusbar.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>


</div>
</div>
