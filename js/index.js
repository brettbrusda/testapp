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
function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.firstName + "</td>"));
    row.append($("<td>" + rowData.lastName + "</td>"));
}
var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
        // $.ajax({
        //     type: "GET",
        //     url: 'get-data.php',
        //     success: function (res) {
        //        console.log(res);
        //     },
        //     error: function (err) {
                
        //     },
            
        // });
        $.ajax({
    url: '/echo/json/',
    type: "post",
    dataType: "json",
    data: {
        json: JSON.stringify([
            {
            id: 1,
            firstName: "Peter",
            lastName: "Jhons"},
        {
            id: 2,
            firstName: "David",
            lastName: "Bowie"}
        ]),
        delay: 3
    },
    success: function(data, textStatus, jqXHR) {
                // since we are using jQuery, you don't need to parse response
                drawTable(data);
            }
        });
                
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
         document.addEventListener("deviceready", function(){
            this.onDeviceReady();
        },true);
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
    onDeviceReady: function() {
        console.log("device ready, start making you custom calls!");

        // Start adding your code here....
         $.ajax({
            type: "GET",
            url: 'get-data.php',
            success: function (res) {
               console.log(res);
            },
            error: function (err) {
                
            },
            
        });

    }
    
};