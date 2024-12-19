document.addEventListener("DOMContentLoaded", function() {
    const twitterLink = document.querySelector('.p-4 ol > li:nth-of-type(2)');
    if (twitterLink) {
        twitterLink.remove();
    }
});