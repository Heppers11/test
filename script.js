
 var params = window.location.href.substring(window.location.href.indexOf('?') + 1).split('&');
var vars = {};
for (var i = 0; i < params.length; i++) {vars[params[i].split('=')[0]] = params[i].split('=')[1];}
viewer_id = vars['viewer_id'];
is_app_user = vars['is_app_user'];
api_result = vars['api_result'];
auth_key = vars['auth_key'];
if(api_result != undefined){udata = JSON.parse(decodeURIComponent(api_result))["response"];
onkeydown = e => e.key == " " ? clicksCountSpan.innerText+= udata[0]:0