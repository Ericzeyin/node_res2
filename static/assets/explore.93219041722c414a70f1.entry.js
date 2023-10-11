(()=>{var e,t,a,o,r,n,s,i={31835:(e,t,a)=>{"use strict";var o={};a.r(o),a.d(o,{FETCH_DASHBOARDS_FAILED:()=>O,FETCH_DASHBOARDS_SUCCEEDED:()=>k,REMOVE_SAVE_MODAL_ALERT:()=>M,SAVE_SLICE_FAILED:()=>$,SAVE_SLICE_SUCCESS:()=>j,fetchDashboards:()=>R,fetchDashboardsFailed:()=>I,fetchDashboardsSucceeded:()=>N,removeSaveModalAlert:()=>z,saveSlice:()=>L,saveSliceFailed:()=>U,saveSliceSuccess:()=>F});var r={};a.r(r),a.d(r,{CREATE_NEW_SLICE:()=>ve,FETCH_DATASOURCES_STARTED:()=>ae,FETCH_DATASOURCES_SUCCEEDED:()=>re,FETCH_DATASOURCE_SUCCEEDED:()=>ee,FETCH_FAVE_STAR:()=>ce,POST_DATASOURCE_STARTED:()=>X,SAVE_FAVE_STAR:()=>de,SET_DATASOURCE:()=>W,SET_DATASOURCES:()=>J,SET_DATASOURCE_TYPE:()=>B,SET_EXPLORE_CONTROLS:()=>pe,SET_FIELD_VALUE:()=>fe,SET_FORCE_QUERY:()=>we,SLICE_UPDATED:()=>_e,TOGGLE_FAVE_STAR:()=>se,UPDATE_CHART_TITLE:()=>me,createNewSlice:()=>ye,exploreActions:()=>Ee,fetchDatasourceSucceeded:()=>te,fetchDatasourcesStarted:()=>oe,fetchDatasourcesSucceeded:()=>ne,fetchFaveStar:()=>le,saveFaveStar:()=>ue,setControlValue:()=>he,setDatasource:()=>Y,setDatasourceType:()=>K,setDatasources:()=>G,setExploreControls:()=>be,setForceQuery:()=>Te,sliceUpdated:()=>Se,toggleFaveStar:()=>ie,updateChartTitle:()=>ge});var n=a(67294),s=a(73935),i=a(14890),c=a(53894),l=a(14670),d=a.n(l),u=a(31069),f=a(9679),h=a(97381),p=a(3741),b=a(23279),m=a.n(b);const g=new class{constructor({callback:e=(()=>{}),sizeThreshold:t=1e3,delayThreshold:a=1e3}){this.queue=[],this.sizeThreshold=t,this.delayThrehold=a,this.trigger=m()(this.trigger.bind(this),this.delayThrehold),this.callback=e}append(e){this.queue.push(e),this.trigger()}trigger(){if(this.queue.length>0){const e=this.queue.splice(0,this.sizeThreshold);this.callback.call(null,e),this.queue.length>0&&this.trigger()}}}({callback:e=>{if(e.length<=0)return;let t="/superset/log/?explode=events";const{source:a,source_id:o}=e[0];if("dashboard"===a?t+=`&dashboard_id=${o}`:"slice"===a&&(t+=`&slice_id=${o}`),navigator.sendBeacon){const a=new FormData;a.append("events",(0,f.o)(e)),navigator.sendBeacon(t,a)}else u.Z.post({endpoint:t,postPayload:{events:e},parseMethod:null})},sizeThreshold:1024,delayThreshold:1e3});let v=0;var y=a(91877),_=a(99543),S=a(72570),w=a(1927);function T(e=[]){const t=[];return e.forEach((([e,a])=>{const o="danger"===e?w.p.DANGER:"success"===e&&w.p.SUCCESS||w.p.INFO,r=(0,S.fz)({text:a,toastType:o}).payload;t.push(r)})),t}var E=a(12515),Z=a(35854),x=a(10331),C=a(61358),A=a(37863),D=a(8868);const k="FETCH_DASHBOARDS_SUCCEEDED";function N(e){return{type:k,choices:e}}const O="FETCH_DASHBOARDS_FAILED";function I(e){return{type:O,userId:e}}function R(e){return function(t){return u.Z.get({endpoint:`/dashboardasync/api/read?_flt_0_owners=${e}`}).then((({json:e})=>{const a=e.pks.map(((t,a)=>({value:t,label:(e.result[a]||{}).dashboard_title})));return t(N(a))})).catch((()=>t(I(e))))}}const $="SAVE_SLICE_FAILED";function U(){return{type:$}}const j="SAVE_SLICE_SUCCESS";function F(e){return{type:j,data:e}}const M="REMOVE_SAVE_MODAL_ALERT";function z(){return{type:M}}function L(e,t){return a=>{const o=(0,E.H6)({formData:e,endpointType:"base",force:!1,curUrl:null,requestParams:t}),r=(0,E.u)({formData:e,force:!1,resultFormat:"json",resultType:"full"});return u.Z.post({url:o,postPayload:{form_data:e,query_context:r}}).then((e=>(a(F(e.json)),e.json))).catch((()=>a(U())))}}var q=a(55786),P=a(52256),H=a(69856),Q=a(61988);const V="/superset/favstar/slice",B="SET_DATASOURCE_TYPE";function K(e){return{type:B,datasourceType:e}}const W="SET_DATASOURCE";function Y(e){return{type:W,datasource:e}}const J="SET_DATASOURCES";function G(e){return{type:J,datasources:e}}const X="POST_DATASOURCE_STARTED",ee="FETCH_DATASOURCE_SUCCEEDED";function te(){return{type:ee}}const ae="FETCH_DATASOURCES_STARTED";function oe(){return{type:ae}}const re="FETCH_DATASOURCES_SUCCEEDED";function ne(){return{type:re}}const se="TOGGLE_FAVE_STAR";function ie(e){return{type:se,isStarred:e}}const ce="FETCH_FAVE_STAR";function le(e){return function(t){u.Z.get({endpoint:`${V}/${e}/count/`}).then((({json:e})=>{e.count>0&&t(ie(!0))}))}}const de="SAVE_FAVE_STAR";function ue(e,t){return function(a){const o=t?"unselect":"select";u.Z.get({endpoint:`${V}/${e}/${o}/`}).then((()=>a(ie(!t)))).catch((()=>{a((0,S.Gb)((0,Q.t)("An error occurred while starring this chart")))}))}}const fe="SET_FIELD_VALUE";function he(e,t,a){return{type:fe,controlName:e,value:t,validationErrors:a}}const pe="UPDATE_EXPLORE_CONTROLS";function be(e){return{type:pe,formData:e}}const me="UPDATE_CHART_TITLE";function ge(e){return{type:me,sliceName:e}}const ve="CREATE_NEW_SLICE";function ye(e,t,a,o,r){return{type:ve,can_add:e,can_download:t,can_overwrite:a,slice:o,form_data:r}}const _e="SLICE_UPDATED";function Se(e){return{type:_e,slice:e}}const we="SET_FORCE_QUERY";function Te(e){return{type:we,force:e}}const Ee={...S.s2,setDatasourceType:K,setDatasource:Y,setDatasources:G,fetchDatasourcesStarted:oe,fetchDatasourcesSucceeded:ne,toggleFaveStar:ie,fetchFaveStar:le,saveFaveStar:ue,setControlValue:he,setExploreControls:be,updateChartTitle:ge,createNewSlice:ye,sliceUpdated:Se,setForceQuery:Te},Ze=(0,i.UY)({charts:A.Z,saveModal:function(e={},t){const a={[k]:()=>({...e,dashboards:t.choices}),[O]:()=>({...e,saveModalAlert:`fetching dashboards failed for ${t.userId}`}),[$]:()=>({...e,saveModalAlert:"Failed to save slice"}),[j]:t=>({...e,data:t}),[M]:()=>({...e,saveModalAlert:null})};return t.type in a?a[t.type]():e},dataMask:D.Z,explore:function(e={},t){const a={[P.DYNAMIC_PLUGIN_CONTROLS_READY]:()=>({...e,controls:t.controlsState}),[se]:()=>({...e,isStarred:t.isStarred}),[X]:()=>({...e,isDatasourceMetaLoading:!0}),[W](){const a={...e.form_data};t.datasource.type!==e.datasource.type&&("table"===t.datasource.type?(a.granularity_sqla=t.datasource.granularity_sqla,a.time_grain_sqla=t.datasource.time_grain_sqla,delete a.druid_time_origin,delete a.granularity):(a.druid_time_origin=t.datasource.druid_time_origin,a.granularity=t.datasource.granularity,delete a.granularity_sqla,delete a.time_grain_sqla));const o={...e.controls},r=[];t.datasource.id===e.datasource.id&&t.datasource.type===e.datasource.type||(a.time_range=H.X5,Object.entries(o).forEach((([e,n])=>{("column_name"===n.valueKey||"savedMetrics"in n||"columns"in n||"options"in n&&!Array.isArray(n.options))&&(o[e]={...n},a[e]=(0,x.YY)(t.datasource,n,n.value),(0,q.Z)(a[e]).length>0&&a[e]!==o[e].default&&r.push(e))})));const n={...e,controls:o,datasource:t.datasource,datasource_id:t.datasource.id,datasource_type:t.datasource.type};return{...n,form_data:a,controls:(0,Z.R3)(n,a),controlsTransferred:r}},[ae]:()=>({...e,isDatasourcesLoading:!0}),[J]:()=>({...e,datasources:t.datasources}),[fe](){const{controlName:a,value:o,validationErrors:r}=t;let n={...e.form_data,[a]:o};const s=e.form_data.metrics,i=e.form_data.column_config,c=n.viz_type;"metrics"===a&&s&&i&&(o.forEach(((e,t)=>{var a,o;(null==e?void 0:e.label)!==(null==(a=s[t])?void 0:a.label)&&i[null==(o=s[t])?void 0:o.label]&&(i[e.label]=i[s[t].label],delete i[s[t].label])})),n.column_config=i);const l=e.controls[t.controlName]||(0,x.Bx)(t.controlName,c)||{},d={...(0,x.vP)(l,e,t.value)},u={...e.controls.column_config,...i&&{value:i}},f={...e,controls:{...e.controls,[a]:d,..."metrics"===a&&{column_config:u}}},h={};Array.isArray(d.rerender)&&d.rerender.forEach((e=>{h[e]={...(0,x.vP)(f.controls[e],f,f.controls[e].value)}}));const p=d.validationErrors||[];(r||[]).forEach((e=>{p.includes(e)||p.push(e)}));const b=p&&p.length>0,m="viz_type"===t.controlName&&t.value!==e.controls.viz_type.value;let g=e.controls;if(m){const a=new x.os(e.form_data).transform(t.value,e);n=a.formData,g=a.controlsState}return{...e,form_data:n,triggerRender:d.renderTrigger&&!b,controls:{...g,[t.controlName]:{...d,validationErrors:p},...h}}},[pe]:()=>({...e,controls:(0,Z.R3)(e,t.formData)}),[me]:()=>({...e,sliceName:t.sliceName}),[ve]:()=>({...e,slice:t.slice,controls:(0,Z.R3)(e,t.form_data),can_add:t.can_add,can_download:t.can_download,can_overwrite:t.can_overwrite}),[_e](){var a,o;return{...e,slice:{...e.slice,...t.slice,owners:null!=(a=t.slice.owners)?a:null},sliceName:null!=(o=t.slice.slice_name)?o:e.sliceName}},[we]:()=>({...e,force:t.force})};return t.type in a?a[t.type]():e},impressionId:(e="")=>e,messageToasts:function(e=[],t){switch(t.type){case S.h:{const{payload:a}=t,o=e.slice();return a.noDuplicate&&o.find((e=>e.text===a.text))?e:[a,...e]}case S.K7:{const{payload:{id:a}}=t;return[...e].filter((e=>e.id!==a))}default:return e}},reports:function(e={},t){const a={[C.jt](){var a,o;const{report:r,resourceId:n,creationMethod:s,filterField:i}=t,c=null==(a=r.result)?void 0:a.find((e=>e[i]===n));if(c)return{...e,[s]:{...e[s],[n]:c}};if(null!=e&&null!=(o=e[s])&&o[n]){const t={...e};return delete t[s][n],t}return{...e}},[C.J8](){const{result:a,id:o}=t.json,r={...a,id:o},n=r.dashboard||r.chart;return{...e,[r.creation_method]:{...e[r.creation_method],[n]:r}}},[C.Dr](){const a={...t.json.result,id:t.json.id},o=a.dashboard||a.chart;return{...e,[a.creation_method]:{...e[a.creation_method],[o]:a}}}};return t.type in a?a[t.type]():e}});var xe=a(37703),Ce=a(38626),Ae=a(57865),De=a(68135),ke=a(31405),Ne=a(14278),Oe=a(51995),Ie=a(11965),Re=a(94184),$e=a.n(Re),Ue=a(13423),je=a(70163);const Fe=Oe.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,Me=e=>Ie.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function ze({toast:e,onCloseToast:t}){const a=(0,n.useRef)(),[o,r]=(0,n.useState)(!1),s=()=>{r(!0)},i=(0,n.useCallback)((()=>{a.current&&clearTimeout(a.current),r((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,n.useEffect)((()=>(setTimeout(s),e.duration>0&&(a.current=setTimeout(i,e.duration)),()=>{a.current&&clearTimeout(a.current)})),[i,e.duration]);let c="toast--success",l=(0,Ie.tZ)(je.Z.CircleCheckSolid,{css:e=>Me(e)});return e.toastType===w.p.WARNING?(l=(0,Ie.tZ)(je.Z.WarningSolid,{css:Me}),c="toast--warning"):e.toastType===w.p.DANGER?(l=(0,Ie.tZ)(je.Z.ErrorSolid,{css:Me}),c="toast--danger"):e.toastType===w.p.INFO&&(l=(0,Ie.tZ)(je.Z.InfoSolid,{css:Me}),c="toast--info"),(0,Ie.tZ)(Fe,{className:$e()("alert","toast",o&&"toast--visible",c),"data-test":"toast-container",role:"alert"},l,(0,Ie.tZ)(Ue.ZP,{content:e.text,noHtml:!e.allowHtml}),(0,Ie.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:i,"aria-label":"Close","data-test":"close-button"}))}const Le=Oe.iK.div`
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
`,qe=(0,xe.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,i.DE)({removeToast:S.RS},e)))((function({toasts:e,removeToast:t,position:a="bottom"}){return(0,Ie.tZ)(n.Fragment,null,e.length>0&&(0,Ie.tZ)(Le,{id:"toast-presenter",position:a},e.map((e=>(0,Ie.tZ)(ze,{key:e.id,toast:e,onCloseToast:t})))))}));var Pe=a(38552),He=a(49986),Qe=a(85156),Ve=a(5872),Be=a.n(Ve),Ke=a(78718),We=a.n(Ke),Ye=a(45697),Je=a.n(Ye),Ge=a(68492),Xe=a(29119),et=a(28615),tt=a(58593),at=a(60812),ot=a(33626),rt=a(61337),nt=a(27600),st=a(23525),it=a(50810),ct=a(2275),lt=a(1510),dt=a(40219),ut=a(6954),ft=a(40323),ht=a(99612),pt=a(18239),bt=a(48251),mt=a(89555),gt=a(37921),vt=a(30381),yt=a.n(vt);const _t=({cachedTimestamp:e})=>{const t=e?(0,Ie.tZ)("span",null,(0,Q.t)("Loaded data cached"),(0,Ie.tZ)("b",null," ",yt().utc(e).fromNow())):(0,Q.t)("Loaded from cache");return(0,Ie.tZ)("span",{"data-test":"tooltip-content"},t,". ",(0,Q.t)("Click to force-refresh"))},St=({className:e,onClick:t,cachedTimestamp:a})=>{const[o,r]=(0,n.useState)(!1),s=o?"primary":"default";return(0,Ie.tZ)(tt.u,{title:(0,Ie.tZ)(_t,{cachedTimestamp:a}),id:"cache-desc-tooltip"},(0,Ie.tZ)(gt.Z,{className:`${e}`,type:s,onClick:t,onMouseOver:()=>r(!0),onMouseOut:()=>r(!1)},(0,Q.t)("Cached")," ",(0,Ie.tZ)("i",{className:"fa fa-refresh"})))};var wt=a(44814);const Tt=(0,Oe.iK)(gt.Z)`
  text-align: left;
`;function Et({endTime:e,isRunning:t,startTime:a,status:o="success"}){const[r,s]=(0,n.useState)("00:00:00.00"),i=(0,n.useRef)();return(0,n.useEffect)((()=>{const o=()=>{i.current&&(clearInterval(i.current),i.current=void 0)};return t&&(i.current=setInterval((()=>{if(a){const r=e||(0,wt.zO)();a<r&&s((0,wt.zQ)(a,r)),t||o()}}),30)),o}),[e,t,a]),(0,Ie.tZ)(Tt,{type:o,role:"timer"},r)}var Zt;!function(e){e.failed="danger",e.loading="warning",e.success="success"}(Zt||(Zt={}));const xt=(0,n.forwardRef)((({queriesResponse:e,chartStatus:t,chartUpdateStartTime:a,chartUpdateEndTime:o,refreshCachedQuery:r,rowLimit:n},s)=>{const i="loading"===t,c=null==e?void 0:e[0];return(0,Ie.tZ)("div",{ref:s},(0,Ie.tZ)("div",{css:e=>Ie.iv`
            display: flex;
            justify-content: flex-end;
            padding-bottom: ${4*e.gridUnit}px;
            & .ant-tag:last-of-type {
              margin: 0;
            }
          `},!i&&c&&(0,Ie.tZ)(mt.Z,{rowcount:Number(c.rowcount)||0,limit:Number(n)||0}),!i&&(null==c?void 0:c.is_cached)&&(0,Ie.tZ)(St,{onClick:r,cachedTimestamp:c.cached_dttm}),(0,Ie.tZ)(Et,{startTime:a,endTime:o,isRunning:i,status:Zt[t]})))}));var Ct=a(35932);const At=Oe.iK.div`
  ${({theme:e})=>Ie.iv`
    margin: ${4*e.gridUnit}px;
    padding: ${4*e.gridUnit}px;

    border: 1px solid ${e.colors.info.base};
    background-color: ${e.colors.info.light2};
    border-radius: 2px;

    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;

    p {
      margin-bottom: ${e.gridUnit}px;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${e.colors.info.dark1};
      }
    }

    &.alert-type-warning {
      border-color: ${e.colors.alert.base};
      background-color: ${e.colors.alert.light2};

      p {
        color: ${e.colors.alert.dark2};
      }

      & a:hover,
      & span[role='button']:hover {
        color: ${e.colors.alert.dark1};
      }
    }
  `}
`,Dt=Oe.iK.div`
  display: flex;
  justify-content: flex-end;
  button {
    line-height: 1;
  }
`,kt=Oe.iK.p`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,Nt=(0,n.forwardRef)((({title:e,bodyText:t,primaryButtonAction:a,secondaryButtonAction:o,primaryButtonText:r,secondaryButtonText:n,type:s="info",className:i=""},c)=>(0,Ie.tZ)(At,{className:`alert-type-${s} ${i}`,ref:c},(0,Ie.tZ)(kt,null,e),(0,Ie.tZ)("p",null,t),r&&a&&(0,Ie.tZ)(Dt,null,o&&n&&(0,Ie.tZ)(Ct.Z,{buttonStyle:"link",buttonSize:"small",onClick:o},n),(0,Ie.tZ)(Ct.Z,{buttonStyle:"warning"===s?"warning":"primary",buttonSize:"small",onClick:a},r)))));var Ot=a(75701);const It={actions:Je().object.isRequired,onQuery:Je().func,can_overwrite:Je().bool.isRequired,can_download:Je().bool.isRequired,datasource:Je().object,dashboardId:Je().number,column_formats:Je().object,containerId:Je().string.isRequired,isStarred:Je().bool.isRequired,slice:Je().object,sliceName:Je().string,table_name:Je().string,vizType:Je().string.isRequired,form_data:Je().object,ownState:Je().object,standalone:Je().number,force:Je().bool,timeout:Je().number,chartIsStale:Je().bool,chart:ct.$6,errorMessage:Je().node,triggerRender:Je().bool},Rt=1.25,$t=[100,0],Ut=[300,65],jt=Oe.iK.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  box-shadow: none;
  height: 100%;

  & > div {
    height: 100%;
  }

  .gutter {
    border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    width: ${({theme:e})=>9*e.gridUnit}px;
    margin: ${({theme:e})=>e.gridUnit*Rt}px auto;
  }

  .gutter.gutter-vertical {
    cursor: row-resize;
  }

  .ant-collapse {
    .ant-tabs {
      height: 100%;
      .ant-tabs-nav {
        padding-left: ${({theme:e})=>5*e.gridUnit}px;
        margin: 0;
      }
      .ant-tabs-content-holder {
        overflow: hidden;
        .ant-tabs-content {
          height: 100%;
        }
      }
    }
  }
`,Ft=({chart:e,slice:t,vizType:a,ownState:o,triggerRender:r,force:s,datasource:i,errorMessage:c,form_data:l,onQuery:d,actions:f,timeout:h,standalone:p,chartIsStale:b,chartAlert:m})=>{const g=(0,Oe.Fg)(),v=g.gridUnit*Rt,y=g.gridUnit*Rt,{width:_,height:S,ref:w}=(0,ht.NB)({refreshMode:"debounce",refreshRate:300}),[T,Z]=(0,n.useState)((0,rt.rV)(rt.dR.chart_split_sizes,$t)),x=!m&&b&&"failed"!==e.chartStatus&&(0,q.Z)(e.queriesResponse).length>0,C=(0,n.useCallback)((async function(){if(t&&null===t.query_context){const e=(0,E.u)({formData:t.form_data,force:s,resultFormat:"json",resultType:"full",setDataMask:null,ownState:null});await u.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({query_context:JSON.stringify(e),query_context_generation:!0})})}}),[t]);(0,n.useEffect)((()=>{C()}),[C]),(0,n.useEffect)((()=>{(0,rt.LS)(rt.dR.chart_split_sizes,T)}),[T]);const A=(0,n.useCallback)((e=>{Z(e)}),[]),D=(0,n.useCallback)((()=>{f.setForceQuery(!0),f.postChartFormData(l,!0,h,e.id,void 0,o),f.updateQueryFormData(l,e.id)}),[f,e.id,l,o,h]),k=(0,n.useCallback)((e=>{let t;t=e?[60,40]:$t,Z(t)}),[]),N=(0,n.useCallback)((()=>(0,Ie.tZ)("div",{css:Ie.iv`
          min-height: 0;
          flex: 1;
          overflow: auto;
        `,ref:w},_&&S&&(0,Ie.tZ)(pt.Z,{width:Math.floor(_),height:S,ownState:o,annotationData:e.annotationData,chartAlert:e.chartAlert,chartStackTrace:e.chartStackTrace,chartId:e.id,chartStatus:e.chartStatus,triggerRender:r,force:s,datasource:i,errorMessage:c,formData:l,latestQueryFormData:e.latestQueryFormData,onQuery:d,queriesResponse:e.queriesResponse,chartIsStale:b,setControlValue:f.setControlValue,timeout:h,triggerQuery:e.triggerQuery,vizType:a}))),[f.setControlValue,e.annotationData,e.chartAlert,e.chartStackTrace,e.chartStatus,e.id,e.latestQueryFormData,e.queriesResponse,e.triggerQuery,b,S,w,_,i,c,s,l,d,o,h,r,a]),O=(0,n.useMemo)((()=>(0,Ie.tZ)("div",{className:"panel-body",css:Ie.iv`
          display: flex;
          flex-direction: column;
        `},x&&(0,Ie.tZ)(Nt,{title:c?(0,Q.t)("Required control values have been removed"):(0,Q.t)("Your chart is not up to date"),bodyText:c?(0,Ot.J)(!1):(0,Ie.tZ)("span",null,(0,Q.t)('You updated the values in the control panel, but the chart was not updated automatically. Run the query by clicking on the "Update chart" button or')," ",(0,Ie.tZ)("span",{role:"button",tabIndex:0,onClick:d},(0,Q.t)("click here")),"."),type:"warning",css:e=>Ie.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `}),(0,Ie.tZ)(xt,{queriesResponse:e.queriesResponse,chartStatus:e.chartStatus,chartUpdateStartTime:e.chartUpdateStartTime,chartUpdateEndTime:e.chartUpdateEndTime,refreshCachedQuery:D,rowLimit:null==l?void 0:l.row_limit}),N())),[x,c,d,e.queriesResponse,e.chartStatus,e.chartUpdateStartTime,e.chartUpdateEndTime,D,null==l?void 0:l.row_limit,N]),I=(0,n.useMemo)((()=>N()),[N]),[R,$]=(0,n.useState)(e.latestQueryFormData);(0,n.useEffect)((()=>{r||$(e.latestQueryFormData)}),[e.latestQueryFormData]);const U=(0,n.useCallback)(((e,t,a)=>({[e]:`calc(${t}% - ${a+v}px)`})),[v]);if(p){const e="background-transparent";return document.body.className.split(" ").includes(e)||(document.body.className+=` ${e}`),I}return(0,Ie.tZ)(jt,{className:"panel panel-default chart-container"},"filter_box"===a?O:(0,Ie.tZ)(ft.Z,{sizes:T,minSize:Ut,direction:"vertical",gutterSize:y,onDragEnd:A,elementStyle:U,expandToMin:!0},O,(0,Ie.tZ)(bt.c9,{ownState:o,queryFormData:R,datasource:i,queryForce:s,onCollapseChange:k,chartStatus:e.chartStatus,errorMessage:c,actions:f})))};Ft.propTypes=It;const Mt=Ft;var zt=a(46078),Lt=a(37687),qt=a(75289),Pt=a(9882),Ht=a(43700),Qt=a(71262),Vt=a(38703),Bt=a(49484),Kt=a(61357),Wt=a(41030);const Yt=({loading:e,onQuery:t,onStop:a,errorMessage:o,isNewChart:r,canStopQuery:n,chartIsStale:s})=>e?(0,Ie.tZ)(Ct.Z,{onClick:a,buttonStyle:"warning",disabled:!n},(0,Ie.tZ)("i",{className:"fa fa-stop-circle-o"})," ",(0,Q.t)("Stop")):(0,Ie.tZ)(Ct.Z,{onClick:t,buttonStyle:s?"primary":"secondary",disabled:!!o,"data-test":"run-query-button"},r?(0,Q.t)("Create chart"):(0,Q.t)("Update chart")),Jt=e=>Ie.iv`
  display: flex;
  position: sticky;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: ${4*e.gridUnit}px;
  z-index: 999;
  background: linear-gradient(
    ${(0,Bt.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    min-width: 156px;
  }
`,Gt=Oe.iK.div`
  position: relative;
  height: 100%;
  width: 100%;

  // Resizable add overflow-y: auto as a style to this div
  // To override it, we need to use !important
  overflow: visible !important;
  #controlSections {
    height: 100%;
    overflow: visible;
  }
  .nav-tabs {
    flex: 0 0 1;
  }
  .tab-content {
    overflow: auto;
    flex: 1 1 100%;
  }
  .Select__menu {
    max-width: 100%;
  }
  .type-label {
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    width: ${({theme:e})=>7*e.gridUnit}px;
    display: inline-block;
    text-align: center;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
`,Xt=(0,Oe.iK)(Qt.ZP)`
  ${({theme:e,fullWidth:t})=>Ie.iv`
    height: 100%;
    overflow: visible;
    .ant-tabs-nav {
      margin-bottom: 0;
    }
    .ant-tabs-nav-list {
      width: ${t?"100%":"50%"};
    }
    .ant-tabs-tabpane {
      height: 100%;
    }
    .ant-tabs-content-holder {
      padding-top: ${4*e.gridUnit}px;
    }

    .ant-collapse-ghost > .ant-collapse-item {
      &:not(:last-child) {
        border-bottom: 1px solid ${e.colors.grayscale.light3};
      }

      & > .ant-collapse-header {
        font-size: ${e.typography.sizes.s}px;
      }

      & > .ant-collapse-content > .ant-collapse-content-box {
        padding-bottom: 0;
        font-size: ${e.typography.sizes.s}px;
      }
    }
  `}
`,ea=(e,t)=>e.reduce(((e,a)=>!a.expanded||(e=>!!e.label&&(qt.sections.legacyRegularTime.label===e.label||qt.sections.legacyTimeseriesTime.label===e.label))(a)&&!(e=>{var t;return(null==e||null==(t=e.columns)?void 0:t.some((e=>e.is_dttm)))||e.type===zt.i9.Druid})(t)?e:[...e,String(a.label)]),[]),ta=e=>{var t,a;const o=(0,n.useContext)(Ne.Zn),r=(0,at.D)(e.exploreState),s=(0,at.D)(e.exploreState.datasource),[i,c]=(0,n.useState)(!1),l=(0,n.useRef)(null);(0,n.useEffect)((()=>{var t,a,o;!s||(null==(t=e.exploreState.datasource)?void 0:t.id)===s.id&&(null==(a=e.exploreState.datasource)?void 0:a.type)===s.type||(c(!0),null==(o=l.current)||o.scrollTo(0,0))}),[null==(t=e.exploreState.datasource)?void 0:t.id,null==(a=e.exploreState.datasource)?void 0:a.type,s]);const{expandedQuerySections:d,expandedCustomizeSections:u,querySections:f,customizeSections:h}=(0,n.useMemo)((()=>function(e,t,a){const o=[],r=[];return(0,x.Bq)(e,a).forEach((e=>{"data"===e.tabOverride||e.controlSetRows.some((e=>e.some((e=>e&&"object"==typeof e&&"config"in e&&e.config&&(!e.config.renderTrigger||"data"===e.config.tabOverride)))))?o.push(e):r.push(e)})),{expandedQuerySections:ea(o,t),expandedCustomizeSections:ea(r,t),querySections:o,customizeSections:r}}(e.form_data.viz_type,e.exploreState.datasource,e.datasource_type)),[e.exploreState.datasource,e.form_data.viz_type,e.datasource_type]),p=(0,n.useCallback)((()=>{(0,q.Z)(e.exploreState.controlsTransferred).forEach((t=>e.actions.setControlValue(t,e.controls[t].default)))}),[e.actions,e.exploreState.controlsTransferred,e.controls]),b=(0,n.useCallback)((()=>{p(),c(!1)}),[p]),m=(0,n.useCallback)((()=>{c(!1)}),[]),g=({name:t,config:a})=>{const{controls:o,chart:n,exploreState:s}=e;return Boolean(null==a.shouldMapStateToProps?void 0:a.shouldMapStateToProps(r||s,s,o[t],n))},v=t=>{const{controls:a}=e,{label:o,description:r}=t,s=String(o),i=t.controlSetRows.some((e=>e.some((e=>{const t="string"==typeof e?e:e&&"name"in e?e.name:null;return t&&t in a&&a[t].validationErrors&&a[t].validationErrors.length>0}))));return(0,Ie.tZ)(Ht.Z.Panel,{css:e=>Ie.iv`
          margin-bottom: 0;
          box-shadow: none;

          &:last-child {
            padding-bottom: ${16*e.gridUnit}px;
            border-bottom: 0;
          }

          .panel-body {
            margin-left: ${4*e.gridUnit}px;
            padding-bottom: 0;
          }

          span.label {
            display: inline-block;
          }
        `,header:(0,Ie.tZ)((()=>(0,Ie.tZ)("span",{"data-test":"collapsible-control-panel-header"},(0,Ie.tZ)("span",null,o)," ",r&&(0,Ie.tZ)(Pt.V,{label:s,tooltip:r}),i&&(0,Ie.tZ)(Pt.V,{label:"validation-errors",bsStyle:"danger",tooltip:"This section contains validation errors"}))),null),key:s},t.controlSetRows.map(((t,a)=>{const o=t.map((t=>t?n.isValidElement(t)?t:t.name&&t.config&&"datasource"!==t.name?(({name:t,config:a})=>{const{controls:o,chart:r,exploreState:n}=e,{visibility:s}=a,i={...a,...o[t],...g({name:t,config:a})?null==a||null==a.mapStateToProps?void 0:a.mapStateToProps(n,o[t],r):void 0,name:t},{validationErrors:c,...l}=i,d=s?s.call(a,e,i):void 0;return(0,Ie.tZ)(Wt.Z,Be()({key:`control-${t}`,name:t,validationErrors:c,actions:e.actions,isVisible:d},l))})(t):null:null)).filter((e=>null!==e));return 0===o.length?null:(0,Ie.tZ)(Kt.Z,{key:`controlsetrow-${a}`,controls:o})})))},y=(0,q.Z)(e.exploreState.controlsTransferred).length>0,_=(0,n.useCallback)((()=>y?(0,Ie.tZ)(Nt,{title:(0,Q.t)("Keep control settings?"),bodyText:(0,Q.t)("You've changed datasets. Any controls with data (columns, metrics) that match this new dataset have been retained."),primaryButtonAction:m,secondaryButtonAction:b,primaryButtonText:(0,Q.t)("Continue"),secondaryButtonText:(0,Q.t)("Clear form"),type:"info"}):(0,Ie.tZ)(Nt,{title:(0,Q.t)("No form settings were maintained"),bodyText:(0,Q.t)("We were unable to carry over any controls when switching to this new dataset."),primaryButtonAction:m,primaryButtonText:(0,Q.t)("Continue"),type:"warning"})),[b,m,y]),S=(0,n.useMemo)((()=>(0,Ie.tZ)(n.Fragment,null,(0,Ie.tZ)("span",null,(0,Q.t)("Data")),e.errorMessage&&(0,Ie.tZ)("span",{css:e=>Ie.iv`
              font-size: ${e.typography.sizes.xs}px;
              margin-left: ${2*e.gridUnit}px;
            `}," ",(0,Ie.tZ)(tt.u,{id:"query-error-tooltip",placement:"right",title:e.errorMessage},(0,Ie.tZ)("i",{className:"fa fa-exclamation-circle text-danger fa-lg"}))))),[e.errorMessage]);if(!(0,Lt.Z)().has(e.form_data.viz_type)&&o.loading)return(0,Ie.tZ)(Vt.Z,null);const w=h.length>0;return(0,Ie.tZ)(Gt,{ref:l},(0,Ie.tZ)(Xt,{id:"controlSections","data-test":"control-tabs",fullWidth:w,allowOverflow:!1},(0,Ie.tZ)(Qt.ZP.TabPane,{key:"query",tab:S},(0,Ie.tZ)(Ht.Z,{defaultActiveKey:d,expandIconPosition:"right",ghost:!0},i&&(0,Ie.tZ)(_,null),f.map(v))),w&&(0,Ie.tZ)(Qt.ZP.TabPane,{key:"display",tab:(0,Q.t)("Customize")},(0,Ie.tZ)(Ht.Z,{defaultActiveKey:u,expandIconPosition:"right",ghost:!0},h.map(v)))),(0,Ie.tZ)("div",{css:Jt},(0,Ie.tZ)(Yt,{onQuery:e.onQuery,onStop:e.onStop,errorMessage:e.errorMessage,loading:"loading"===e.chart.chartStatus,isNewChart:!e.chart.queriesResponse,canStopQuery:e.canStopQuery,chartIsStale:e.chartIsStale})))};var aa=a(9875),oa=a(49238),ra=a(29487),na=a(74069),sa=a(87183),ia=a(4715);const ca="save_chart_recent_dashboard",la=(0,Oe.iK)(na.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`;class da extends n.Component{constructor(e){super(e),this.state={saveToDashboardId:null,newSliceName:e.sliceName,alert:null,action:this.canOverwriteSlice()?"overwrite":"saveas"},this.onDashboardSelectChange=this.onDashboardSelectChange.bind(this),this.onSliceNameChange=this.onSliceNameChange.bind(this),this.changeAction=this.changeAction.bind(this),this.saveOrOverwrite=this.saveOrOverwrite.bind(this),this.isNewDashboard=this.isNewDashboard.bind(this)}isNewDashboard(){return!(this.state.saveToDashboardId||!this.state.newDashboardName)}canOverwriteSlice(){var e,t,a;return(null==(e=this.props.slice)||null==(t=e.owners)?void 0:t.includes(this.props.userId))&&!(null!=(a=this.props.slice)&&a.is_managed_externally)}componentDidMount(){this.props.actions.fetchDashboards(this.props.userId).then((()=>{const e=this.props.dashboards.map((e=>e.value)),t=sessionStorage.getItem(ca);let a=t&&parseInt(t,10);this.props.dashboardId&&(a=this.props.dashboardId),null!==a&&-1!==e.indexOf(a)&&this.setState({saveToDashboardId:a})}))}onSliceNameChange(e){this.setState({newSliceName:e.target.value})}onDashboardSelectChange(e){const t=e?String(e):void 0,a=e&&"number"==typeof e?e:null;this.setState({saveToDashboardId:a,newDashboardName:t})}changeAction(e){this.setState({action:e})}saveOrOverwrite(e){this.setState({alert:null}),this.props.actions.removeSaveModalAlert();const t={};if(this.props.slice&&this.props.slice.slice_id&&(t.slice_id=this.props.slice.slice_id),"saveas"===t.action&&""===this.state.newSliceName)return void this.setState({alert:(0,Q.t)("Please enter a chart name")});t.action=this.state.action,t.slice_name=this.state.newSliceName,t.save_to_dashboard_id=this.state.saveToDashboardId,t.new_dashboard_name=this.state.newDashboardName;const{url_params:a,...o}=this.props.form_data||{};this.props.actions.saveSlice(o,t).then((t=>{null===t.dashboard_id?sessionStorage.removeItem(ca):sessionStorage.setItem(ca,t.dashboard_id);let o=e?t.dashboard_url:t.slice.slice_url;if(a){const e=o.includes("?")?"&":"?";o=`${o}${e}${new URLSearchParams(a).toString()}`}window.location.assign(o)})),this.props.onHide()}removeAlert(){this.props.alert&&this.props.actions.removeSaveModalAlert(),this.setState({alert:null})}render(){const e=this.state.saveToDashboardId||this.state.newDashboardName;return(0,Ie.tZ)(la,{show:!0,onHide:this.props.onHide,title:(0,Q.t)("Save chart"),footer:(0,Ie.tZ)("div",{"data-test":"save-modal-footer"},(0,Ie.tZ)(Ct.Z,{id:"btn_cancel",buttonSize:"small",onClick:this.props.onHide},(0,Q.t)("Cancel")),(0,Ie.tZ)(Ct.Z,{id:"btn_modal_save_goto_dash",buttonSize:"small",disabled:!this.state.newSliceName||!this.state.saveToDashboardId&&!this.state.newDashboardName,onClick:()=>this.saveOrOverwrite(!0)},this.isNewDashboard()?(0,Q.t)("Save & go to new dashboard"):(0,Q.t)("Save & go to dashboard")),(0,Ie.tZ)(Ct.Z,{id:"btn_modal_save",buttonSize:"small",buttonStyle:"primary",onClick:()=>this.saveOrOverwrite(!1),disabled:!this.state.newSliceName,"data-test":"btn-modal-save"},!this.canOverwriteSlice()&&this.props.slice?(0,Q.t)("Save as new chart"):this.isNewDashboard()?(0,Q.t)("Save to new dashboard"):(0,Q.t)("Save")))},(0,Ie.tZ)(oa.l0,{"data-test":"save-modal-body",layout:"vertical"},(this.state.alert||this.props.alert)&&(0,Ie.tZ)(ra.Z,{type:"warning",message:(0,Ie.tZ)(n.Fragment,null,this.state.alert?this.state.alert:this.props.alert,(0,Ie.tZ)("i",{role:"button","aria-label":"Remove alert",tabIndex:0,className:"fa fa-close pull-right",onClick:this.removeAlert.bind(this),style:{cursor:"pointer"}}))}),(0,Ie.tZ)(oa.xJ,{"data-test":"radio-group"},(0,Ie.tZ)(sa.Y,{id:"overwrite-radio",disabled:!this.canOverwriteSlice(),checked:"overwrite"===this.state.action,onChange:()=>this.changeAction("overwrite"),"data-test":"save-overwrite-radio"},(0,Q.t)("Save (Overwrite)")),(0,Ie.tZ)(sa.Y,{id:"saveas-radio","data-test":"saveas-radio",checked:"saveas"===this.state.action,onChange:()=>this.changeAction("saveas")},(0,Q.t)("Save as..."))),(0,Ie.tZ)("hr",null),(0,Ie.tZ)(oa.xJ,{label:(0,Q.t)("Chart name"),required:!0},(0,Ie.tZ)(aa.II,{name:"new_slice_name",type:"text",placeholder:"Name",value:this.state.newSliceName,onChange:this.onSliceNameChange,"data-test":"new-chart-name"})),(0,Ie.tZ)(oa.xJ,{label:(0,Q.t)("Add to dashboard"),"data-test":"save-chart-modal-select-dashboard-form"},(0,Ie.tZ)(ia.Ph,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,Q.t)("Select a dashboard"),options:this.props.dashboards,onChange:this.onDashboardSelectChange,value:e||void 0,placeholder:(0,Ie.tZ)("div",null,(0,Ie.tZ)("b",null,(0,Q.t)("Select")),(0,Q.t)(" a dashboard OR "),(0,Ie.tZ)("b",null,(0,Q.t)("create")),(0,Q.t)(" a new one"))}))))}}const ua=(0,xe.$j)((function({explore:e,saveModal:t}){var a;return{datasource:e.datasource,slice:e.slice,userId:null==(a=e.user)?void 0:a.userId,dashboards:t.dashboards,alert:t.saveModalAlert}}),(()=>({})))(da);var fa=a(90233),ha=a(41331),pa=a(93185),ba=a(27034),ma=a(42753),ga=a(99963);const va=Oe.iK.div`
  ${({theme:e})=>Ie.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${6*e.gridUnit}px;
    padding: 0 ${e.gridUnit}px;

    // hack to make the drag preview image corners rounded
    transform: translate(0, 0);
    background-color: inherit;
    border-radius: 4px;

    > div {
      min-width: 0;
      margin-right: ${2*e.gridUnit}px;
    }
  `}
`;function ya(e){const{labelRef:t,showTooltip:a,type:o,value:r}=e,[{isDragging:n},s]=(0,ba.c)({item:{value:e.value,type:e.type},collect:e=>({isDragging:e.isDragging()})}),i={labelRef:t,showTooltip:!n&&a,showType:!0};return(0,Ie.tZ)(va,{"data-test":"DatasourcePanelDragOption",ref:s},o===ma.g.Column?(0,Ie.tZ)(ga.l,Be()({column:r},i)):(0,Ie.tZ)(ga.B,Be()({metric:r},i)),(0,Ie.tZ)(je.Z.Drag,null))}const _a=(0,y.cr)(pa.T.ENABLE_EXPLORE_DRAG_AND_DROP),Sa=Oe.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.primary.dark1};
`,wa=Oe.iK.div`
  text-align: center;
  padding-top: 2px;
`,Ta=Oe.iK.div`
  ${({theme:e})=>Ie.iv`
    background-color: ${e.colors.grayscale.light5};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    .ant-collapse {
      height: auto;
    }
    .field-selections {
      padding: 0 0 ${4*e.gridUnit}px;
      overflow: auto;
    }
    .field-length {
      margin-bottom: ${2*e.gridUnit}px;
      font-size: ${e.typography.sizes.s}px;
      color: ${e.colors.grayscale.light1};
    }
    .form-control.input-md {
      width: calc(100% - ${8*e.gridUnit}px);
      height: ${8*e.gridUnit}px;
      margin: ${2*e.gridUnit}px auto;
    }
    .type-label {
      font-size: ${e.typography.sizes.s}px;
      color: ${e.colors.grayscale.base};
    }
    .Control {
      padding-bottom: 0;
    }
  `};
`,Ea=Oe.iK.div`
  ${({theme:e})=>Ie.iv`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e.typography.sizes.s}px;
    background-color: ${e.colors.grayscale.light4};
    margin: ${2*e.gridUnit}px 0;
    border-radius: 4px;
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    ${_a&&Ie.iv`
      padding: 0;
      cursor: pointer;
      &:hover {
        background-color: ${e.colors.grayscale.light3};
      }
    `}

    & > span {
      white-space: nowrap;
    }

    .option-label {
      display: inline;
    }

    .metric-option {
      & > svg {
        min-width: ${4*e.gridUnit}px;
      }
      & > .option-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `}
`,Za=Oe.iK.span`
  ${({theme:e})=>Ie.iv`
    font-size: ${e.typography.sizes.s}px;
  `}
`,xa=Oe.iK.div`
  ${({theme:e})=>Ie.iv`
    margin: 0 ${2.5*e.gridUnit}px;

    span {
      text-decoration: underline;
    }
  `}
`,Ca=e=>{const t={labelRef:(0,n.useRef)(null)};return(0,Ie.tZ)(Ea,{className:e.className},n.cloneElement(e.children,t))};function Aa({datasource:e,controls:{datasource:t},actions:a,shouldForceUpdate:o}){const{columns:r,metrics:s}=e,i=(0,n.useMemo)((()=>[...r].sort(((e,t)=>e.is_dttm&&!t.is_dttm?-1:t.is_dttm&&!e.is_dttm?1:0))),[r]),[c,l]=(0,n.useState)(!1),[d,u]=(0,n.useState)(""),[f,h]=(0,n.useState)({columns:i,metrics:s}),[p,b]=(0,n.useState)(!1),[g,v]=(0,n.useState)(!1),y=(0,n.useMemo)((()=>m()((e=>{h(""!==e?{columns:(0,fa.Lu)(i,e,{keys:[{key:"verbose_name",threshold:fa.tL.CONTAINS},{key:"column_name",threshold:fa.tL.CONTAINS},{key:e=>[e.description,e.expression].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||"")),threshold:fa.tL.CONTAINS,maxRanking:fa.tL.CONTAINS}],keepDiacritics:!0}),metrics:(0,fa.Lu)(s,e,{keys:[{key:"verbose_name",threshold:fa.tL.CONTAINS},{key:"metric_name",threshold:fa.tL.CONTAINS},{key:e=>[e.description,e.expression].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||"")),threshold:fa.tL.CONTAINS,maxRanking:fa.tL.CONTAINS}],keepDiacritics:!0,baseSort:(e,t)=>Number(t.item.is_certified)-Number(e.item.is_certified)||String(e.rankedValue).localeCompare(t.rankedValue)})}:{columns:i,metrics:s})}),nt.oP)),[i,s]);(0,n.useEffect)((()=>{h({columns:i,metrics:s}),u("")}),[i,e,s]);const _=(0,n.useMemo)((()=>p?f.metrics:f.metrics.slice(0,50)),[f.metrics,p]),S=(0,n.useMemo)((()=>(g?f.columns:f.columns.slice(0,50)).sort(((e,t)=>t.is_certified-e.is_certified))),[f.columns,g]),w=(0,n.useMemo)((()=>(0,Ie.tZ)(n.Fragment,null,(0,Ie.tZ)(aa.II,{allowClear:!0,onChange:e=>{u(e.target.value),y(e.target.value)},value:d,className:"form-control input-md",placeholder:(0,Q.t)("Search Metrics & Columns")}),(0,Ie.tZ)("div",{className:"field-selections"},e.type===zt.i9.Query&&"false"!==sessionStorage.getItem("showInfobox")&&(0,Ie.tZ)(xa,null,(0,Ie.tZ)(ra.Z,{closable:!0,onClose:()=>sessionStorage.setItem("showInfobox","false"),type:"info",message:"",description:(0,Ie.tZ)(n.Fragment,null,(0,Ie.tZ)("span",{role:"button",tabIndex:0,onClick:()=>l(!0),className:"add-dataset-alert-description"},(0,Q.t)("Create a dataset")),(0,Q.t)(" to edit or add columns and metrics."))})),(0,Ie.tZ)(Ht.Z,{defaultActiveKey:["metrics","column"],expandIconPosition:"right",ghost:!0},(0,Ie.tZ)(Ht.Z.Panel,{header:(0,Ie.tZ)(Za,null,(0,Q.t)("Metrics")),key:"metrics"},(0,Ie.tZ)("div",{className:"field-length"},(0,Q.t)("Showing %s of %s",_.length,f.metrics.length)),_.map((e=>(0,Ie.tZ)(Ca,{key:e.metric_name+String(o),className:"column"},_a?(0,Ie.tZ)(ya,{value:e,type:ma.g.Metric}):(0,Ie.tZ)(ga.B,{metric:e,showType:!0})))),f.metrics.length>50?(0,Ie.tZ)(wa,null,(0,Ie.tZ)(Sa,{onClick:()=>b(!p)},p?(0,Q.t)("Show less..."):(0,Q.t)("Show all..."))):(0,Ie.tZ)(n.Fragment,null)),(0,Ie.tZ)(Ht.Z.Panel,{header:(0,Ie.tZ)(Za,null,(0,Q.t)("Columns")),key:"column"},(0,Ie.tZ)("div",{className:"field-length"},(0,Q.t)("Showing %s of %s",S.length,f.columns.length)),S.map((e=>(0,Ie.tZ)(Ca,{key:e.column_name+String(o),className:"column"},_a?(0,Ie.tZ)(ya,{value:e,type:ma.g.Column}):(0,Ie.tZ)(ga.l,{column:e,showType:!0})))),f.columns.length>50?(0,Ie.tZ)(wa,null,(0,Ie.tZ)(Sa,{onClick:()=>v(!g)},g?(0,Q.t)("Show Less..."):(0,Q.t)("Show all..."))):(0,Ie.tZ)(n.Fragment,null)))))),[S,d,f.columns.length,f.metrics.length,_,y,g,p,o]);return(0,Ie.tZ)(Ta,null,(0,Ie.tZ)(ha.W,{visible:c,onHide:()=>l(!1),buttonTextOnSave:(0,Q.t)("Save"),buttonTextOnOverwrite:(0,Q.t)("Overwrite"),datasource:e}),(0,Ie.tZ)(Wt.Z,Be()({},t,{name:"datasource",actions:a})),null!=e.id&&w)}var Da=a(28062),ka=a(41609),Na=a.n(ka),Oa=a(18446),Ia=a.n(Oa),Ra=a(88306),$a=a.n(Ra),Ua=a(38575),ja=a(92252);const Fa=$a()(((e,t)=>{const a={};return((null==t?void 0:t.controlPanelSections)||[]).filter(Ua.D_).forEach((e=>{e.controlSetRows.forEach((e=>{e.forEach((e=>{e&&("string"==typeof e?a[e]=ja.ai[e]:e.name&&e.config&&(a[e.name]=e.config))}))}))})),a}));var Ma=a(68073),za=a(76962);const La={origFormData:Je().object.isRequired,currentFormData:Je().object.isRequired},qa=Oe.iK.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.alert.base};\n\n    &: hover {\n      background-color: ${e.colors.alert.dark1};\n    }\n  `}
`;function Pa(e){if(null==e||""===e)return null;if("object"==typeof e){if(Array.isArray(e)&&0===e.length)return null;const t=Object.keys(e);if(t&&0===t.length)return null}return e}class Ha extends n.Component{constructor(e){super(e);const t=this.getDiffs(e),a=(e=>{const t=(0,Lt.Z)().get(e);return Fa(e,t)})(this.props.origFormData.viz_type),o=this.getRowsFromDiffs(t,a);this.state={rows:o,hasDiffs:!Na()(t),controlsMap:a}}UNSAFE_componentWillReceiveProps(e){if(Ia()(this.props,e))return;const t=this.getDiffs(e);this.setState((e=>({rows:this.getRowsFromDiffs(t,e.controlsMap),hasDiffs:!Na()(t)})))}getRowsFromDiffs(e,t){return Object.entries(e).map((([e,a])=>({control:t[e]&&t[e].label||e,before:this.formatValue(a.before,e,t),after:this.formatValue(a.after,e,t)})))}getDiffs(e){const t=(0,dt.BR)(e.origFormData),a=(0,dt.BR)(e.currentFormData),o=Object.keys(a),r={};return o.forEach((e=>{(t[e]||a[e])&&(["filters","having","having_filters","where"].includes(e)||this.isEqualish(t[e],a[e])||(r[e]={before:t[e],after:a[e]}))})),r}isEqualish(e,t){return Ia()(Pa(e),Pa(t))}formatValue(e,t,a){var o,r,n,s;if(void 0===e)return"N/A";if(null===e)return"null";if("AdhocFilterControl"===(null==(o=a[t])?void 0:o.type))return e.length?e.map((e=>{const t=e.comparator&&e.comparator.constructor===Array?`[${e.comparator.join(", ")}]`:e.comparator;return`${e.subject} ${e.operator} ${t}`})).join(", "):"[]";if("BoundsControl"===(null==(r=a[t])?void 0:r.type))return`Min: ${e[0]}, Max: ${e[1]}`;if("CollectionControl"===(null==(n=a[t])?void 0:n.type))return e.map((e=>(0,f.o)(e))).join(", ");if("MetricsControl"===(null==(s=a[t])?void 0:s.type)&&e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}if("boolean"==typeof e)return e?"true":"false";if(e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}return"string"==typeof e||"number"==typeof e?e:(0,f.o)(e)}renderModalBody(){return(0,Ie.tZ)(za.Z,{columns:[{accessor:"control",Header:"Control"},{accessor:"before",Header:"Before"},{accessor:"after",Header:"After"}],data:this.state.rows,pageSize:50,className:"table-condensed",columnsForWrapText:["Control","Before","After"]})}renderTriggerNode(){return(0,Ie.tZ)(tt.u,{id:"difference-tooltip",title:(0,Q.t)("Click to see difference")},(0,Ie.tZ)(qa,{className:"label"},(0,Q.t)("Altered")))}render(){return this.state.hasDiffs?(0,Ie.tZ)(Ma.Z,{triggerNode:this.renderTriggerNode(),modalTitle:(0,Q.t)("Chart changes"),modalBody:this.renderModalBody(),responsive:!0}):null}}Ha.propTypes=La;var Qa=a(15926),Va=a.n(Qa),Ba=a(98286),Ka=a(14114);const Wa=ia.qz.Item,Ya=(0,Oe.iK)(ia.qz.Item)`
  margin-bottom: 0;
`,Ja=Oe.iK.span`
  margin-bottom: 0;
`,Ga=(0,Ka.ZP)((function({slice:e,onHide:t,onSave:a,show:o,addSuccessToast:r}){const[s,i]=(0,n.useState)(!1),[c]=ia.qz.useForm(),[l,d]=(0,n.useState)(e.slice_name||""),[f,h]=(0,n.useState)(null);function p({error:e,statusText:t,message:a}){let o=e||t||(0,Q.t)("An error has occurred");"Forbidden"===a&&(o=(0,Q.t)("You do not have permission to edit this chart")),na.Z.error({title:"Error",content:o,okButtonProps:{danger:!0,className:"btn-danger"}})}const b=(0,n.useCallback)((async function(){try{var t;const a=(await u.Z.get({endpoint:`/api/v1/chart/${e.slice_id}`})).json.result;h(null==a||null==(t=a.owners)?void 0:t.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){p(await(0,Ba.O)(e))}}),[e.slice_id]),m=(0,n.useMemo)((()=>(e="",t,a)=>{const o=Va().encode({filter:e,page:t,page_size:a});return u.Z.get({endpoint:`/api/v1/chart/related/owners?q=${o}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),g=(0,Q.t)("Owners");return(0,n.useEffect)((()=>{b()}),[b]),(0,n.useEffect)((()=>{d(e.slice_name||"")}),[e.slice_name]),(0,Ie.tZ)(na.Z,{show:o,onHide:t,title:"Edit Chart Properties",footer:(0,Ie.tZ)(n.Fragment,null,(0,Ie.tZ)(Ct.Z,{"data-test":"properties-modal-cancel-button",htmlType:"button",buttonSize:"small",onClick:t,cta:!0},(0,Q.t)("Cancel")),(0,Ie.tZ)(Ct.Z,{"data-test":"properties-modal-save-button",htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:c.submit,disabled:s||!l||e.is_managed_externally,tooltip:e.is_managed_externally?(0,Q.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,Q.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,Ie.tZ)(ia.qz,{form:c,onFinish:async o=>{i(!0);const{certified_by:n,certification_details:s,description:c,cache_timeout:d}=o,h={slice_name:l||null,description:c||null,cache_timeout:d||null,certified_by:n||null,certification_details:n&&s?s:null};f&&(h.owners=f.map((e=>e.value)));try{const o=await u.Z.put({endpoint:`/api/v1/chart/${e.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}),n={...h,...o.json.result,id:e.slice_id};a(n),r((0,Q.t)("Chart properties updated")),t()}catch(e){p(await(0,Ba.O)(e))}i(!1)},layout:"vertical",initialValues:{name:e.slice_name||"",description:e.description||"",cache_timeout:null!=e.cache_timeout?e.cache_timeout:"",certified_by:e.certified_by||"",certification_details:e.certified_by&&e.certification_details?e.certification_details:""}},(0,Ie.tZ)(ia.X2,{gutter:16},(0,Ie.tZ)(ia.JX,{xs:24,md:12},(0,Ie.tZ)("h3",null,(0,Q.t)("Basic information")),(0,Ie.tZ)(Wa,{label:(0,Q.t)("Name"),required:!0},(0,Ie.tZ)(aa.II,{"aria-label":(0,Q.t)("Name"),name:"name","data-test":"properties-modal-name-input",type:"text",value:l,onChange:e=>{var t;return d(null!=(t=e.target.value)?t:"")}})),(0,Ie.tZ)(Wa,null,(0,Ie.tZ)(Ya,{label:(0,Q.t)("Description"),name:"description"},(0,Ie.tZ)(aa.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,Ie.tZ)(Ja,{className:"help-block"},(0,Q.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,Ie.tZ)("h3",null,(0,Q.t)("Certification")),(0,Ie.tZ)(Wa,null,(0,Ie.tZ)(Ya,{label:(0,Q.t)("Certified by"),name:"certified_by"},(0,Ie.tZ)(aa.II,{"aria-label":(0,Q.t)("Certified by")})),(0,Ie.tZ)(Ja,{className:"help-block"},(0,Q.t)("Person or group that has certified this chart."))),(0,Ie.tZ)(Wa,null,(0,Ie.tZ)(Ya,{label:(0,Q.t)("Certification details"),name:"certification_details"},(0,Ie.tZ)(aa.II,{"aria-label":(0,Q.t)("Certification details")})),(0,Ie.tZ)(Ja,{className:"help-block"},(0,Q.t)("Any additional detail to show in the certification tooltip.")))),(0,Ie.tZ)(ia.JX,{xs:24,md:12},(0,Ie.tZ)("h3",null,(0,Q.t)("Configuration")),(0,Ie.tZ)(Wa,null,(0,Ie.tZ)(Ya,{label:(0,Q.t)("Cache timeout"),name:"cache_timeout"},(0,Ie.tZ)(aa.II,{"aria-label":"Cache timeout"})),(0,Ie.tZ)(Ja,{className:"help-block"},(0,Q.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),(0,Ie.tZ)("h3",{style:{marginTop:"1em"}},(0,Q.t)("Access")),(0,Ie.tZ)(Wa,{label:g},(0,Ie.tZ)(ia.Ph,{ariaLabel:g,mode:"multiple",name:"owners",value:f||[],onChange:h,options:m,disabled:!f,allowClear:!0}),(0,Ie.tZ)(Ja,{className:"help-block"},(0,Q.t)("A list of users who can alter the chart. Searchable by name or username.")))))))}));var Xa=a(52564),eo=a(94413);const to={actions:Je().object.isRequired,canOverwrite:Je().bool.isRequired,canDownload:Je().bool.isRequired,dashboardId:Je().number,isStarred:Je().bool.isRequired,slice:Je().object,sliceName:Je().string,table_name:Je().string,formData:Je().object,ownState:Je().object,timeout:Je().number,chart:ct.$6,saveDisabled:Je().bool},ao=e=>Ie.iv`
  color: ${e.colors.primary.dark2};
  & > span[role='img'] {
    margin-right: 0;
  }
`,oo=({dashboardId:e,slice:t,actions:a,formData:o,ownState:r,chart:s,user:i,canOverwrite:c,canDownload:l,isStarred:d,sliceUpdated:f,sliceName:h,onSaveChart:p,saveDisabled:b})=>{const{latestQueryFormData:m,sliceFormData:g}=s,[v,y]=(0,n.useState)(!1);(0,n.useEffect)((()=>{e&&(async()=>{await u.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`}).then((t=>{var a;const o=null==t||null==(a=t.json)?void 0:a.result;if(o&&o.dashboards&&o.dashboards.length){const{dashboards:t}=o,a=e&&t.length&&t.find((t=>t.id===e));if(a&&a.json_metadata){const e=JSON.parse(a.json_metadata),t={...e.shared_label_colors||{},...e.label_colors||{}},o=Da.getNamespace();Object.keys(t).forEach((a=>{o.setColor(a,t[a],e.color_scheme)}))}}})).catch((()=>{}))})()}),[]);const[_,S,w]=(0,eo.gT)(m,l,t,a.redirectSQLLab,(()=>{y(!0)}),r),T=null==t?void 0:t.slice_name;return(0,Ie.tZ)(n.Fragment,null,(0,Ie.tZ)(Xa.u,{editableTitleProps:{title:h,canEdit:!t||c||((null==t?void 0:t.owners)||[]).includes(null==i?void 0:i.userId),onSave:a.updateChartTitle,placeholder:(0,Q.t)("Add the name of the chart"),label:(0,Q.t)("Chart title")},showTitlePanelItems:!!t,certificatiedBadgeProps:{certifiedBy:null==t?void 0:t.certified_by,details:null==t?void 0:t.certification_details},showFaveStar:!(null==i||!i.userId),faveStarProps:{itemId:null==t?void 0:t.slice_id,fetchFaveStar:a.fetchFaveStar,saveFaveStar:a.saveFaveStar,isStarred:d,showTooltip:!0},titlePanelAdditionalItems:g?(0,Ie.tZ)(Ha,{className:"altered",origFormData:{...g,chartTitle:T},currentFormData:{...o,chartTitle:h}}):null,rightPanelAdditionalItems:(0,Ie.tZ)(tt.u,{title:b?(0,Q.t)("Add required control values to save chart"):null},(0,Ie.tZ)("div",null,(0,Ie.tZ)(Ct.Z,{buttonStyle:"secondary",onClick:p,disabled:b,"data-test":"query-save-button",css:ao},(0,Ie.tZ)(je.Z.SaveOutlined,{iconSize:"l"}),(0,Q.t)("Save")))),additionalActionsMenu:_,menuDropdownProps:{visible:S,onVisibleChange:w}}),v&&(0,Ie.tZ)(Ga,{show:v,onHide:()=>{y(!1)},onSave:f,slice:t}))};oo.propTypes=to;const ro=(0,xe.$j)(null,(function(e){return(0,i.DE)({sliceUpdated:Se,toggleActive:C.M,deleteActiveReport:C.MZ},e)}))(oo),no={...Mt.propTypes,actions:Je().object.isRequired,datasource_type:Je().string.isRequired,dashboardId:Je().number,isDatasourceMetaLoading:Je().bool.isRequired,chart:ct.$6.isRequired,slice:Je().object,sliceName:Je().string,controls:Je().object.isRequired,forcedHeight:Je().string,form_data:Je().object.isRequired,standalone:Je().number.isRequired,force:Je().bool,timeout:Je().number,impressionId:Je().string,vizType:Je().string},so=Oe.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,io=Oe.iK.div`
  ${({theme:e})=>Ie.iv`
    background: ${e.colors.grayscale.light5};
    text-align: left;
    position: relative;
    width: 100%;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    border-top: 1px solid ${e.colors.grayscale.light2};
    .explore-column {
      display: flex;
      flex-direction: column;
      padding: ${2*e.gridUnit}px 0;
      max-height: 100%;
    }
    .data-source-selection {
      background-color: ${e.colors.grayscale.light5};
      padding: ${2*e.gridUnit}px 0;
      border-right: 1px solid ${e.colors.grayscale.light2};
    }
    .main-explore-content {
      flex: 1;
      min-width: ${128*e.gridUnit}px;
      border-left: 1px solid ${e.colors.grayscale.light2};
      padding: 0 ${4*e.gridUnit}px;
      .panel {
        margin-bottom: 0;
      }
    }
    .controls-column {
      align-self: flex-start;
      padding: 0;
    }
    .title-container {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0 ${4*e.gridUnit}px;
      justify-content: space-between;
      .horizontal-text {
        font-size: ${e.typography.sizes.s}px;
      }
    }
    .no-show {
      display: none;
    }
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
    .sidebar {
      height: 100%;
      background-color: ${e.colors.grayscale.light4};
      padding: ${2*e.gridUnit}px;
      width: ${8*e.gridUnit}px;
    }
    .callpase-icon > svg {
      color: ${e.colors.primary.base};
    }
  `};
`,co=m()((async(e,t,a,o,r,n,s,i)=>{const c={...e},l=e.slice_id,d={};l?d[nt.KD.sliceId.name]=l:(d[nt.KD.datasourceId.name]=t,d[nt.KD.datasourceType.name]=a);const u=(null==c?void 0:c.url_params)||{};Object.entries(u).forEach((([e,t])=>{nt.$O.includes(e)||(d[e]=t)}));try{let u,f;o?(u=await(0,dt.nv)(t,a,e,l,i),f="replaceState"):(u=(0,st.eY)(nt.KD.formDataKey),await(0,dt.LW)(t,a,u,e,l,i),f="pushState");const h=(0,E.y8)(r?nt.KD.standalone.name:null,{[nt.KD.formDataKey.name]:u,...d},n);window.history[f](c,s,h)}catch(e){Ge.Z.warn("Failed at altering browser history",e)}}),1e3);function lo(e){const t=(0,Ne.gp)().dynamicPlugins[e.vizType],a=t&&t.mounting,o=(0,at.D)(a),r=(0,at.D)(e.controls),[s,i]=(0,n.useState)(e.controls),[c,l]=(0,n.useState)(!1),[d,u]=(0,n.useState)(!1),[f,h]=(0,n.useState)(-1),b=(0,ut.z)(),m=(0,Oe.Fg)(),g={controls_width:320,datasource_width:300},v=(0,n.useCallback)((async({isReplace:t=!1,title:a}={})=>{const o=e.dashboardId?{...e.form_data,dashboardId:e.dashboardId}:e.form_data,{id:r,type:n}=e.datasource;co(o,r,n,t,e.standalone,e.force,a,b)}),[e.dashboardId,e.form_data,e.datasource.id,e.datasource.type,e.standalone,e.force,b]),y=(0,n.useCallback)((()=>{const t=window.history.state;t&&Object.keys(t).length&&(e.actions.setExploreControls(t),e.actions.postChartFormData(t,e.force,e.timeout,e.chart.id))}),[e.actions,e.chart.id,e.timeout]),S=(0,n.useCallback)((()=>{e.actions.setForceQuery(!1),e.actions.triggerQuery(!0,e.chart.id),v(),i(e.controls)}),[e.controls,v,e.actions,e.chart.id]),w=(0,n.useCallback)((t=>{if(t.ctrlKey||t.metaKey){const a="Enter"===t.key||13===t.keyCode,o="s"===t.key||83===t.keyCode;a?S():o&&e.slice&&e.actions.saveSlice(e.form_data,{action:"overwrite",slice_id:e.slice.slice_id,slice_name:e.slice.slice_name,add_to_dash:"noSave",goto_dash:!1}).then((({data:e})=>{window.location=e.slice.slice_url}))}}),[S,e.actions,e.form_data,e.slice]);function T(){l(!c)}function E(){u(!d)}(0,ot.J)((()=>{e.actions.logEvent(p.$b)})),(0,et.S)(b,((e,t)=>{t&&v({isReplace:!0})}));const Z=(0,at.D)(y);(0,n.useEffect)((()=>(Z&&window.removeEventListener("popstate",Z),window.addEventListener("popstate",y),()=>{window.removeEventListener("popstate",y)})),[y,Z]);const C=(0,at.D)(w);(0,n.useEffect)((()=>(C&&window.removeEventListener("keydown",C),document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)})),[w,C]),(0,n.useEffect)((()=>{o&&!a&&e.actions.dynamicPluginControlsReady()}),[a]),(0,n.useEffect)((()=>{Object.values(e.controls).some((e=>e.validationErrors&&e.validationErrors.length>0))||e.actions.triggerQuery(!0,e.chart.id)}),[]);const A=(0,n.useCallback)((t=>{const a=t?{...e.chart.latestQueryFormData,...(0,x.Hu)(We()(e.controls,t))}:(0,x.Hu)(e.controls);e.actions.updateQueryFormData(a,e.chart.id),e.actions.renderTriggered((new Date).getTime(),e.chart.id),v()}),[v,e.actions,e.chart.id,e.chart.latestQueryFormData,e.controls]);(0,n.useEffect)((()=>{if(r&&e.chart.latestQueryFormData.viz_type===e.controls.viz_type.value){!e.controls.datasource||null!=r.datasource&&e.controls.datasource.value===r.datasource.value||(0,it.QR)(e.form_data.datasource,!0);const t=Object.keys(e.controls).filter((t=>void 0!==r[t]&&!(0,_.JB)(e.controls[t].value,r[t].value))).filter((t=>e.controls[t].renderTrigger));t.length>0&&A(t)}}),[e.controls,e.ownState]);const D=(0,n.useMemo)((()=>!!s&&Object.keys(e.controls).filter((t=>void 0!==s[t]&&!(0,_.JB)(e.controls[t].value,s[t].value))).some((t=>!e.controls[t].renderTrigger&&!e.controls[t].dontRefreshOnChange))),[s,e.controls]);(0,n.useEffect)((()=>{void 0!==e.ownState&&(S(),A())}),[e.ownState]),D&&e.actions.logEvent(p.Ep);const k=(0,n.useMemo)((()=>{const t=Object.values(e.controls).filter((e=>e.validationErrors&&e.validationErrors.length>0));if(0===t.length)return null;const a=t.map((e=>e.validationErrors)),o=[...new Set(a.flat())].map((e=>[t.filter((t=>{var a;return null==(a=t.validationErrors)?void 0:a.includes(e)})).map((e=>e.label)),e])).map((([e,t])=>(0,Ie.tZ)("div",{key:t},e.length>1?(0,Q.t)("Controls labeled "):(0,Q.t)("Control labeled "),(0,Ie.tZ)("strong",null,` ${e.join(", ")}`),(0,Ie.tZ)("span",null,": ",t))));let r;return o.length>0&&(r=(0,Ie.tZ)("div",{style:{textAlign:"left"}},o)),r}),[e.controls]);function N(){return(0,Ie.tZ)(Mt,Be()({},e,{errorMessage:k,chartIsStale:D,onQuery:S}))}function O(e){return(0,rt.rV)(e,g[e])}function I(e,t){const a=Number(O(e))+t.width;(0,rt.LS)(e,a)}return e.standalone?N():(0,Ie.tZ)(so,null,(0,Ie.tZ)(ro,{actions:e.actions,canOverwrite:e.can_overwrite,canDownload:e.can_download,dashboardId:e.dashboardId,isStarred:e.isStarred,slice:e.slice,sliceName:e.sliceName,table_name:e.table_name,formData:e.form_data,chart:e.chart,ownState:e.ownState,user:e.user,reports:e.reports,onSaveChart:T,saveDisabled:k||"loading"===e.chart.chartStatus}),(0,Ie.tZ)(io,{id:"explore-container"},(0,Ie.tZ)(Ie.xB,{styles:Ie.iv`
            .navbar {
              margin-bottom: 0;
            }
            body {
              height: 100vh;
              max-height: 100vh;
              overflow: hidden;
            }
            #app-menu,
            #app {
              flex: 1 1 auto;
            }
            #app {
              flex-basis: 100%;
              overflow: hidden;
              height: 100%;
            }
            #app-menu {
              flex-shrink: 0;
            }
          `}),c&&(0,Ie.tZ)(ua,{onHide:T,actions:e.actions,form_data:e.form_data,sliceName:e.sliceName,dashboardId:e.dashboardId}),(0,Ie.tZ)(Xe.e,{onResizeStop:(e,t,a,o)=>{h(null==o?void 0:o.width),I(rt.dR.datasource_width,o)},defaultSize:{width:O(rt.dR.datasource_width),height:"100%"},minWidth:g[rt.dR.datasource_width],maxWidth:"33%",enable:{right:!0},className:d?"no-show":"explore-column data-source-selection"},(0,Ie.tZ)("div",{className:"title-container"},(0,Ie.tZ)("span",{className:"horizontal-text"},(0,Q.t)("Dataset")),(0,Ie.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:E},(0,Ie.tZ)(je.Z.Expand,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"}))),(0,Ie.tZ)(Aa,{datasource:e.datasource,controls:e.controls,actions:e.actions,shouldForceUpdate:f,user:e.user})),d?(0,Ie.tZ)("div",{className:"sidebar",onClick:E,"data-test":"open-datasource-tab",role:"button",tabIndex:0},(0,Ie.tZ)("span",{role:"button",tabIndex:0,className:"action-button"},(0,Ie.tZ)(tt.u,{title:(0,Q.t)("Open Datasource tab")},(0,Ie.tZ)(je.Z.Collapse,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"}))),(0,Ie.tZ)(je.Z.DatasetPhysical,{css:(0,Ie.iv)({marginTop:2*m.gridUnit},"",""),iconSize:"l",iconColor:m.colors.grayscale.base})):null,(0,Ie.tZ)(Xe.e,{onResizeStop:(e,t,a,o)=>I(rt.dR.controls_width,o),defaultSize:{width:O(rt.dR.controls_width),height:"100%"},minWidth:g[rt.dR.controls_width],maxWidth:"33%",enable:{right:!0},className:"col-sm-3 explore-column controls-column"},(0,Ie.tZ)(ta,{exploreState:e.exploreState,actions:e.actions,form_data:e.form_data,controls:e.controls,chart:e.chart,datasource_type:e.datasource_type,isDatasourceMetaLoading:e.isDatasourceMetaLoading,onQuery:S,onStop:function(){e.chart&&e.chart.queryController&&e.chart.queryController.abort()},canStopQuery:e.can_add||e.can_overwrite,errorMessage:k,chartIsStale:D})),(0,Ie.tZ)("div",{className:$e()("main-explore-content",d?"col-sm-9":"col-sm-7")},N())))}lo.propTypes=no;const uo=(0,xe.$j)((function(e){var t,a,o,r,n;const{explore:s,charts:i,impressionId:c,dataMask:l,reports:d}=e,u=(0,x.Hu)(s.controls);u.extra_form_data=(0,lt.on)({...u.extra_form_data},{...null==(t=l[null!=(a=u.slice_id)?a:0])?void 0:t.ownState});const f=i[Object.keys(i)[0]];let h=Number(null==(o=s.form_data)?void 0:o.dashboardId);return Number.isNaN(h)&&(h=void 0),{isDatasourceMetaLoading:s.isDatasourceMetaLoading,datasource:s.datasource,datasource_type:s.datasource.type,datasourceId:s.datasource_id,dashboardId:h,controls:s.controls,can_overwrite:!!s.can_overwrite,can_add:!!s.can_add,can_download:!!s.can_download,column_formats:s.datasource?s.datasource.column_formats:null,containerId:s.slice?`slice-container-${s.slice.slice_id}`:"slice-container",isStarred:s.isStarred,slice:s.slice,sliceName:s.sliceName,triggerRender:s.triggerRender,form_data:u,table_name:u.datasource_name,vizType:u.viz_type,standalone:s.standalone,force:s.force,forcedHeight:s.forced_height,chart:f,timeout:s.common.conf.SUPERSET_WEBSERVER_TIMEOUT,ownState:null==(r=l[null!=(n=u.slice_id)?n:0])?void 0:r.ownState,impressionId:c,user:s.user,exploreState:s,reports:d}}),(function(e){const t={...r,...o,...P,...h};return{actions:(0,i.DE)(t,e)}}))(lo);(0,Pe.Z)(),(0,He.Z)();const fo=document.getElementById("app"),ho=JSON.parse(fo.getAttribute("data-bootstrap"));(0,y.fG)(ho.common.feature_flags);const po=function(e){const{form_data:t}=e,{slice:a}=e,o=a?a.slice_name:null,r={...e,sliceName:o,common:{flash_messages:e.common.flash_messages,conf:e.common.conf},isDatasourceMetaLoading:!1,isStarred:!1,controls:(0,Z.R3)(e,t),controlsTransferred:[]};Object.entries(r.controls).forEach((([e,t])=>{r.controls[e]=(0,x.RO)(t,r)}));const n=a?(0,x.Hu)((0,Z.R3)(e,a.form_data)):null,s=(0,E.Jp)(e);return{charts:{[s]:{id:s,chartAlert:null,chartStatus:null,chartStackTrace:null,chartUpdateEndTime:null,chartUpdateStartTime:0,latestQueryFormData:(0,x.Hu)(r.controls),sliceFormData:n,queryController:null,queriesResponse:null,triggerQuery:!1,lastRendered:0}},saveModal:{dashboards:[],saveModalAlert:null},explore:r,impressionId:d().generate(),messageToasts:T((e.common||{}).flash_messages||[])}}(ho),bo=(0,i.MT)(Ze,po,(0,i.qC)((0,i.md)(c.Z,(e=>t=>a=>{var o;if(a.type!==h.LOG_EVENT)return t(a);const{dashboardInfo:r,explore:n,impressionId:s,dashboardLayout:i}=e.getState();let c={impression_id:s,version:"v2"};r?c={source:"dashboard",source_id:r.id,...c}:n&&(c={source:"explore",source_id:n.slice?n.slice.slice_id:0,...c});const{eventName:l}=a.payload;let{eventData:u={}}=a.payload;if(u={...c,ts:(new Date).getTime(),event_name:l,...u},p.TY.has(l)?u={...u,event_type:"timing",trigger_event:v}:(v=d().generate(),u={...u,event_type:"user",event_id:v,visibility:document.visibilityState}),u.target_id&&null!=i&&null!=(o=i.present)&&o[u.target_id]){const{meta:e}=i.present[u.target_id];u.target_name=e.chartId?e.sliceName:e.text}return g.append(u),u})),(0,_.hU)(!1)));s.render((0,Ie.tZ)((({store:e})=>(0,Ie.tZ)(xe.zt,{store:e},(0,Ie.tZ)(Ce.W,{backend:Ae.PD},(0,Ie.tZ)(De.a,{theme:Qe.r},(0,Ie.tZ)(ke.n,null),(0,Ie.tZ)(Ne.EM,null,(0,Ie.tZ)(uo,null),(0,Ie.tZ)(qe,null)))))),{store:bo}),document.getElementById("app"))},61358:(e,t,a)=>{"use strict";a.d(t,{jt:()=>c,Aw:()=>l,J8:()=>u,cq:()=>f,Dr:()=>h,Me:()=>p,M:()=>b,MZ:()=>m});var o=a(31069),r=a(61988),n=a(15926),s=a.n(n),i=a(72570);const c="SET_REPORT";function l({userId:e,filterField:t,creationMethod:a,resourceId:n}){const l=s().encode({filters:[{col:t,opr:"eq",value:n},{col:"creation_method",opr:"eq",value:a},{col:"created_by",opr:"rel_o_m",value:e}]});return function(e){return o.Z.get({endpoint:`/api/v1/report/?q=${l}`}).then((({json:o})=>{e(function(e,t,a,o){return{type:c,report:e,resourceId:t,creationMethod:a,filterField:o}}(o,n,a,t))})).catch((()=>e((0,i.Gb)((0,r.t)("There was an issue fetching reports attached to this dashboard.")))))}}const d=(e,t)=>{const a=t(),{user:o,dashboardInfo:r,charts:n,explore:s}=a;if(r)e(l({userId:o.userId,filterField:"dashboard_id",creationMethod:"dashboards",resourceId:r.id}));else{const[t]=Object.keys(n);e(l({userId:s.user.userId,filterField:"chart_id",creationMethod:"charts",resourceId:n[t].id}))}},u="ADD_REPORT",f=e=>t=>o.Z.post({endpoint:"/api/v1/report/",jsonPayload:e}).then((({json:e})=>{t({type:u,json:e}),t((0,i.ws)((0,r.t)("The report has been created")))})),h="EDIT_REPORT",p=(e,t)=>a=>o.Z.put({endpoint:`/api/v1/report/${e}`,jsonPayload:t}).then((({json:e})=>{a({type:h,json:e}),a((0,i.ws)((0,r.t)("Report updated")))}));function b(e,t){return function(a){return o.Z.put({endpoint:encodeURI(`/api/v1/report/${e.id}`),headers:{"Content-Type":"application/json"},body:JSON.stringify({active:t})}).catch((()=>{a((0,i.Gb)((0,r.t)("We were unable to active or deactivate this report.")))})).finally((()=>{a(d)}))}}function m(e){return function(t){return o.Z.delete({endpoint:encodeURI(`/api/v1/report/${e.id}`)}).catch((()=>{t((0,i.Gb)((0,r.t)("Your report could not be deleted")))})).finally((()=>{t(d),t((0,i.ws)((0,r.t)("Deleted: %s",e.name)))}))}}},90233:(e,t,a)=>{"use strict";a.d(t,{Lu:()=>c,tL:()=>s});var o=a(87462),r=a(76826),n=a.n(r),s={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};c.rankings=s;var i=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function c(e,t,a){void 0===a&&(a={});var r=a,n=r.keys,c=r.threshold,d=void 0===c?s.MATCHES:c,f=r.baseSort,p=void 0===f?i:f,b=r.sorter,m=void 0===b?function(e){return e.sort((function(e,t){return function(e,t,a){var o=e.rank,r=e.keyIndex,n=t.rank,s=t.keyIndex;return o===n?r===s?a(e,t):r<s?-1:1:o>n?-1:1}(e,t,p)}))}:b,g=e.reduce((function(e,r,i){var c=function(e,t,a,o){return t?function(e,t){for(var a=[],o=0,r=t.length;o<r;o++)for(var n=t[o],s=h(n),i=u(e,n),c=0,l=i.length;c<l;c++)a.push({itemValue:i[c],attributes:s});return a}(e,t).reduce((function(e,t,r){var n=e.rank,i=e.rankedValue,c=e.keyIndex,d=e.keyThreshold,u=t.itemValue,f=t.attributes,h=l(u,a,o),p=i,b=f.minRanking,m=f.maxRanking,g=f.threshold;return h<b&&h>=s.MATCHES?h=b:h>m&&(h=m),h>n&&(n=h,c=r,d=g,p=u),{rankedValue:p,rank:n,keyIndex:c,keyThreshold:d}}),{rankedValue:e,rank:s.NO_MATCH,keyIndex:-1,keyThreshold:o.threshold}):{rankedValue:e,rank:l(e,a,o),keyIndex:-1,keyThreshold:o.threshold}}(r,n,t,a),f=c.rank,p=c.keyThreshold;return f>=(void 0===p?d:p)&&e.push((0,o.Z)({},c,{item:r,index:i})),e}),[]);return m(g).map((function(e){return e.item}))}function l(e,t,a){return e=d(e,a),(t=d(t,a)).length>e.length?s.NO_MATCH:e===t?s.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?s.EQUAL:e.startsWith(t)?s.STARTS_WITH:e.includes(" "+t)?s.WORD_STARTS_WITH:e.includes(t)?s.CONTAINS:1===t.length?s.NO_MATCH:(o=e,r="",o.split(" ").forEach((function(e){e.split("-").forEach((function(e){r+=e.substr(0,1)}))})),r).includes(t)?s.ACRONYM:function(e,t){var a=0,o=0;function r(e,t,o){for(var r=o,n=t.length;r<n;r++)if(t[r]===e)return a+=1,r+1;return-1}var n,i,c=r(t[0],e,0);if(c<0)return s.NO_MATCH;o=c;for(var l=1,d=t.length;l<d;l++)if(!((o=r(t[l],e,o))>-1))return s.NO_MATCH;return n=1/(o-c),i=a/t.length,s.MATCHES+i*n}(e,t);var o,r}function d(e,t){return e=""+e,t.keepDiacritics||(e=n()(e)),e}function u(e,t){var a;if("object"==typeof t&&(t=t.key),"function"==typeof t)a=t(e);else if(null==e)a=null;else if(Object.hasOwnProperty.call(e,t))a=e[t];else{if(t.includes("."))return function(e,t){for(var a=e.split("."),o=[t],r=0,n=a.length;r<n;r++){for(var s=a[r],i=[],c=0,l=o.length;c<l;c++){var d=o[c];if(null!=d)if(Object.hasOwnProperty.call(d,s)){var u=d[s];null!=u&&i.push(u)}else"*"===s&&(i=i.concat(d))}o=i}if(Array.isArray(o[0])){var f=[];return f.concat.apply(f,o)}return o}(t,e);a=null}return null==a?[]:Array.isArray(a)?a:[String(a)]}var f={maxRanking:1/0,minRanking:-1/0};function h(e){return"string"==typeof e?f:(0,o.Z)({},f,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},a=Object.keys(t).join("|"),o=new RegExp(a,"g"),r=new RegExp(a,""),n=function(e){return e.replace(o,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(r)},e.exports.remove=n},54804:(e,t,a)=>{"use strict";a.d(t,{hb:()=>i,QU:()=>c,Es:()=>l,JL:()=>d});var o=a(42190),r=a(15926);function n({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const s=a.n(r)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,o.l6)((0,o.s_)(`/api/v1/chart/${e}?q=${s}`),n)}const c=e=>(0,o.l6)((0,o.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),l=e=>(0,o.s_)(`/api/v1/dashboard/${e}/charts`),d=e=>(0,o.s_)(`/api/v1/dashboard/${e}/datasets`)},33626:(e,t,a)=>{"use strict";a.d(t,{J:()=>r});var o=a(67294);const r=e=>{(0,o.useEffect)(e,[])}},61337:(e,t,a)=>{"use strict";var o;function r(e,t){try{const a=localStorage.getItem(e);return null===a?t:JSON.parse(a)}catch{return t}}function n(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e,t){return r(e,t)}function i(e,t){n(e,t)}a.d(t,{dR:()=>o,OH:()=>r,I_:()=>n,rV:()=>s,LS:()=>i}),function(e){e.filter_box_transition_snoozed_at="filter_box_transition_snoozed_at",e.chart_split_sizes="chart_split_sizes",e.controls_width="controls_width",e.datasource_width="datasource_width",e.is_datapanel_open="is_datapanel_open",e.homepage_chart_filter="homepage_chart_filter",e.homepage_dashboard_filter="homepage_dashboard_filter",e.homepage_collapse_state="homepage_collapse_state",e.homepage_activity_filter="homepage_activity_filter",e.sqllab__is_autocomplete_enabled="sqllab__is_autocomplete_enabled",e.explore__data_table_original_formatted_time_columns="explore__data_table_original_formatted_time_columns"}(o||(o={}))}},c={};function l(e){var t=c[e];if(void 0!==t)return t.exports;var a=c[e]={id:e,loaded:!1,exports:{}};return i[e].call(a.exports,a,a.exports,l),a.loaded=!0,a.exports}l.m=i,l.amdD=function(){throw new Error("define cannot be used indirect")},l.amdO={},e=[],l.O=(t,a,o,r)=>{if(!a){var n=1/0;for(d=0;d<e.length;d++){for(var[a,o,r]=e[d],s=!0,i=0;i<a.length;i++)(!1&r||n>=r)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(s=!1,r<n&&(n=r));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var n={};t=t||[null,a({}),a([]),a(a)];for(var s=2&o&&e;"object"==typeof s&&!~t.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,l.d(r,n),r},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,a)=>(l.f[a](e,t),t)),[])),l.u=e=>3718===e?"3718.a62d0a8e8aa478a00e40.entry.js":4593===e?"4593.f9f64c6e7c3957f0f370.entry.js":3906===e?"3906.6de478b94d6364c2b6f9.entry.js":2441===e?"2441.9d43893841d3df512e51.entry.js":4317===e?"4317.efc833d8ec8fcff74411.entry.js":{57:"38f4b0c5b2c751f3029f",112:"0cceda87f254629c0f55",137:"2750e07540640c5be0b5",158:"7af34d924b2b2e3aaaa7",177:"ca39eb74c4d49fd55005",183:"2d69e60dfe962c42eee9",215:"f6160a99b46b22e18caa",310:"e2c18a71d3a5c875a789",312:"90af13ee4a0d5e067aab",326:"13e2e44acc050fe4f4e7",336:"e5df42bc5a8ad6d9aed0",347:"3f1f3f38b6b3b9616e75",349:"0202ec1626f196ac9881",363:"e517ebae29a6c51c5e09",380:"b10c6bc15614f70674c7",440:"163404f983dce20259a1",444:"f6e6655a4a9d180a084d",498:"f5d9188e06d66de8db23",597:"d08e416f0ccd4854221a",600:"d0d66aaabc04eac7f3a8",616:"22160af30d9e816ffa2e",704:"0d61450ba8761d04ddf9",741:"ddfd188cfe976cc863f1",775:"3c04ba1e823d1dfb5b89",807:"c311b699287e23c5a49e",826:"3f59c315d2e5d8b15ff9",881:"78d550ef04ba4f916588",895:"9cbed3c01a59f66c9b68",954:"0ee69bed6107a59fe81f",992:"3972b8e3abebd6e63caf",999:"54febe7bb96630a3013d",1020:"275351648e7df01f26d5",1075:"529bc3f823e6fc60cd70",1130:"98fb4e05eadd162d8fde",1161:"173a9f0742b2a67e7a1b",1174:"8849a375bcccf9df44ed",1185:"9ea89afc9bce89ad80ad",1221:"fce32082981c2dec49e7",1256:"3479cded7646565257ab",1258:"604b6fdb6661c6e1205e",1261:"858915f2b7f5a9a59fc3",1263:"62048be321505812ff6a",1293:"825c8594d240fbf17f20",1351:"8f38137e5b4342d2da4f",1382:"587624c90ea6738e9972",1398:"951f07c7c3e07b72cca4",1402:"308402927cb1af91614e",1493:"55bdc0586c89caac178c",1568:"40f6c6e7fe72a2bc1b13",1573:"90afe1a34c07bae41851",1605:"2f7a1d1a47b76ec8c5c1",1862:"4f5a2ebd6e31cf1109d8",1877:"7dd385c6e9090a1b2734",1899:"0502b5cdba557a6ff693",1948:"f59707dedff3a7fc4091",2079:"1506fd7de5b75c690b36",2089:"6762245ee484d3ffcb17",2105:"8146230ef7c416ab6cb3",2112:"e9db5db193378823afb2",2229:"a0489dd5b2f28952a9dc",2264:"b12e914fd5684cf329c8",2267:"1665a22356999f7d09cb",2403:"a0d676c094e2f90b5f0a",2439:"7e0114c1e26108fed2fc",2549:"1f35e71bc0f82e09adf6",2646:"22d6b0b1d527d046d260",2698:"75dfd37839ade6c35680",2713:"617726f17984c3192f46",2797:"6a8bfc332a16fd0f491c",2955:"21b0680368dea0bf61c5",2983:"b85bf5c0e81e6910fa04",2991:"61490367f35abf38e575",3036:"3b134d76ef26f7542380",3126:"9829ed24951e047c1187",3141:"6db0cd2a326a62903532",3187:"6802e173609e0f6b30c1",3208:"c83ca863a53dd07d6e07",3232:"86296449d9c861643378",3240:"78cb567a5b91a58f0c01",3265:"edc982d88e8d399830b7",3325:"46b72d4c661fb47189a2",3391:"80372a7194e9022afd80",3496:"58bb3d2bd63b43c265bc",3544:"78f16a06c10598e0b889",3558:"a1e4af25d87548162409",3567:"ccb341a117b2ee4d5e98",3588:"8dbc009de7cea2d81e31",3606:"7621f705e25335f0121d",3711:"cb0a5497e8dfd6e40e1b",3745:"98581cb610a83871af98",3749:"68f7a3e5d439a23f4d89",3831:"2b70b41875ae8ef7fd7d",3871:"79cd11ca09fe747b1bfd",3955:"03c4e9c66c2c63d79acc",3985:"d51bceddde4bd627d6c2",4139:"21f4237f0879646a0d9c",4194:"eb98cf212c052ff4dbef",4237:"b26c82ecb232cd0532de",4266:"958a29639679b362fba3",4273:"827fb5197c686f0662c7",4421:"6290fd574418d5e32572",4458:"85219e9a6edf20621bea",4474:"b28a000dfeccbe1d81f3",4494:"7310d9d0949b4227a562",4572:"9d2bfa6bb53ce8784a2b",4579:"8164718d6dabba184b88",4625:"7c5442bc1e5598e90822",4662:"712187ae25c83dce2174",4667:"47a4c2c13ccfb09d3757",4732:"d30d055df1b3b7e84dba",4757:"124ced191b8ef59a3e2c",4758:"8546effff2a679b01358",4790:"4a9181a8fe8ffc5e3dcb",4794:"fa2a3ad4d82d3d4459fd",4797:"be22f9be14d0445f0f87",4810:"82297ac94bca3b3859d2",4817:"259525e7b455b997848a",4832:"5a592d69bbd6eff5fd66",4851:"a9ccd9b9ba2b847b6417",4946:"0eccf4c7519446ab3438",4972:"132e72e310c461806395",5051:"50ad50de04f449dd9956",5094:"838ef225492e310d33d5",5123:"32f8de0d2820b6fae5cf",5181:"34e5d3384af063aeb427",5195:"da8bf97e481b90ceac4e",5201:"0c0d33390c8cfa65fbbd",5215:"79d6344a8913e2aec103",5224:"2137b5c272446c93f5b7",5226:"43d2d046df38601d76af",5249:"8c40bbdfb03d04b29d02",5264:"db3a2f0029307b78e598",5281:"8b441b46691123854b6b",5330:"c3630bd2c65829e4c7a1",5335:"cbdabbf1e2d3d7e254df",5350:"a4556551303ff93cd4bb",5359:"fe8715215a93c63953ec",5367:"12541bbb82603d7e2d66",5378:"64f6237479272e5c5c3a",5507:"c7cdf6f84afbcf502ddb",5566:"a10ad064800c1df565c3",5580:"fa964e628191e708a48e",5592:"2e19c97690b06c32f1b4",5641:"207a4252758bcd4d3cbd",5707:"2b76605f1d6e11cf2df7",5771:"3acf2091ed043492ae76",5777:"58d0e720fba584974cbf",5802:"8caa85ec5eb98cb83343",5816:"3374bb9b8c7f89ae2da0",5832:"6641ca7ff6e2a41a1257",5838:"af5789397b8a13e08c38",5962:"ed92d26f4a929fbbc564",5972:"713e574a1d9b58a2135d",5998:"cb935545042c1ce92ecb",6061:"c9b07a9f1a9bae8552b2",6126:"62a79c1241ef166355de",6150:"6d17f8394d91a097eab6",6167:"ad4ff700d252caec8ce3",6207:"17d778c7ae36315bd979",6254:"15612e9a43534ba1a97d",6303:"b8e13b4773cab5f877ee",6357:"855323b00072f22891ac",6371:"150eda30c7d4d3f90b81",6377:"6f0f091efb5ecc18dde4",6420:"12131f944d05bfbc2b3d",6447:"bfa0e245c6ade68dd3de",6486:"9801caf1364f204340c9",6507:"f00932e24ce22bd1ca3b",6579:"f8fd51701b3ce361f688",6668:"0062637c2e307e4a2536",6682:"bdf3637ab1584c67ae30",6693:"c37db19068bf7910b244",6758:"fc3f2d7bb3a5b8f56817",6819:"1d34427183b1bc32acfd",6871:"ee6aaef556c2b3abedbf",6883:"369bb61eda9423d64359",6968:"2ec729de1b9e97e6ce11",6981:"68a6c50b90b0d58736ad",7003:"e8fb9fe508fee6bcd85c",7183:"e16648fac64644e729c7",7245:"7cbb94932e339ddac779",7249:"b5e7e83ac26bf4ec5fbe",7298:"44a89fd4ae0a1e57ae6b",7405:"2bfae0bdc72a5900199c",7460:"140aaba41af8a7b3891b",7521:"935545b9bc56d8343445",7584:"76c89f632c7a8315389e",7610:"69ae28e81db50e4eb6d7",7654:"2a756f12d13ca404a744",7716:"36cbf8b4562f9c80a2e0",7760:"7ab09485b0ef9d161fbf",7803:"7967d211212f85a80dde",7832:"fd7f701b105cdaddf11a",7850:"00845228665a5b4e5deb",7922:"034a466af79e5aec1e20",7974:"2fa7652f1a627818db3e",7984:"c70e87340845dac9e81d",7989:"e2c714d33a44d93648c0",8041:"b0b7ebae013a28bd3488",8312:"9b8eaa85fdf772d344ca",8349:"739a4da1e29881e55220",8398:"effe2e4690559c9dd638",8425:"d93b4ec64b1aced0c856",8463:"55fba49f8743cb008b18",8464:"a7c9c77204be1fa48aab",8491:"bc7fc77e4b9a26daf89a",8551:"213fce9c284921d22fd2",8623:"f3f0b0e4997f9dcf5264",8650:"122a0257d32b9b9dfd1f",8656:"930c6a0cab67c68681cd",8682:"e55361dd9642ab2c6cce",8695:"794b59e83f2639bbd4f5",8701:"07bc03500fdcdf86c946",8750:"a4875cd79305e6148ef1",8883:"7d0a7cd57a0e5306d21e",8924:"30cbf0580b9a9c8153fe",8970:"9662eb9aee235b45a0ba",9013:"2ae202ac00476dac5f77",9052:"bdc47b9882987a855bd3",9101:"e312f8189d0016e01622",9109:"70032121a681b08c1ca9",9207:"5716fdaacba60c1b00fc",9305:"857144aa3240952e069c",9322:"4c640e97a929f739a3df",9325:"d2f1f08edbd1d07cd106",9393:"aa0534433005d1a82b09",9396:"f9f3042a683c69591565",9483:"fcce3a445fdb577251e2",9510:"a1ded01332afd173d7e1",9558:"11464bec3d82809a0027",9622:"a6e817b0d68ef7cee2d4",9767:"9e8414a89898cf629e48",9794:"6c8b7483e1f99924e7f5",9811:"b3748ff012fc7ee520ef",9857:"169119af235c81fa0bc3",9873:"34c9f3b849b55ef12fa4",9877:"f6f5b18362ffb2b9362c"}[e]+".chunk.js",l.miniCssF=e=>e+"."+{137:"2750e07540640c5be0b5",380:"b10c6bc15614f70674c7",1261:"858915f2b7f5a9a59fc3",1877:"7dd385c6e9090a1b2734",3036:"3b134d76ef26f7542380",4194:"eb98cf212c052ff4dbef",4237:"b26c82ecb232cd0532de",4494:"7310d9d0949b4227a562",5378:"64f6237479272e5c5c3a",5566:"a10ad064800c1df565c3",6871:"ee6aaef556c2b3abedbf",8623:"f3f0b0e4997f9dcf5264",8650:"122a0257d32b9b9dfd1f"}[e]+".chunk.css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="superset:",l.l=(e,t,a,n)=>{if(o[e])o[e].push(t);else{var s,i;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",r+a),s.src=e),o[e]=[t];var f=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var r=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),i&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.p="/static/assets/",n=e=>new Promise(((t,a)=>{var o=l.miniCssF(e),r=l.p+o;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var r=(s=a[o]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var s;if((r=(s=n[o]).getAttribute("data-href"))===e||r===t)return s}})(o,r))return t();((e,t,a,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=n=>{if(r.onerror=r.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,r.parentNode.removeChild(r),o(c)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),s={9782:0,5296:0},l.f.miniCss=(e,t)=>{s[e]?t.push(s[e]):0!==s[e]&&{137:1,380:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5378:1,5566:1,6871:1,8623:1,8650:1}[e]&&t.push(s[e]=n(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))},(()=>{var e={9782:0,5296:0};l.f.j=(t,a)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else if(/^(126|687)1$/.test(t))e[t]=0;else{var r=new Promise(((a,r)=>o=e[t]=[a,r]));a.push(o[2]=r);var n=l.p+l.u(t),s=new Error;l.l(n,(a=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",s.name="ChunkLoadError",s.type=r,s.request=n,o[1](s)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[n,s,i]=a,c=0;if(n.some((t=>0!==e[t]))){for(o in s)l.o(s,o)&&(l.m[o]=s[o]);if(i)var d=i(l)}for(t&&t(a);c<n.length;c++)r=n[c],l.o(e,r)&&e[r]&&e[r][0](),e[n[c]]=0;return l.O(d)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),l.O(void 0,[504,294,3704,1030,9102,2087,185,9755,4981,5827,4921,7106,1844,995,9480,9602,2491,4750,323,9525,5010,3920,5289,9772,9986,3389,2569,8274,4489],(()=>l(85156)));var d=l.O(void 0,[504,294,3704,1030,9102,2087,185,9755,4981,5827,4921,7106,1844,995,9480,9602,2491,4750,323,9525,5010,3920,5289,9772,9986,3389,2569,8274,4489],(()=>l(31835)));d=l.O(d)})();
//# sourceMappingURL=explore.93219041722c414a70f1.entry.js.map