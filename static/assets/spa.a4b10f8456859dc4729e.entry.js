(()=>{var e,t,a,n,i,r,o,d,l={43063:(e,t,a)=>{var n=a(34963),i=a(80760),r=a(67206),o=a(1469),d=a(94885);e.exports=function(e,t){return(o(e)?n:i)(e,d(r(t,3)))}},79789:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),i=a(51995),r=a(61988),o=a(70163),d=a(58593),l=a(11965);const s=function({certifiedBy:e,details:t,size:a="l"}){const s=(0,i.Fg)();return(0,l.tZ)(d.u,{id:"certified-details-tooltip",title:(0,l.tZ)(n.Fragment,null,e&&(0,l.tZ)("div",null,(0,l.tZ)("strong",null,(0,r.t)("Certified by %s",e))),(0,l.tZ)("div",null,t))},(0,l.tZ)(o.Z.Certified,{iconColor:s.colors.primary.base,iconSize:a}))}},19259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),i=a(17198),r=a(11965);function o({title:e,description:t,onConfirm:a,children:o}){const[d,l]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),u=()=>{l(!1),c([])};return(0,r.tZ)(n.Fragment,null,o&&o(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),l(!0),c(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{a(...s),u()},onHide:u,open:d,title:e}))}},17198:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(51995),i=a(61988),r=a(67294),o=a(9875),d=a(74069),l=a(49238),s=a(11965);const c=n.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=n.iK.div`
  line-height: 40px;
  padding-top: 16px;
`;function b({description:e,onConfirm:t,onHide:a,open:n,title:b}){const[f,h]=(0,r.useState)(!0),[m,p]=(0,r.useState)(""),g=()=>{p(""),t()};return(0,s.tZ)(d.Z,{disablePrimaryButton:f,onHide:()=>{p(""),a()},onHandledPrimaryAction:g,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:n,title:b},(0,s.tZ)(u,null,e),(0,s.tZ)(c,null,(0,s.tZ)(l.lX,{htmlFor:"delete"},(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))),(0,s.tZ)(o.II,{"data-test":"delete-modal-input",type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";h(a.toUpperCase()!==(0,i.t)("DELETE")),p(a)},onPressEnter:()=>{f||g()}})))}},36674:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(67294),i=a(51995),r=a(11965),o=a(61988),d=a(58593),l=a(33626),s=a(70163);const c=i.iK.a`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:a,saveFaveStar:i,fetchFaveStar:u})=>{(0,l.J)((()=>{u&&u(e)}));const b=(0,n.useCallback)((a=>{a.preventDefault(),i(e,!!t)}),[t,e,i]),f=(0,r.tZ)(c,{href:"#",onClick:b,className:"fave-unfave-icon","data-test":"fave-unfave-icon",role:"button"},t?(0,r.tZ)(s.Z.FavoriteSelected,null):(0,r.tZ)(s.Z.FavoriteUnselected,null));return a?(0,r.tZ)(d.u,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite")},f):f}},55467:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(11965),i=a(67294),r=a(51995),o=a(4715),d=a(58593),l=a(5872),s=a.n(l),c=a(68492);const u=r.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function b({src:e,fallback:t,isLoading:a,position:r,...o}){const[d,l]=(0,i.useState)(t);return(0,i.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);l(t)}})).catch((e=>{c.Z.error(e),l(t)})),()=>{l(t)})),[e,t]),(0,n.tZ)(u,s()({src:a?t:d},o,{position:r}))}var f=a(79789);const h=r.iK.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`,m=(0,r.iK)(o.Ak)`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.grayscale.light2};\n    border-radius: ${e.gridUnit}px;\n    overflow: hidden;\n\n    .ant-card-body {\n      padding: ${4*e.gridUnit}px\n        ${2*e.gridUnit}px;\n    }\n    .ant-card-meta-detail > div:not(:last-child) {\n      margin-bottom: 0;\n    }\n    .gradient-container {\n      position: relative;\n      height: 100%;\n    }\n    &:hover {\n      box-shadow: 8px 8px 28px 0px ${e.colors.grayscale.light1};\n      transition: box-shadow ${e.transitionTiming}s ease-in-out;\n\n      .cover-footer {\n        transform: translateY(0);\n      }\n    }\n  `}
`,p=r.iK.div`
  height: 264px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${({theme:e})=>9*e.gridUnit}px);
    transition: ${({theme:e})=>e.transitionTiming}s ease-out;
  }
`,g=r.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${({theme:e})=>e.gridUnit}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }
`,v=r.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${({theme:e})=>e.colors.grayscale.dark1} !important;
  }
`,Z=r.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${({theme:e})=>e.gridUnit}px;
`,y=r.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${({theme:e})=>9*e.gridUnit}px;
  padding: 0 8px;
`,_=r.iK.div`
  flex: 1;
  overflow: hidden;
`,x=r.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=(0,r.iK)(o.Od)`
  h3 {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`,C={rows:1,width:150},S=({to:e,children:t})=>(0,n.tZ)("a",{href:e},t);function k({title:e,url:t,linkComponent:a,titleRight:l,imgURL:s,imgFallbackURL:c,description:u,coverLeft:h,coverRight:k,actions:E,avatar:$,loading:T,imgPosition:I="top",cover:N,certifiedBy:D,certificationDetails:R}){const U=t&&a?a:S,F=(0,r.Fg)();return(0,n.tZ)(m,{"data-test":"styled-card",cover:N||(0,n.tZ)(p,null,(0,n.tZ)(U,{to:t},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(b,{src:s||"",fallback:c||"",isLoading:T,position:I}))),(0,n.tZ)(y,{className:"cover-footer"},!T&&h&&(0,n.tZ)(_,null,h),!T&&k&&(0,n.tZ)(x,null,k)))},T&&(0,n.tZ)(o.Ak.Meta,{title:(0,n.tZ)(i.Fragment,null,(0,n.tZ)(g,null,(0,n.tZ)(o.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*F.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(o.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(o.Od.Button,{active:!0,css:(0,n.iv)({width:10*F.gridUnit},"","")})))),description:(0,n.tZ)(w,{round:!0,active:!0,title:!1,paragraph:C})}),!T&&(0,n.tZ)(o.Ak.Meta,{title:(0,n.tZ)(g,null,(0,n.tZ)(d.u,{title:e},(0,n.tZ)(v,null,(0,n.tZ)(U,{to:t},D&&(0,n.tZ)(i.Fragment,null,(0,n.tZ)(f.Z,{certifiedBy:D,details:R})," "),e))),l&&(0,n.tZ)(Z,null,l),(0,n.tZ)("div",{className:"card-actions","data-test":"card-actions"},E)),description:u,avatar:$||null}))}k.Actions=h;const E=k},83673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),i=a(74069),r=a(9875),o=a(35932),d=a(4715),l=a(15926),s=a.n(l),c=a(51995),u=a(61988),b=a(31069),f=a(98286),h=a(14114),m=a(11965);const p=d.qz.Item,g=(0,c.iK)(d.qz.Item)`
  margin-bottom: 0;
`,v=c.iK.span`
  margin-bottom: 0;
`,Z=(0,h.ZP)((function({slice:e,onHide:t,onSave:a,show:l,addSuccessToast:c}){const[h,Z]=(0,n.useState)(!1),[y]=d.qz.useForm(),[_,x]=(0,n.useState)(e.slice_name||""),[w,C]=(0,n.useState)(null);function S({error:e,statusText:t,message:a}){let n=e||t||(0,u.t)("An error has occurred");"Forbidden"===a&&(n=(0,u.t)("You do not have permission to edit this chart")),i.Z.error({title:"Error",content:n,okButtonProps:{danger:!0,className:"btn-danger"}})}const k=(0,n.useCallback)((async function(){try{var t;const a=(await b.Z.get({endpoint:`/api/v1/chart/${e.slice_id}`})).json.result;C(null==a||null==(t=a.owners)?void 0:t.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){S(await(0,f.O)(e))}}),[e.slice_id]),E=(0,n.useMemo)((()=>(e="",t,a)=>{const n=s().encode({filter:e,page:t,page_size:a});return b.Z.get({endpoint:`/api/v1/chart/related/owners?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),$=(0,u.t)("Owners");return(0,n.useEffect)((()=>{k()}),[k]),(0,n.useEffect)((()=>{x(e.slice_name||"")}),[e.slice_name]),(0,m.tZ)(i.Z,{show:l,onHide:t,title:"Edit Chart Properties",footer:(0,m.tZ)(n.Fragment,null,(0,m.tZ)(o.Z,{"data-test":"properties-modal-cancel-button",htmlType:"button",buttonSize:"small",onClick:t,cta:!0},(0,u.t)("Cancel")),(0,m.tZ)(o.Z,{"data-test":"properties-modal-save-button",htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:y.submit,disabled:h||!_||e.is_managed_externally,tooltip:e.is_managed_externally?(0,u.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,m.tZ)(d.qz,{form:y,onFinish:async n=>{Z(!0);const{certified_by:i,certification_details:r,description:o,cache_timeout:d}=n,l={slice_name:_||null,description:o||null,cache_timeout:d||null,certified_by:i||null,certification_details:i&&r?r:null};w&&(l.owners=w.map((e=>e.value)));try{const n=await b.Z.put({endpoint:`/api/v1/chart/${e.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),i={...l,...n.json.result,id:e.slice_id};a(i),c((0,u.t)("Chart properties updated")),t()}catch(e){S(await(0,f.O)(e))}Z(!1)},layout:"vertical",initialValues:{name:e.slice_name||"",description:e.description||"",cache_timeout:null!=e.cache_timeout?e.cache_timeout:"",certified_by:e.certified_by||"",certification_details:e.certified_by&&e.certification_details?e.certification_details:""}},(0,m.tZ)(d.X2,{gutter:16},(0,m.tZ)(d.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Basic information")),(0,m.tZ)(p,{label:(0,u.t)("Name"),required:!0},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Name"),name:"name","data-test":"properties-modal-name-input",type:"text",value:_,onChange:e=>{var t;return x(null!=(t=e.target.value)?t:"")}})),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Description"),name:"description"},(0,m.tZ)(r.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,m.tZ)("h3",null,(0,u.t)("Certification")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Certified by")})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Certification details")})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,m.tZ)(d.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Configuration")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Cache timeout"),name:"cache_timeout"},(0,m.tZ)(r.II,{"aria-label":"Cache timeout"})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),(0,m.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,m.tZ)(p,{label:$},(0,m.tZ)(d.Ph,{ariaLabel:$,mode:"multiple",name:"owners",value:w||[],onChange:C,options:E,disabled:!w,allowClear:!0}),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username.")))))))}))},33626:(e,t,a)=>{"use strict";a.d(t,{J:()=>i});var n=a(67294);const i=e=>{(0,n.useEffect)(e,[])}},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(89816),i=a(15926),r=a.n(i),o=a(14670),d=a.n(o);function l(e,t,a,i=200){const o=d().generate(),l=`/api/v1/${e}/export/?q=${r().encode(t)}&token=${o}`,s=document.createElement("iframe");s.style.display="none",s.src=l,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[o]&&(window.clearInterval(c),document.body.removeChild(s),a())}),i)}},61337:(e,t,a)=>{"use strict";var n;function i(e,t){try{const a=localStorage.getItem(e);return null===a?t:JSON.parse(a)}catch{return t}}function r(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function o(e,t){return i(e,t)}function d(e,t){r(e,t)}a.d(t,{dR:()=>n,OH:()=>i,I_:()=>r,rV:()=>o,LS:()=>d}),function(e){e.filter_box_transition_snoozed_at="filter_box_transition_snoozed_at",e.chart_split_sizes="chart_split_sizes",e.controls_width="controls_width",e.datasource_width="datasource_width",e.is_datapanel_open="is_datapanel_open",e.homepage_chart_filter="homepage_chart_filter",e.homepage_dashboard_filter="homepage_dashboard_filter",e.homepage_collapse_state="homepage_collapse_state",e.homepage_activity_filter="homepage_activity_filter",e.sqllab__is_autocomplete_enabled="sqllab__is_autocomplete_enabled",e.explore__data_table_original_formatted_time_columns="explore__data_table_original_formatted_time_columns"}(n||(n={}))},34024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(67294),i=a(51995),r=a(61988),o=a(91877),d=a(93185),l=a(19259),s=a(70163),c=a(55467),u=a(37921),b=a(4715),f=a(83862),h=a(36674),m=a(34581),p=a(40768),g=a(11965);function v({chart:e,hasPerm:t,openChartEditModal:a,bulkSelectEnabled:v,addDangerToast:Z,addSuccessToast:y,refreshData:_,loading:x,showThumbnails:w,saveFavoriteStatus:C,favoriteStatus:S,chartFilter:k,userId:E,handleBulkChartExport:$}){const T=t("can_write"),I=t("can_write"),N=t("can_export")&&(0,o.cr)(d.T.VERSIONED_EXPORT),D=(0,i.Fg)(),R=(0,g.tZ)(f.v,null,I&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)(l.Z,{title:(0,r.t)("Please confirm"),description:(0,g.tZ)(n.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,g.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,p.Gm)(e,y,Z,_,k,E)},(e=>(0,g.tZ)("div",{"data-test":"chart-list-delete-option",role:"button",tabIndex:0,className:"action-button",onClick:e},(0,g.tZ)(s.Z.Trash,{iconSize:"l"})," ",(0,r.t)("Delete"))))),N&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)("div",{role:"button",tabIndex:0,onClick:()=>$([e])},(0,g.tZ)(s.Z.Share,{iconSize:"l"})," ",(0,r.t)("Export"))),T&&(0,g.tZ)(f.v.Item,null,(0,g.tZ)("div",{"data-test":"chart-list-edit-option",role:"button",tabIndex:0,onClick:()=>a(e)},(0,g.tZ)(s.Z.EditAlt,{iconSize:"l"})," ",(0,r.t)("Edit"))));return(0,g.tZ)(p.ZB,{onClick:()=>{!v&&e.url&&(window.location.href=e.url)}},(0,g.tZ)(c.Z,{loading:x,title:e.slice_name,certifiedBy:e.certified_by,certificationDetails:e.certification_details,cover:(0,o.cr)(d.T.THUMBNAILS)&&w?null:(0,g.tZ)(n.Fragment,null),url:v?void 0:e.url,imgURL:e.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,r.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,g.tZ)(m.Z,{users:e.owners||[]}),coverRight:(0,g.tZ)(u.Z,{type:"secondary"},e.datasource_name_text),actions:(0,g.tZ)(c.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},E&&(0,g.tZ)(h.Z,{itemId:e.id,saveFaveStar:C,isStarred:S}),(0,g.tZ)(b.Gj,{overlay:R},(0,g.tZ)(s.Z.MoreVert,{iconColor:D.colors.grayscale.base})))}))}},99415:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(67294),i=a(5977),r=a(73727),o=a(51995),d=a(61988),l=a(40768),s=a(91877),c=a(93185),u=a(4715),b=a(83862),f=a(19259),h=a(55467),m=a(70163),p=a(37921),g=a(34581),v=a(36674),Z=a(11965);const y=function({dashboard:e,hasPerm:t,bulkSelectEnabled:a,dashboardFilter:y,refreshData:_,userId:x,addDangerToast:w,addSuccessToast:C,openDashboardEditModal:S,favoriteStatus:k,saveFavoriteStatus:E,showThumbnails:$,handleBulkDashboardExport:T}){const I=(0,i.k6)(),N=t("can_write"),D=t("can_write"),R=t("can_export"),U=(0,o.Fg)(),F=(0,Z.tZ)(b.v,null,N&&S&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>S&&S(e),"data-test":"dashboard-card-option-edit-button"},(0,Z.tZ)(m.Z.EditAlt,{iconSize:"l","data-test":"edit-alt"})," ",(0,d.t)("Edit"))),R&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>T([e]),className:"action-button","data-test":"dashboard-card-option-export-button"},(0,Z.tZ)(m.Z.Share,{iconSize:"l"})," ",(0,d.t)("Export"))),D&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)(f.Z,{title:(0,d.t)("Please confirm"),description:(0,Z.tZ)(n.Fragment,null,(0,d.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,l.Iu)(e,_,C,w,y,x)},(e=>(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e,"data-test":"dashboard-card-option-delete-button"},(0,Z.tZ)(m.Z.Trash,{iconSize:"l"})," ",(0,d.t)("Delete"))))));return(0,Z.tZ)(l.ZB,{onClick:()=>{a||I.push(e.url)}},(0,Z.tZ)(h.Z,{loading:e.loading||!1,title:e.dashboard_title,certifiedBy:e.certified_by,certificationDetails:e.certification_details,titleRight:(0,Z.tZ)(p.Z,null,e.published?(0,d.t)("published"):(0,d.t)("draft")),cover:(0,s.cr)(c.T.THUMBNAILS)&&$?null:(0,Z.tZ)(n.Fragment,null),url:a?void 0:e.url,linkComponent:r.rU,imgURL:e.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,d.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,Z.tZ)(g.Z,{users:e.owners||[]}),actions:(0,Z.tZ)(h.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},x&&(0,Z.tZ)(v.Z,{itemId:e.id,saveFaveStar:E,isStarred:k}),(0,Z.tZ)(u.Gj,{overlay:F},(0,Z.tZ)(m.Z.MoreVert,{iconColor:U.colors.grayscale.base})))}))}},12:(e,t,a)=>{"use strict";var n,i;a.d(t,{s:()=>n,J:()=>i}),function(e){e.FAVORITE="Favorite",e.MINE="Mine",e.EXAMPLES="Examples"}(n||(n={})),function(e){e.id="id",e.changed_on="changed_on",e.database="database",e.database_name="database.database_name",e.schema="schema",e.sql="sql",e.executed_sql="exceuted_sql",e.sql_tables="sql_tables",e.status="status",e.tab_name="tab_name",e.user="user",e.user_first_name="user.first_name",e.start_time="start_time",e.end_time="end_time",e.rows="rows",e.tmp_table_name="tmp_table_name",e.tracking_url="tracking_url"}(i||(i={}))},20755:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(23279),i=a.n(n),r=a(67294),o=a(5977),d=a(73727),l=a(51995),s=a(11965),c=a(61988),u=a(94184),b=a.n(u),f=a(58593),h=a(4715),m=a(83862),p=a(35932),g=a(70163);const v=l.iK.div`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  .header {
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    text-align: left;
    font-size: 18px;
    padding: ${({theme:e})=>3*e.gridUnit}px;
    display: inline-block;
    line-height: ${({theme:e})=>9*e.gridUnit}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: ${({theme:e})=>3.5*e.gridUnit}px 0;
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    float: right;
    position: absolute;
    right: 0;
    ul.ant-menu-root {
      padding: 0px;
    }
    li[role='menuitem'] {
      border: 0;
      border-bottom: none;
      &:hover {
        border-bottom: transparent;
      }
    }
  }
  .nav-right-collapse {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: 0;
    float: left;
    padding-left: 10px;
  }
  .menu {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    .ant-menu-horizontal {
      line-height: inherit;
      .ant-menu-item {
        border-bottom: none;
        &:hover {
          border-bottom: none;
          text-decoration: none;
        }
      }
    }
    .ant-menu {
      padding: ${({theme:e})=>4*e.gridUnit}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${({theme:e})=>e.gridUnit+1}px;
  }

  .menu .ant-menu-item {
    li,
    div {
      a,
      div {
        font-size: ${({theme:e})=>e.typography.sizes.s}px;
        color: ${({theme:e})=>e.colors.secondary.dark1};

        a {
          margin: 0;
          padding: ${({theme:e})=>2*e.gridUnit}px
            ${({theme:e})=>4*e.gridUnit}px;
          line-height: ${({theme:e})=>5*e.gridUnit}px;

          &:hover {
            text-decoration: none;
          }
        }
      }

      &.no-router a {
        padding: ${({theme:e})=>2*e.gridUnit}px
          ${({theme:e})=>4*e.gridUnit}px;
      }

      &.active a {
        background: ${({theme:e})=>e.colors.secondary.light4};
        border-radius: ${({theme:e})=>e.borderRadius}px;
      }
    }

    li.active > a,
    li.active > div,
    div.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover,
    div > div:hover,
    div > a:hover {
      background: ${({theme:e})=>e.colors.secondary.light4};
      border-bottom: none;
      border-radius: ${({theme:e})=>e.borderRadius}px;
      margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
      text-decoration: none;
    }
  }

  .btn-link {
    padding: 10px 0;
  }
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 767px) {
    .header,
    .nav-right {
      position: relative;
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
  .ant-menu-submenu {
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>e.gridUnit+1}px !important;
    }
  }
  .dropdown-menu-links > div.ant-menu-submenu-title,
  .ant-menu-submenu-open.ant-menu-submenu-active > div.ant-menu-submenu-title {
    color: ${({theme:e})=>e.colors.primary.dark1};
  }
`,Z=e=>s.iv`
  color: ${e.colors.grayscale.base};
  backgroundColor: ${e.colors.grayscale.light2}};

  .ant-menu-item:hover {
    color: ${e.colors.grayscale.base};
    cursor: default;
  }
`,{SubMenu:y}=m.$,_=e=>{var t,a,n;const[l,u]=(0,r.useState)("horizontal"),[_,x]=(0,r.useState)("nav-right");let w=!0;try{(0,o.k6)()}catch(e){w=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?u("inline"):u("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?x("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&x("nav-right-collapse")}t();const a=i()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,s.tZ)(v,null,(0,s.tZ)(h.X2,{className:"menu",role:"navigation"},e.name&&(0,s.tZ)("div",{className:"header"},e.name),(0,s.tZ)(m.v,{mode:l,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||w)&&t.usesRouter?(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{role:"tab","data-test":t["data-test"],className:t.name===e.activeChild?"active":""},(0,s.tZ)("div",null,(0,s.tZ)(d.rU,{to:t.url||""},t.label)))):(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{className:b()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,s.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,s.tZ)("div",{className:_},(0,s.tZ)(m.v,{mode:"horizontal",triggerSubMenuAction:"click"},null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,s.tZ)(y,{key:t,title:e.label,icon:(0,s.tZ)(g.Z.TriangleDown,null),popupOffset:[10,20],className:"dropdown-menu-links"},null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,s.tZ)(m.$.Item,{key:e.label,css:Z},(0,s.tZ)(f.u,{placement:"top",title:(0,c.t)("Enable 'Allow data upload' in any database's settings")},e.label)):(0,s.tZ)(m.$.Item,{key:e.label},(0,s.tZ)("a",{href:e.url},e.label)):null)))}))),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,s.tZ)(p.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick,"data-test":e["data-test"]},e.name))))),e.children)}},36579:(e,t,a)=>{"use strict";var n=a(67294),i=a(73935),r=a(5872),o=a.n(r),d=a(73727),l=a(5977),s=a(31405),c=a(91877),u=a(57902),b=a(38703),f=a(56052),h=a(85156),m=a(14890),p=a(37703),g=a(51995),v=a(11965),Z=a(94184),y=a.n(Z),_=a(13423),x=a(70163),w=a(1927);const C=g.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,S=e=>v.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function k({toast:e,onCloseToast:t}){const a=(0,n.useRef)(),[i,r]=(0,n.useState)(!1),o=()=>{r(!0)},d=(0,n.useCallback)((()=>{a.current&&clearTimeout(a.current),r((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,n.useEffect)((()=>(setTimeout(o),e.duration>0&&(a.current=setTimeout(d,e.duration)),()=>{a.current&&clearTimeout(a.current)})),[d,e.duration]);let l="toast--success",s=(0,v.tZ)(x.Z.CircleCheckSolid,{css:e=>S(e)});return e.toastType===w.p.WARNING?(s=(0,v.tZ)(x.Z.WarningSolid,{css:S}),l="toast--warning"):e.toastType===w.p.DANGER?(s=(0,v.tZ)(x.Z.ErrorSolid,{css:S}),l="toast--danger"):e.toastType===w.p.INFO&&(s=(0,v.tZ)(x.Z.InfoSolid,{css:S}),l="toast--info"),(0,v.tZ)(C,{className:y()("alert","toast",i&&"toast--visible",l),"data-test":"toast-container",role:"alert"},s,(0,v.tZ)(_.ZP,{content:e.text,noHtml:!e.allowHtml}),(0,v.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:d,"aria-label":"Close","data-test":"close-button"}))}const E=g.iK.div`
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
`;var $=a(72570);const T=(0,p.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,m.DE)({removeToast:$.RS},e)))((function({toasts:e,removeToast:t,position:a="bottom"}){return(0,v.tZ)(n.Fragment,null,e.length>0&&(0,v.tZ)(E,{id:"toast-presenter",position:a},e.map((e=>(0,v.tZ)(k,{key:e.id,toast:e,onCloseToast:t})))))}));var I,N=a(38552),D=a(43063),R=a.n(D),U=a(61988),F=a(43700),z=a(61337),L=a(55467),A=a(14114),P=a(40768),M=a(93185),j=a(4715),O=a(30381),q=a.n(O),V=a(20755),B=a(35932);!function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(I||(I={}));const K={[I.Charts]:(0,U.t)("charts"),[I.Dashboards]:(0,U.t)("dashboards"),[I.Recents]:(0,U.t)("recents"),[I.SavedQueries]:(0,U.t)("saved queries")},H=g.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,Q=g.iK.div`
  Button {
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`;function X({tableName:e,tab:t}){const a={[I.Charts]:"/chart/add",[I.Dashboards]:"/dashboard/new",[I.SavedQueries]:"/superset/sqllab?new=true"},n={[I.Charts]:"/chart/list",[I.Dashboards]:"/dashboard/list/",[I.SavedQueries]:"/savedqueryview/list/"},i={[I.Charts]:"empty-charts.svg",[I.Dashboards]:"empty-dashboard.svg",[I.Recents]:"union.svg",[I.SavedQueries]:"empty-queries.svg"},r=(0,v.tZ)("span",null,(0,U.t)("No %(tableName)s yet",{tableName:K[e]})),o=(0,v.tZ)("span",{className:"no-recents"},"Viewed"===t?(0,U.t)("Recently viewed charts, dashboards, and saved queries will appear here"):"Created"===t?(0,U.t)("Recently created charts, dashboards, and saved queries will appear here"):"Examples"===t?(0,U.t)("Example %(tableName)s will appear here",{tableName:e.toLowerCase()}):"Edited"===t?(0,U.t)("Recently edited charts, dashboards, and saved queries will appear here"):null);return"Mine"===t||"RECENTS"===e||"Examples"===t?(0,v.tZ)(H,null,(0,v.tZ)(j.HY,{image:`/static/assets/images/${i[e]}`,description:"RECENTS"===e||"Examples"===t?o:r},"RECENTS"!==e&&(0,v.tZ)(Q,null,(0,v.tZ)(B.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=a[e]}},(0,v.tZ)("i",{className:"fa fa-plus"}),"SAVED_QUERIES"===e?(0,U.t)("SQL query"):e.split("").slice(0,e.length-1).join(""))))):(0,v.tZ)(H,null,(0,v.tZ)(j.HY,{image:"/static/assets/images/star-circle.svg",description:(0,v.tZ)("span",{className:"no-favorites"},(0,U.t)("You don't have any favorites yet!"))},(0,v.tZ)(B.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=n[e]}},(0,U.t)("See all %(tableName)s",{tableName:"SAVED_QUERIES"===e?(0,U.t)("SQL Lab queries"):K[e]}))))}var Y;!function(e){e.EDITED="Edited",e.CREATED="Created",e.VIEWED="Viewed",e.EXAMPLE="Examples"}(Y||(Y={}));const W=g.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${({theme:e})=>4*e.gridUnit+"px"};
  }
`,G=(0,U.t)("[Untitled]"),J=(0,U.t)("Unknown"),ee=e=>"dashboard_title"in e?e.dashboard_title||G:"slice_name"in e?e.slice_name||G:"label"in e?e.label||G:e.item_title||G,te=e=>{if("sql"in e)return(0,v.tZ)(x.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&t.includes("dashboard")?(0,v.tZ)(x.Z.NavDashboard,null):null!=t&&t.includes("explore")?(0,v.tZ)(x.Z.NavCharts,null):null};function ae({activeChild:e,setActiveChild:t,activityData:a,user:i,loadedCount:r}){var o;const[d,l]=(0,n.useState)(),[s,c]=(0,n.useState)(!1);(0,n.useEffect)((()=>{"Edited"===e&&(c(!0),c(!0),(0,P.Ld)(i.userId).then((e=>{l([...e.editedChart,...e.editedDash]),c(!1)})))}),[e]);const u=[{name:"Edited",label:(0,U.t)("Edited"),onClick:()=>{t("Edited"),(0,z.LS)(z.dR.homepage_activity_filter,Y.EDITED)}},{name:"Created",label:(0,U.t)("Created"),onClick:()=>{t("Created"),(0,z.LS)(z.dR.homepage_activity_filter,Y.CREATED)}}];return null!=a&&a.Viewed&&u.unshift({name:"Viewed",label:(0,U.t)("Viewed"),onClick:()=>{t("Viewed"),(0,z.LS)(z.dR.homepage_activity_filter,Y.VIEWED)}}),s&&!d||r<3?(0,v.tZ)(Ee,null):(0,v.tZ)(W,null,(0,v.tZ)(V.Z,{activeChild:e,tabs:u}),(null==(o=a[e])?void 0:o.length)>0||"Edited"===e&&d&&d.length>0?(0,v.tZ)(P._L,{className:"recentCards"},("Edited"!==e?a[e]:d).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,U.t)("Viewed %s",q()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,U.t)("Modified %s",null==t?J:q()(t).fromNow())})(e);return(0,v.tZ)(P.ZB,{onClick:()=>{window.location.href=t},key:t},(0,v.tZ)(L.Z,{cover:(0,v.tZ)(n.Fragment,null),url:t,title:ee(e),description:a,avatar:te(e),actions:null}))}))):(0,v.tZ)(X,{tableName:I.Recents,tab:e}))}var ne=a(63105),ie=a.n(ne),re=a(34858),oe=a(12),de=a(83673),le=a(34024),se=a(32228);const ce=(0,A.ZP)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,examples:o}){const d=(0,l.k6)(),s=(0,z.rV)(z.dR.homepage_chart_filter,oe.s.EXAMPLES),c=ie()(o,(e=>"viz_type"in e)),{state:{loading:f,resourceCollection:h,bulkSelectEnabled:m},setResourceCollection:p,hasPerm:g,refreshData:Z,fetchData:y}=(0,re.Yi)("chart",(0,U.t)("chart"),t,!0,"Mine"===s?i:c,[],!1),_=(0,n.useMemo)((()=>h.map((e=>e.id))),[h]),[x,w]=(0,re.NE)("chart",_,t),{sliceCurrentlyEditing:C,openChartEditModal:S,handleChartUpdated:k,closeChartEditModal:E}=(0,re.fF)(p,h),[$,T]=(0,n.useState)(s),[N,D]=(0,n.useState)(!1),[R,F]=(0,n.useState)(!1),L=t=>{const a=[];return"Mine"===t?a.push({id:"owners",operator:"rel_m_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"chart_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a};(0,n.useEffect)((()=>{(R||"Favorite"===$)&&(e=>{y({pageIndex:0,pageSize:P.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:L(e)})})($),F(!0)}),[$]);const A=e=>{const t=e.map((({id:e})=>e));(0,se.Z)("chart",t,(()=>{D(!1)})),D(!0)},M=[{name:"Favorite",label:(0,U.t)("Favorite"),onClick:()=>{T(oe.s.FAVORITE),(0,z.LS)(z.dR.homepage_chart_filter,oe.s.FAVORITE)}},{name:"Mine",label:(0,U.t)("Mine"),onClick:()=>{T(oe.s.MINE),(0,z.LS)(z.dR.homepage_chart_filter,oe.s.MINE)}}];return o&&M.push({name:"Examples",label:(0,U.t)("Examples"),onClick:()=>{T(oe.s.EXAMPLES),(0,z.LS)(z.dR.homepage_chart_filter,oe.s.EXAMPLES)}}),f?(0,v.tZ)(Ee,{cover:r}):(0,v.tZ)(u.Z,null,C&&(0,v.tZ)(de.Z,{onHide:E,onSave:k,show:!0,slice:C}),(0,v.tZ)(V.Z,{activeChild:$,tabs:M,buttons:[{name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"}),(0,U.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,U.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===$?`/chart/list/?filters=(favorite:(label:${(0,U.t)("Yes")},value:!t))`:"/chart/list/";d.push(e)}}]}),null!=h&&h.length?(0,v.tZ)(P._L,{showThumbnails:r},h.map((n=>(0,v.tZ)(le.Z,{key:`${n.id}`,openChartEditModal:S,chartFilter:$,chart:n,userId:null==e?void 0:e.userId,hasPerm:g,showThumbnails:r,bulkSelectEnabled:m,refreshData:Z,addDangerToast:t,addSuccessToast:a,favoriteStatus:w[n.id],saveFavoriteStatus:x,handleBulkChartExport:A})))):(0,v.tZ)(X,{tableName:I.Charts,tab:$}),N&&(0,v.tZ)(b.Z,null))}));var ue=a(31069),be=a(42110),fe=a(33743),he=a(120),me=a(83862),pe=a(17198);be.Z.registerLanguage("sql",fe.Z);const ge=g.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover {
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    & > div {
      height: 171px;
    }
  }
  .gradient-container > div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({theme:e})=>e.colors.secondary.light3};
    display: inline-block;
    width: 100%;
    height: 179px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
`,ve=g.iK.div`
  svg {
    margin-left: ${({theme:e})=>10*e.gridUnit}px;
  }
  .query-title {
    padding: ${({theme:e})=>2*e.gridUnit+2}px;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,Ze=g.iK.div`
  pre {
    height: ${({theme:e})=>40*e.gridUnit}px;
    border: none !important;
    background-color: ${({theme:e})=>e.colors.grayscale.light5} !important;
    overflow: hidden;
    padding: ${({theme:e})=>4*e.gridUnit}px !important;
  }
`,ye=(0,A.ZP)((({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,featureFlag:o})=>{const{state:{loading:d,resourceCollection:l},hasPerm:s,fetchData:c,refreshData:u}=(0,re.Yi)("saved_query",(0,U.t)("query"),t,!0,i,[],!1),[b,f]=(0,n.useState)("Mine"),[h,m]=(0,n.useState)(!1),[p,Z]=(0,n.useState)({}),[y,_]=(0,n.useState)(!0),w=s("can_edit"),C=s("can_delete"),S=(0,g.Fg)(),k=t=>{const a=[];return"Mine"===t?a.push({id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}):a.push({id:"id",operator:"saved_query_is_fav",value:!0}),a};return d?(0,v.tZ)(Ee,{cover:r}):(0,v.tZ)(n.Fragment,null,h&&(0,v.tZ)(pe.Z,{description:(0,U.t)("This action will permanently delete the saved query."),onConfirm:()=>{h&&(({id:n,label:i})=>{ue.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const t={filters:[{id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}],pageSize:P.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};u(y?t:void 0),_(!1),m(!1),a((0,U.t)("Deleted: %s",i))}),(0,P.v$)((e=>t((0,U.t)("There was an issue deleting %s: %s",i,e)))))})(p)},onHide:()=>{m(!1)},open:!0,title:(0,U.t)("Delete Query?")}),(0,v.tZ)(V.Z,{activeChild:b,tabs:[{name:"Mine",label:(0,U.t)("Mine"),onClick:()=>c({pageIndex:0,pageSize:P.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:k("Mine")}).then((()=>f("Mine")))}],buttons:[{name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"}),(0,U.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,U.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),l.length>0?(0,v.tZ)(P._L,{showThumbnails:r},l.map((e=>{var i,d,l;return(0,v.tZ)(ge,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,v.tZ)(L.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,U.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(i=e.sql)&&i.length&&r&&o?(0,v.tZ)(Ze,null,(0,v.tZ)(be.Z,{language:"sql",lineProps:{style:{color:S.colors.grayscale.dark2,wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:he.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,P.IB)(e.sql,25))):!(r&&(null==e||null==(d=e.sql)||!d.length))&&(0,v.tZ)(n.Fragment,null),actions:(0,v.tZ)(ve,null,(0,v.tZ)(L.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,v.tZ)(j.Gj,{overlay:(l=e,(0,v.tZ)(me.v,null,w&&(0,v.tZ)(me.v.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${l.id}`}},(0,U.t)("Edit")),(0,v.tZ)(me.v.Item,{onClick:()=>{l.id&&(0,re.bR)(l.id,t,a)}},(0,U.t)("Share")),C&&(0,v.tZ)(me.v.Item,{onClick:()=>{m(!0),Z(l)}},(0,U.t)("Delete"))))},(0,v.tZ)(x.Z.MoreVert,{iconColor:S.colors.grayscale.base}))))}))}))):(0,v.tZ)(X,{tableName:I.SavedQueries,tab:b}))}));var _e=a(20818),xe=a(99415);const we=(0,A.ZP)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,examples:o}){const d=(0,l.k6)(),s=(0,z.rV)(z.dR.homepage_dashboard_filter,oe.s.EXAMPLES),c=ie()(o,(e=>!("viz_type"in e))),{state:{loading:u,resourceCollection:f},setResourceCollection:h,hasPerm:m,refreshData:p,fetchData:g}=(0,re.Yi)("dashboard",(0,U.t)("dashboard"),t,!0,"Mine"===s?i:c,[],!1),Z=(0,n.useMemo)((()=>f.map((e=>e.id))),[f]),[y,_]=(0,re.NE)("dashboard",Z,t),[x,w]=(0,n.useState)(),[C,S]=(0,n.useState)(s),[k,E]=(0,n.useState)(!1),[$,T]=(0,n.useState)(!1),N=t=>{const a=[];return"Mine"===t?a.push({id:"owners",operator:"rel_m_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"dashboard_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a};(0,n.useEffect)((()=>{($||"Favorite"===C)&&(e=>{g({pageIndex:0,pageSize:P.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:N(e)})})(C),T(!0)}),[C]);const D=e=>{const t=e.map((({id:e})=>e));(0,se.Z)("dashboard",t,(()=>{E(!1)})),E(!0)},R=[{name:"Favorite",label:(0,U.t)("Favorite"),onClick:()=>{S(oe.s.FAVORITE),(0,z.LS)(z.dR.homepage_dashboard_filter,oe.s.FAVORITE)}},{name:"Mine",label:(0,U.t)("Mine"),onClick:()=>{S(oe.s.MINE),(0,z.LS)(z.dR.homepage_dashboard_filter,oe.s.MINE)}}];return o&&R.push({name:"Examples",label:(0,U.t)("Examples"),onClick:()=>{S(oe.s.EXAMPLES),(0,z.LS)(z.dR.homepage_dashboard_filter,oe.s.EXAMPLES)}}),u?(0,v.tZ)(Ee,{cover:r}):(0,v.tZ)(n.Fragment,null,(0,v.tZ)(V.Z,{activeChild:C,tabs:R,buttons:[{name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"}),(0,U.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,U.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===C?`/dashboard/list/?filters=(favorite:(label:${(0,U.t)("Yes")},value:!t))`:"/dashboard/list/";d.push(e)}}]}),x&&(0,v.tZ)(_e.Z,{dashboardId:null==x?void 0:x.id,show:!0,onHide:()=>w(void 0),onSubmit:e=>ue.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{h(f.map((t=>t.id===e.id?e.result:t)))}),(0,P.v$)((e=>t((0,U.t)("An error occurred while fetching dashboards: %s",e)))))}),f.length>0&&(0,v.tZ)(P._L,{showThumbnails:r},f.map((n=>(0,v.tZ)(xe.Z,{key:n.id,dashboard:n,hasPerm:m,bulkSelectEnabled:!1,showThumbnails:r,dashboardFilter:C,refreshData:p,addDangerToast:t,addSuccessToast:a,userId:null==e?void 0:e.userId,loading:u,openDashboardEditModal:e=>w(e),saveFavoriteStatus:y,favoriteStatus:_[n.id],handleBulkDashboardExport:D})))),0===f.length&&(0,v.tZ)(X,{tableName:I.Dashboards,tab:C}),k&&(0,v.tZ)(b.Z,null))})),Ce=["2","3"],Se=g.iK.div`
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  .ant-row.menu {
    margin-top: -15px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4};
    &:after {
      content: '';
      display: block;
      border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
      margin: 0px ${({theme:e})=>6*e.gridUnit}px;
      position: relative;
      width: 100%;
      ${P.mq[1]} {
        margin-top: 5px;
        margin: 0px 2px;
      }
    }
    .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal {
      padding-left: ${({theme:e})=>8*e.gridUnit}px;
    }
    button {
      padding: 3px 21px;
    }
  }
  .ant-card-meta-description {
    margin-top: ${({theme:e})=>e.gridUnit}px;
  }
  .ant-card.ant-card-bordered {
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
  .ant-collapse-item .ant-collapse-content {
    margin-bottom: ${({theme:e})=>-6*e.gridUnit}px;
  }
  div.ant-collapse-item:last-child.ant-collapse-item-active
    .ant-collapse-header {
    padding-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
  div.ant-collapse-item:last-child .ant-collapse-header {
    padding-bottom: ${({theme:e})=>9*e.gridUnit}px;
  }
  .loading-cards {
    margin-top: ${({theme:e})=>8*e.gridUnit}px;
    .ant-card-cover > div {
      height: 168px;
    }
  }
`,ke=g.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-content: space-between;\n    height: 50px;\n    background-color: ${e.colors.grayscale.light5};\n    .welcome-header {\n      font-size: ${e.typography.sizes.l}px;\n      padding: ${4*e.gridUnit}px ${2*e.gridUnit+2}px;\n      margin: 0 ${2*e.gridUnit}px;\n    }\n    .switch {\n      display: flex;\n      flex-direction: row;\n      margin: ${4*e.gridUnit}px;\n      span {\n        display: block;\n        margin: ${1*e.gridUnit}px;\n        line-height: 1;\n      }\n    }\n  `}
`,Ee=({cover:e})=>(0,v.tZ)(P._L,{showThumbnails:e,className:"loading-cards"},[...new Array(P.iv)].map(((t,a)=>(0,v.tZ)(L.Z,{key:a,cover:!e&&(0,v.tZ)(n.Fragment,null),description:"",loading:!0})))),$e=(0,A.ZP)((function({user:e,addDangerToast:t}){const a=e.userId.toString(),i=`/superset/recent_activity/${e.userId}/?limit=6`,[r,o]=(0,n.useState)("Loading"),d=(0,z.OH)(a,null);let l=!1;(0,c.cr)(M.T.THUMBNAILS)&&(l=void 0===(null==d?void 0:d.thumbnails)||(null==d?void 0:d.thumbnails));const[s,u]=(0,n.useState)(l),[b,f]=(0,n.useState)(null),[h,m]=(0,n.useState)(null),[p,g]=(0,n.useState)(null),[Z,y]=(0,n.useState)(null),[_,x]=(0,n.useState)(0),w=(0,z.rV)(z.dR.homepage_collapse_state,[]),[C,S]=(0,n.useState)(w);(0,n.useEffect)((()=>{const n=(0,z.rV)(z.dR.homepage_activity_filter,null);S(w.length>0?w:Ce),(0,P.Hn)(e.userId,i,t).then((e=>{const t={};if(t.Examples=e.examples,e.viewed){const a=R()(e.viewed,["item_url",null]).map((e=>e));t.Viewed=a,!n&&t.Viewed?o("Viewed"):n||t.Viewed?o(n||"Created"):o("Created")}else o(n||"Created");f((e=>({...e,...t})))})).catch((0,P.v$)((e=>{f((e=>({...e,Viewed:[]}))),t((0,U.t)("There was an issue fetching your recent activity: %s",e))})));const r=[{col:"created_by",opr:"rel_o_m",value:`${a}`}];(0,P.B1)(a,"dashboard").then((e=>{y(e),x((e=>e+1))})).catch((e=>{y([]),x((e=>e+1)),t((0,U.t)("There was an issue fetching your dashboards: %s",e))})),(0,P.B1)(a,"chart").then((e=>{m(e),x((e=>e+1))})).catch((e=>{m([]),x((e=>e+1)),t((0,U.t)("There was an issue fetching your chart: %s",e))})),(0,P.B1)(a,"saved_query",r).then((e=>{g(e),x((e=>e+1))})).catch((e=>{g([]),x((e=>e+1)),t((0,U.t)("There was an issues fetching your saved queries: %s",e))}))}),[]),(0,n.useEffect)((()=>{!w&&null!=p&&p.length&&S((e=>[...e,"4"])),f((e=>({...e,Created:[...(null==h?void 0:h.slice(0,3))||[],...(null==Z?void 0:Z.slice(0,3))||[],...(null==p?void 0:p.slice(0,3))||[]]})))}),[h,p,Z]),(0,n.useEffect)((()=>{var e;!w&&null!=b&&null!=(e=b.Viewed)&&e.length&&S((e=>["1",...e]))}),[b]);const k=!(null!=b&&b.Examples||null!=b&&b.Viewed);return(0,v.tZ)(Se,null,(0,v.tZ)(ke,null,(0,v.tZ)("h1",{className:"welcome-header"},"Home"),(0,c.cr)(M.T.THUMBNAILS)?(0,v.tZ)("div",{className:"switch"},(0,v.tZ)(j.KU,{checked:s,onChange:()=>{u(!s),(0,z.I_)(a,{thumbnails:!s})}}),(0,v.tZ)("span",null,"Thumbnails")):null),(0,v.tZ)(F.Z,{activeKey:C,onChange:e=>{S(e),(0,z.LS)(z.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,v.tZ)(F.Z.Panel,{header:(0,U.t)("Recents"),key:"1"},b&&(b.Viewed||b.Examples||b.Created)&&"Loading"!==r?(0,v.tZ)(ae,{user:{userId:e.userId},activeChild:r,setActiveChild:o,activityData:b,loadedCount:_}):(0,v.tZ)(Ee,null)),(0,v.tZ)(F.Z.Panel,{header:(0,U.t)("Dashboards"),key:"2"},!Z||k?(0,v.tZ)(Ee,{cover:s}):(0,v.tZ)(we,{user:e,mine:Z,showThumbnails:s,examples:null==b?void 0:b.Examples})),(0,v.tZ)(F.Z.Panel,{header:(0,U.t)("Charts"),key:"3"},!h||k?(0,v.tZ)(Ee,{cover:s}):(0,v.tZ)(ce,{showThumbnails:s,user:e,mine:h,examples:null==b?void 0:b.Examples})),(0,v.tZ)(F.Z.Panel,{header:(0,U.t)("Saved queries"),key:"4"},p?(0,v.tZ)(ye,{showThumbnails:s,user:e,mine:p,featureFlag:(0,c.cr)(M.T.THUMBNAILS)}):(0,v.tZ)(Ee,{cover:s}))))})),Te=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4787)]).then(a.bind(a,28999)))),Ie=(0,n.lazy)((()=>Promise.all([a.e(9480),a.e(8782),a.e(9502)]).then(a.bind(a,63082)))),Ne=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(1611)]).then(a.bind(a,35276)))),De=(0,n.lazy)((()=>Promise.all([a.e(504),a.e(2087),a.e(4921),a.e(8782),a.e(5289),a.e(9772),a.e(9986),a.e(665)]).then(a.bind(a,13434)))),Re=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(9452)]).then(a.bind(a,69053)))),Ue=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(8774)]).then(a.bind(a,23767)))),Fe=(0,n.lazy)((()=>Promise.all([a.e(504),a.e(2087),a.e(4921),a.e(5289),a.e(9772),a.e(9986),a.e(7936),a.e(468)]).then(a.bind(a,82343)))),ze=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4502)]).then(a.bind(a,30075)))),Le=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(5656)]).then(a.bind(a,97894)))),Ae=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(9137)]).then(a.bind(a,25163)))),Pe=(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4173),a.e(7633)]).then(a.bind(a,82842)))),Me=[{path:"/superset/welcome/",Component:$e},{path:"/dashboard/list/",Component:Ue},{path:"/superset/dashboard/:idOrSlug/",Component:Fe},{path:"/chart/list/",Component:De},{path:"/tablemodelview/list/",Component:Le},{path:"/databaseview/list/",Component:ze},{path:"/savedqueryview/list/",Component:(0,n.lazy)((()=>Promise.all([a.e(8782),a.e(4173),a.e(9173)]).then(a.bind(a,49588))))},{path:"/csstemplatemodelview/list/",Component:Re},{path:"/annotationlayermodelview/list/",Component:Te},{path:"/annotationmodelview/:annotationLayerId/annotation/",Component:Ne},{path:"/superset/sqllab/history/",Component:Pe},{path:"/alert/list/",Component:Ie},{path:"/report/list/",Component:Ie,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:Ae},{path:"/report/:alertId/log/",Component:Ae,props:{isReportEnabled:!0}}],je=Me.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function Oe(e){if(e){const t=e.split(/[?#]/)[0];return!!je[t]}return!1}var qe=a(3741),Ve=a(68135),Be=a(35755),Ke=a(38626),He=a(57865),Qe=a(89474),Xe=a(33626);const Ye={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function We({children:e,messages:t}){const a=(0,A.e1)();return(0,Xe.J)((()=>{t.forEach((e=>{const[t,n]=e,i=a[Ye[t]];i&&i(n)}))})),e}var Ge=a(29147),Je=a(14278);const et={...h.b.common},tt=({children:e})=>(0,v.tZ)(Ve.a,{theme:h.r},(0,v.tZ)(p.zt,{store:Qe.h},(0,v.tZ)(Ke.W,{backend:He.PD},(0,v.tZ)(We,{messages:et.flash_messages},(0,v.tZ)(Ge.DG,null,(0,v.tZ)(Je.EM,null,(0,v.tZ)(Be.Fz,{ReactRouterRoute:l.AW,stringifyOptions:{encode:!1}},e))))))),at=()=>{const{pathname:e}=(0,l.TH)();return(0,n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};(0,N.Z)();const nt={...h.b.user},it={...h.b.common.menu_data};let rt;(0,c.fG)(h.b.common.feature_flags);const ot=()=>{const e=(0,l.TH)();return(0,n.useEffect)((()=>{rt&&rt!==e.pathname&&qe.Yd.markTimeOrigin(),rt=e.pathname}),[e.pathname]),(0,v.tZ)(n.Fragment,null)};i.render((0,v.tZ)((()=>(0,v.tZ)(d.VK,null,(0,v.tZ)(at,null),(0,v.tZ)(ot,null),(0,v.tZ)(tt,null,(0,v.tZ)(s.n,null),(0,v.tZ)(f.Z,{data:it,isFrontendRoute:Oe}),(0,v.tZ)(l.rs,null,Me.map((({path:e,Component:t,props:a={},Fallback:i=b.Z})=>(0,v.tZ)(l.AW,{path:e,key:e},(0,v.tZ)(n.Suspense,{fallback:(0,v.tZ)(i,null)},(0,v.tZ)(u.Z,null,(0,v.tZ)(t,o()({user:nt},a)))))))),(0,v.tZ)(T,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return l[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=l,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,i)=>{if(!a){var r=1/0;for(s=0;s<e.length;s++){for(var[a,n,i]=e[s],o=!0,d=0;d<a.length;d++)(!1&i||r>=i)&&Object.keys(c.O).every((e=>c.O[e](a[d])))?a.splice(d--,1):(o=!1,i<r&&(r=i));if(o){e.splice(s--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,n,i]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);c.r(i);var r={};t=t||[null,a({}),a([]),a(a)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,c.d(i,r),i},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>2087===e?"2087.baa5e0048cf745c7779a.entry.js":3718===e?"3718.a62d0a8e8aa478a00e40.entry.js":4593===e?"4593.f9f64c6e7c3957f0f370.entry.js":5289===e?"5289.1f281a8ea74575cab4d5.entry.js":2491===e?"2491.b6ec07a850123f7d9e05.entry.js":9772===e?"9772.4be0ea7bd5105ac3bb35.entry.js":8274===e?"8274.9bfe10f0c5080be5587a.entry.js":9480===e?"9480.1f1de800c528969bb984.entry.js":504===e?"thumbnail.e6221c8a5f5abc766a2c.entry.js":4921===e?"4921.73a7b2cd6fca99cd4beb.entry.js":9986===e?"9986.eaa537d2fa0c4755d248.entry.js":3906===e?"3906.6de478b94d6364c2b6f9.entry.js":2441===e?"2441.9d43893841d3df512e51.entry.js":4317===e?"4317.efc833d8ec8fcff74411.entry.js":4750===e?"4750.f49b8cbf42755c3c9806.entry.js":4365===e?"4365.945362f1422adbdc8c39.entry.js":4489===e?"4489.aee985408a9c69296147.entry.js":{57:"38f4b0c5b2c751f3029f",112:"0cceda87f254629c0f55",137:"2750e07540640c5be0b5",158:"7af34d924b2b2e3aaaa7",177:"ca39eb74c4d49fd55005",183:"2d69e60dfe962c42eee9",215:"f6160a99b46b22e18caa",310:"e2c18a71d3a5c875a789",312:"90af13ee4a0d5e067aab",326:"13e2e44acc050fe4f4e7",336:"e5df42bc5a8ad6d9aed0",347:"3f1f3f38b6b3b9616e75",349:"0202ec1626f196ac9881",363:"e517ebae29a6c51c5e09",380:"b10c6bc15614f70674c7",440:"163404f983dce20259a1",444:"f6e6655a4a9d180a084d",452:"0717f15885d08e5a5982",468:"dbd79929c1fb033b0bd2",498:"f5d9188e06d66de8db23",597:"d08e416f0ccd4854221a",600:"d0d66aaabc04eac7f3a8",616:"22160af30d9e816ffa2e",665:"f88f5c300004c293edf5",704:"0d61450ba8761d04ddf9",741:"ddfd188cfe976cc863f1",775:"3c04ba1e823d1dfb5b89",807:"c311b699287e23c5a49e",826:"3f59c315d2e5d8b15ff9",881:"78d550ef04ba4f916588",895:"9cbed3c01a59f66c9b68",954:"0ee69bed6107a59fe81f",992:"3972b8e3abebd6e63caf",999:"54febe7bb96630a3013d",1020:"275351648e7df01f26d5",1075:"529bc3f823e6fc60cd70",1130:"98fb4e05eadd162d8fde",1161:"173a9f0742b2a67e7a1b",1174:"8849a375bcccf9df44ed",1185:"9ea89afc9bce89ad80ad",1221:"fce32082981c2dec49e7",1256:"3479cded7646565257ab",1258:"604b6fdb6661c6e1205e",1261:"858915f2b7f5a9a59fc3",1263:"62048be321505812ff6a",1293:"825c8594d240fbf17f20",1351:"8f38137e5b4342d2da4f",1382:"587624c90ea6738e9972",1398:"951f07c7c3e07b72cca4",1402:"308402927cb1af91614e",1493:"55bdc0586c89caac178c",1568:"40f6c6e7fe72a2bc1b13",1573:"90afe1a34c07bae41851",1605:"2f7a1d1a47b76ec8c5c1",1611:"d974960b3276c7143387",1862:"4f5a2ebd6e31cf1109d8",1877:"7dd385c6e9090a1b2734",1899:"0502b5cdba557a6ff693",1948:"f59707dedff3a7fc4091",2079:"1506fd7de5b75c690b36",2089:"6762245ee484d3ffcb17",2105:"8146230ef7c416ab6cb3",2112:"e9db5db193378823afb2",2229:"a0489dd5b2f28952a9dc",2264:"b12e914fd5684cf329c8",2267:"1665a22356999f7d09cb",2403:"a0d676c094e2f90b5f0a",2439:"7e0114c1e26108fed2fc",2549:"1f35e71bc0f82e09adf6",2646:"22d6b0b1d527d046d260",2698:"75dfd37839ade6c35680",2713:"617726f17984c3192f46",2797:"6a8bfc332a16fd0f491c",2955:"21b0680368dea0bf61c5",2983:"b85bf5c0e81e6910fa04",2991:"61490367f35abf38e575",3036:"3b134d76ef26f7542380",3126:"9829ed24951e047c1187",3141:"6db0cd2a326a62903532",3187:"6802e173609e0f6b30c1",3208:"c83ca863a53dd07d6e07",3232:"86296449d9c861643378",3240:"78cb567a5b91a58f0c01",3265:"edc982d88e8d399830b7",3325:"46b72d4c661fb47189a2",3391:"80372a7194e9022afd80",3496:"58bb3d2bd63b43c265bc",3544:"78f16a06c10598e0b889",3558:"a1e4af25d87548162409",3567:"ccb341a117b2ee4d5e98",3588:"8dbc009de7cea2d81e31",3606:"7621f705e25335f0121d",3711:"cb0a5497e8dfd6e40e1b",3745:"98581cb610a83871af98",3749:"68f7a3e5d439a23f4d89",3831:"2b70b41875ae8ef7fd7d",3871:"79cd11ca09fe747b1bfd",3955:"03c4e9c66c2c63d79acc",3985:"d51bceddde4bd627d6c2",4139:"21f4237f0879646a0d9c",4173:"1497473dd8bb3cfc1f92",4194:"eb98cf212c052ff4dbef",4237:"b26c82ecb232cd0532de",4266:"958a29639679b362fba3",4273:"827fb5197c686f0662c7",4421:"6290fd574418d5e32572",4458:"85219e9a6edf20621bea",4474:"b28a000dfeccbe1d81f3",4494:"7310d9d0949b4227a562",4502:"408ab18dc6091346cd6f",4572:"9d2bfa6bb53ce8784a2b",4579:"8164718d6dabba184b88",4625:"7c5442bc1e5598e90822",4662:"712187ae25c83dce2174",4667:"47a4c2c13ccfb09d3757",4732:"d30d055df1b3b7e84dba",4757:"124ced191b8ef59a3e2c",4758:"8546effff2a679b01358",4787:"228982fa3bbfb3cea7b3",4790:"4a9181a8fe8ffc5e3dcb",4794:"fa2a3ad4d82d3d4459fd",4797:"be22f9be14d0445f0f87",4810:"82297ac94bca3b3859d2",4817:"259525e7b455b997848a",4832:"5a592d69bbd6eff5fd66",4851:"a9ccd9b9ba2b847b6417",4946:"0eccf4c7519446ab3438",4972:"132e72e310c461806395",5051:"50ad50de04f449dd9956",5094:"838ef225492e310d33d5",5123:"32f8de0d2820b6fae5cf",5181:"34e5d3384af063aeb427",5195:"da8bf97e481b90ceac4e",5201:"0c0d33390c8cfa65fbbd",5215:"79d6344a8913e2aec103",5224:"2137b5c272446c93f5b7",5226:"43d2d046df38601d76af",5249:"8c40bbdfb03d04b29d02",5264:"db3a2f0029307b78e598",5281:"8b441b46691123854b6b",5330:"c3630bd2c65829e4c7a1",5335:"cbdabbf1e2d3d7e254df",5350:"a4556551303ff93cd4bb",5359:"fe8715215a93c63953ec",5367:"12541bbb82603d7e2d66",5378:"64f6237479272e5c5c3a",5507:"c7cdf6f84afbcf502ddb",5566:"a10ad064800c1df565c3",5580:"fa964e628191e708a48e",5592:"2e19c97690b06c32f1b4",5641:"207a4252758bcd4d3cbd",5656:"a3599647a1dce49c30c7",5707:"2b76605f1d6e11cf2df7",5771:"3acf2091ed043492ae76",5777:"58d0e720fba584974cbf",5802:"8caa85ec5eb98cb83343",5816:"3374bb9b8c7f89ae2da0",5832:"6641ca7ff6e2a41a1257",5838:"af5789397b8a13e08c38",5962:"ed92d26f4a929fbbc564",5972:"713e574a1d9b58a2135d",5998:"cb935545042c1ce92ecb",6061:"c9b07a9f1a9bae8552b2",6126:"62a79c1241ef166355de",6150:"6d17f8394d91a097eab6",6167:"ad4ff700d252caec8ce3",6207:"17d778c7ae36315bd979",6254:"15612e9a43534ba1a97d",6303:"b8e13b4773cab5f877ee",6357:"855323b00072f22891ac",6371:"150eda30c7d4d3f90b81",6377:"6f0f091efb5ecc18dde4",6420:"12131f944d05bfbc2b3d",6447:"bfa0e245c6ade68dd3de",6486:"9801caf1364f204340c9",6507:"f00932e24ce22bd1ca3b",6579:"f8fd51701b3ce361f688",6668:"0062637c2e307e4a2536",6682:"bdf3637ab1584c67ae30",6693:"c37db19068bf7910b244",6758:"fc3f2d7bb3a5b8f56817",6819:"1d34427183b1bc32acfd",6871:"ee6aaef556c2b3abedbf",6883:"369bb61eda9423d64359",6968:"2ec729de1b9e97e6ce11",6981:"68a6c50b90b0d58736ad",7003:"e8fb9fe508fee6bcd85c",7183:"e16648fac64644e729c7",7245:"7cbb94932e339ddac779",7249:"b5e7e83ac26bf4ec5fbe",7298:"44a89fd4ae0a1e57ae6b",7405:"2bfae0bdc72a5900199c",7460:"140aaba41af8a7b3891b",7521:"935545b9bc56d8343445",7584:"76c89f632c7a8315389e",7610:"69ae28e81db50e4eb6d7",7633:"16e19cefdf1f59071d23",7654:"2a756f12d13ca404a744",7716:"36cbf8b4562f9c80a2e0",7760:"7ab09485b0ef9d161fbf",7803:"7967d211212f85a80dde",7832:"fd7f701b105cdaddf11a",7850:"00845228665a5b4e5deb",7922:"034a466af79e5aec1e20",7936:"03d5d01310cea350d5f1",7974:"2fa7652f1a627818db3e",7984:"c70e87340845dac9e81d",7989:"e2c714d33a44d93648c0",8041:"b0b7ebae013a28bd3488",8312:"9b8eaa85fdf772d344ca",8349:"739a4da1e29881e55220",8398:"effe2e4690559c9dd638",8425:"d93b4ec64b1aced0c856",8463:"55fba49f8743cb008b18",8464:"a7c9c77204be1fa48aab",8491:"bc7fc77e4b9a26daf89a",8551:"213fce9c284921d22fd2",8623:"f3f0b0e4997f9dcf5264",8650:"122a0257d32b9b9dfd1f",8656:"930c6a0cab67c68681cd",8682:"e55361dd9642ab2c6cce",8695:"794b59e83f2639bbd4f5",8701:"07bc03500fdcdf86c946",8750:"a4875cd79305e6148ef1",8774:"96e1050c054a797aa37b",8782:"03ceeba96b57a79ff255",8883:"7d0a7cd57a0e5306d21e",8924:"30cbf0580b9a9c8153fe",8970:"9662eb9aee235b45a0ba",9013:"2ae202ac00476dac5f77",9052:"bdc47b9882987a855bd3",9101:"e312f8189d0016e01622",9109:"70032121a681b08c1ca9",9137:"7d3bedaee463aca9b4bc",9173:"79571311b18f0b22c32d",9207:"5716fdaacba60c1b00fc",9305:"857144aa3240952e069c",9322:"4c640e97a929f739a3df",9325:"d2f1f08edbd1d07cd106",9393:"aa0534433005d1a82b09",9396:"f9f3042a683c69591565",9452:"01dc7b4ebb07f792c1fe",9483:"fcce3a445fdb577251e2",9502:"67a98977f31888617f91",9510:"a1ded01332afd173d7e1",9558:"11464bec3d82809a0027",9622:"a6e817b0d68ef7cee2d4",9767:"9e8414a89898cf629e48",9794:"6c8b7483e1f99924e7f5",9811:"b3748ff012fc7ee520ef",9857:"169119af235c81fa0bc3",9873:"34c9f3b849b55ef12fa4",9877:"f6f5b18362ffb2b9362c"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",9502:"AlertList"}[e]||e)+"."+{137:"2750e07540640c5be0b5",380:"b10c6bc15614f70674c7",452:"0717f15885d08e5a5982",1261:"858915f2b7f5a9a59fc3",1877:"7dd385c6e9090a1b2734",3036:"3b134d76ef26f7542380",4194:"eb98cf212c052ff4dbef",4237:"b26c82ecb232cd0532de",4494:"7310d9d0949b4227a562",5378:"64f6237479272e5c5c3a",5566:"a10ad064800c1df565c3",6871:"ee6aaef556c2b3abedbf",8623:"f3f0b0e4997f9dcf5264",8650:"122a0257d32b9b9dfd1f",9502:"67a98977f31888617f91"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="superset:",c.l=(e,t,a,r)=>{if(n[e])n[e].push(t);else{var o,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+a){o=u;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",i+a),o.src=e),n[e]=[t];var b=(t,a)=>{o.onerror=o.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(a))),t)return t(a)},f=setTimeout(b.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=b.bind(null,o.onerror),o.onload=b.bind(null,o.onload),d&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",r=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),i=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=(o=a[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var o;if((i=(o=r[n]).getAttribute("data-href"))===e||i===t)return o}})(n,i))return t();((e,t,a,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=d,i.parentNode.removeChild(i),n(l)}},i.href=t,document.head.appendChild(i)})(e,i,t,a)})),o={7103:0,5296:0},c.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{137:1,380:1,452:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5378:1,5566:1,6871:1,8623:1,8650:1,9502:1}[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={7103:0,5296:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(126|687)1$/.test(t))e[t]=0;else{var i=new Promise(((a,i)=>n=e[t]=[a,i]));a.push(n[2]=i);var r=c.p+c.u(t),o=new Error;c.l(r,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,n[1](o)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(126|687)1$/.test(t))){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[r,o,d]=a,l=0;if(r.some((t=>0!==e[t]))){for(n in o)c.o(o,n)&&(c.m[n]=o[n]);if(d)var s=d(c)}for(t&&t(a);l<r.length;l++)i=r[l],c.o(e,i)&&e[i]&&e[i][0](),e[r[l]]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),d={468:[3906,995,9480,2491,4750,4365,8274,4489,382,452]},c.f.preload=e=>{var t=d[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[294,3704,1030,9102,185,9755,4981,5827,7106,1844,995,3166,9602,9525,5010,3920,3389,2569,9152,6052,382],(()=>c(85156)));var u=c.O(void 0,[294,3704,1030,9102,185,9755,4981,5827,7106,1844,995,3166,9602,9525,5010,3920,3389,2569,9152,6052,382],(()=>c(36579)));u=c.O(u)})();
//# sourceMappingURL=spa.a4b10f8456859dc4729e.entry.js.map