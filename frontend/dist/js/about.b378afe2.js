(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c1b":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var s in o){var c=r[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=o("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"212b":function(e,t,n){"use strict";var r=n("4aad"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},"22ee":function(e,t,n){"use strict";var r=n("4aad"),o=n("907d"),i=n("8c39"),a=n("93fc");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},2602:function(e,t,n){"use strict";var r=n("4aad"),o=n("aae6"),i=n("566b"),a=n("b68e"),s=n("905b"),c=n("212b"),u=n("4da7"),f=n("6e6b");e.exports=function(e){return new Promise((function(t,n){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?c(l.getAllResponseHeaders()):null,i=e.responseType&&"text"!==e.responseType?l.response:l.responseText,a={data:i,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};o(t,n,a),l=null}},l.onabort=function(){l&&(n(f("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){n(f("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(d,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),n(e),l=null)})),p||(p=null),l.send(p)}))}},"27f7":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"2e65":function(e,t,n){"use strict";var r=n("e66e");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},"48a3":function(e,t,n){"use strict";var r=n("4aad"),o=n("b68e"),i=n("a430"),a=n("22ee"),s=n("7802");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"4aad":function(e,t,n){"use strict";var r=n("e685"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function p(e){return"string"===typeof e}function d(e){return"number"===typeof e}function l(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function v(e){return"[object File]"===o.call(e)}function g(e){return"[object Blob]"===o.call(e)}function b(e){return"[object Function]"===o.call(e)}function y(e){return l(e)&&b(e.pipe)}function x(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function C(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=C(e[n],t):h(t)?e[n]=C({},t):i(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],t);return e}function A(e,t,n){return S(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function j(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:p,isNumber:d,isObject:l,isPlainObject:h,isUndefined:a,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:y,isURLSearchParams:x,isStandardBrowserEnv:E,forEach:S,merge:C,extend:A,trim:w,stripBOM:j}},"4da7":function(e,t,n){"use strict";var r=n("4aad");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"4eec":function(e,t,n){"use strict";var r=n("4aad");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},"566b":function(e,t,n){"use strict";var r=n("4aad");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"62c3":function(e,t,n){e.exports=n("f5af")},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6b91":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"6e6b":function(e,t,n){"use strict";var r=n("829c");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},7802:function(e,t,n){"use strict";var r=n("4aad");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,u),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(i).concat(a).concat(s),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(p,u),n}},"829c":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},"857a":function(e,t,n){var r=n("1d80"),o=/"/g;e.exports=function(e,t,n,i){var a=String(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"}},"8c39":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"905b":function(e,t,n){"use strict";var r=n("27f7"),o=n("6b91");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"907d":function(e,t,n){"use strict";var r=n("4aad");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"93fc":function(e,t,n){"use strict";(function(t){var r=n("4aad"),o=n("4eec"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("2602")),e}var c={adapter:s(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n("4362"))},9911:function(e,t,n){"use strict";var r=n("23e7"),o=n("857a"),i=n("af03");r({target:"String",proto:!0,forced:i("link")},{link:function(e){return o(this,"a","href",e)}})},a430:function(e,t,n){"use strict";var r=n("4aad");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},aae6:function(e,t,n){"use strict";var r=n("6e6b");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b68e:function(e,t,n){"use strict";var r=n("4aad");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},b727:function(e,t,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,f=4==e,p=6==e,d=7==e,l=5==e||p;return function(h,m,v,g){for(var b,y,x=i(h),w=o(x),E=r(m,v,3),S=a(w.length),C=0,A=g||s,j=t?A(h,S):n||d?A(h,0):void 0;S>C;C++)if((l||C in w)&&(b=w[C],y=E(b,C,x),e))if(t)j[C]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return C;case 2:c.call(j,b)}else switch(e){case 4:return!1;case 7:c.call(j,b)}return p?-1:u||f?f:j}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},ca3d:function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},e66e:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},e685:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e8f7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("spinner",{attrs:{isActive:e.spinnerActive}}),n("h1",[e._v("Burakhan Aksoy")]),n("b-container",{staticClass:"bv-example-row"},[n("b-row",{staticClass:"row"},e._l(e.repos,(function(e){return n("div",{key:e.repo},[n("gitcards",{attrs:{repo:e.repo,description:e.description,language:e.language,link:e.link}})],1)})),0)],1)],1)},o=[];n("d3b7");function i(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,c,"next",e)}function c(e){i(a,r,o,s,c,"throw",e)}s(void 0)}))}}n("96cf"),n("159b");var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:e.handleHover,expression:"handleHover"}]},[e.isHovered?n("b-card",{staticClass:"mx-3 mt-2 shadow-lg",staticStyle:{width:"15rem",height:"12rem",cursor:"pointer"},attrs:{"header-bg-variant":"white",header:e.language,title:e.repo,text:e.description,"text-variant":"black","header-text-variant":"black","bg-variant":"info"},on:{click:e.openUrl}},[n("b-card-text",[e._v(" "+e._s(e.description)+" ")])],1):n("b-card",{staticClass:"mx-3 mt-2",staticStyle:{width:"15rem",height:"12rem",cursor:"pointer"},attrs:{"header-bg-variant":"info",header:e.language,title:e.repo,text:e.description,"bg-variant":"Light","text-variant":"black","header-text-variant":"white"}},[n("b-card-text",[e._v(" "+e._s(e.description)+" ")])],1)],1)},c=[],u=(n("9911"),{name:"GitCards",props:{repo:String,description:String,language:String,link:String},data:function(){return{isHovered:!1}},methods:{handleHover:function(e){this.isHovered=e},openUrl:function(){window.open(this.link,"_blank")}}}),f=u,p=n("2877"),d=Object(p["a"])(f,s,c,!1,null,"261ed167",null),l=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isActive?n("div",{staticClass:"text-center"},[n("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{variant:"primary",label:"Text Centered"}})],1):e._e()},m=[],v={name:"Spinner",props:{isActive:Boolean}},g=v,b=Object(p["a"])(g,h,m,!1,null,"41e07d13",null),y=b.exports,x=n("62c3"),w=n.n(x),E={name:"GitPage",components:{gitcards:l,spinner:y},data:function(){return{repos:[],spinnerActive:!1}},methods:{fetchData:function(){var e=a(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.a.get("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=burakhanaksoy").then((function(e){e.data.forEach((function(e){t.repos.push(e),t.hideSpinner()}))})).catch(console.error);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),showSpinner:function(){this.spinnerActive=!0},hideSpinner:function(){this.spinnerActive=!1}},created:function(){var e=this;this.showSpinner(),setTimeout((function(){e.fetchData()}),500)}},S=E,C=Object(p["a"])(S,r,o,!1,null,"04699376",null);t["default"]=C.exports},f5af:function(e,t,n){"use strict";var r=n("4aad"),o=n("e685"),i=n("48a3"),a=n("7802"),s=n("93fc");function c(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=c(s);u.Axios=i,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=n("e66e"),u.CancelToken=n("2e65"),u.isCancel=n("8c39"),u.all=function(e){return Promise.all(e)},u.spread=n("0c1b"),u.isAxiosError=n("ca3d"),e.exports=u,e.exports.default=u},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],i=n("2877"),a={},s=Object(i["a"])(a,r,o,!1,null,"9fd4d2f4",null);t["default"]=s.exports}}]);
//# sourceMappingURL=about.b378afe2.js.map