// ==UserScript==
// @name         Script auto send fist tin nhắn gấu bông
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  try to take over the world!
// @author       You
// @match        https://gaubong.us/users/online/nu*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gaubong.us
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /**
     pls config window.msgGauBong
     example: window.msgGauBong="Hi em, anh đang tò mò muốn biết em tìm mối quan hệ như nào. Anh tìm mối quan hệ bạn tình kín đáo <3 <3"
     **/

    setInterval(async function () {
        window.handlerAlert = function(str) {
            if(str.trim() !== "Vui lòng chát chậm lại, sau 3 giây!"
            ){
                const cancelIcon = document.querySelector(".icon-cancel-circled.text-red.cursor-pointer");
                cancelIcon.click();
            }
        }

        const messengerBox = document.getElementById("messenger_box");
        const emailInput = document.getElementById("comment_mail_write");
        const submitBtn = document.getElementById("submit_mail_write");
        const cancelIcon = document.querySelector(".icon-cancel-circled.text-red.cursor-pointer");

        if (!messengerBox || !emailInput || !submitBtn) return;
        await new Promise(resolve => setTimeout(resolve, 500));

        const message = messengerBox.textContent.trim();

        // Nếu messenger rỗng thì điền email (nếu chưa có)
        if (message === "Danh sách tin nhắn trống!" && window.msgGauBong) {
            if (emailInput.value.trim() === "") {
                emailInput.value = window.msgGauBong; // Thay giá trị phù hợp ở đây
            }

        } else {
            if (cancelIcon) {
                cancelIcon.click();
            }
        }

        // Nếu đã có email thì click submit
        if (emailInput.value.trim() !== "") {
            submitBtn.click();

        }
    }, 700);

    // Your code here...
})();