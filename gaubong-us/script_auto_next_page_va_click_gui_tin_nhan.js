// ==UserScript==
// @name         Script auto next page và click gửi tin nhắn gấu bông
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

    async function processPage() {
        const buttons = document.querySelectorAll('button.btn.btn-dark.icon-mail');

        for (const button of buttons) {
            while (document.querySelector('#messenger_box')) {
                console.log('Đã tồn tại #messenger_box, đợi 5 giây...');
                await new Promise(resolve => setTimeout(resolve, 5000));
            }

            console.log('Không thấy #messenger_box, click button...');
            button.click();

            // Đợi 1s sau mỗi click
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log('Đã xử lý xong trang, kiểm tra nút chuyển trang...');
        goToNextPageOrRestart();
    }

    function goToNextPageOrRestart() {
        const nextPageLink = Array.from(document.querySelectorAll('a.pagenav'))
            .find(a => a.textContent.trim() === '>>');

        if (nextPageLink) {
            console.log('Tìm thấy trang kế tiếp, chuyển sang trang tiếp theo...');
            nextPageLink.click(); // Tự động chuyển trang
        } else {
            console.log('Không tìm thấy nút ">>", quay lại trang 1 để bắt đầu lại...');
            const url = new URL(window.location.href);
            url.searchParams.set('page', '1');
            window.location.href = url.toString(); // Quay lại page 1
        }
    }

    setTimeout(() => {
        processPage();
    }, 3000);

})();