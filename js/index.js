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
    SOME_CONSTANTS : false,  // some constant
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.initFastClick();
        $.ajax({
            type: "GET",
            //url: 'http://10.111.5.56:15021/wcftest/Service1.svc/Getcyclecounts/4/40',
            url: 'get-data.php',
            success: function (res) {
                console.dir(res.GetCycleCountsResult);
               $('#table').bootstrapTable({
                   idField: 'BIN_PRIM',
                   columns: [{
                        field: 'BIN_PRIM',
                        title: 'BIN_PRIM'
                    }, {
                        field: 'CODE_UM_STK',
                        title: 'CODE_UM_STK'
                    }, {
                        field: 'CountType',
                        title: 'CountType'
                    }, {
                        field: 'DESRC_1',
                        title: 'DESCR_1'
                    }, {
                        field: 'ID_ITEM',
                        title: 'ID_ITEM'
                    }, {
                        field: 'ID_USER_ADD',
                        title: 'ID_USER_ADD'
                    }, {
                        field: 'QTY_ONHD',
                        title: 'QTY_ONHD',
                        editable: {
                            type: 'textarea'
                        }
                    }],
                    data: res.GetCycleCountsResult
                    
                });
            },
            error: function (err) {
                console.log(err);
            },
            
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

    }
};