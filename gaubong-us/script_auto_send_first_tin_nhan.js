// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-04-25
// @description  try to take over the world!
// @author       You
// @match        https://gaubong.us/users/online/nu*
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
        if(str.trim() == "Người này chỉ nhận tin nhắn từ bạn bè!" || str.trim() == "Người này chỉ nhận tin nhắn từ danh bạ liên hệ!"){
            const cancelIcon = document.querySelector(".icon-cancel-circled.text-red.cursor-pointer");
            cancelIcon.click();
        }
        new Notify({
            text: str,
        })
    };

    setInterval(function () {
        const messengerBox = document.getElementById("messenger_box");
        const emailInput = document.getElementById("comment_mail_write");
        const submitBtn = document.getElementById("submit_mail_write");
        const cancelIcon = document.querySelector(".icon-cancel-circled.text-red.cursor-pointer");

        if (!messengerBox || !emailInput || !submitBtn) return;

        const message = messengerBox.textContent.trim();

        // Nếu messenger rỗng thì điền email (nếu chưa có)
        if (message === "Danh sách tin nhắn trống!") {
            if ( emailInput.value.trim() === "") {
                emailInput.value = "Hi em, em muốn tìm mối quan hệ như nào ?"; // Thay giá trị phù hợp ở đây
            }

        }else{
            if (cancelIcon) {
                cancelIcon.click();
            }
        }

        // Nếu đã có email thì click submit
        if (emailInput.value.trim() !== "") {
            submitBtn.click();

        }
    }, 500);

    // Your code here...
})();