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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /* var parentElement = document.getElementById(id);
         var listeningElement = parentElement.querySelector('.listening');
         var receivedElement = parentElement.querySelector('.received');

         listeningElement.setAttribute('style', 'display:none;');
         receivedElement.setAttribute('style', 'display:block;');*/

    },
    //Open ImagePicker
    pickImage: function() {
        window.imagePicker.getPictures(
            function(results) {
                var imageHtml="";
                for (var i = 0; i < results.length; i++) {
                    // $("#urlList").html("<p>" + app.convertImgToBase64URL(results[i]) + "</p>");
                    imageHtml+="<img src='"+results[i]+"' style='width:100%'><br/>";

                }
                $("#imagaList").html(imageHtml);
            },
            function(error) {
                console.log('Error: ' + error);
            }
        );
    },
    convertImgToBase64URL: function(imageUri) {
        /*var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            var canvas = document.createElement('imgCanvas'),
                ctx = canvas.getContext('2d'),
                dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
            canvas = null;
        };
        img.src = url;*/
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function() {
            c.width = this.width;
            c.height = this.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = imageUri;
        var dataURL = c.toDataURL("image/jpeg");
        return dataURL;
        /*window.plugins.Base64.encodeFile(imageUri, function(base64) {
            console.log('file base64 encoding: ' + base64);
            return base64;
        });*/
    }
};

app.initialize();
