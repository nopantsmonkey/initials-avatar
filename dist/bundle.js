!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){var t=["#626be0","#e06277","#b467da","#e09862","#1abc9c","#f44336","#3498db","#673ab7","#34495e","#8bc24a","#27ae60","#2980b9","#8e44ad","#6c3244","#f1c40f","#2266e6","#e74c3c","#50e3c2","#4498ae","#f39c12","#2c5e1c","#ea1e63","#62b6e0","#484d9c"],n=e.getAttribute("data-avatar"),r=n[0].charCodeAt()-64,a=n.length>1?n[1].charCodeAt()-64:0,i=r*a+r;e.setAttribute("style","background-color:"+t[i%t.length])}n(4);var a=function(e){"nodeInserted"==e.animationName&&r(e.target)};document.addEventListener("animationstart",a,!1),document.addEventListener("MSAnimationStart",a,!1),document.addEventListener("webkitAnimationStart",a,!1)},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"@-webkit-keyframes nodeInserted{0%{opacity:.99}to{opacity:1}}@keyframes nodeInserted{0%{opacity:.99}to{opacity:1}}[data-avatar]{width:164px;height:164px;display:inline-block;position:relative;font-size:100%;line-height:0;overflow:hidden;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-name:nodeInserted;animation-name:nodeInserted}[data-avatar]:before{position:absolute;left:0;right:0;top:0;bottom:0;display:block;text-align:center;content:attr(data-avatar);font-size:72px;font-family:Open Sans,Helvetica Neue,Arial,Tahoma;color:#fff;margin-top:50%}[data-avatar] img{position:relative;width:100%;height:100%;display:none}[data-avatar] img[src]{display:inline-block}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=p[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(f(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(f(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:o}}}}function a(e){for(var t=[],n={},r=0;r<e.length;r++){var a=e[r],i=a[0],o=a[1],s=a[2],c=a[3],f={css:o,media:s,sourceMap:c};n[i]?n[i].parts.push(f):t.push(n[i]={id:i,parts:[f]})}return t}function i(e,t){var n=m(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function f(e,t){var n,r,a;if(t.singleton){var i=g++;n=b||(b=s(t)),r=d.bind(null,n,i,!1),a=d.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=l.bind(null,n),a=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=u.bind(null,n),a=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function d(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function u(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return r(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o],c=p[s.id];c.refs--,i.push(c)}if(e){var f=a(e);r(f,t)}for(var o=0;o<i.length;o++){var c=i[o];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete p[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)}]);