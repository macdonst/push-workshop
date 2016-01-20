##Configuration Tips

    > Please see [this interactive config guide](http://devgirl.org/files/config-app/) for more help with your app settings in the config.xml.
    If you're using [PhoneGap Build](http://build.phonegap.com), check out the [ConfGAP tool](http://aj-software.com/configap/) for help with your settings. 



###StatusBar

[My Detailed Post](http://devgirl.org/2014/07/31/phonegap-developers-guid/)

Show how you can pull it down to see the bounce and what color the text is underneath the status bar when you have one of these since our app background is white. It's overlaying it.

```
<preference name="StatusBarOverlaysWebView" value="true" />
<preference name="StatusBarStyle" value="lightcontent" /><!-- light text -->
<preference name="StatusBarStyle" value="blackopaque" /><!-- light text -->
```

###Remove WebView Bounce
Set the **DisallowOverscroll** to true if you don't want the interface to display any feedback when users scroll past the beginning or end of content. It's
set to false by default. On iOS, overscroll gestures cause content to bounce back to its original position. On Android, they produce a more subtle glowing 
effect along the top or bottom edge of the content. 

```
<preference name="DisallowOverscroll" value="true"/> 
```

###Console Output
Be aware that your stderr and stdout output messages (when you use **console.log()** statements in your JavaScript and when an error occurs) 
are written to the following paths for iOS: 

```
stderrPath: ~/workshop/platforms/ios/cordova/console.log

stdoutPath: ~/workshop/platforms/ios/cordova/console.log
```

IMPORTANT: You must install the console plugin to ensure you receive all your trace messages. They will not be added by default. 
You can do so with the following command:

```
phonegap plugin add org.apache.cordova.console
```
Use `tail -f` to  tail this file in another terminal tab and it will append the output to make things easier when testing. See this post
for more details: http://www.raymondcamden.com/2014/07/15/Yet-another-CordovaPhoneGap-Debugging-Tip

###Keyboard
```
<preference name="KeyboardDisplayRequiresUserAction" value="true" />
```


###Icons/Splash

[My Detailed Post](http://devgirl.org/2014/09/29/new-icons-and-splash-screen-help-for-cordovaphonegap/)


### Other Tips
Restart emulator in-between

- pkill lldb if using Ionic and get stuck in lldb. Go to another window and do it as well. 

- Talk abut config.xml being at root now in PhoneGap CLI
- If using PG Dev app with Ionic, just create a .cordova file
- 
http://devgirl.org/2014/09/08/quick-tip-testing-ionic-apps-with-the-phonegap-developer-app/