// ==UserScript==
// @name         script_simple-notify
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @match        */*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gaubong.us
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/simple-notify/dist/simple-notify.min.js
// ==/UserScript==

(function() {
    'use strict';

    const cssUrl = 'https://cdn.jsdelivr.net/npm/simple-notify/dist/simple-notify.css';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);

    window.alert = function(str) {
        new Notify({
            text: str,
        })
        if(window.handlerAlert){
            window.handlerAlert(str);
        }
    };

    window.handlerAlert = function(str) {
        if(str.trim() == "Người này chỉ nhận tin nhắn từ bạn bè!" || str.trim() == "Người này chỉ nhận tin nhắn từ danh bạ liên hệ!"){
            const cancelIcon = document.querySelector(".icon-cancel-circled.text-red.cursor-pointer");
            cancelIcon.click();
        }
    }

    // Your code here...
})();