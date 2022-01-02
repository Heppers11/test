var params = window.location.href.substring(window.location.href.indexOf('?') + 1).split('&');
onkeydown = e => e.key == " " ? clicksCountSpan.innerText+=params:0