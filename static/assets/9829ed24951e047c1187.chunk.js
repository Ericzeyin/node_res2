(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3126],{4459:(e,t,n)=>{var r=n(29720).w_;e.exports.r=function(e){return r({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(e)}},63326:(e,t,n)=>{var r=n(29720).w_;e.exports.s=function(e){return r({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(e)}},6609:(e,t,n)=>{var r=n(29720).w_;e.exports.h=function(e){return r({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(e)}},90233:(e,t,n)=>{"use strict";n.d(t,{Lu:()=>s,tL:()=>i});var r=n(87462),a=n(76826),o=n.n(a),i={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};s.rankings=i;var l=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function s(e,t,n){void 0===n&&(n={});var a=n,o=a.keys,s=a.threshold,c=void 0===s?i.MATCHES:s,h=a.baseSort,f=void 0===h?l:h,p=a.sorter,m=void 0===p?function(e){return e.sort((function(e,t){return function(e,t,n){var r=e.rank,a=e.keyIndex,o=t.rank,i=t.keyIndex;return r===o?a===i?n(e,t):a<i?-1:1:r>o?-1:1}(e,t,f)}))}:p,v=e.reduce((function(e,a,l){var s=function(e,t,n,r){return t?function(e,t){for(var n=[],r=0,a=t.length;r<a;r++)for(var o=t[r],i=g(o),l=d(e,o),s=0,u=l.length;s<u;s++)n.push({itemValue:l[s],attributes:i});return n}(e,t).reduce((function(e,t,a){var o=e.rank,l=e.rankedValue,s=e.keyIndex,c=e.keyThreshold,d=t.itemValue,h=t.attributes,g=u(d,n,r),f=l,p=h.minRanking,m=h.maxRanking,v=h.threshold;return g<p&&g>=i.MATCHES?g=p:g>m&&(g=m),g>o&&(o=g,s=a,c=v,f=d),{rankedValue:f,rank:o,keyIndex:s,keyThreshold:c}}),{rankedValue:e,rank:i.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold}):{rankedValue:e,rank:u(e,n,r),keyIndex:-1,keyThreshold:r.threshold}}(a,o,t,n),h=s.rank,f=s.keyThreshold;return h>=(void 0===f?c:f)&&e.push((0,r.Z)({},s,{item:a,index:l})),e}),[]);return m(v).map((function(e){return e.item}))}function u(e,t,n){return e=c(e,n),(t=c(t,n)).length>e.length?i.NO_MATCH:e===t?i.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?i.EQUAL:e.startsWith(t)?i.STARTS_WITH:e.includes(" "+t)?i.WORD_STARTS_WITH:e.includes(t)?i.CONTAINS:1===t.length?i.NO_MATCH:(r=e,a="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){a+=e.substr(0,1)}))})),a).includes(t)?i.ACRONYM:function(e,t){var n=0,r=0;function a(e,t,r){for(var a=r,o=t.length;a<o;a++)if(t[a]===e)return n+=1,a+1;return-1}var o,l,s=a(t[0],e,0);if(s<0)return i.NO_MATCH;r=s;for(var u=1,c=t.length;u<c;u++)if(!((r=a(t[u],e,r))>-1))return i.NO_MATCH;return o=1/(r-s),l=n/t.length,i.MATCHES+l*o}(e,t);var r,a}function c(e,t){return e=""+e,t.keepDiacritics||(e=o()(e)),e}function d(e,t){var n;if("object"==typeof t&&(t=t.key),"function"==typeof t)n=t(e);else if(null==e)n=null;else if(Object.hasOwnProperty.call(e,t))n=e[t];else{if(t.includes("."))return function(e,t){for(var n=e.split("."),r=[t],a=0,o=n.length;a<o;a++){for(var i=n[a],l=[],s=0,u=r.length;s<u;s++){var c=r[s];if(null!=c)if(Object.hasOwnProperty.call(c,i)){var d=c[i];null!=d&&l.push(d)}else"*"===i&&(l=l.concat(c))}r=l}if(Array.isArray(r[0])){var h=[];return h.concat.apply(h,r)}return r}(t,e);n=null}return null==n?[]:Array.isArray(n)?n:[String(n)]}var h={maxRanking:1/0,minRanking:-1/0};function g(e){return"string"==typeof e?h:(0,r.Z)({},h,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},n=Object.keys(t).join("|"),r=new RegExp(n,"g"),a=new RegExp(n,""),o=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=o,e.exports.has=function(e){return!!e.match(a)},e.exports.remove=o},26635:(e,t,n)=>{"use strict";n.d(t,{l:()=>r});const r=n(67294).memo},96989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>J});var r=n(5872),a=n.n(r),o=n(67294);function i(e,t){let n;if(void 0===t)for(const t of e)null!=t&&(n<t||void 0===n&&t>=t)&&(n=t);else{let r=-1;for(let a of e)null!=(a=t(a,++r,e))&&(n<a||void 0===n&&a>=a)&&(n=a)}return n}var l=n(4459),s=n(63326),u=n(6609),c=n(88889),d=n(61988),h=n(51115),g=n(5364),f=n(55786),p=n(51995),m=n(79521),v=n(90233),y=n(26635);n(35666);var b=n(11965);function k({count:e,value:t,onChange:n}){return(0,b.tZ)("span",{className:"dt-global-filter"},"Search"," ",(0,b.tZ)("input",{className:"form-control input-sm",placeholder:`${e} records...`,value:t,onChange:n}))}const S=o.memo((function({preGlobalFilteredRows:e,filterValue:t="",searchInput:n,setGlobalFilter:r}){const a=e.length,[i,l]=function(e,t,n=200){const[r,a]=(0,o.useState)(e),i=(0,o.useRef)(e),l=(0,m.useAsyncDebounce)(t,n);return i.current!==e&&(i.current=e,r!==e&&a(e)),[r,e=>{a(e),l(e)}]}(t,(e=>{r(e||void 0)}),200),s=n||k;return(0,b.tZ)(s,{count:a,value:i,onChange:e=>{const t=e.target;e.preventDefault(),l(t.value)}})}));var C=n(6126);function w({current:e,options:t,onChange:n}){return(0,b.tZ)("span",{className:"dt-select-page-size form-inline"},"Show"," ",(0,b.tZ)("select",{className:"form-control input-sm",value:e,onBlur:()=>{},onChange:e=>{n(Number(e.target.value))}},t.map((e=>{const[t,n]=Array.isArray(e)?e:[e,e];return(0,b.tZ)("option",{key:t,value:t},n)})))," ","entries")}function N(e){return Array.isArray(e)?e[0]:e}const A=o.memo((function({total:e,options:t,current:n,selectRenderer:r,onChange:a}){const o=t.map(N);let i=[...t];void 0===n||n===e&&o.includes(0)||o.includes(n)||(i=[...t],i.splice(o.findIndex((e=>e>n)),0,(0,C.m)([n])[0]));const l=void 0===n?o[0]:n,s=r||w;return(0,b.tZ)(s,{current:l,options:i,onChange:a})})),Z=o.memo((0,o.forwardRef)((function({style:e,pageCount:t,currentPage:n=0,maxPageItemCount:r=9,onPageChange:a},o){const i=function(e,t,n){if(n<7)throw new Error("Must allow at least 7 page items");if(n%2==0)throw new Error("Must allow odd number of page items");if(e<n)return[...new Array(e).keys()];const r=Math.max(0,Math.min(e-n,t-Math.floor(n/2))),a=new Array(n);for(let e=0;e<n;e+=1)a[e]=e+r;return a[0]>0&&(a[0]=0,a[1]="prev-more"),a[a.length-1]<e-1&&(a[a.length-1]=e-1,a[a.length-2]="next-more"),a}(t,n,r);return(0,b.tZ)("div",{ref:o,className:"dt-pagination",style:e},(0,b.tZ)("ul",{className:"pagination pagination-sm"},i.map((e=>"number"==typeof e?(0,b.tZ)("li",{key:e,className:n===e?"active":void 0},(0,b.tZ)("a",{href:`#page-${e}`,role:"button",onClick:t=>{t.preventDefault(),a(e)}},e+1)):(0,b.tZ)("li",{key:e,className:"dt-pagination-ellipsis"},(0,b.tZ)("span",null,"…"))))))})));let T;const E=e=>e.join("\n");var x;!function(e){e.init="init",e.setStickyState="setStickyState"}(x||(x={}));const R=(e,t)=>e+t,I=(e,t)=>({style:{...e.props.style,...t}}),O={tableLayout:"fixed"};function M({sticky:e={},width:t,height:n,children:r,setStickyState:a}){if(!r||"table"!==r.type)throw new Error("<StickyWrap> must have only one <table> element as child");let i,l,s;if(o.Children.forEach(r.props.children,(e=>{e&&("thead"===e.type?i=e:"tbody"===e.type?l=e:"tfoot"===e.type&&(s=e))})),!i||!l)throw new Error("<table> in <StickyWrap> must contain both thead and tbody.");const u=(0,o.useMemo)((()=>{var e;return o.Children.toArray(null==(e=i)?void 0:e.props.children).pop().props.children.length}),[i]),c=(0,o.useRef)(null),d=(0,o.useRef)(null),h=(0,o.useRef)(null),g=(0,o.useRef)(null),f=(0,o.useRef)(null),p=function(e=!1){if("undefined"==typeof document)return 0;if(void 0===T||e){const e=document.createElement("div"),t=document.createElement("div");e.style.cssText=E`
      width: auto;
      height: 100%;
      overflow: scroll;
    `,t.style.cssText=E`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `,t.append(e),document.body.append(t),T=t.clientWidth-e.clientWidth,t.remove()}return T}(),{bodyHeight:m,columnWidths:v}=e,y=!v||e.width!==t||e.height!==n||e.setStickyState!==a;let k,S,C,w;if((0,o.useLayoutEffect)((()=>{if(!c.current)return;const e=c.current,r=e.clientHeight,o=d.current?d.current.clientHeight:0;if(!r)return;const i=e.parentNode.clientHeight,l=e.childNodes[0].childNodes,s=Array.from(l).map((e=>{var t;return(null==(t=e.getBoundingClientRect())?void 0:t.width)||e.clientWidth})),[u,h]=function({width:e,height:t,innerHeight:n,innerWidth:r,scrollBarSize:a}){const o=n>t;return[o,r>e-(o?a:0)]}({width:t,height:n-r-o,innerHeight:i,innerWidth:s.reduce(R),scrollBarSize:p}),g=Math.min(n,h?i+p:i);a({hasVerticalScroll:u,hasHorizontalScroll:h,setStickyState:a,width:t,height:n,realHeight:g,tableHeight:i,bodyHeight:g-r-o,columnWidths:s})}),[t,n,a,p]),y){const e=o.cloneElement(i,{ref:c}),t=s&&o.cloneElement(s,{ref:d});k=(0,b.tZ)("div",{key:"sizer",style:{height:n,overflow:"auto",visibility:"hidden"}},o.cloneElement(r,{},e,l,t))}const N=null==v?void 0:v.slice(0,u);if(N&&m){const t=(0,b.tZ)("colgroup",null,N.map(((e,t)=>(0,b.tZ)("col",{key:t,width:e})))),n=e.hasVerticalScroll&&p?(0,b.tZ)("colgroup",null,N.map(((e,t)=>(0,b.tZ)("col",{key:t,width:e+(t===N.length-1?p:0)})))):t;S=(0,b.tZ)("div",{key:"header",ref:h,style:{overflow:"hidden"}},o.cloneElement(r,I(r,O),n,i),S),C=s&&(0,b.tZ)("div",{key:"footer",ref:g,style:{overflow:"hidden"}},o.cloneElement(r,I(r,O),n,s),C);const a=e=>{h.current&&(h.current.scrollLeft=e.currentTarget.scrollLeft),g.current&&(g.current.scrollLeft=e.currentTarget.scrollLeft)};w=(0,b.tZ)("div",{key:"body",ref:f,style:{height:m,overflow:"auto"},onScroll:e.hasHorizontalScroll?a:void 0},o.cloneElement(r,I(r,O),t,l))}return(0,b.tZ)("div",{style:{width:t,height:e.realHeight||n,overflow:"hidden"}},S,w,C,k)}function P(e){const{dispatch:t,state:{sticky:n},data:r,page:a,rows:i,allColumns:l,getTableSize:s=(()=>{})}=e,u=(0,o.useCallback)((e=>{t({type:x.setStickyState,size:e})}),[t,s,a,i]);Object.assign(e,{setStickyState:u,wrapStickyTable:e=>{const{width:t,height:c}=function(e,t){const n=(0,o.useRef)();return(0,o.useLayoutEffect)((()=>{n.current=e})),(0,o.useMemo)((()=>{if(n.current)return e()}),[n.current,n.current===e,...t||[]])}(s,[s])||n,d=(0,o.useMemo)(e,[a,i,l]);return(0,o.useLayoutEffect)((()=>{t&&c||u()}),[t,c]),t&&c?0===r.length?d:(0,b.tZ)(M,{width:t,height:c,sticky:n,setStickyState:u},d):null}})}function H(e){e.useInstance.push(P),e.stateReducers.push(((e,t,n)=>{const r=t;if(r.type===x.init)return{...e,sticky:{...null==n?void 0:n.sticky}};if(r.type===x.setStickyState){const{size:t}=r;return t?{...e,sticky:{...null==n?void 0:n.sticky,...null==e?void 0:e.sticky,...r.size}}:{...e}}return e}))}H.pluginName="useSticky";var z=n(2608);const L={alphanumeric:(e,t,n)=>{const r=e.values[n],a=t.values[n];return r&&"string"==typeof r?a&&"string"==typeof a?r.localeCompare(a):1:-1}},D=(0,y.l)((function({tableClassName:e,columns:t,data:n,serverPaginationData:r,width:i="100%",height:l=300,pageSize:s=0,initialState:u={},pageSizeOptions:c=z.T,maxPageItemCount:d=9,sticky:h,searchInput:g=!0,onServerPaginationChange:f,rowCount:p,selectPageSize:y,noResults:k="No data found",hooks:C,serverPagination:w,wrapperRef:N,onColumnOrderChange:T,...E}){const x=[m.useGlobalFilter,m.useSortBy,m.usePagination,m.useColumnOrder,h?H:[],C||[]].flat(),R=w?p:n.length,I=(0,o.useRef)([]),O=(0,o.useRef)([s,R]),M=s>0&&R>0,P=M||!!g,D={...u,sortBy:I.current,pageSize:s>0?s:R||10},U=(0,o.useRef)(null),W=(0,o.useRef)(null),$=(0,o.useRef)(null),_=N||U,F=JSON.stringify(r),B=(0,o.useCallback)((()=>{var e,t;if(_.current)return{width:Number(i)||_.current.clientWidth,height:(Number(l)||_.current.clientHeight)-((null==(e=W.current)?void 0:e.clientHeight)||0)-((null==(t=$.current)?void 0:t.clientHeight)||0)}}),[l,i,_,M,P,$,R,F]),j=(0,o.useCallback)(((e,t,n)=>(0,v.Lu)(e,n,{keys:[...t,e=>t.map((t=>e.values[t])).join(" ")],threshold:v.tL.ACRONYM})),[]),{getTableProps:G,getTableBodyProps:V,prepareRow:Y,headerGroups:X,footerGroups:Q,page:K,pageCount:J,gotoPage:q,preGlobalFilteredRows:ee,setGlobalFilter:te,setPageSize:ne,wrapStickyTable:re,setColumnOrder:ae,allColumns:oe,state:{pageIndex:ie,pageSize:le,globalFilter:se,sticky:ue={}}}=(0,m.useTable)({columns:t,data:n,initialState:D,getTableSize:B,globalFilter:j,sortTypes:L,...E},...x),ce=e=>{w&&f(0,e),(e||0!==R)&&ne(0===e?R:e)},de="function"==typeof k?k(se):k,he=()=>(0,b.tZ)("div",{className:"dt-no-results"},de);if(!t||0===t.length)return re?re(he):he();const ge=t.some((e=>!!e.Footer));let fe=-1;const pe=e=>{const t=e.target;fe=oe.findIndex((e=>e.id===t.dataset.columnName)),e.dataTransfer.setData("text/plain",`${fe}`)},me=e=>{const t=e.target,n=oe.findIndex((e=>e.id===t.dataset.columnName));if(-1!==n){const e=oe.map((e=>e.id)),t=e.splice(fe,1);e.splice(n,0,t[0]),ae(e),T()}e.preventDefault()},ve=()=>(0,b.tZ)("table",G({className:e}),(0,b.tZ)("thead",null,X.map((e=>{const{key:t,...n}=e.getHeaderGroupProps();return(0,b.tZ)("tr",a()({key:t||e.id},n),e.headers.map((e=>e.render("Header",{key:e.id,...e.getSortByToggleProps(),onDragStart:pe,onDrop:me}))))}))),(0,b.tZ)("tbody",V(),K&&K.length>0?K.map((e=>{Y(e);const{key:t,...n}=e.getRowProps();return(0,b.tZ)("tr",a()({key:t||e.id},n),e.cells.map((e=>e.render("Cell",{key:e.column.id}))))})):(0,b.tZ)("tr",null,(0,b.tZ)("td",{className:"dt-no-results",colSpan:t.length},de))),ge&&(0,b.tZ)("tfoot",null,Q.map((e=>{const{key:t,...n}=e.getHeaderGroupProps();return(0,b.tZ)("tr",a()({key:t||e.id},n),e.headers.map((e=>e.render("Footer",{key:e.id}))))}))));(O.current[0]!==s||0===s&&O.current[1]!==R)&&(O.current=[s,R],ce(s));const ye=ue.height?{}:{visibility:"hidden"};let be=J,ke=le,Se=ie,Ce=q;if(w){var we,Ne;const e=null!=(we=null==r?void 0:r.pageSize)?we:s;be=Math.ceil(p/e),Number.isFinite(be)||(be=0),ke=e,-1===c.findIndex((([e])=>e>=ke))&&(ke=0),Se=null!=(Ne=null==r?void 0:r.currentPage)?Ne:0,Ce=t=>f(t,e)}return(0,b.tZ)("div",{ref:_,style:{width:i,height:l}},P?(0,b.tZ)("div",{ref:W,className:"form-inline dt-controls"},(0,b.tZ)("div",{className:"row"},(0,b.tZ)("div",{className:"col-sm-6"},M?(0,b.tZ)(A,{total:R,current:ke,options:c,selectRenderer:"boolean"==typeof y?void 0:y,onChange:ce}):null),g?(0,b.tZ)("div",{className:"col-sm-6"},(0,b.tZ)(S,{searchInput:"boolean"==typeof g?void 0:g,preGlobalFilteredRows:ee,setGlobalFilter:te,filterValue:se})):null)):null,re?re(ve):ve(),M&&be>1?(0,b.tZ)(Z,{ref:$,style:ye,maxPageItemCount:d,pageCount:be,currentPage:Se,onPageChange:Ce}):null)})),U=p.iK.div`
  ${({theme:e})=>b.iv`
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
    }

    th,
    td {
      min-width: 4.3em;
    }

    thead > tr > th {
      padding-right: 0;
      position: relative;
      background: ${e.colors.grayscale.light5};
      text-align: left;
    }
    th svg {
      color: ${e.colors.grayscale.light2};
      margin: ${e.gridUnit/2}px;
    }
    th.is-sorted svg {
      color: ${e.colors.grayscale.base};
    }
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
    }

    .dt-controls {
      padding-bottom: 0.65em;
    }
    .dt-metric {
      text-align: right;
    }
    .dt-totals {
      font-weight: ${e.typography.weights.bold};
    }
    .dt-is-null {
      color: ${e.colors.grayscale.light1};
    }
    td.dt-is-filter {
      cursor: pointer;
    }
    td.dt-is-filter:hover {
      background-color: ${e.colors.secondary.light4};
    }
    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${e.colors.secondary.light3};
    }

    .dt-global-filter {
      float: right;
    }

    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding-top: 0.5em;
    }
    .dt-pagination .pagination {
      margin: 0;
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${e.colors.grayscale.light5};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }
  `}
`;var W=n(68924),$=n(67190),_=n(57790);const F=new W.FilterXSS({whiteList:{...(0,W.getDefaultWhiteList)(),span:["style","class","title"],div:["style","class"],a:["style","class","href","title","target"],img:["style","class","src","alt","title","width","height"],video:["autoplay","controls","loop","preload","src","height","width","muted"]},stripIgnoreTag:!0,css:!1});function B(e,t){const{dataType:n,formatter:r,config:a={}}=e,o=n===c.Z.NUMERIC,i=void 0===a.d3SmallNumberFormat?r:(0,$.JB)(a.d3SmallNumberFormat);return function(e,t){return void 0===t?[!1,""]:null===t||t instanceof _.Z&&null===t.input?[!1,"N/A"]:e?[!1,e(t)]:"string"==typeof t?/<[^>]+>/.test(t)?[!0,F.process(t)]:[!1,t]:[!1,t.toString()]}(o&&"number"==typeof t&&Math.abs(t)<1?i:r,t)}var j=n(12456);function G(e){return e===c.Z.TEMPORAL?"datetime":e===c.Z.STRING?"alphanumeric":"basic"}function V({column:e}){const{isSorted:t,isSortedDesc:n}=e;let r=(0,b.tZ)(l.r,null);return t&&(r=n?(0,b.tZ)(s.s,null):(0,b.tZ)(u.h,null)),r}function Y({count:e,value:t,onChange:n}){return(0,b.tZ)("span",{className:"dt-global-filter"},(0,d.t)("Search")," ",(0,b.tZ)("input",{className:"form-control input-sm",placeholder:(0,d.tn)("search.num_records",e),value:t,onChange:n}))}function X({options:e,current:t,onChange:n}){return(0,b.tZ)("span",{className:"dt-select-page-size form-inline"},(0,d.t)("page_size.show")," ",(0,b.tZ)("select",{className:"form-control input-sm",value:t,onBlur:()=>{},onChange:e=>{n(Number(e.target.value))}},e.map((e=>{const[t,n]=Array.isArray(e)?e:[e,e];return(0,b.tZ)("option",{key:t,value:t},n)})))," ",(0,d.t)("page_size.entries"))}const Q=e=>(0,d.t)(e?"No matching records found":"No records found");var K={name:"tvoj80",styles:"display:inline-flex;align-items:flex-end"};function J(e){const{timeGrain:t,height:n,width:r,data:l,totals:s,isRawRecords:u,rowCount:c=0,columns:m,alignPositiveNegative:v=!1,colorPositiveNegative:y=!1,includeSearch:k=!1,pageSize:S=0,serverPagination:C=!1,serverPaginationData:w,setDataMask:N,showCellBars:A=!0,emitFilter:Z=!1,sortDesc:T=!1,filters:E,sticky:x=!0,columnColorFormatters:R,allowRearrangeColumns:I=!1}=e,O=(0,o.useCallback)((e=>(0,h.uh)(t)(e)),[t]),[M,P]=(0,o.useState)(!1),H=(0,o.useCallback)((e=>{if(!Z)return;const n=Object.keys(e),r=Object.values(e),a=[];n.forEach((t=>{const n=t===g.W3,r=(0,f.Z)(null==e?void 0:e[t]);if(r.length){const e=r.map((e=>n?O(e):e));a.push(`${e.join(", ")}`)}})),N({extraFormData:{filters:0===n.length?[]:n.map((n=>{const r=(0,f.Z)(null==e?void 0:e[n]);return r.length?{col:n,op:"IN",val:r.map((e=>e instanceof Date?e.getTime():e)),grain:n===g.W3?t:void 0}:{col:n,op:"IS NULL"}}))},filterState:{label:a.join(", "),value:r.length?r:null,filters:e&&Object.keys(e).length?e:null}})}),[Z,N]),L=(0,o.useMemo)((()=>z.T.filter((([e])=>C?(e=>e<=c)(e):e<=2*l.length))),[l.length,c,C]),W=(0,o.useCallback)((function(e,t){var n;if("number"==typeof(null==l||null==(n=l[0])?void 0:n[e])){const n=l.map((t=>t[e]));return t?[0,i(n.map(Math.abs))]:function(e,t){let n,r;for(const t of e)null!=t&&(void 0===n?t>=t&&(n=r=t):(n>t&&(n=t),r<t&&(r=t)));return[n,r]}(n)}return null}),[l]),$=(0,o.useCallback)((function(e,t){var n;return!!E&&(null==(n=E[e])?void 0:n.includes(t))}),[E]),_=(0,o.useCallback)((function(e,t){let n={...E||{}};const r=function(e){var t;const n=null==m?void 0:m.find((t=>t.key===e));return(null==n||null==(t=n.config)?void 0:t.emitTarget)||e}(e);n=E&&$(r,t)?{}:{[r]:[t]},Array.isArray(n[r])&&0===n[r].length&&delete n[r],H(n)}),[E,H,$]),F=(0,o.useCallback)(((e,t)=>{const{key:n,label:r,isNumeric:o,dataType:i,isMetric:l,config:c={}}=e,h=Number.isNaN(Number(c.columnWidth))?c.columnWidth:Number(c.columnWidth),g=(e=>{const{isNumeric:t,config:n={}}=e;return{textAlign:n.horizontalAlign?n.horizontalAlign:t?"right":"left"}})(e),f=void 0===c.alignPositiveNegative?v:c.alignPositiveNegative,m=void 0===c.colorPositiveNegative?y:c.colorPositiveNegative,k=o&&Array.isArray(R)&&R.length>0,S=!k&&(void 0===c.showCellBars?A:c.showCellBars)&&(l||u)&&W(n,f);let C="";return Z&&(C+=" dt-is-filter"),{id:String(t),accessor:e=>e[n],Cell:({value:t})=>{const[r,o]=B(e,t),i=r?{__html:o}:void 0;let l;k&&R.filter((t=>t.column===e.key)).forEach((e=>{const n=e.getColorFromValue(t);n&&(l=n)}));const s=p.iK.td`
            text-align: ${g.textAlign};
            background: ${l||(S?function({value:e,valueRange:t,colorPositiveNegative:n=!1,alignPositiveNegative:r}){const[a,o]=t,i=n&&e<0?150:0;if(r){const t=Math.abs(Math.round(e/o*100));return`linear-gradient(to right, rgba(${i},0,0,0.2), rgba(${i},0,0,0.2) ${t}%, rgba(0,0,0,0.01) ${t}%, rgba(0,0,0,0.001) 100%)`}const l=Math.abs(Math.max(o,0)),s=Math.abs(Math.min(a,0)),u=l+s,c=Math.round(Math.min(s+e,s)/u*100),d=Math.round(Math.abs(e)/u*100);return`linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) ${c}%, rgba(${i},0,0,0.2) ${c}%, rgba(${i},0,0,0.2) ${c+d}%, rgba(0,0,0,0.01) ${c+d}%, rgba(0,0,0,0.001) 100%)`}({value:t,valueRange:S,alignPositiveNegative:f,colorPositiveNegative:m}):void 0)};
            white-space: ${t instanceof Date?"nowrap":void 0};
          `,u={title:"number"==typeof t?String(t):void 0,onClick:Z&&!S?()=>_(n,t):void 0,className:[C,null==t?"dt-is-null":"",$(n,t)?" dt-is-active-filter":""].join(" ")};return i?(0,b.tZ)(s,a()({},u,{dangerouslySetInnerHTML:i})):(0,b.tZ)(s,u,o)},Header:({column:e,onClick:t,style:n,onDragStart:o,onDrop:i})=>(0,b.tZ)("th",a()({title:"Shift + Click to sort by multiple columns",className:[C,e.isSorted?"is-sorted":""].join(" "),style:{...g,...n},onClick:t,"data-column-name":e.id},I&&{draggable:"true",onDragStart:o,onDragOver:e=>e.preventDefault(),onDragEnter:e=>e.preventDefault(),onDrop:i}),c.columnWidth?(0,b.tZ)("div",{style:{width:h,height:.01}}):null,(0,b.tZ)("div",{"data-column-name":e.id,css:K},(0,b.tZ)("span",{"data-column-name":e.id},r),(0,b.tZ)(V,{column:e}))),Footer:s?0===t?(0,b.tZ)("th",null,(0,d.t)("Totals")):(0,b.tZ)("td",{style:g},(0,b.tZ)("strong",null,B(e,s[n])[1])):void 0,sortDescFirst:T,sortType:G(i)}}),[v,y,Z,W,$,u,A,T,_,s,R,M]),J=(0,o.useMemo)((()=>m.map(F)),[m,F]),q=(0,o.useCallback)(((e,t)=>{(0,j.X)(N,e,t)}),[N]);return(0,b.tZ)(U,null,(0,b.tZ)(D,{columns:J,data:l,rowCount:c,tableClassName:"table table-striped table-condensed",pageSize:S,serverPaginationData:w,pageSizeOptions:L,width:r,height:n,serverPagination:C,onServerPaginationChange:q,onColumnOrderChange:()=>P(!M),maxPageItemCount:r>340?9:7,noResults:Q,searchInput:k&&Y,selectPageSize:null!==S&&X,sticky:x}))}}}]);
//# sourceMappingURL=9829ed24951e047c1187.chunk.js.map