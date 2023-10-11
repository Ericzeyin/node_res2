/*! For license information please see profile.adf6b253bb2b1d470da0.entry.js.LICENSE.txt */
(()=>{var e,t,a,r={40487:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=t},71012:e=>{var t,a;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,r=0;a<e.length;a++,r+=8)t[r>>>5]|=e[a]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var a=[],r=0;r<e.length;r+=3)for(var n=e[r]<<16|e[r+1]<<8|e[r+2],o=0;o<4;o++)8*r+6*o<=8*e.length?a.push(t.charAt(n>>>6*(3-o)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],r=0,n=0;r<e.length;n=++r%4)0!=n&&a.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*n+8)-1)<<2*n|t.indexOf(e.charAt(r))>>>6-2*n);return a}},e.exports=a},48738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},79333:e=>{e.exports=function(){if("undefined"!=typeof window&&null!==window){if(window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}},2568:(e,t,a)=>{var r,n,o,c,s;r=a(71012),n=a(40487).utf8,o=a(48738),c=a(40487).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?c.stringToBytes(e):n.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var a=r.bytesToWords(e),i=8*e.length,l=1732584193,d=-271733879,u=-1732584194,f=271733878,b=0;b<a.length;b++)a[b]=16711935&(a[b]<<8|a[b]>>>24)|4278255360&(a[b]<<24|a[b]>>>8);a[i>>>5]|=128<<i%32,a[14+(i+64>>>9<<4)]=i;var p=s._ff,m=s._gg,h=s._hh,y=s._ii;for(b=0;b<a.length;b+=16){var v=l,g=d,Z=u,x=f;l=p(l,d,u,f,a[b+0],7,-680876936),f=p(f,l,d,u,a[b+1],12,-389564586),u=p(u,f,l,d,a[b+2],17,606105819),d=p(d,u,f,l,a[b+3],22,-1044525330),l=p(l,d,u,f,a[b+4],7,-176418897),f=p(f,l,d,u,a[b+5],12,1200080426),u=p(u,f,l,d,a[b+6],17,-1473231341),d=p(d,u,f,l,a[b+7],22,-45705983),l=p(l,d,u,f,a[b+8],7,1770035416),f=p(f,l,d,u,a[b+9],12,-1958414417),u=p(u,f,l,d,a[b+10],17,-42063),d=p(d,u,f,l,a[b+11],22,-1990404162),l=p(l,d,u,f,a[b+12],7,1804603682),f=p(f,l,d,u,a[b+13],12,-40341101),u=p(u,f,l,d,a[b+14],17,-1502002290),l=m(l,d=p(d,u,f,l,a[b+15],22,1236535329),u,f,a[b+1],5,-165796510),f=m(f,l,d,u,a[b+6],9,-1069501632),u=m(u,f,l,d,a[b+11],14,643717713),d=m(d,u,f,l,a[b+0],20,-373897302),l=m(l,d,u,f,a[b+5],5,-701558691),f=m(f,l,d,u,a[b+10],9,38016083),u=m(u,f,l,d,a[b+15],14,-660478335),d=m(d,u,f,l,a[b+4],20,-405537848),l=m(l,d,u,f,a[b+9],5,568446438),f=m(f,l,d,u,a[b+14],9,-1019803690),u=m(u,f,l,d,a[b+3],14,-187363961),d=m(d,u,f,l,a[b+8],20,1163531501),l=m(l,d,u,f,a[b+13],5,-1444681467),f=m(f,l,d,u,a[b+2],9,-51403784),u=m(u,f,l,d,a[b+7],14,1735328473),l=h(l,d=m(d,u,f,l,a[b+12],20,-1926607734),u,f,a[b+5],4,-378558),f=h(f,l,d,u,a[b+8],11,-2022574463),u=h(u,f,l,d,a[b+11],16,1839030562),d=h(d,u,f,l,a[b+14],23,-35309556),l=h(l,d,u,f,a[b+1],4,-1530992060),f=h(f,l,d,u,a[b+4],11,1272893353),u=h(u,f,l,d,a[b+7],16,-155497632),d=h(d,u,f,l,a[b+10],23,-1094730640),l=h(l,d,u,f,a[b+13],4,681279174),f=h(f,l,d,u,a[b+0],11,-358537222),u=h(u,f,l,d,a[b+3],16,-722521979),d=h(d,u,f,l,a[b+6],23,76029189),l=h(l,d,u,f,a[b+9],4,-640364487),f=h(f,l,d,u,a[b+12],11,-421815835),u=h(u,f,l,d,a[b+15],16,530742520),l=y(l,d=h(d,u,f,l,a[b+2],23,-995338651),u,f,a[b+0],6,-198630844),f=y(f,l,d,u,a[b+7],10,1126891415),u=y(u,f,l,d,a[b+14],15,-1416354905),d=y(d,u,f,l,a[b+5],21,-57434055),l=y(l,d,u,f,a[b+12],6,1700485571),f=y(f,l,d,u,a[b+3],10,-1894986606),u=y(u,f,l,d,a[b+10],15,-1051523),d=y(d,u,f,l,a[b+1],21,-2054922799),l=y(l,d,u,f,a[b+8],6,1873313359),f=y(f,l,d,u,a[b+15],10,-30611744),u=y(u,f,l,d,a[b+6],15,-1560198380),d=y(d,u,f,l,a[b+13],21,1309151649),l=y(l,d,u,f,a[b+4],6,-145523070),f=y(f,l,d,u,a[b+11],10,-1120210379),u=y(u,f,l,d,a[b+2],15,718787259),d=y(d,u,f,l,a[b+9],21,-343485551),l=l+v>>>0,d=d+g>>>0,u=u+Z>>>0,f=f+x>>>0}return r.endian([l,d,u,f])})._ff=function(e,t,a,r,n,o,c){var s=e+(t&a|~t&r)+(n>>>0)+c;return(s<<o|s>>>32-o)+t},s._gg=function(e,t,a,r,n,o,c){var s=e+(t&r|a&~r)+(n>>>0)+c;return(s<<o|s>>>32-o)+t},s._hh=function(e,t,a,r,n,o,c){var s=e+(t^a^r)+(n>>>0)+c;return(s<<o|s>>>32-o)+t},s._ii=function(e,t,a,r,n,o,c){var s=e+(a^(t|~r))+(n>>>0)+c;return(s<<o|s>>>32-o)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var a=r.wordsToBytes(s(e,t));return t&&t.asBytes?a:t&&t.asString?c.bytesToString(a):r.bytesToHex(a)}},53833:(e,t,a)=>{"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=d(a(67294)),c=d(a(2568)),s=d(a(10108)),i=d(a(79333)),l=d(a(45697));function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e=this.props.protocol+"www.gravatar.com/avatar/",t=s.default.stringify({s:this.props.size,r:this.props.rating,d:this.props.default}),a=s.default.stringify({s:2*this.props.size,r:this.props.rating,d:this.props.default}),n=(""+this.props.email).trim().toLowerCase(),l=void 0;if(this.props.md5)l=this.props.md5;else{if("string"!=typeof this.props.email)return console.warn('Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'),o.default.createElement("script",null);l=(0,c.default)(n,{encoding:"binary"})}var d=""+e+l+"?"+t,u=""+e+l+"?"+a,f=!0;"undefined"!=typeof window&&(f="srcset"in document.createElement("img"));var b="react-gravatar";this.props.className&&(b=b+" "+this.props.className);var p=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(this.props,[]);return delete p.md5,delete p.email,delete p.protocol,delete p.rating,delete p.size,delete p.style,delete p.className,delete p.default,!f&&(0,i.default)()?o.default.createElement("img",r({alt:"Gravatar for "+n,style:this.props.style,src:u,height:this.props.size,width:this.props.size},p,{className:b})):o.default.createElement("img",r({alt:"Gravatar for "+n,style:this.props.style,src:d,srcSet:u+" 2x",height:this.props.size,width:this.props.size},p,{className:b}))}}]),t}(o.default.Component);b.displayName="Gravatar",b.propTypes={email:l.default.string,md5:l.default.string,size:l.default.number,rating:l.default.string,default:l.default.string,className:l.default.string,protocol:l.default.string,style:l.default.object},b.defaultProps={size:50,rating:"g",default:"retro",protocol:"//"},e.exports=b},10108:(e,t,a)=>{"use strict";var r=a(94403),n=a(27418);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function c(e){return Array.isArray(e)?e.sort():"object"==typeof e?c(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=a):r[e]=a};case"bracket":return function(e,a,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],a):r[e]=[a]:r[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=n({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),n=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),a(decodeURIComponent(n),o,r)})),Object.keys(r).sort().reduce((function(e,t){var a=r[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=c(a):e[t]=a,e}),Object.create(null))):r},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,r){return null===a?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(a,e)].join("")};case"bracket":return function(t,a){return null===a?o(t,e):[o(t,e),"[]=",o(a,e)].join("")};default:return function(t,a){return null===a?o(t,e):[o(t,e),"=",o(a,e)].join("")}}}(t=n({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var n=e[r];if(void 0===n)return"";if(null===n)return o(r,t);if(Array.isArray(n)){var c=[];return n.slice().forEach((function(e){void 0!==e&&c.push(a(r,e,c.length))})),c.join("&")}return o(r,t)+"="+o(n,t)})).filter((function(e){return e.length>0})).join("&"):""}},94403:e=>{"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},45669:(e,t,a)=>{"use strict";var r=a(67294),n=a(73935),o=a(53894),c=a(14890),s=a(37703),i=a(68135),l=a(31405),d=a(51995),u=a(61988),f=a(4715),b=a(71262),p=a(15926),m=a.n(p),h=a(30381),y=a.n(h),v=a(5872),g=a.n(v),Z=a(31069),x=a(76962),w=a(14114),N=a(38703),_=a(11965);const T=(0,w.ZP)((e=>{const[t,a]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0),[c,s]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const{dataEndpoint:t,mutator:r}=e;t&&Z.Z.get({endpoint:t}).then((({json:e})=>{const t=r?r(e):e;a(t),s(!1),o(!1)})).catch((t=>{o(!1),403===t.status?s(!0):(s(!1),e.addDangerToast((0,u.t)("An error occurred")))}))}),[e]);const{columns:i,noDataText:l,...d}=e,f=(0,r.useMemo)((()=>{let e=i;return!i&&t.length>0&&(e=Object.keys(t[0]).filter((e=>"_"!==e[0]))),e?e.map((e=>({accessor:e,Header:e}))):[]}),[i,t]);return delete d.dataEndpoint,delete d.mutator,n?(0,_.tZ)(N.Z,null):(0,_.tZ)(x.Z,g()({columns:f,data:t,pageSize:50,loading:n,emptyWrapperType:x.u.Small,noDataText:c?(0,u.t)("Access to user activity data is restricted"):l},d))}));class O extends r.PureComponent{renderSliceTable(){return(0,_.tZ)(T,{dataEndpoint:`/superset/fave_slices/${this.props.user.userId}/`,className:"table-condensed",columns:["slice","creator","favorited"],mutator:e=>e.map((e=>({slice:(0,_.tZ)("a",{href:e.url},e.title),creator:(0,_.tZ)("a",{href:e.creator_url},e.creator),favorited:y().utc(e.dttm).fromNow(),_favorited:e.dttm}))),noDataText:(0,u.t)("No favorite charts yet, go click on stars!"),sortable:!0})}renderDashboardTable(){const e=m().encode({keys:["none"],columns:["created_on_delta_humanized","dashboard_title","url"],filters:[{col:"id",opr:"dashboard_is_favorite",value:!0}],order_column:"changed_on",order_direction:"desc",page:0,page_size:100});return(0,_.tZ)(T,{className:"table-condensed",mutator:e=>e.result.map((e=>({dashboard:(0,_.tZ)("a",{href:e.url},e.dashboard_title),created:e.created_on_delta_humanized,_created:e.created_on_delta_humanized}))),dataEndpoint:`/api/v1/dashboard/?q=${e}`,noDataText:(0,u.t)("No favorite dashboards yet, go click on stars!"),columns:["dashboard","creator","created"],sortable:!0})}render(){return(0,_.tZ)("div",null,(0,_.tZ)("h3",null,(0,u.t)("Dashboards")),this.renderDashboardTable(),(0,_.tZ)("hr",null),(0,_.tZ)("h3",null,(0,u.t)("Charts")),this.renderSliceTable())}}var k=a(53833),j=a.n(k);const E=d.iK.div`
  .panel {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }
`;function C({user:e}){return(0,_.tZ)(E,null,(0,_.tZ)("a",{href:"https://en.gravatar.com/"},(0,_.tZ)(j(),{email:e.email,width:"100%",height:"",size:220,alt:(0,u.t)("Profile picture provided by Gravatar"),className:"img-rounded",style:{borderRadius:15}})),(0,_.tZ)("hr",null),(0,_.tZ)("div",{className:"panel"},(0,_.tZ)("div",{className:"header"},(0,_.tZ)("h3",null,(0,_.tZ)("strong",null,e.firstName," ",e.lastName)),(0,_.tZ)("h4",{className:"username"},(0,_.tZ)("i",{className:"fa fa-user-o"})," ",e.username)),(0,_.tZ)("hr",null),(0,_.tZ)("p",null,(0,_.tZ)("i",{className:"fa fa-clock-o","data-test":"clock-icon-test"})," ",(0,u.t)("joined")," ",y()(e.createdOn,"YYYYMMDD").fromNow()),(0,_.tZ)("p",{className:"email"},(0,_.tZ)("i",{className:"fa fa-envelope-o"})," ",e.email),(0,_.tZ)("p",{className:"roles"},(0,_.tZ)("i",{className:"fa fa-lock"})," ",Object.keys(e.roles).join(", ")),(0,_.tZ)("p",null,(0,_.tZ)("i",{className:"fa fa-key"})," ",(0,_.tZ)("span",{className:"text-muted"},(0,u.t)("id:"))," ",(0,_.tZ)("span",{className:"user-id"},e.userId))))}var S=a(4942),P=a(71002),z=a(87462),A=a(44185),$=a(94184),I=a.n($),M=a(29439),D=a(65632),B=a(96159);function R(e){return e?e.toString().split("").reverse().map((function(e){var t=Number(e);return isNaN(t)?e:t})):[]}const U=function(e){var t=e.prefixCls,a=e.count,n=e.className,o=e.style,c=e.title,s=e.show,i=e.component,l=void 0===i?"sup":i,d=e.children,u=e.onAnimated,f=void 0===u?function(){}:u,b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["prefixCls","count","className","style","title","show","component","children","onAnimated"]),p=(0,r.useState)(!0),m=(0,M.Z)(p,2),h=m[0],y=m[1],v=(0,r.useState)(a),g=(0,M.Z)(v,2),Z=g[0],x=g[1],w=(0,r.useState)(a),N=(0,M.Z)(w,2),_=N[0],T=N[1],O=(0,r.useState)(a),k=(0,M.Z)(O,2),j=k[0],E=k[1],C=(0,r.useContext(D.E_).getPrefixCls)("scroll-number",t);_!==a&&(y(!0),T(a)),r.useEffect((function(){var e;return E(Z),h&&(e=setTimeout((function(){y(!1),x(a),f()}))),function(){e&&clearTimeout(e)}}),[h,a,f]);var S=(0,z.Z)((0,z.Z)({},b),{"data-show":s,style:o,className:I()(C,n),title:c}),P=Z&&Number(Z)%1==0?R(Z).map((function(e,t){return function(e,t){if("number"==typeof e){var a=function(e,t){var a=Math.abs(Number(Z)),r=Math.abs(Number(j)),n=Math.abs(R(Z)[t]),o=Math.abs(R(r)[t]);return h?10+e:a>r?n>=o?10+e:20+e:n<=o?10+e:e}(e,t),n=h||void 0===R(j)[t];return r.createElement("span",{className:"".concat(C,"-only"),style:{transition:n?"none":void 0,msTransform:"translateY(".concat(100*-a,"%)"),WebkitTransform:"translateY(".concat(100*-a,"%)"),transform:"translateY(".concat(100*-a,"%)")},key:t},function(e,t){for(var a=[],n=0;n<30;n++)a.push(r.createElement("p",{key:n.toString(),className:I()(t,{current:e===n})},n%10));return a}(a,"".concat(C,"-only-unit")))}return r.createElement("span",{key:"symbol",className:"".concat(C,"-symbol")},e)}(e,t)})).reverse():Z;return o&&o.borderColor&&(S.style=(0,z.Z)((0,z.Z)({},o),{boxShadow:"0 0 0 1px ".concat(o.borderColor," inset")})),d?(0,B.Tm)(d,(function(e){return{className:I()("".concat(C,"-custom-component"),null==e?void 0:e.className)}})):r.createElement(l,S,P)};var Y=a(98787);function F(e){return-1!==Y.Y.indexOf(e)}var G=function(e){var t,a,n=e.prefixCls,o=e.scrollNumberPrefixCls,c=e.children,s=e.status,i=e.text,l=e.color,d=e.count,u=void 0===d?null:d,f=e.overflowCount,b=void 0===f?99:f,p=e.dot,m=void 0!==p&&p,h=e.size,y=void 0===h?"default":h,v=e.title,g=e.offset,Z=e.style,x=e.className,w=e.showZero,N=void 0!==w&&w,_=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),T=r.useContext(D.E_),O=T.getPrefixCls,k=T.direction,j=O("badge",n),E=u>b?"".concat(b,"+"):u,C=null!=s||null!=l,$="0"===E||0===E,M=m&&!$||C,R=M?"":E,Y=(0,r.useMemo)((function(){return(null==R||""===R||$&&!N)&&!M}),[R,$,N,M]),G=(0,r.useRef)(R);Y||(G.current=R);var K=G.current,W=(0,r.useRef)(M);Y||(W.current=M);var H=(0,r.useMemo)((function(){if(!g)return(0,z.Z)({},Z);var e={marginTop:g[1]};return"rtl"===k?e.left=parseInt(g[0],10):e.right=-parseInt(g[0],10),(0,z.Z)((0,z.Z)({},e),Z)}),[k,g,Z]),L=null!=v?v:"string"==typeof u||"number"==typeof u?u:void 0,q=Y||!i?null:r.createElement("span",{className:"".concat(j,"-status-text")},i),J=u&&"object"===(0,P.Z)(u)?(0,B.Tm)(u,(function(e){return{style:(0,z.Z)((0,z.Z)({},H),e.style)}})):void 0,X=I()((t={},(0,S.Z)(t,"".concat(j,"-status-dot"),C),(0,S.Z)(t,"".concat(j,"-status-").concat(s),!!s),(0,S.Z)(t,"".concat(j,"-status-").concat(l),F(l)),t)),Q={};l&&!F(l)&&(Q.background=l);var V=I()(j,(a={},(0,S.Z)(a,"".concat(j,"-status"),C),(0,S.Z)(a,"".concat(j,"-not-a-wrapper"),!c),(0,S.Z)(a,"".concat(j,"-rtl"),"rtl"===k),a),x);if(!c&&C){var ee=H.color;return r.createElement("span",(0,z.Z)({},_,{className:V,style:H}),r.createElement("span",{className:X,style:Q}),r.createElement("span",{style:{color:ee},className:"".concat(j,"-status-text")},i))}return r.createElement("span",(0,z.Z)({},_,{className:V}),c,r.createElement(A.default,{visible:!Y,motionName:"".concat(j,"-zoom"),motionAppear:!1},(function(e){var t,a=e.className,n=O("scroll-number",o),c=W.current,i=I()((t={},(0,S.Z)(t,"".concat(j,"-dot"),c),(0,S.Z)(t,"".concat(j,"-count"),!c),(0,S.Z)(t,"".concat(j,"-count-sm"),"small"===y),(0,S.Z)(t,"".concat(j,"-multiple-words"),!c&&K&&(null==K?void 0:K.toString().length)>1),(0,S.Z)(t,"".concat(j,"-status-").concat(s),!!s),(0,S.Z)(t,"".concat(j,"-status-").concat(l),F(l)),t)),d=(0,z.Z)({},H);return l&&!F(l)&&((d=d||{}).background=l),r.createElement(U,{prefixCls:n,show:!Y,className:I()(a,i),count:K,title:L,style:d,key:"scrollNumber"},J)})),q)};G.Ribbon=function(e){var t,a=e.className,n=e.prefixCls,o=e.style,c=e.color,s=e.children,i=e.text,l=e.placement,d=void 0===l?"end":l,u=r.useContext(D.E_),f=u.getPrefixCls,b=u.direction,p=f("ribbon",n),m=F(c),h=I()(p,"".concat(p,"-placement-").concat(d),(t={},(0,S.Z)(t,"".concat(p,"-rtl"),"rtl"===b),(0,S.Z)(t,"".concat(p,"-color-").concat(c),m),t),a),y={},v={};return c&&!m&&(y.background=c,v.color=c),r.createElement("div",{className:"".concat(p,"-wrapper")},s,r.createElement("div",{className:h,style:(0,z.Z)((0,z.Z)({},y),o)},r.createElement("span",{className:"".concat(p,"-text")},i),r.createElement("div",{className:"".concat(p,"-corner"),style:v})))};const K=G,W=(0,d.iK)((({textColor:e,...t})=>(0,_.tZ)(K,t)))`
  & > sup {
    padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    background: ${({theme:e,color:t})=>t||e.colors.primary.base};
    color: ${({theme:e,textColor:t})=>t||e.colors.grayscale.light5};
  }
`;var H=a(37921);function L({user:e}){return(0,_.tZ)("div",null,(0,_.tZ)("div",{className:"roles"},(0,_.tZ)("h4",null,(0,u.t)("Roles")," ",(0,_.tZ)(W,{count:Object.keys(e.roles).length,showZero:!0})),Object.keys(e.roles).map((e=>(0,_.tZ)(H.Z,{key:e},e))),(0,_.tZ)("hr",null)),(0,_.tZ)("div",{className:"databases"},e.permissions.database_access&&(0,_.tZ)("div",null,(0,_.tZ)("h4",null,(0,u.t)("Databases")," ",(0,_.tZ)(W,{count:e.permissions.database_access.length,showZero:!0})),e.permissions.database_access.map((e=>(0,_.tZ)(H.Z,{key:e},e))),(0,_.tZ)("hr",null))),(0,_.tZ)("div",{className:"datasources"},e.permissions.datasource_access&&(0,_.tZ)("div",null,(0,_.tZ)("h4",null,(0,u.t)("Datasets")," ",(0,_.tZ)(W,{count:e.permissions.datasource_access.length,showZero:!0})),e.permissions.datasource_access.map((e=>(0,_.tZ)(H.Z,{key:e},e))))))}function q({user:e}){return(0,_.tZ)("div",null,(0,_.tZ)(T,{className:"table-condensed",mutator:function(e){return e.filter((e=>"dashboard"===e.action||"explore"===e.action)).map((e=>({name:(0,_.tZ)("a",{href:e.item_url},e.item_title),type:e.action,time:y().utc(e.time).fromNow(),_time:e.time})))},sortable:!0,dataEndpoint:`/superset/recent_activity/${e.userId}/?limit=50`}))}class J extends r.PureComponent{renderSliceTable(){return(0,_.tZ)(T,{dataEndpoint:`/superset/created_slices/${this.props.user.userId}/`,className:"table-condensed",columns:["slice","created"],mutator:e=>e.map((e=>({slice:(0,_.tZ)("a",{href:e.url},e.title),created:y().utc(e.dttm).fromNow(),_created:e.dttm}))),noDataText:(0,u.t)("No charts"),sortable:!0})}renderDashboardTable(){const e=m().encode({keys:["none"],columns:["created_on_delta_humanized","dashboard_title","url"],filters:[{col:"created_by",opr:"created_by_me",value:"me"}],order_column:"changed_on",order_direction:"desc",page:0,page_size:100});return(0,_.tZ)(T,{className:"table-condensed",mutator:e=>e.result.map((e=>({dashboard:(0,_.tZ)("a",{href:e.url},e.dashboard_title),created:e.created_on_delta_humanized,_created:e.created_on_delta_humanized}))),dataEndpoint:`/api/v1/dashboard/?q=${e}`,noDataText:(0,u.t)("No dashboards"),columns:["dashboard","created"],sortable:!0})}render(){return(0,_.tZ)("div",null,(0,_.tZ)("h3",null,(0,u.t)("Dashboards")),this.renderDashboardTable(),(0,_.tZ)("hr",null),(0,_.tZ)("h3",null,(0,u.t)("Charts")),this.renderSliceTable())}}const X=J,Q=(0,d.iK)(b.ZP.TabPane)`
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  padding: ${({theme:e})=>4*e.gridUnit}px;
`;function V({user:e}){return(0,_.tZ)("div",{className:"container app"},(0,_.tZ)(f.X2,{gutter:16},(0,_.tZ)(f.JX,{xs:24,md:6},(0,_.tZ)(C,{user:e})),(0,_.tZ)(f.JX,{xs:24,md:18},(0,_.tZ)(b.ZP,{centered:!0},(0,_.tZ)(Q,{key:"1",tab:(0,_.tZ)("div",null,(0,_.tZ)("i",{className:"fa fa-star"})," ",(0,u.t)("Favorites"))},(0,_.tZ)(O,{user:e})),(0,_.tZ)(Q,{key:"2",tab:(0,_.tZ)("div",null,(0,_.tZ)("i",{className:"fa fa-paint-brush"})," ",(0,u.t)("Created content"))},(0,_.tZ)(X,{user:e})),(0,_.tZ)(Q,{key:"3",tab:(0,_.tZ)("div",null,(0,_.tZ)("i",{className:"fa fa-list"})," ",(0,u.t)("Recent activity"))},(0,_.tZ)(q,{user:e})),(0,_.tZ)(Q,{key:"4",tab:(0,_.tZ)("div",null,(0,_.tZ)("i",{className:"fa fa-lock"})," ",(0,u.t)("Security & Access"))},(0,_.tZ)(L,{user:e}))))))}var ee=a(72570),te=a(99543),ae=a(38552),re=a(85156),ne=a(13423),oe=a(70163),ce=a(1927);const se=d.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,ie=e=>_.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function le({toast:e,onCloseToast:t}){const a=(0,r.useRef)(),[n,o]=(0,r.useState)(!1),c=()=>{o(!0)},s=(0,r.useCallback)((()=>{a.current&&clearTimeout(a.current),o((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,r.useEffect)((()=>(setTimeout(c),e.duration>0&&(a.current=setTimeout(s,e.duration)),()=>{a.current&&clearTimeout(a.current)})),[s,e.duration]);let i="toast--success",l=(0,_.tZ)(oe.Z.CircleCheckSolid,{css:e=>ie(e)});return e.toastType===ce.p.WARNING?(l=(0,_.tZ)(oe.Z.WarningSolid,{css:ie}),i="toast--warning"):e.toastType===ce.p.DANGER?(l=(0,_.tZ)(oe.Z.ErrorSolid,{css:ie}),i="toast--danger"):e.toastType===ce.p.INFO&&(l=(0,_.tZ)(oe.Z.InfoSolid,{css:ie}),i="toast--info"),(0,_.tZ)(se,{className:I()("alert","toast",n&&"toast--visible",i),"data-test":"toast-container",role:"alert"},l,(0,_.tZ)(ne.ZP,{content:e.text,noHtml:!e.allowHtml}),(0,_.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:s,"aria-label":"Close","data-test":"close-button"}))}const de=d.iK.div`
  max-width: 600px;
  position: fixed;
  ${({position:e})=>"bottom"===e?"bottom":"top"}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:e})=>e.zIndex.max};
  word-break: break-word;

  .toast {
    background: ${({theme:e})=>e.colors.grayscale.dark1};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({theme:e})=>e.colors.grayscale.dark2},
        ${({theme:e})=>e.opacity.mediumLight}
      );
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({theme:e})=>e.transitionTiming}s,
      opacity ${({theme:e})=>e.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`,ue=(0,s.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,c.DE)({removeToast:ee.RS},e)))((function({toasts:e,removeToast:t,position:a="bottom"}){return(0,_.tZ)(r.Fragment,null,e.length>0&&(0,_.tZ)(de,{id:"toast-presenter",position:a},e.map((e=>(0,_.tZ)(le,{key:e.id,toast:e,onCloseToast:t})))))}));var fe;(0,ae.Z)();const be=document.getElementById("app"),pe=JSON.parse(null!=(fe=null==be?void 0:be.getAttribute("data-bootstrap"))?fe:"{}"),me=(0,c.MT)((0,c.UY)({messageToasts:function(e=[],t){switch(t.type){case ee.h:{const{payload:a}=t,r=e.slice();return a.noDuplicate&&r.find((e=>e.text===a.text))?e:[a,...e]}case ee.K7:{const{payload:{id:a}}=t;return[...e].filter((e=>e.id!==a))}default:return e}}}),{},(0,c.qC)((0,c.md)(o.Z),(0,te.hU)(!1)));n.render((0,_.tZ)((()=>(0,_.tZ)(s.zt,{store:me},(0,_.tZ)(i.a,{theme:re.r},(0,_.tZ)(l.n,null),(0,_.tZ)(V,{user:pe.user}),(0,_.tZ)(ue,null)))),null),document.getElementById("app"))}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=r,e=[],o.O=(t,a,r,n)=>{if(!a){var c=1/0;for(d=0;d<e.length;d++){for(var[a,r,n]=e[d],s=!0,i=0;i<a.length;i++)(!1&n||c>=n)&&Object.keys(o.O).every((e=>o.O[e](a[i])))?a.splice(i--,1):(s=!1,n<c&&(c=n));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,r,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[])),o.u=e=>({57:"38f4b0c5b2c751f3029f",112:"0cceda87f254629c0f55",158:"7af34d924b2b2e3aaaa7",177:"ca39eb74c4d49fd55005",183:"2d69e60dfe962c42eee9",215:"f6160a99b46b22e18caa",310:"e2c18a71d3a5c875a789",312:"90af13ee4a0d5e067aab",336:"e5df42bc5a8ad6d9aed0",363:"e517ebae29a6c51c5e09",597:"d08e416f0ccd4854221a",600:"d0d66aaabc04eac7f3a8",826:"3f59c315d2e5d8b15ff9",992:"3972b8e3abebd6e63caf",999:"54febe7bb96630a3013d",1075:"529bc3f823e6fc60cd70",1174:"8849a375bcccf9df44ed",1185:"9ea89afc9bce89ad80ad",1256:"3479cded7646565257ab",1263:"62048be321505812ff6a",1293:"825c8594d240fbf17f20",1351:"8f38137e5b4342d2da4f",1398:"951f07c7c3e07b72cca4",1402:"308402927cb1af91614e",1493:"55bdc0586c89caac178c",1568:"40f6c6e7fe72a2bc1b13",1605:"2f7a1d1a47b76ec8c5c1",1899:"0502b5cdba557a6ff693",2079:"1506fd7de5b75c690b36",2105:"8146230ef7c416ab6cb3",2264:"b12e914fd5684cf329c8",2267:"1665a22356999f7d09cb",2403:"a0d676c094e2f90b5f0a",2439:"7e0114c1e26108fed2fc",2646:"22d6b0b1d527d046d260",2698:"75dfd37839ade6c35680",2713:"617726f17984c3192f46",2797:"6a8bfc332a16fd0f491c",2955:"21b0680368dea0bf61c5",2983:"b85bf5c0e81e6910fa04",3141:"6db0cd2a326a62903532",3187:"6802e173609e0f6b30c1",3240:"78cb567a5b91a58f0c01",3265:"edc982d88e8d399830b7",3325:"46b72d4c661fb47189a2",3544:"78f16a06c10598e0b889",3558:"a1e4af25d87548162409",3567:"ccb341a117b2ee4d5e98",3606:"7621f705e25335f0121d",3749:"68f7a3e5d439a23f4d89",3871:"79cd11ca09fe747b1bfd",3955:"03c4e9c66c2c63d79acc",3985:"d51bceddde4bd627d6c2",4139:"21f4237f0879646a0d9c",4266:"958a29639679b362fba3",4273:"827fb5197c686f0662c7",4421:"6290fd574418d5e32572",4458:"85219e9a6edf20621bea",4474:"b28a000dfeccbe1d81f3",4625:"7c5442bc1e5598e90822",4662:"712187ae25c83dce2174",4667:"47a4c2c13ccfb09d3757",4732:"d30d055df1b3b7e84dba",4757:"124ced191b8ef59a3e2c",4758:"8546effff2a679b01358",4794:"fa2a3ad4d82d3d4459fd",4797:"be22f9be14d0445f0f87",4810:"82297ac94bca3b3859d2",4817:"259525e7b455b997848a",4851:"a9ccd9b9ba2b847b6417",5201:"0c0d33390c8cfa65fbbd",5224:"2137b5c272446c93f5b7",5226:"43d2d046df38601d76af",5249:"8c40bbdfb03d04b29d02",5281:"8b441b46691123854b6b",5330:"c3630bd2c65829e4c7a1",5350:"a4556551303ff93cd4bb",5359:"fe8715215a93c63953ec",5367:"12541bbb82603d7e2d66",5507:"c7cdf6f84afbcf502ddb",5580:"fa964e628191e708a48e",5592:"2e19c97690b06c32f1b4",5641:"207a4252758bcd4d3cbd",5707:"2b76605f1d6e11cf2df7",5771:"3acf2091ed043492ae76",5777:"58d0e720fba584974cbf",5816:"3374bb9b8c7f89ae2da0",5832:"6641ca7ff6e2a41a1257",5838:"af5789397b8a13e08c38",5962:"ed92d26f4a929fbbc564",5972:"713e574a1d9b58a2135d",5998:"cb935545042c1ce92ecb",6126:"62a79c1241ef166355de",6150:"6d17f8394d91a097eab6",6167:"ad4ff700d252caec8ce3",6207:"17d778c7ae36315bd979",6254:"15612e9a43534ba1a97d",6303:"b8e13b4773cab5f877ee",6371:"150eda30c7d4d3f90b81",6420:"12131f944d05bfbc2b3d",6447:"bfa0e245c6ade68dd3de",6507:"f00932e24ce22bd1ca3b",6668:"0062637c2e307e4a2536",6682:"bdf3637ab1584c67ae30",6758:"fc3f2d7bb3a5b8f56817",6819:"1d34427183b1bc32acfd",6883:"369bb61eda9423d64359",6981:"68a6c50b90b0d58736ad",7183:"e16648fac64644e729c7",7249:"b5e7e83ac26bf4ec5fbe",7405:"2bfae0bdc72a5900199c",7460:"140aaba41af8a7b3891b",7584:"76c89f632c7a8315389e",7610:"69ae28e81db50e4eb6d7",7654:"2a756f12d13ca404a744",7716:"36cbf8b4562f9c80a2e0",7760:"7ab09485b0ef9d161fbf",7803:"7967d211212f85a80dde",7832:"fd7f701b105cdaddf11a",7850:"00845228665a5b4e5deb",7922:"034a466af79e5aec1e20",7989:"e2c714d33a44d93648c0",8312:"9b8eaa85fdf772d344ca",8349:"739a4da1e29881e55220",8398:"effe2e4690559c9dd638",8425:"d93b4ec64b1aced0c856",8463:"55fba49f8743cb008b18",8491:"bc7fc77e4b9a26daf89a",8682:"e55361dd9642ab2c6cce",8695:"794b59e83f2639bbd4f5",8970:"9662eb9aee235b45a0ba",9013:"2ae202ac00476dac5f77",9052:"bdc47b9882987a855bd3",9109:"70032121a681b08c1ca9",9207:"5716fdaacba60c1b00fc",9305:"857144aa3240952e069c",9325:"d2f1f08edbd1d07cd106",9393:"aa0534433005d1a82b09",9510:"a1ded01332afd173d7e1",9558:"11464bec3d82809a0027",9622:"a6e817b0d68ef7cee2d4",9767:"9e8414a89898cf629e48",9811:"b3748ff012fc7ee520ef",9873:"34c9f3b849b55ef12fa4"}[e]+".chunk.js"),o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a="superset:",o.l=(e,r,n,c)=>{if(t[e])t[e].push(r);else{var s,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+n){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",a+n),s.src=e),t[e]=[r];var f=(a,r)=>{s.onerror=s.onload=null,clearTimeout(b);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),a)return a(r)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),i&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/static/assets/",(()=>{var e={6845:0};o.f.j=(t,a)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var c=o.p+o.u(t),s=new Error;o.l(c,(a=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,r[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[c,s,i]=a,l=0;if(c.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var d=i(o)}for(t&&t(a);l<c.length;l++)n=c[l],o.o(e,n)&&e[n]&&e[n][0](),e[c[l]]=0;return o.O(d)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o.O(void 0,[294,3704,1030,9102,9755,7106,1844,9525,5010,2569],(()=>o(85156)));var c=o.O(void 0,[294,3704,1030,9102,9755,7106,1844,9525,5010,2569],(()=>o(45669)));c=o.O(c)})();
//# sourceMappingURL=profile.adf6b253bb2b1d470da0.entry.js.map