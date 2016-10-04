function nextTick(e){setTimeout(e,0)}function make4Len16(e){var t=e.toString(16);while(t.length<4){t="0"+t}return t}function encode_utf8(e){return unescape(encodeURIComponent(e))}function decode_utf8(e){return decodeURIComponent(escape(e))}function ab2str(e){if(e.constructor.name=="ArrayBuffer"){e=new Uint8Array(e)}return decode_utf8(String.fromCharCode.apply(null,e))}function str2ab(e,t,o){e=encode_utf8(e);var n=e.length;if(o)n++;if(!t){t=new ArrayBuffer(n)}var r=new Uint8Array(t);if(o)r[e.length]=0;for(var i=0,a=e.length;i<a;i++){r[i]=e.charCodeAt(i)}return t}var slashN="\n".charCodeAt(0);function writeLine(e,t,o){if(t.constructor.name=="Object")t=JSON.stringify(t);writeString(e,t+"\n",o)}function readLine(e,t){var o=[];function n(){e.read(function(r){for(var i=0;i<r.byteLength;i++){if(r[i]==slashN){var a=r.subarray(0,i);o.push(a);var c="";for(var s in o){s=o[s];c+=ab2str(s)}var l=r.subarray(i+1);e.unshift(l);t(c);return}}o.push(r);n()})}n()}function readString(e,t){var o="";e.onClose=function(){t(o)};function n(t){o+=ab2str(t);e.read(n)}e.read(n)}function writeString(e,t,o){if(t.constructor.name=="Object")t=JSON.stringify(t);e.write(str2ab(t),o)}function appendBuffer(e,t){var o=new Uint8Array(e.byteLength+t.byteLength);o.set(e,0);o.set(t,e.byteLength);return o}var timeThing=(new Date).getTime();function timeTrace(e){var t=(new Date).getTime();console.log(e+": "+(t-timeThing));timeThing=t}function bufferToHex(e){var t=new Uint8Array(e);var o="";for(var n in t){n=t[n];if(n<16)o+="0"+n.toString(16);else o+=n.toString(16)}return o}function hexToBuffer(e){var t=new ArrayBuffer(e.length/2);var o=new Uint8Array(t);for(var n=0;n<e.length/2;n++){var r=e.substr(n*2,2);o[n]=parseInt(r,16)}return t}function base64ToArrayBuffer(e){var t=window.atob(e);var o=t.length;var n=new Uint8Array(o);for(var r=0;r<o;r++){var i=t.charCodeAt(r);n[r]=i}return n.buffer}function arrayBufferToBase64(e){var t="";var o=new Uint8Array(e);var n=o.byteLength;for(var r=0;r<n;r++){t+=String.fromCharCode(o[r])}return window.btoa(t)}var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(e){var t;var o;var n="";for(t=0;t+3<=e.length;t+=3){o=parseInt(e.substring(t,t+3),16);n+=b64map.charAt(o>>6)+b64map.charAt(o&63)}if(t+1==e.length){o=parseInt(e.substring(t,t+1),16);n+=b64map.charAt(o<<2)}else if(t+2==e.length){o=parseInt(e.substring(t,t+2),16);n+=b64map.charAt(o>>2)+b64map.charAt((o&3)<<4)}while((n.length&3)>0){n+=b64pad}return n}if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{enumerable:false,configurable:false,writable:false,value:function(e,t){t=t||0;return this.lastIndexOf(e,t)===t}})}function getQueryVariable(e,t){if(!t)t=window.location;var o=t.search.substring(1);var n=o.split("&");for(var r=0;r<n.length;r++){var i=n[r].split("=");if(decodeURIComponent(i[0])==e){return decodeURIComponent(i[1])}}}Object.fromArray=function(e){var t={};for(var o in e){var n=e[o];t[n]=n}return t};$.ajaxTransport("+binary",function(e,t,o){if(window.FormData&&(e.dataType&&e.dataType=="binary"||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob))){return{send:function(t,o){var n=new XMLHttpRequest,r=e.url,i=e.type,a=e.async||true,c=e.responseType||"blob",s=e.data||null,l=e.username||null,u=e.password||null;n.addEventListener("load",function(){var t={};t[e.dataType]=n.response;o(n.status,n.statusText,t,n.getAllResponseHeaders())});n.open(i,r,a,l,u);for(var d in t){n.setRequestHeader(d,t[d])}n.responseType=c;n.send(s)},abort:function(){o.abort()}}}});function throttleTimeout(e,t,o,n){if(!e)e={items:[]};e.items.push(t);if(!e.timeout){e.timeout=setTimeout(function(){delete e.timeout;n(e.items);e.items=[]},o)}return e}function copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed";t.style.top=0;t.style.left=0;t.style.width="2em";t.style.height="2em";t.style.padding=0;t.style.border="none";t.style.outline="none";t.style.boxShadow="none";t.style.background="transparent";t.value=e;document.body.appendChild(t);t.select();try{var o=document.execCommand("copy")}catch(n){console.log("Oops, unable to copy")}document.body.removeChild(t)}function showNotification(e,t){console.log("notification:",e);if(!window.chrome||!window.chrome.notifications)return;var o=chrome.runtime.getManifest();var n=o.name;t=t||o.icons[128];chrome.notifications.create({type:"basic",iconUrl:t,title:n,message:e})}var blobFromUrl=function(){var e={};return function(t,o){if(e[t]){o(e[t]);return}var n=new XMLHttpRequest;n.open("GET",t,true);n.responseType="blob";n.onload=function(n){o(e[t]=window.URL.createObjectURL(this.response))};n.send()}}();function Success(){}(function(){function*e(){}var t=e();t.constructor.prototype.async=function(){var e=this;var t=e.next();if(t.done)return;function o(){t=e.throw(new Error(arguments));r()}function n(){var o=arguments[0];t=e.next(o);r()}function r(r){var i;var a;if(t.done)return;if(!t.value){t=e.next(n);return}if(t.value.constructor==Promise){t.value.then(n).catch(o);return}if(t.value==Error){i=true;t=e.next(o)}else if(t.value==Success){a=true;t=e.next(n)}else{throw new Error("Unexpected yield value for callback. Only Error and Success allowed.")}if(!t.value)throw new Error("Double yield callbacks must explicitly define both Error and Success");if(t.value==Error&&i)throw new Error("Error callback already defined");else if(t.value==Success&&a)throw new Error("Success callback already defined");else if(t.value!=Error&&t.value!=Success)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");if(i)t=e.next(n);else t=e.next(o)}r()}})();function spewSocket(e){e.read(function(t){console.log(ab2str(t));spewSocket(e)})}function getAuthToken(e,t){if(!window.chrome||!window.chrome.identity){console.error("no auth token implemented");process.nextTick(t);return}chrome.identity.getAuthToken({interactive:e,scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/chromewebstore.readonly"]},function(e){if(!e)console.error("unable to get authToken",chrome.runtime.lastError);t(e)})}window.isElectron=function(){return navigator.userAgent.indexOf("Electron")!=-1};if(!isElectron()){window.sharedGlobals=window}(function(){var e=console.log;var t=console.error;var o="";function n(e){try{for(var t in e){if(e[t]&&e[t].constructor!=String)e[t]=JSON.stringify(e[t])}o+=e.join(" ")+"\n"}catch(n){}}console.error=function(){t.apply(console,arguments);n(Array.prototype.slice.call(arguments))};console.log=function(){e.apply(console,arguments);n(Array.prototype.slice.call(arguments))};sharedGlobals.getConsoleLog=function(e){e(o)};function r(e){return new Promise(function(t,o){if(!e.getConsoleLog){t("getConsoleLog not found");return}e.getConsoleLog(function(e){t({content:e})})})}window.gistConsoleLog=function(e,t){chrome.runtime.getBackgroundPage(function(o){r(o).then(function(t){e["background.txt"]=t;var o=chrome.app.window.getAll();var n=o.map(function(t){return r(t.contentWindow).then(function(o){e["window-"+t.id+".txt"]=o})});return Promise.all(n)}).then(function(){var o={description:chrome.runtime.getManifest().name+" console log","public":false,files:e};fetch("https://api.github.com/gists",{method:"POST",body:JSON.stringify(o)}).then(function(e){e.json().then(function(e){t(e.html_url)})})})})}})();function showModal(e){var t=$("#notificationModal");var o=t.find("#modal-ok");var n=t.find("#modal-cancel");o.unbind("click");n.unbind("click");e.cancelButton=e.cancelButton||"Cancel";e.okButton=e.okButton||"OK";e.title=e.title||chrome.runtime.getManifest().name;e.body=e.body||"";if(e.hideCancel)n.hide();else n.show();o.text(e.okButton);n.text(e.cancelButton);t.find("#modal-title").text(e.title);t.find("#modal-body").html(e.body);o.click(function(){if(!e.ok||!e.ok())$("#notificationModal").modal("hide")});if(e.cancel)e.click(e.cancel);$("#notificationModal").modal();if(e.duration){setTimeout(function(){$("#notificationModal").modal("hide")},e.duration)}}function shortModal(e,t){showModal({title:e,body:t,duration:8e3,hideCancel:true})}(function(){$(document).ready(function(){$("#purchase-options").hide();chrome.identity.getProfileUserInfo(function(e){if(!e){showModal({hideCancel:true,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum."});return}$("#purchase-email").text(e.email)});chrome.storage.local.get(["vysorUsage"],function(e){var t=e.vysorUsage;if(!t)t=0;var o=t/(60*60*1e3);o=Math.round(o*2)/2;$("#used").html("<span class='time-highlight'>You've used Vysor Free for "+o+" hours. Support Vysor. Go Pro.</span>")});function e(){$("#paymentModal").modal("hide");getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var t="https://billing.clockworkmod.com/api/v1/paypalorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:t});chrome.app.window.current().close()}.bind(this))}function t(){$("#paymentModal").modal("hide");getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var t="https://billing.clockworkmod.com/api/v1/stripeorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:t});chrome.app.window.current().close()}.bind(this))}function o(e){$("#paymentModal").modal("hide");getAuthToken(true,function(t){if(!t){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var o="https://billing.clockworkmod.com/subscription/stripe/manage/koushd@gmail.com/"+e+"/";chrome.browser.openTab({url:o});chrome.app.window.current().close()}.bind(this))}function n(e){$("#paymentModal").modal("hide");if(isElectron()){showModal({ok:function(){chrome.browser.openTab({url:"https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm"})},hideCancel:true,body:"Google Wallet licenses can be purchased from within the Vysor for Chrome app.<br/><br/>The license will also unlock the desktop version of Vysor."});return}google.payments.inapp.buy({parameters:{env:"prod"},sku:e,success:function(){refreshLicenseManager();console.log("success",arguments)},failure:function(){refreshLicenseManager();console.log("failure",arguments)}})}function r(e){$("#paymentModal").modal("hide");showModal({ok:function(){a(e)},hideCancel:true,body:"Paypal subscriptions are not available for this plan."})}var i={monthly:{google:function(){n("vysor_monthly")},stripe:function(){o("vysor.monthly")},paypal:r},annual:{google:function(){n("vysor.annual2")},stripe:function(){o("vysor.annual")},paypal:r},lifetime:{google:function(){n("vysor.lifetime")},stripe:t,paypal:e}};function a(e){$("#pay-card").unbind("click");$("#pay-google").unbind("click");$("#pay-alipay").unbind("click");$("#pay-paypal").unbind("click");$("#pay-card").click(i[e].stripe);$("#pay-alipay").click(i[e].stripe);$("#pay-google").click(i[e].google);$("#pay-paypal").click(function(){i[e].paypal(e)});$("#paymentModal").modal()}$(".plan-enterprise").click(function(){var e="https://billing.vysor.io/";chrome.browser.openTab({url:e});chrome.app.window.current().close()});$(".plan-monthly").click(function(){a("monthly")});$(".plan-annual").click(function(){a("annual")});$(".plan-lifetime").click(function(){a("lifetime")});$("#retrieve").click(function(){getAuthToken(true,function(e){if(!e){console.log("Unable to get token for retrieve?");return}refreshLicenseManager(function(e){if(!e){chrome.identity.getProfileUserInfo(function(e){if(!e){showModal({hideCancel:true,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum."});return}showModal({hideCancel:true,body:"No license found for account "+e.email+'. If this message was in error, please open an issue on the Support Forum.<br/><br/>Wrong account? <a href="https://plus.google.com/110558071969009568835/posts/5dWULG7ALmB" target="_blank">Read this</a>.'})})}})})});if(true)return;var c={"vysor.annual":false,"vysor.annual2":true,"vysor.lifetime":true,vysor_monthly:true};function s(e){$.each(e.response.details.inAppProducts,function(e,t){var o=t.sku;if(!c[o])return;var n=t.localeData[0].title;var r=t.prices[0];var i=r.valueMicros/1e6+" "+r.currencyCode;var a=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet</a></td></tr>');a.find("#sub").text(n);a.find("#price").text(i);a.find("#purchase").click(function(){google.payments.inapp.buy({parameters:{env:"prod"},sku:o,success:function(){refreshLicenseManager();console.log("success",arguments)},failure:function(){refreshLicenseManager();console.log("failure",arguments)}})});$("#prices").append(a)});var t=$('<tr><td id="sub"></td><td id="price"></td><td></td></tr>');$("#prices").append(t);l();u();$("#purchase-options-loading h4").hide();$("#purchase-options").show()}function l(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> PayPal</a></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");e.find("#purchase").click(function(){getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var t="https://clockworkbilling.appspot.com/api/v1/paypalorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:t});chrome.app.window.current().close()}.bind(this))});$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Credit Card or Alipay</a></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");e.find("#purchase").click(function(){getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var t="https://clockworkbilling.appspot.com/api/v1/stripeorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:t});chrome.app.window.current().close()}.bind(this))});$("#prices").append(e)}function u(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Credit Card or Alipay</a></td></tr>');e.find("#sub").text("Enterprise Licensing (Monthly)");e.find("#price").text("$2");e.find("#purchase").click(function(){var e="https://billing.vysor.io/";chrome.browser.openTab({url:e});chrome.app.window.current().close()});$("#prices").append(e)}function d(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><p id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet unavailable!</p></td></tr>');e.find("#sub").text("Monthly Subscription");e.find("#price").text("1.99 USD");$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td><p id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet unavailable!</p></td></tr>');e.find("#sub").text("Annual Subscription");e.find("#price").text("9.99 USD");$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td><p id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet unavailable!</p></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td></td></tr>');$("#prices").append(e);console.log(arguments);$("#purchase-options-loading h4").html('Chrome Web Store subscription pricing unavailable.<br/>This may be caused when behind a VPN or firewall.<br/>Please make ensure you are <a href="https://www.google.com/chrome/browser/signin.html" target="_blank">logged into Chrome</a><br/>and <a href="https://developer.chrome.com/webstore/pricing#seller" target="_blank">your country supports Chrome Web Store payments</a>.<br/>Alternatively, you may purchase the Lifetime Pass through PayPal.');$("#purchase-options").show();l();u()}google.payments.inapp.getSkuDetails({parameters:{env:"prod"},success:s,failure:d})})})();
