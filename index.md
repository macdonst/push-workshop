---
layout: home
title: PhoneGap Day US Push Workshop
---

## What You Will Build
In this workshop you will learn how to create a simple mobile application using PhoneGap with HTML, JavaScript and CSS. We'll go over a the ways to handle incoming push notifications to provide a native experience.

<img class="screenshot" src="images/push1.png"/>
<img class="screenshot" src="images/push2.png"/>
<img class="screenshot" src="images/push3.png"/>

## What You Will Learn

- How to handle specific notification types such as foreground push, background push, action buttons, redirecting to a specific page in your app.

- How to use several PhoneGap APIs via plugins

## Pre-requisites

### Android Pre-requisites

- Google Cloud Messaging Project ID
- Google Cloud Messaging API Key for above Project ID (need for server)

### iOS Pre-requisites

- App ID configured for Push Notifications on Apple Developer Portal
- SSL Certificate and private key (need for server)

## Requirements

- A working knowledge of HTML and JavaScript is assumed, but you don't need to be a JavaScript guru.

- To complete this workshop, all you need is a code editor, an Android or iOS device, and a connection to the Internet.

>A mobile device **is** a requirement for this tutorial. The iOS simulator does not support push notifications and the less said about the Android emulator the better.

## Useful Resources
1. [GCM Project Creation](http://docs.urbanairship.com/reference/push-providers/gcm.html) - a guide from Urban Airship on setting up a project with GCM enabled.
2. [Apple Push Configuration](http://docs.urbanairship.com/reference/push-providers/apns.html) - a guide from Urban Airship on creating the certificate and permission files to enable APNS.

## Issues/Feedback

- Please create an issue [here](https://github.com/macdonst/push-workshop/issues) if you run
into any problems or if you have feedback.

- You can contact me on Twitter:

    <a href="https://twitter.com/macdonst" class="twitter-follow-button" data-show-count="true"
    data-size="large" data-lang="en">Follow
    @macdonst</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module1.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63182422-1', 'auto');
  ga('send', 'pageview');

</script>
