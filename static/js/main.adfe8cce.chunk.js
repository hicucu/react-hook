(window["webpackJsonpreact-hook"]=window["webpackJsonpreact-hook"]||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),o=n.n(r),c=n(1);var u=function(){var e=Object(a.useState)({alpha:0,beta:0,gamma:0}),t=Object(c.a)(e,2),n=t[0],l=t[1],r=function(e){var t=e.alpha,n=e.beta,a=e.gamma;l({alpha:t,beta:n,gamma:a})};return Object(a.useEffect)(function(){return window.addEventListener("deviceorientation",r),function(){return window.removeEventListener("deviceorientation",r)}}),n};var i=function(e){var t=Object(a.useState)(e),n=Object(c.a)(t,2),l=n[0],r=n[1];return Object(a.useEffect)(function(){var e=document.querySelector("link[rel*='icon']");(e=e||document.createElement("link")).type="image/x-icon",e.rel="shortcut icon",e.href=l},l),r};var s=function(){var e=Object(a.useState)({lat:0,long:0}),t=Object(c.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(null),o=Object(c.a)(r,2),u=o[0],i=o[1],s=function(e){var t=e.coords,n=t.latitude,a=t.longitude;l({lat:n,long:a})},m=function(){i("Geolocation Error")},f={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};return Object(a.useEffect)(function(){navigator.geolocation.getCurrentPosition(s,m,f)},[]),{coords:n,error:u}};var m=function(e){var t=Object(a.useState)(navigator.onLine),n=Object(c.a)(t,2),l=n[0],r=n[1],o=function(){"function"===typeof e&&e(navigator.onLine),r(navigator.onLine)};return Object(a.useEffect)(function(){return window.addEventListener("online",o),window.addEventListener("offline",o),window.removeEventListener("online",o),void window.removeEventListener("offline",o)}),l};var f=function(){var e=Object(a.useState)({posX:0,posY:0}),t=Object(c.a)(e,2),n=t[0],l=t[1],r=function(e){var t=e.screenX,n=e.screenY;l({posX:t,posY:n})};return Object(a.useEffect)(function(){document.onmousemove=r}),n};var E=function(e,t){var n=Object(a.useState)(t),l=Object(c.a)(n,2),r=l[0],o=l[1];return Object(a.useEffect)(function(t){localStorage.setItem(e,t)}),{currentLS:r,setLS:o}};var v=document.getElementById("root");o.a.render(l.a.createElement(function(){var e=u(),t=e.alpha,n=e.beta,a=e.gamma,r=i(),o=s(),c=o.coords,v=c.lat,b=c.long,d=o.error,p=m(),h=f(),O=h.posX,g=h.posY,j=E("test","test"),w=j.currentLS,L=j.setLS;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Superhooks!"),l.a.createElement("h2",null,"useDeviceOrientation"),l.a.createElement("ul",null,l.a.createElement("li",null,"Alpha: ",t),l.a.createElement("li",null,"Beta: ",n),l.a.createElement("li",null,"Gamma: ",a)),l.a.createElement("h2",null,"useFavicon"),l.a.createElement("button",{onClick:function(){r("https://ssl.pstatic.net/sstatic/search/favicon/favicon_140327.ico")}},"Change"),l.a.createElement("h2",null,"useGeolocation"),l.a.createElement("ul",null,l.a.createElement("li",null,"Latitube : ",v),l.a.createElement("li",null,"Longitude: ",b),l.a.createElement("li",null,"Geolocation Error: ",d)),l.a.createElement("h2",null,"useKeyPress"),l.a.createElement("h2",null,"useLocalStorage"),l.a.createElement("ul",null,l.a.createElement("li",null,"Current Value: ",w),l.a.createElement("button",{onClick:function(){return L("12345")}},"Set value : 12345"),l.a.createElement("button",{onClick:function(){return L(null)}},"Clear LS")),l.a.createElement("h2",null,"useMousePosition"),l.a.createElement("ul",null,l.a.createElement("li",null,"Mouse X: ",O),l.a.createElement("li",null,"Mouse Y: ",g)),l.a.createElement("h2",null,"useOnline"),l.a.createElement("p",null,"Are we online ? ",p?"Online":"Offline"),l.a.createElement("h2",null,"useLockScroll"))},null),v)}},[[4,1,2]]]);
//# sourceMappingURL=main.adfe8cce.chunk.js.map