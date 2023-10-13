// ==UserScript==
// @name         AliExpress Link Cleaner
// @namespace    http://aliexpress.com/
// @version      1.1
// @description  Removes unnecessary parameters from AliExpress product links.
// @match        *://*.aliexpress.com/*
// @grant        none
// @icon		 https://ae01.alicdn.com/kf/S05616f829f70427eb3389e1489f66613F.ico
// @run-at       document-start
// @license      Non-Commercial Use Only
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
    linkFix();
});

function linkFix() {
    const currentUrl = window.location.href;
    const cleanedUrl = currentUrl.split('?')[0]; // Remove query parameters

    if (cleanedUrl !== currentUrl) {
        window.location.replace(cleanedUrl);
    }
}
