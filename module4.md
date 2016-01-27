---
layout: module
title: Module 4&#58; Sending a Test Notification
---

### Overview
Now that we have an app that is able to receive push notifications we have to have some way to be able to send a notification to the app. The push plugin will work with a number of third party push services including but not limited to [Amazon SNS](https://aws.amazon.com/sns/?sc_channel=PS&sc_campaign=acquisition_CA&sc_publisher=google&sc_medium=sns_b&sc_content=sns_e&sc_detail=amazon%20sns&sc_category=sns&sc_segment=64743194096&sc_matchtype=e&sc_country=CA&s_kwcid=AL!4422!3!64743194096!e!!g!!amazon%20sns&ef_id=VFewPgAAAJQIwLbC:20160121142959:s), [Parse](http://parse.com/), [DevicePush](http://www.devicepush.com/) and [Ionic Push](https://apps.ionic.io/landing/push) we are just going to use our own Node script to test push.

## Steps
1. In the **server** directory run:

        npm install

   This will install the necessary node packages in order to send push notifications to APNS or GCM.

2. If you are using an Android device open the **server/gcmService.js** file. You will need to modify the following two lines with your API key and device ID.

        // Replace these with your own values.
        var apiKey = "Project API Key";
        var deviceID = "Device's Registration ID"

   or if you are using an iOS device open the **server/apnService.js** file. You will need to modify the following three lines with the paths to your certificate files and the device ID.

        // Replace these with your own values.
        var cert = "/path/to/cert.pem";
        var key = "/path/to/key.pem";
        var deviceID = "Device's Registration ID";

3. Now we are ready to send a push notification to our app. If you are on Android device you will run the following command to send your test push:

        node gcmService.js

<img class="screenshot" src="images/push2.png"/>
<img class="screenshot" src="images/push3.png"/>

   If you are on a iOS device you will run the following command to send your test push:

        node apnService.js

<img class="screenshot" src="images/push2-ios.png"/>
<img class="screenshot" src="images/push3-ios.png"/>

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module3.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module5.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
