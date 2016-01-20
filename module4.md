---
layout: module
title: Module 4&#58; Performance Tip - Handle Click Delay
---

### Overview
A 300ms~ delay occurs when you tap on a target in hybrid mobile app before firing a `click` event because the mobile browser is waiting roughly that long to see if the user is going to tap the target again to perform a double-tap to zoom. One popular solution to fix this issue is to use [FastClick](https://github.com/ftlabs/fastclick). FastClick solves this by looking for `TouchStart` events in the app and then fires a `click` event as soon as the corresponding `TouchEnd` event is received.

## Steps
1. Test this in the application on your iOS device or in the iOS emulator (this will **not** work on the browser). Tap the info button on the 
 header again or click on a list item and notice the delay before the dialog appears.
  
    >This delay occurs because the operating system is waiting roughly 300ms to see if the user is going to tap the target again (and therefore perform a double-tap).

2. In **www/index.html**, add the following script tag:

    ```
    <script src="lib/fastclick.js"></script>
    ```

    >FastClick is an open source library built by the Financial Times. More information about exactly how it works and why they built it can be found [here](http://labs.ft.com/articles/ft-fastclick/).

3. In **www/js/app.js**, register FastClick inside the `deviceready` event handler. This is all you have to do and FastClick takes care of the rest automatically.

    ```
    FastClick.attach(document.body);
    ```

4. Test out the change in the application by clicking the info button or tapping list items again, there's no longer a delay. 


>You could also check out [this demo](http://sandbox.juurlink.org/fastclick/) from a mobile app to see the difference in milliseconds for the registered events.  
 
<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module3.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module5.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
