/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById("toggleBtn").addEventListener('click', this.toggle, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      console.log('deviceready event');
       app.push = PushNotification.init({
            "android": {
                "senderID": "Your GCM ID"
            },
            "ios": {
              "sound": true,
              "vibration": true,
              "badge": true,
              "categories": {
                "invite": {
                    "yes": {
                        "callback": "app.accept", "title": "Accept",
                        "foreground": true, "destructive": false
                    },
                    "no": {
                        "callback": "app.reject", "title": "Reject",
                        "foreground": true, "destructive": false
                    },
                    "maybe": {
                        "callback": "app.maybe", "title": "Maybe",
                        "foreground": true, "destructive": false
                    }
                },
                "delete": {
                    "yes": {
                        "callback": "app.doDelete", "title": "Delete",
                        "foreground": true, "destructive": true
                    },
                    "no": {
                        "callback": "app.cancel", "title": "Cancel",
                        "foreground": true, "destructive": false
                    }
                }
              }
            },
            "windows": {}
        });

       app.push.on('registration', function(data) {
           console.log("registration event: " + data.registrationId);
           document.getElementById("regId").innerHTML = data.registrationId;
           var oldRegId = localStorage.getItem('registrationId');
           if (oldRegId !== data.registrationId) {
               // Save new registration ID
               localStorage.setItem('registrationId', data.registrationId);
               // Post registrationId to your app server as the value has changed
           }
       });

       app.push.on('error', function(e) {
           console.log("push error = " + e.message);
       });
       app.push.on('notification', function(data) {
         console.log('notification event');
         if (data.additionalData.url) {
           if (data.additionalData.foreground) {
             navigator.notification.confirm(
              'Do you want to see a cat picture?',
               function(buttonIndex) {
                 if (buttonIndex === 1) {
                   app.toggle();
                 }
               },
              'Cat Pic',
              ['Yes','No']
            );
           } else {
             app.toggle();
           }
         } else {
           var cards = document.getElementById("cards");
           var push = '<div class="row">' +
             '<div class="col s12 m6">' +
             '  <div class="card darken-1">' +
             '    <div class="card-content black-text">' +
             '      <span class="card-title black-text">' + data.title + '</span>' +
             '      <p>' + data.message + '</p>' +
             '      <p>' + data.additionalData.foreground + '</p>' +
             '    </div>' +
             '  </div>' +
             ' </div>' +
             '</div>';
           cards.innerHTML += push;
         }

          app.push.finish(function() {
              console.log('success');
          }, function() {
              console.log('error');
          });
        });
    },
     accept: function() {
       alert("Accepted");
     },
     reject: function() {
       alert("Rejection!");
     },
     maybe: function() {
       alert("Maybe, I dunno. I can't tell for sure");
     },
   toggle: function (id) {
     var cats = document.querySelector("#cats");
     var cards = document.querySelector("#cards");
     if (cats.style.display === 'none') {
       cats.style.display = 'block';
       cards.style.display = 'none';
     } else {
       cats.style.display = 'none';
       cards.style.display = 'block';
     }
   }
};

app.initialize();
