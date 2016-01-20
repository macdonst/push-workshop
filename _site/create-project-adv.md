### Optional Steps for Local Platform Build

6. Add support for the iOS platform (optional)
    1. Make sure the iOS SDK is available on your system.
    2. On the command line, make sure you are in the **pg-workshop** directory and type: 
    
    ```        
    phonegap platforms add ios
    ```        
    
    > To be able to build for the iOS platform, the iOS SDK must be installed on your system. If it's not, 
    you can skip this step and add support for another platform, or simply run the tutorial application in your 
    browser.
                                    
                                   
        
7. Add support for the Android platform (optional)

    1. Make sure the Android SDK and the ant build tool are available on your system. The Android SDK is available 
    [here](http://developer.android.com/sdk). Both the **android** and **ant** tools must be available in your path.    
    2. On the command line, make sure you are in the **pg-workshop** directory and type:
    
    ```
    phonegap platforms add android
    ```   
    
         
    > To be able to build for the Android platform, the Android SDK must be installed on your system. If it's not, 
    you can skip this step and add support for another platform, or simply run the tutorial application in your browser.

8. Make sure you are in the **pg-workshop** directory, and add these basic plugins to your projects:

    ```          
    phonegap plugin add org.apache.cordova.console
    phonegap plugin add org.apache.cordova.device
    ```        
        
    > The [console plugin](https://github.com/apache/cordova-plugin-console) is needed to see any console messages you might be writing in your app (console.log("My value is " + val)).  
    
    > The [device plugin](https://github.com/apache/cordova-plugin-device) allows you to access device specific information so you can detect platform (iOS, android etc), version etc. 
  

