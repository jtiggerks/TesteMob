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

  
 var admobid = {}

  admobid = {
    banner: 'ca-app-pub-6833525801886116~6338063942',
    interstitial: 'ca-app-pub-6833525801886116~6338063942',
  }
 

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    isTesting: true,
    autoShow: true,
  })
  admob.banner.prepare()

  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: true,
    autoShow: true,
  })
  admob.interstitial.prepare()

  document.getElementById('showAd').disabled = true
  document.getElementById('showAd').onclick = function() {
    admob.interstitial.show()
  }

}, false)

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  alert(event)
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  alert(event)
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  alert(event)
  document.getElementById('showAd').disabled = false
})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  alert(event)

  admob.interstitial.prepare()
})





    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function() {
        app.receivedEvent('deviceready');

          var urlfull= 'http://dev.100regras.com.br?p=1&u=';        
         // window.open(urlfull+device.uuid, '_self');   
          var notificationOpenedCallback = function(jsonData) {
            //alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };

   


          },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
    }
};

                  
   