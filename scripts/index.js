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

  
 

 





    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function() {
        app.receivedEvent('deviceready');

            admob.setOptions({
            publisherId:  "ca-app-pub-6833525801886116~6338063942"  // Required
            // interstitialAdId:     "ca-app-pub-8867978711440765/9233474937"
            });

            //  // Start showing banners (atomatic when autoShowBanner is set to true)
            admob.createBannerView();

            // Request interstitial (will present automatically when autoShowInterstitial is set to true)
            admob.requestInterstitialAd();


       
            var notificationOpenedCallback = function(jsonData) {            
            var jsonstring = JSON.stringify(jsonData);
            var jsonobject = JSON.parse(jsonstring);
            URL_APP = jsonobject.notification.payload.additionalData.foo;

            var urlfull= 'http://www.zemerson.com.br?p=1&u='+URL_APP+'&idd=';        
           
            alert(urlfull+device.uuid, '_self');

          };


          window.plugins.OneSignal
            .startInit("0fc61fd5-1491-494f-ae92-e48f81d4e7b8")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit(); 

                         

          },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
    }
};

                  
   