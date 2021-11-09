"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[8657],{5362:(r,a,e)=>{e.d(a,{Z:()=>s});var n=e(94015);var o=e.n(n);var c=e(23645);var t=e.n(c);var i=t()(o());i.push([r.id,"/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }\n.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }\n.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }\n.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment { color: #626a73; }\n.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-dark span.cm-number { color: #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }\n.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }\n.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  \n.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } \n.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }\n.cm-s-ayu-dark span.cm-string { color: #c2d94c; }\n\n.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }\n.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }\n.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }\n.cm-s-ayu-dark span.cm-type { color: #ff8f40; }\n.cm-s-ayu-dark span.cm-def { color: #ffee99; }\n.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-header { color: #c2d94c; }\n.cm-s-ayu-dark span.cm-link { color: #39bae6; }\n.cm-s-ayu-dark span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }\n.cm-s-ayu-dark .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/ayu-dark.css"],names:[],mappings:"AAAA,2CAA2C;;AAE3C,4BAA4B,mBAAmB,EAAE,cAAc,EAAE;AACjE,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,gCAAgC,EAAE;AAC5L,yKAAyK,gCAAgC,EAAE;AAC3M,qCAAqC,mBAAmB,EAAE,iBAAiB,EAAE;AAC7E,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,8CAA8C,cAAc,EAAE;AAC9D,wCAAwC,6BAA6B,EAAE;AACvE,wCAAwC,cAAc,EAAE;AACxD,yCAAyC,cAAc,EAAE;;AAEzD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,6BAA6B,EAAE;AAC5D,gCAAgC,cAAc,EAAE;AAChD,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,cAAc,EAAE;;AAE/C,mDAAmD,mBAAmB,EAAE;AACxE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on https://github.com/dempfi/ayu */\n\n.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }\n.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }\n.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }\n.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0px; }\n.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }\n.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }\n.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment { color: #626a73; }\n.cm-s-ayu-dark span.cm-atom { color: #ae81ff; }\n.cm-s-ayu-dark span.cm-number { color: #e6b450; }\n\n.cm-s-ayu-dark span.cm-comment.cm-attribute { color: #ffb454; }\n.cm-s-ayu-dark span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-comment.cm-tag { color: #39bae6; }\n.cm-s-ayu-dark span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-ayu-dark span.cm-property, .cm-s-ayu-dark span.cm-attribute { color: #ffb454; }  \n.cm-s-ayu-dark span.cm-keyword { color: #ff8f40; } \n.cm-s-ayu-dark span.cm-builtin { color: #e6b450; }\n.cm-s-ayu-dark span.cm-string { color: #c2d94c; }\n\n.cm-s-ayu-dark span.cm-variable { color: #b3b1ad; }\n.cm-s-ayu-dark span.cm-variable-2 { color: #f07178; }\n.cm-s-ayu-dark span.cm-variable-3 { color: #39bae6; }\n.cm-s-ayu-dark span.cm-type { color: #ff8f40; }\n.cm-s-ayu-dark span.cm-def { color: #ffee99; }\n.cm-s-ayu-dark span.cm-bracket { color: #f8f8f2; }\n.cm-s-ayu-dark span.cm-tag { color: rgba(57, 186, 230, 80); }\n.cm-s-ayu-dark span.cm-header { color: #c2d94c; }\n.cm-s-ayu-dark span.cm-link { color: #39bae6; }\n.cm-s-ayu-dark span.cm-error { color: #ff3333; } \n\n.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }\n.cm-s-ayu-dark .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const s=i},23645:r=>{r.exports=function(r){var a=[];a.toString=function a(){return this.map((function(a){var e=r(a);if(a[2]){return"@media ".concat(a[2]," {").concat(e,"}")}return e})).join("")};a.i=function(r,e,n){if(typeof r==="string"){r=[[null,r,""]]}var o={};if(n){for(var c=0;c<this.length;c++){var t=this[c][0];if(t!=null){o[t]=true}}}for(var i=0;i<r.length;i++){var s=[].concat(r[i]);if(n&&o[s[0]]){continue}if(e){if(!s[2]){s[2]=e}else{s[2]="".concat(e," and ").concat(s[2])}}a.push(s)}};return a}},94015:r=>{function a(r,a){return t(r)||c(r,a)||n(r,a)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,a){if(!r)return;if(typeof r==="string")return o(r,a);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor)e=r.constructor.name;if(e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,a)}function o(r,a){if(a==null||a>r.length)a=r.length;for(var e=0,n=new Array(a);e<a;e++){n[e]=r[e]}return n}function c(r,a){var e=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(e==null)return;var n=[];var o=true;var c=false;var t,i;try{for(e=e.call(r);!(o=(t=e.next()).done);o=true){n.push(t.value);if(a&&n.length===a)break}}catch(s){c=true;i=s}finally{try{if(!o&&e["return"]!=null)e["return"]()}finally{if(c)throw i}}return n}function t(r){if(Array.isArray(r))return r}r.exports=function r(e){var n=a(e,4),o=n[1],c=n[3];if(!c){return o}if(typeof btoa==="function"){var t=btoa(unescape(encodeURIComponent(JSON.stringify(c))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);var s="/*# ".concat(i," */");var A=c.sources.map((function(r){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(r," */")}));return[o].concat(A).concat([s]).join("\n")}return[o].join("\n")}},58657:(r,a,e)=>{e.r(a);e.d(a,{default:()=>s});var n=e(93379);var o=e.n(n);var c=e(5362);var t={};t.insert="head";t.singleton=false;var i=o()(c.Z,t);const s=c.Z.locals||{}},93379:(r,a,e)=>{var n=function r(){var a;return function r(){if(typeof a==="undefined"){a=Boolean(window&&document&&document.all&&!window.atob)}return a}}();var o=function r(){var a={};return function r(e){if(typeof a[e]==="undefined"){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(o){n=null}}a[e]=n}return a[e]}}();var c=[];function t(r){var a=-1;for(var e=0;e<c.length;e++){if(c[e].identifier===r){a=e;break}}return a}function i(r,a){var e={};var n=[];for(var o=0;o<r.length;o++){var i=r[o];var s=a.base?i[0]+a.base:i[0];var A=e[s]||0;var u="".concat(s," ").concat(A);e[s]=A+1;var d=t(u);var m={css:i[1],media:i[2],sourceMap:i[3]};if(d!==-1){c[d].references++;c[d].updater(m)}else{c.push({identifier:u,updater:p(m,a),references:1})}n.push(u)}return n}function s(r){var a=document.createElement("style");var n=r.attributes||{};if(typeof n.nonce==="undefined"){var c=true?e.nc:0;if(c){n.nonce=c}}Object.keys(n).forEach((function(r){a.setAttribute(r,n[r])}));if(typeof r.insert==="function"){r.insert(a)}else{var t=o(r.insert||"head");if(!t){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}t.appendChild(a)}return a}function A(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var u=function r(){var a=[];return function r(e,n){a[e]=n;return a.filter(Boolean).join("\n")}}();function d(r,a,e,n){var o=e?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet){r.styleSheet.cssText=u(a,o)}else{var c=document.createTextNode(o);var t=r.childNodes;if(t[a]){r.removeChild(t[a])}if(t.length){r.insertBefore(c,t[a])}else{r.appendChild(c)}}}function m(r,a,e){var n=e.css;var o=e.media;var c=e.sourceMap;if(o){r.setAttribute("media",o)}else{r.removeAttribute("media")}if(c&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")}if(r.styleSheet){r.styleSheet.cssText=n}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(n))}}var l=null;var f=0;function p(r,a){var e;var n;var o;if(a.singleton){var c=f++;e=l||(l=s(a));n=d.bind(null,e,c,false);o=d.bind(null,e,c,true)}else{e=s(a);n=m.bind(null,e,a);o=function r(){A(e)}}n(r);return function a(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap){return}n(r=e)}else{o()}}}r.exports=function(r,a){a=a||{};if(!a.singleton&&typeof a.singleton!=="boolean"){a.singleton=n()}r=r||[];var e=i(r,a);return function r(n){n=n||[];if(Object.prototype.toString.call(n)!=="[object Array]"){return}for(var o=0;o<e.length;o++){var s=e[o];var A=t(s);c[A].references--}var u=i(n,a);for(var d=0;d<e.length;d++){var m=e[d];var l=t(m);if(c[l].references===0){c[l].updater();c.splice(l,1)}}e=u}}}}]);
//# sourceMappingURL=8657.57bdea0d16734b128eba.js.map?v=57bdea0d16734b128eba