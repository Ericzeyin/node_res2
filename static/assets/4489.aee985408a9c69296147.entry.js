"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4489],{18239:(e,t,a)=>{a.d(t,{Z:()=>J});var r=a(37703),n=a(14890),i=a(52256),o=a(97381),s=a(5872),l=a.n(s),d=a(45697),c=a.n(d),u=a(67294),p=a(61988),h=a(51995),m=a(68492),g=a(55786),b=a(91877),y=a(93185),f=a(9531),v=a(38703),Z=a(94301),S=a(57902),x=a(3741),C=a(27600),w=a(23525),T=a(42190),k=a(18446),$=a.n(k),R=a(11865),_=a.n(R),D=a(16355),I=a(88274),F=a(11965);const E={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,initialValues:c().object,formData:c().object.isRequired,latestQueryFormData:c().object,labelColors:c().object,sharedLabelColors:c().object,height:c().number,width:c().number,setControlValue:c().func,vizType:c().string.isRequired,triggerRender:c().bool,chartAlert:c().string,chartStatus:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,addFilter:c().func,setDataMask:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,source:c().oneOf(["dashboard","explore"])},M={},q=[D.cg.INTERACTIVE_CHART],z={addFilter:()=>M,onFilterMenuOpen:()=>M,onFilterMenuClose:()=>M,initialValues:M,setControlValue(){},triggerRender:!1};class U extends u.Component{constructor(e){super(e),this.state={legendState:void 0},this.hasQueryResponseChange=!1,this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}}}shouldComponentUpdate(e){var t,a;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(t=e.queriesResponse)&&null!=(a=t[0])&&a.error)&&(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange||!$()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp)}handleAddFilter(e,t,a=!0,r=!0){this.props.addFilter(e,t,a,r)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:a,vizType:r}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(a),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:a,viz_type:r,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:a,chartId:r}=this.props;m.Z.warn(e),a.chartRenderingFailed(e.toString(),r,t?t.componentStack:null),this.hasQueryResponseChange&&a.logEvent(x.aD,{slice_id:r,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(...e){const{setControlValue:t}=this.props;t&&t(...e)}handleLegendStateChanged(e){this.setState({legendState:e})}render(){const{chartAlert:e,chartStatus:t,chartId:a}=this.props;if("loading"===t||e||null===t)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:r,height:n,datasource:i,annotationData:o,initialValues:s,ownState:l,filterState:d,chartIsStale:c,formData:u,latestQueryFormData:h,queriesResponse:m,postTransformProps:g}=this.props,b=c&&h?h:u,y=b.viz_type||this.props.vizType,f=_()(y),v="table"===y?`superset-chart-${f}`:f;let S;const C=(0,p.t)("No results were returned for this query"),w="explore"===this.props.source?(0,p.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,T="chart.svg";return S=r>300&&n>220?(0,F.tZ)(Z.XJ,{title:C,description:w,image:T}):(0,F.tZ)(Z.Tc,{title:C,image:T}),(0,F.tZ)(I.Z,{disableErrorBoundary:!0,key:`${a}`,id:`chart-id-${a}`,className:v,chartType:y,width:r,height:n,annotationData:o,datasource:i,initialValues:s,formData:b,ownState:l,filterState:d,hooks:this.hooks,behaviors:q,queriesData:m,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,legendState:this.state.legendState,noResults:S,postTransformProps:g})}}U.propTypes=E,U.defaultProps=z;const N=U;var O=a(54804),P=a(72875);const A=({chartId:e,error:t,...a})=>{const{result:r}=(0,O.hb)(e),n=t&&{...t,extra:{...t.extra,owners:r}};return(0,F.tZ)(P.Z,l()({},a,{error:n}))};var j=a(75701);const V={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,dashboardId:c().number,initialValues:c().object,formData:c().object.isRequired,labelColors:c().object,sharedLabelColors:c().object,width:c().number,height:c().number,setControlValue:c().func,timeout:c().number,vizType:c().string.isRequired,triggerRender:c().bool,force:c().bool,isFiltersInitialized:c().bool,isDeactivatedViz:c().bool,chartAlert:c().string,chartStatus:c().string,chartStackTrace:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,errorMessage:c().node,addFilter:c().func,onQuery:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,datasetsStatus:c().oneOf(["loading","error","complete"])},L={},K=(0,p.t)("The dataset associated with this chart no longer exists"),H={addFilter:()=>L,onFilterMenuOpen:()=>L,onFilterMenuClose:()=>L,initialValues:L,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,isDeactivatedViz:!1,force:!1},B=h.iK.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .slice_container {
    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }
  }
`,W=h.iK.div`
  font-family: ${({theme:e})=>e.typography.families.monospace};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class Q extends u.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&"UNDECIDED"!==this.props.filterboxMigrationState&&this.runQuery()}componentDidUpdate(){if(this.props.triggerQuery&&"UNDECIDED"!==this.props.filterboxMigrationState){if(this.props.isDeactivatedViz&&this.props.queriesResponse)return;this.runQuery()}}runQuery(){this.props.chartId>0&&(0,b.cr)(y.T.CLIENT_CACHE)?this.props.actions.getSavedChart(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState):this.props.actions.postChartFormData(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:a,chartId:r}=this.props;m.Z.warn(e),a.chartRenderingFailed(e.toString(),r,t?t.componentStack:null),a.logEvent(x.aD,{slice_id:r,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:a,chartAlert:r,chartStackTrace:n,datasource:i,dashboardId:o,height:s,datasetsStatus:l}=this.props,d=null==e||null==(t=e.errors)?void 0:t[0],c=r||(null==e?void 0:e.message);return void 0!==r&&r!==K&&i===f.tw&&l!==T.ni.ERROR?(0,F.tZ)(B,{key:a,"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:s},(0,F.tZ)(v.Z,null)):(0,F.tZ)(A,{key:a,chartId:a,error:d,subtitle:(0,F.tZ)(W,null,c),copyText:c,link:e?e.link:null,source:o?"dashboard":"explore",stackTrace:n})}render(){const{height:e,chartAlert:t,chartStatus:a,errorMessage:r,chartIsStale:n,queriesResponse:i=[],isDeactivatedViz:o=!1,width:s}=this.props,d="loading"===a;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===a?i.map((e=>this.renderErrorMessage(e))):r&&0===(0,g.Z)(i).length?(0,F.tZ)(Z.XJ,{title:(0,p.t)("Add required control values to preview chart"),description:(0,j.J)(!0),image:"chart.svg"}):d||t||r||!n||0!==(0,g.Z)(i).length?(0,F.tZ)(S.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,F.tZ)(B,{"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:e,width:s},(0,F.tZ)("div",{className:"slice_container","data-test":"slice-container"},(0,F.tZ)(N,l()({},this.props,{source:this.props.dashboardId?"dashboard":"explore","data-test":this.props.vizType}))),d&&!o&&(0,F.tZ)(v.Z,null))):(0,F.tZ)(Z.XJ,{title:(0,p.t)("Your chart is ready to go!"),description:(0,F.tZ)("span",null,(0,p.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,F.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,p.t)("click here")),"."),image:"chart.svg"})}}Q.propTypes=V,Q.defaultProps=H;const G=Q;var Y=a(74599);const J=(0,r.$j)(null,(function(e){return{actions:(0,n.DE)({...i,updateDataMask:Y.eG,logEvent:o.logEvent},e)}}))(G)},2275:(e,t,a)=>{a.d(t,{cP:()=>l,$6:()=>d,Rw:()=>c,Er:()=>u,DZ:()=>p,$X:()=>h,ck:()=>y});var r=a(45697),n=a.n(r),i=a(81255),o=a(713),s=a(79271);const l=n().shape({id:n().string.isRequired,type:n().oneOf(Object.values(i.ZP)).isRequired,parents:n().arrayOf(n().string),children:n().arrayOf(n().string),meta:n().shape({width:n().number,height:n().number,headerSize:n().oneOf(s.Z.map((e=>e.value))),background:n().oneOf(o.Z.map((e=>e.value))),chartId:n().number})}),d=n().shape({id:n().number.isRequired,chartAlert:n().string,chartStatus:n().string,chartUpdateEndTime:n().number,chartUpdateStartTime:n().number,latestQueryFormData:n().object,queryController:n().shape({abort:n().func}),queriesResponse:n().arrayOf(n().object),triggerQuery:n().bool,lastRendered:n().number}),c=n().shape({slice_id:n().number.isRequired,slice_url:n().string.isRequired,slice_name:n().string.isRequired,datasource:n().string,datasource_name:n().string,datasource_link:n().string,changed_on:n().number.isRequired,modified:n().string.isRequired,viz_type:n().string.isRequired,description:n().string,description_markeddown:n().string,owners:n().arrayOf(n().string)}),u=n().shape({chartId:n().number.isRequired,componentId:n().string.isRequired,filterName:n().string.isRequired,datasourceId:n().string.isRequired,directPathToFilter:n().arrayOf(n().string).isRequired,isDateFilter:n().bool.isRequired,isInstantFilter:n().bool.isRequired,columns:n().object,labels:n().object,scopes:n().object}),p=n().shape({sliceIds:n().arrayOf(n().number).isRequired,expandedSlices:n().object,editMode:n().bool,isPublished:n().bool.isRequired,colorNamespace:n().string,colorScheme:n().string,updatedColorScheme:n().bool,hasUnsavedChanges:n().bool}),h=n().shape({id:n().number.isRequired,metadata:n().object,slug:n().string,dash_edit_perm:n().bool.isRequired,dash_save_perm:n().bool.isRequired,common:n().object,userId:n().string.isRequired}),m=n().shape({value:n().oneOfType([n().number,n().string]).isRequired,label:n().string.isRequired}),g={value:n().oneOfType([n().number,n().string]).isRequired,label:n().string.isRequired,children:n().arrayOf(n().oneOfType([n().shape((b=()=>g,()=>b().apply(void 0,arguments))),m]))};var b;const y=n().oneOfType([n().shape(g),m])},94413:(e,t,a)=>{a.d(t,{ZN:()=>U,gT:()=>N});var r=a(67294),n=a(37703),i=a(86504),o=a(53587),s=a(51995),l=a(11965),d=a(61988),c=a(83862),u=a(68073),p=a(35932),h=a(14114),m=a(12515),g=a(56727),b=a(23525),y=a(10222),f=a(97634),v=a(15423),Z=a(9875),S=a(13433),x=a(27600),C=a(50909);const w=(0,s.iK)(C.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`,T=({formData:e,addDangerToast:t})=>{const[a,n]=(0,r.useState)("400"),[i,o]=(0,r.useState)("600"),[s,c]=(0,r.useState)(""),[u,p]=(0,r.useState)(""),h=(0,r.useCallback)((e=>{const{value:t,name:a}=e.currentTarget;"width"===a&&o(t),"height"===a&&n(t)}),[]),m=(0,r.useCallback)((()=>{c(""),(0,b.YE)(e).then((e=>{c(e),p("")})).catch((()=>{p((0,d.t)("Error")),t((0,d.t)("Sorry, something went wrong. Try again later."))}))}),[t,e]);(0,r.useEffect)((()=>{m()}),[]);const g=(0,r.useMemo)((()=>{if(!s)return"";const e=`${s}?${x.KD.standalone.name}=1&height=${a}`;return`<iframe\n  width="${i}"\n  height="${a}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[a,s,i]),y=u||g||(0,d.t)("Generating link, please wait..");return(0,l.tZ)("div",{id:"embed-code-popover","data-test":"embed-code-popover"},(0,l.tZ)("div",{css:l.iv`
          display: flex;
          flex-direction: column;
        `},(0,l.tZ)(S.Z,{shouldShowText:!1,text:g,copyNode:(0,l.tZ)(w,{buttonSize:"xsmall"},(0,l.tZ)("i",{className:"fa fa-clipboard"}))}),(0,l.tZ)(Z.Kx,{"data-test":"embed-code-textarea",name:"embedCode",disabled:!g,value:y,rows:"4",readOnly:!0,css:e=>l.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})),(0,l.tZ)("div",{css:e=>l.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `},(0,l.tZ)("div",null,(0,l.tZ)("label",{htmlFor:"embed-height"},(0,d.t)("Chart height")),(0,l.tZ)(Z.II,{type:"text",defaultValue:a,name:"height",onChange:h})),(0,l.tZ)("div",null,(0,l.tZ)("label",{htmlFor:"embed-width"},(0,d.t)("Chart width")),(0,l.tZ)(Z.II,{type:"text",defaultValue:i,name:"width",onChange:h,id:"embed-width"}))))},k="edit_properties",$="export_to_csv",R="export_to_csv_pivoted",_="export_to_json",D="download_as_image",I="copy_permalink",F="embed_code",E="share_by_email",M="view_query",q="run_in_sql_lab",z=["pivot_table","pivot_table_v2"],U=s.iK.div`
  ${({theme:e})=>l.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.gridUnit}px;
      height: ${3*e.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.gridUnit}px;
    }
  `}
`,N=((0,s.iK)(p.Z)`
  ${({theme:e})=>l.iv`
    width: ${8*e.gridUnit}px;
    height: ${8*e.gridUnit}px;
    padding: 0;
    border: 1px solid ${e.colors.primary.dark2};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${e.colors.primary.light1};
    }
  `}
`,(e,t,a,p,Z,S)=>{const x=(0,s.Fg)(),{addDangerToast:C,addSuccessToast:w}=(0,h.e1)(),[U,N]=(0,r.useState)(null),[O,P]=(0,r.useState)(!1),[A,j]=(0,r.useState)([]),V=(0,n.v9)((e=>e.charts)),L=(0,r.useMemo)((()=>{if(!V)return;const e=Object.values(V);return e.length>0?e[0]:void 0}),[V]),{datasource:K}=e,H=K&&"table"===K.split("__")[1],B=(0,r.useCallback)((async()=>{try{const t=(0,d.t)("Superset Chart"),a=await(0,b.YE)(e),r=encodeURIComponent((0,d.t)("%s%s","Check out this chart: ",a));window.location.href=`mailto:?Subject=${t}%20&Body=${r}`}catch(e){C((0,d.t)("Sorry, something went wrong. Try again later."))}}),[C,e]),W=(0,r.useCallback)((()=>t?(0,m.pe)({formData:e,ownState:S,resultType:"full",resultFormat:"csv"}):null),[t,e]),Q=(0,r.useCallback)((()=>t?(0,m.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),G=(0,r.useCallback)((()=>(0,m.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),Y=(0,r.useCallback)((async()=>{try{if(!e)throw new Error;await(0,y.Z)((()=>(0,b.YE)(e))),w((0,d.t)("Copied to clipboard!"))}catch(e){C((0,d.t)("Sorry, something went wrong. Try again later."))}}),[C,w,e]),J=(0,r.useCallback)((({key:t,domEvent:r})=>{var n;switch(t){case k:Z(),P(!1);break;case $:W(),P(!1),j([]);break;case R:Q(),P(!1),j([]);break;case _:G(),P(!1),j([]);break;case D:(0,g.Z)(".panel-body .chart-container",null!=(n=null==a?void 0:a.slice_name)?n:(0,d.t)("New chart"),!0)(r),P(!1),j([]);break;case I:Y(),P(!1),j([]);break;case F:P(!1),j([]);break;case E:B(),P(!1),j([]);break;case M:P(!1);break;case q:p(e),P(!1)}}),[Y,W,Q,G,e,p,Z,B,null==a?void 0:a.slice_name]);return[(0,r.useMemo)((()=>(0,l.tZ)(c.v,{onClick:J,selectable:!1,openKeys:A,onOpenChange:j},a&&(0,l.tZ)(r.Fragment,null,(0,l.tZ)(c.v.Item,{key:k},(0,d.t)("Edit chart properties")),(0,l.tZ)(c.v.Divider,null)),(0,l.tZ)(c.v.SubMenu,{title:(0,d.t)("Download"),key:"download_submenu"},z.includes(e.viz_type)?(0,l.tZ)(r.Fragment,null,(0,l.tZ)(c.v.Item,{key:$,icon:(0,l.tZ)(i.Z,null),disabled:!t},(0,d.t)("Export to original .CSV")),(0,l.tZ)(c.v.Item,{key:R,icon:(0,l.tZ)(i.Z,null),disabled:!t},(0,d.t)("Export to pivoted .CSV"))):(0,l.tZ)(c.v.Item,{key:$,icon:(0,l.tZ)(i.Z,null),disabled:!t},(0,d.t)("Export to .CSV")),(0,l.tZ)(c.v.Item,{key:_,icon:(0,l.tZ)(i.Z,null)},(0,d.t)("Export to .JSON")),(0,l.tZ)(c.v.Item,{key:D,icon:(0,l.tZ)(o.Z,null)},(0,d.t)("Download as image"))),(0,l.tZ)(c.v.SubMenu,{title:(0,d.t)("Share"),key:"share_submenu"},(0,l.tZ)(c.v.Item,{key:I},(0,d.t)("Copy permalink to clipboard")),(0,l.tZ)(c.v.Item,{key:E},(0,d.t)("Share chart by email")),(0,l.tZ)(c.v.Item,{key:F},(0,l.tZ)(u.Z,{triggerNode:(0,l.tZ)("span",{"data-test":"embed-code-button"},(0,d.t)("Embed code")),modalTitle:(0,d.t)("Embed code"),modalBody:(0,l.tZ)(T,{formData:e,addDangerToast:C}),maxWidth:100*x.gridUnit+"px",destroyOnClose:!0,responsive:!0}))),(0,l.tZ)(c.v.Divider,null),U?(0,l.tZ)(r.Fragment,null,(0,l.tZ)(c.v.SubMenu,{title:(0,d.t)("Manage email report")},(0,l.tZ)(f.Z,{chart:L,setShowReportSubMenu:N,showReportSubMenu:U,setIsDropdownVisible:P,isDropdownVisible:O,useTextMenu:!0})),(0,l.tZ)(c.v.Divider,null)):(0,l.tZ)(c.v,null,(0,l.tZ)(f.Z,{chart:L,setShowReportSubMenu:N,setIsDropdownVisible:P,isDropdownVisible:O,useTextMenu:!0})),(0,l.tZ)(c.v.Item,{key:M},(0,l.tZ)(u.Z,{triggerNode:(0,l.tZ)("span",{"data-test":"view-query-menu-item"},(0,d.t)("View query")),modalTitle:(0,d.t)("View query"),modalBody:(0,l.tZ)(v.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),H&&(0,l.tZ)(c.v.Item,{key:q},(0,d.t)("Run in SQL Lab")))),[C,t,L,J,O,e,A,U,a,H,x.gridUnit]),O,P]})},79789:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(67294),n=a(51995),i=a(61988),o=a(70163),s=a(58593),l=a(11965);const d=function({certifiedBy:e,details:t,size:a="l"}){const d=(0,n.Fg)();return(0,l.tZ)(s.u,{id:"certified-details-tooltip",title:(0,l.tZ)(r.Fragment,null,e&&(0,l.tZ)("div",null,(0,l.tZ)("strong",null,(0,i.t)("Certified by %s",e))),(0,l.tZ)("div",null,t))},(0,l.tZ)(o.Z.Certified,{iconColor:d.colors.primary.base,iconSize:a}))}},9433:(e,t,a)=>{a.d(t,{CronPicker:()=>u});var r=a(5872),n=a.n(r),i=(a(67294),a(85631)),o=a(61988),s=a(51995),l=a(61247),d=a(11965);const c={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("and"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},u=(0,s.iK)((e=>(0,d.tZ)(i.ZP,{getPopupContainer:e=>e.parentElement},(0,d.tZ)(l.Z,n()({locale:c},e)))))`
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${({theme:e})=>e.gridUnit}px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${({theme:e})=>e.gridUnit}px;
  }
`},17198:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(51995),n=a(61988),i=a(67294),o=a(9875),s=a(74069),l=a(49238),d=a(11965);const c=r.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,u=r.iK.div`
  line-height: 40px;
  padding-top: 16px;
`;function p({description:e,onConfirm:t,onHide:a,open:r,title:p}){const[h,m]=(0,i.useState)(!0),[g,b]=(0,i.useState)(""),y=()=>{b(""),t()};return(0,d.tZ)(s.Z,{disablePrimaryButton:h,onHide:()=>{b(""),a()},onHandledPrimaryAction:y,primaryButtonName:(0,n.t)("delete"),primaryButtonType:"danger",show:r,title:p},(0,d.tZ)(u,null,e),(0,d.tZ)(c,null,(0,d.tZ)(l.lX,{htmlFor:"delete"},(0,n.t)('Type "%s" to confirm',(0,n.t)("DELETE"))),(0,d.tZ)(o.II,{"data-test":"delete-modal-input",type:"text",id:"delete",autoComplete:"off",value:g,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";m(a.toUpperCase()!==(0,n.t)("DELETE")),b(a)},onPressEnter:()=>{h||y()}})))}},88694:(e,t,a)=>{a.d(t,{L:()=>c,$:()=>u});var r=a(5872),n=a.n(r),i=(a(67294),a(4715)),o=a(51995),s=a(11965);const l=o.iK.div`
  width: ${({theme:e})=>.75*e.gridUnit}px;
  height: ${({theme:e})=>.75*e.gridUnit}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.grayscale.light1};

  font-weight: ${({theme:e})=>e.typography.weights.normal};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary.base};

    &::before,
    &::after {
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${({theme:e})=>.75*e.gridUnit}px;
    height: ${({theme:e})=>.75*e.gridUnit}px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  &::before {
    top: ${({theme:e})=>e.gridUnit}px;
  }

  &::after {
    bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,d=o.iK.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>2*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,c=({overlay:e,...t})=>(0,s.tZ)(i.Gj,n()({overlay:e},t),(0,s.tZ)(d,{"data-test":"dropdown-trigger"},(0,s.tZ)(l,null))),u=e=>(0,s.tZ)(i.Gj,n()({overlayStyle:{zIndex:99,animationDuration:"0s"}},e))},36674:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(51995),i=a(11965),o=a(61988),s=a(58593),l=a(33626),d=a(70163);const c=n.iK.a`
  ${({theme:e})=>i.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:a,saveFaveStar:n,fetchFaveStar:u})=>{(0,l.J)((()=>{u&&u(e)}));const p=(0,r.useCallback)((a=>{a.preventDefault(),n(e,!!t)}),[t,e,n]),h=(0,i.tZ)(c,{href:"#",onClick:p,className:"fave-unfave-icon","data-test":"fave-unfave-icon",role:"button"},t?(0,i.tZ)(d.Z.FavoriteSelected,null):(0,i.tZ)(d.Z.FavoriteUnselected,null));return a?(0,i.tZ)(s.u,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite")},h):h}},52564:(e,t,a)=>{a.d(t,{u:()=>x});var r=a(5872),n=a.n(r),i=a(67294),o=a(11965),s=a(51995),l=a(61988),d=a(4715),c=a(58593),u=a(99612);const p=e=>o.iv`
  display: flex;
  font-size: ${e.typography.sizes.xl}px;
  font-weight: ${e.typography.weights.bold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title,
  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .dynamic-title {
    cursor: default;
  }
  & .dynamic-title-input {
    border: none;
    padding: 0;
    outline: none;

    &::placeholder {
      color: ${e.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
  }
`,h=({title:e,placeholder:t,onSave:a,canEdit:r,label:n})=>{const[s,d]=(0,i.useState)(!1),[h,m]=(0,i.useState)(e||""),g=(0,i.useRef)(null),[b,y]=(0,i.useState)(!1),{width:f,ref:v}=(0,u.NB)(),{width:Z,ref:S}=(0,u.NB)({refreshMode:"debounce"});(0,i.useEffect)((()=>{m(e)}),[e]),(0,i.useEffect)((()=>{if(s&&null!=g&&g.current&&(g.current.focus(),g.current.setSelectionRange)){const{length:e}=g.current.value;g.current.setSelectionRange(e,e),g.current.scrollLeft=g.current.scrollWidth}}),[s]),(0,i.useLayoutEffect)((()=>{null!=v&&v.current&&(v.current.innerHTML=(h||t).replace(/\s/g,"&nbsp;"))}),[h,t,v]),(0,i.useEffect)((()=>{g.current&&g.current.scrollWidth>g.current.clientWidth?y(!0):y(!1)}),[f,Z]);const x=(0,i.useCallback)((()=>{r&&!s&&d(!0)}),[r,s]),C=(0,i.useCallback)((()=>{if(!r)return;const t=h.trim();m(t),e!==t&&a(t),d(!1)}),[r,h,a,e]),w=(0,i.useCallback)((e=>{r&&s&&m(e.target.value)}),[r,s]),T=(0,i.useCallback)((e=>{var t;r&&"Enter"===e.key&&(e.preventDefault(),null==(t=g.current)||t.blur())}),[r]);return(0,o.tZ)("div",{css:p,ref:S},(0,o.tZ)(c.u,{id:"title-tooltip",title:b&&h&&!s?h:null},r?(0,o.tZ)("input",{"data-test":"editable-title-input",className:"dynamic-title-input","aria-label":null!=n?n:(0,l.t)("Title"),ref:g,onChange:w,onBlur:C,onClick:x,onKeyPress:T,placeholder:t,value:h,css:o.iv`
              cursor: ${s?"text":"pointer"};

              ${f&&f>0&&o.iv`
                width: ${f}px;
              `}
            `}):(0,o.tZ)("span",{className:"dynamic-title","aria-label":null!=n?n:(0,l.t)("Title"),ref:g,"data-test":"editable-title"},h)),(0,o.tZ)("span",{ref:v,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var m=a(79789),g=a(36674),b=a(70163),y=a(35932);const f=e=>o.iv`
  width: ${8*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
  padding: 0;
  border: 1px solid ${e.colors.primary.dark2};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }

  &:hover:not(:focus) > span.anticon {
    color: ${e.colors.primary.light1};
  }
`,v=e=>o.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colors.grayscale.light5};
  height: ${16*e.gridUnit}px;
  padding: 0 ${4*e.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,Z=e=>o.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-child {
      padding-left: 0;
    }
  }
`,S=e=>o.iv`
  margin-left: ${2*e.gridUnit}px;
`,x=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:a,showFaveStar:r,faveStarProps:i,titlePanelAdditionalItems:c,rightPanelAdditionalItems:u,additionalActionsMenu:p,menuDropdownProps:x})=>{const C=(0,s.Fg)();return(0,o.tZ)("div",{css:v,className:"header-with-actions"},(0,o.tZ)("div",{className:"title-panel"},(0,o.tZ)(h,e),t&&(0,o.tZ)("div",{css:Z},(null==a?void 0:a.certifiedBy)&&(0,o.tZ)(m.Z,a),r&&(0,o.tZ)(g.Z,i),c)),(0,o.tZ)("div",{className:"right-button-panel"},u,(0,o.tZ)("div",{css:S},(0,o.tZ)(d.Gj,n()({trigger:["click"],overlay:p},x),(0,o.tZ)(y.Z,{css:f,buttonStyle:"tertiary","aria-label":(0,l.t)("Menu actions trigger")},(0,o.tZ)(b.Z.MoreHoriz,{iconColor:C.colors.primary.dark2,iconSize:"l"}))))))}},97634:(e,t,a)=>{a.d(t,{x:()=>Q,Z:()=>J});var r,n,i=a(11965),o=a(67294),s=a(60812),l=a(37703),d=a(93185),c=a(51995),u=a(61988),p=a(70163),h=a(12441),m=a(83862),g=a(87253),b=a(54076),y=a(88694),f=a(17198),v=a(98286),Z=a(61358),S=a(29487),x=a(98978),C=a(87858),w=a(14114);!function(e){e.DASHBOARDS="dashboards",e.CHARTS="charts"}(r||(r={})),function(e){e.TEXT="TEXT",e.PNG="PNG",e.CSV="CSV"}(n||(n={}));var T=a(34858),k=a(74069),$=a(35932),R=a(87183),_=a(9433);const D=(0,c.iK)(k.Z)`
  .ant-modal-body {
    padding: 0;
  }
`,I=c.iK.div`
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};
  label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,F=c.iK.div`
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  padding: ${({theme:e})=>`${4*e.gridUnit}px ${4*e.gridUnit}px ${6*e.gridUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,E=c.iK.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,M=c.iK.div`
  margin-bottom: ${({theme:e})=>7*e.gridUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
`,q=(0,c.iK)(_.CronPicker)`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  width: ${({theme:e})=>120*e.gridUnit}px;
`,z=c.iK.p`
  color: ${({theme:e})=>e.colors.error.base};
`,U=i.iv`
  margin-bottom: 0;
`,N=(0,c.iK)($.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,O=c.iK.div`
  margin: ${({theme:e})=>8*e.gridUnit}px 0
    ${({theme:e})=>4*e.gridUnit}px;
`,P=(0,c.iK)(R.Y)`
  display: block;
  line-height: ${({theme:e})=>8*e.gridUnit}px;
`,A=(0,c.iK)(R.Y.Group)`
  margin-left: ${({theme:e})=>.5*e.gridUnit}px;
`,j=["pivot_table","pivot_table_v2","table","paired_ttest"],V={crontab:"0 12 * * 1"},L=(0,w.ZP)((function({onHide:e,show:t=!1,dashboardId:a,chart:r,userId:s,userEmail:d,creationMethod:c,dashboardName:h,chartName:m}){var g;const b=null==r||null==(g=r.sliceFormData)?void 0:g.viz_type,y=!!r,f=y&&b&&j.includes(b),w=f?n.TEXT:n.PNG,k=h||m,$=(0,o.useMemo)((()=>({...V,name:k?(0,u.t)("Weekly Report for %s",k):(0,u.t)("Weekly Report")})),[k]),R=(0,o.useCallback)(((e,t)=>"reset"===t?$:{...e,...t}),[$]),[_,L]=(0,o.useReducer)(R,$),[K,H]=(0,o.useState)(),B=(0,l.I0)(),W=(0,l.v9)((e=>{const t=a?Q.DASHBOARDS:Q.CHARTS;return(0,T._l)(e,t,a||(null==r?void 0:r.id))})),G=W&&Object.keys(W).length;(0,o.useEffect)((()=>{L(G?W:"reset")}),[G,W]);const Y=(0,i.tZ)(E,null,(0,i.tZ)(p.Z.Calendar,null),(0,i.tZ)("span",{className:"text"},G?(0,u.t)("Edit email report"):(0,u.t)("Schedule a new email report"))),J=(0,i.tZ)(o.Fragment,null,(0,i.tZ)(N,{key:"back",onClick:e},(0,u.t)("Cancel")),(0,i.tZ)(N,{key:"submit",buttonStyle:"primary",onClick:async()=>{const t={type:"Report",active:!0,force_screenshot:!1,creation_method:c,dashboard:a,chart:null==r?void 0:r.id,owners:[s],recipients:[{recipient_config_json:{target:d},type:"Email"}],name:_.name,description:_.description,crontab:_.crontab,report_format:_.report_format||w,timezone:_.timezone};L({isSubmitting:!0,error:void 0});try{G?await B((0,Z.Me)(_.id,t)):await B((0,Z.cq)(t)),e()}catch(e){const{error:t}=await(0,v.O)(e);L({error:t})}L({isSubmitting:!1})},disabled:!_.name,loading:_.isSubmitting},G?(0,u.t)("Save"):(0,u.t)("Add"))),X=(0,i.tZ)(o.Fragment,null,(0,i.tZ)(O,null,(0,i.tZ)("h4",null,(0,u.t)("Message content"))),(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(A,{onChange:e=>{L({report_format:e.target.value})},value:_.report_format||w},f&&(0,i.tZ)(P,{value:n.TEXT},(0,u.t)("Text embedded in email")),(0,i.tZ)(P,{value:n.PNG},(0,u.t)("Image (PNG) embedded in email")),(0,i.tZ)(P,{value:n.CSV},(0,u.t)("Formatted CSV attached in email")))));return(0,i.tZ)(D,{show:t,onHide:e,title:Y,footer:J,width:"432",centered:!0},(0,i.tZ)(I,null,(0,i.tZ)(C.Z,{id:"name",name:"name",value:_.name||"",placeholder:$.name,required:!0,validationMethods:{onChange:({target:e})=>L({name:e.value})},label:"Report Name","data-test":"report-name-test"}),(0,i.tZ)(C.Z,{id:"description",name:"description",value:(null==_?void 0:_.description)||"",validationMethods:{onChange:({target:e})=>{L({description:e.value})}},label:(0,u.t)("Description"),placeholder:(0,u.t)("Include a description that will be sent with your report"),css:U,"data-test":"report-description-test"})),(0,i.tZ)(F,null,(0,i.tZ)(M,null,(0,i.tZ)("h4",{css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,u.t)("Schedule")),(0,i.tZ)("p",null,(0,u.t)("A screenshot of the dashboard will be sent to your email at"))),(0,i.tZ)(q,{clearButton:!1,value:_.crontab||"0 12 * * 1",setValue:e=>{L({crontab:e})},onError:H}),(0,i.tZ)(z,null,K),(0,i.tZ)("div",{className:"control-label",css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`)(e)},(0,u.t)("Timezone")),(0,i.tZ)(x.Z,{timezone:_.timezone,onTimezoneChange:e=>{L({timezone:e})}}),y&&X),_.error&&(0,i.tZ)(S.Z,{type:"error",css:e=>(e=>i.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:G?(0,u.t)("Failed to update report"):(0,u.t)("Failed to create report"),description:_.error}))}));var K=a(94413);const H=e=>i.iv`
  color: ${e.colors.error.base};
`,B=e=>i.iv`
  & .ant-menu-item {
    padding: 5px 12px;
    margin-top: 0px;
    margin-bottom: 4px;
    :hover {
      color: ${e.colors.grayscale.dark1};
    }
  }
  :hover {
    background-color: ${e.colors.secondary.light5};
  }
`,W=e=>i.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`;var Q;!function(e){e.CHARTS="charts",e.DASHBOARDS="dashboards"}(Q||(Q={}));var G={name:"1e1ncky",styles:"border:none"},Y={name:"833hqy",styles:"width:200px"};function J({dashboardId:e,chart:t,useTextMenu:a=!1,setShowReportSubMenu:r,setIsDropdownVisible:n,isDropdownVisible:v}){const S=(0,l.I0)(),x=(0,l.v9)((a=>{const r=e?Q.DASHBOARDS:Q.CHARTS;return(0,T._l)(a,r,e||(null==t?void 0:t.id))})),C=(null==x?void 0:x.active)||!1,w=(0,l.v9)((e=>{var t;return e.user||(null==(t=e.explore)?void 0:t.user)})),k=()=>!!(0,d.c)(d.T.ALERT_REPORTS)&&(!(null==w||!w.userId)&&Object.keys(w.roles||[]).map((e=>w.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1])))).some((e=>e.length>0))),[$,R]=(0,o.useState)(null),_=(0,c.Fg)(),D=(0,s.D)(e),[I,F]=(0,o.useState)(!1),E=async(e,t)=>{null!=e&&e.id&&S((0,Z.M)(e,t))},M=k()&&!!(e&&D!==e||null!=t&&t.id);(0,o.useEffect)((()=>{M&&S((0,Z.Aw)({userId:w.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:e||(null==t?void 0:t.id)}))}),[]),(0,o.useEffect)((()=>{x&&r&&k()?r(!0):!x&&r&&r(!1)}),[x]);const q=()=>{n&&(n(!1),F(!0))};return(0,i.tZ)(o.Fragment,null,k()&&(0,i.tZ)(o.Fragment,null,(0,i.tZ)(L,{userId:w.userId,show:I,onHide:()=>F(!1),userEmail:w.email,dashboardId:e,chart:t,creationMethod:e?Q.DASHBOARDS:Q.CHARTS}),a?x?v&&(0,i.tZ)(m.v,{selectable:!1,css:G},(0,i.tZ)(m.v.Item,{css:W,onClick:()=>E(x,!C)},(0,i.tZ)(K.ZN,null,(0,i.tZ)(g.ZP,{checked:C,onChange:b.EI}),(0,u.t)("Email reports active"))),(0,i.tZ)(m.v.Item,{css:W,onClick:q},(0,u.t)("Edit email report")),(0,i.tZ)(m.v.Item,{css:W,onClick:()=>{n&&(n(!1),R(x))}},(0,u.t)("Delete email report"))):(0,i.tZ)(m.v,{selectable:!1,css:B},(0,i.tZ)(m.v.Item,{onClick:q},(0,u.t)("Set up an email report")),(0,i.tZ)(m.v.Divider,null)):x?(0,i.tZ)(o.Fragment,null,(0,i.tZ)(y.$,{overlay:(0,i.tZ)(m.v,{selectable:!1,css:Y},(0,i.tZ)(m.v.Item,null,(0,u.t)("Email reports active"),(0,i.tZ)(h.r,{"data-test":"toggle-active",checked:C,onClick:e=>E(x,e),size:"small",css:(0,i.iv)({marginLeft:2*_.gridUnit},"","")})),(0,i.tZ)(m.v.Item,{onClick:()=>F(!0)},(0,u.t)("Edit email report")),(0,i.tZ)(m.v.Item,{onClick:()=>R(x),css:H},(0,u.t)("Delete email report"))),trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,i.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,i.tZ)(p.Z.Calendar,null)))):(0,i.tZ)("span",{role:"button",title:(0,u.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>F(!0)},(0,i.tZ)(p.Z.Calendar,null)),$&&(0,i.tZ)(f.Z,{description:(0,u.t)("This action will permanently delete %s.",null==$?void 0:$.name),onConfirm:()=>{$&&(async e=>{await S((0,Z.MZ)(e)),R(null)})($)},onHide:()=>R(null),open:!0,title:(0,u.t)("Delete Report?")})))}},12441:(e,t,a)=>{a.d(t,{r:()=>s}),a(67294);var r=a(51995),n=a(40987),i=a(11965);const o=(0,r.iK)(n.Z)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,s=e=>(0,i.tZ)(o,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(11965),n=a(67294),i=a(80008),o=a.n(i),s=a(61988),l=a(4715);const d="GMT Standard Time",c={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},u=o()(),p=o()([2021,1]),h=o()([2021,7]),m=e=>p.tz(e).utcOffset().toString()+h.tz(e).utcOffset().toString(),g=e=>{var t,a;const r=m(e);return(u.tz(e).isDST()?null==(t=c[r])?void 0:t[1]:null==(a=c[r])?void 0:a[0])||e},b=o().tz.countries().map((e=>o().tz.zonesForCountry(e,!0))).flat(),y=[];b.forEach((e=>{y.find((t=>m(t.name)===m(e.name)))||y.push(e)}));const f=y.map((e=>({label:`GMT ${o().tz(u,e.name).format("Z")} (${g(e.name)})`,value:e.name,offsets:m(e.name),timezoneName:e.name}))),v=(e,t)=>o().tz(u,e.timezoneName).utcOffset()-o().tz(u,t.timezoneName).utcOffset();function Z({onTimezoneChange:e,timezone:t,minWidth:a="400px"}){const i=(0,n.useMemo)((()=>(e=>{var t;return(null==(t=f.find((t=>t.offsets===m(e))))?void 0:t.value)||"Africa/Abidjan"})(t||o().tz.guess())),[t]);return(0,n.useEffect)((()=>{t!==i&&e(i)}),[i,e,t]),(0,r.tZ)(l.Ph,{ariaLabel:(0,s.t)("Timezone selector"),css:(0,r.iv)({minWidth:a},"",""),onChange:t=>e(t),value:i,options:f,sortComparator:v})}f.sort(v)},9531:(e,t,a)=>{a.d(t,{tw:()=>r,Ky:()=>n,gz:()=>i,I6:()=>o,UN:()=>s,a7:()=>l,XX:()=>d});const r={id:0,type:a(46078).i9.Table,uid:"_placeholder_",datasource_name:"",table_name:"",columns:[],column_types:[],metrics:[],column_format:{},verbose_map:{},main_dttm_col:"",description:""},n=53,i=32,o=260,s=80,l=46,d=374},713:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(61988),n=a(80621);const i=[{value:n.HE,label:(0,r.t)("Transparent"),className:"background--transparent"},{value:n.b5,label:(0,r.t)("White"),className:"background--white"}]},79271:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(61988),n=a(80621);const i=[{value:n.u_,label:(0,r.t)("Small"),className:"header-style-option header-small"},{value:n.OE,label:(0,r.t)("Medium"),className:"header-style-option header-medium"},{value:n.pQ,label:(0,r.t)("Large"),className:"header-style-option header-large"}]},50909:(e,t,a)=>{a.d(t,{qi:()=>w,m:()=>T,HS:()=>k,uy:()=>$,C4:()=>E,_q:()=>q});var r=a(11965),n=a(67294),i=a(51995),o=a(61988),s=a(51115),l=a(42846),d=a(88889),c=a(23279),u=a.n(c),p=a(4715),h=a(9875),m=a(27600),g=a(87183),b=a(70163),y=a(35932),f=a(76697),v=a(54076),Z=a(13433),S=a(89555),x=a(61587);const C=(0,i.iK)("span")`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,w=(0,i.iK)(y.Z)`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.gridUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.gridUnit}px;
  }
`,T=({data:e,columns:t})=>{const a=(0,i.Fg)();return(0,r.tZ)(Z.Z,{text:e&&t?(0,v.Mv)(e,t):"",wrapped:!1,copyNode:(0,r.tZ)(b.Z.CopyOutlined,{iconColor:a.colors.grayscale.base,iconSize:"l","aria-label":(0,o.t)("Copy"),role:"button",css:r.iv`
            &.anticon > * {
              line-height: 0;
            }
          `})})},k=({onChangeHandler:e})=>{const t=(0,i.Fg)(),a=u()(e,m.M$);return(0,r.tZ)(h.II,{prefix:(0,r.tZ)(b.Z.Search,{iconColor:t.colors.grayscale.base}),placeholder:(0,o.t)("Search"),onChange:e=>{const t=e.target.value;a(t)},css:r.iv`
        width: 200px;
        margin-right: ${2*t.gridUnit}px;
      `})},$=({data:e,loading:t})=>{var a;return(0,r.tZ)(S.Z,{rowcount:null!=(a=null==e?void 0:e.length)?a:0,loading:t})};var R;!function(e){e.Formatted="formatted",e.Original="original"}(R||(R={}));const _=({onChange:e,value:t})=>(0,r.tZ)(g.Y.Group,{value:t,onChange:e},(0,r.tZ)(p.T,{direction:"vertical"},(0,r.tZ)(g.Y,{value:R.Formatted},(0,o.t)("Formatted date")),(0,r.tZ)(g.Y,{value:R.Original},(0,o.t)("Original value")))),D=i.iK.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>4*e.gridUnit+"px"};
`,I=i.iK.span`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  text-transform: uppercase;
`,F=({columnName:e,onTimeColumnChange:t,datasourceId:a,isOriginalTimeColumn:s})=>{const l=(0,i.Fg)(),d=a=>{t(e,a.target.value)},c=(0,n.useMemo)((()=>a?(0,r.tZ)(D,{onClick:e=>e.stopPropagation()},(0,r.tZ)(r.xB,{styles:r.iv`
              .column-formatting-popover .ant-popover-inner-content {
                padding: 0;
              }
            `}),(0,r.tZ)(I,null,(0,o.t)("Column Formatting")),(0,r.tZ)(_,{onChange:d,value:s?R.Original:R.Formatted})):null),[a,s]);return a?(0,r.tZ)("span",null,(0,r.tZ)(f.ZP,{overlayClassName:"column-formatting-popover",trigger:"click",content:c,placement:"bottomLeft",arrowPointAtCenter:!0},(0,r.tZ)(b.Z.SettingOutlined,{iconSize:"m",iconColor:l.colors.grayscale.light1,css:(0,r.iv)({marginRight:`${l.gridUnit}px`},"",""),onClick:e=>e.stopPropagation()})),e):(0,r.tZ)("span",null,e)},E=(e,t)=>{const a=(0,n.useMemo)((()=>{var e;return null!=(e=null==t?void 0:t.map((e=>Object.values(e).map((e=>e?e.toString().toLowerCase():(0,o.t)("N/A"))))))?e:[]}),[t]);return(0,n.useMemo)((()=>null!=t&&t.length?t.filter(((t,r)=>a[r].some((t=>null==t?void 0:t.includes(e.toLowerCase()))))):[]),[t,e,a])},M=(0,s.bt)(l.Z.DATABASE_DATETIME),q=(e,t,a,i,o,s)=>{const[l,c]=(0,n.useState)((0,x.W)(i)),u=(e,t)=>{if(i)if(t!==R.Original||l.includes(e)){if(t===R.Formatted&&l.includes(e)){const t=(0,x.W)(i);t.splice(t.indexOf(e),1),(0,x.e)(i,t),c(t)}}else{const t=(0,x.W)(i);t.push(e),(0,x.e)(i,t),c(t)}};return(0,n.useEffect)((()=>{o&&c((0,x.W)(i))}),[i,o]),(0,n.useMemo)((()=>e&&null!=a&&a.length?e.filter((e=>Object.keys(a[0]).includes(e))).map(((e,n)=>{const o=null==t?void 0:t[n],c=a[0][e],p=o===d.Z.TEMPORAL?l.indexOf(e):-1,h=l.includes(e);return{id:e,accessor:t=>t[e],Header:o===d.Z.TEMPORAL&&"string"!=typeof c?(0,r.tZ)(F,{columnName:e,datasourceId:i,onTimeColumnChange:u,isOriginalTimeColumn:h}):e,Cell:({value:e})=>!0===e?m.Ly:!1===e?m.gz:null===e?(0,r.tZ)(C,null,m.Wq):o===d.Z.TEMPORAL&&-1===p&&"number"==typeof e?M(e):String(e),...null==s?void 0:s[e]}})):[]),[e,a,t,i,s,l])}},61587:(e,t,a)=>{a.d(t,{W:()=>i,e:()=>o});var r=a(55786),n=a(61337);const i=e=>{const t=(0,n.rV)(n.dR.explore__data_table_original_formatted_time_columns,{});return void 0===e?[]:(0,r.Z)(t[e])},o=(e,t)=>{const a=(0,n.rV)(n.dR.explore__data_table_original_formatted_time_columns,{});(0,n.LS)(n.dR.explore__data_table_original_formatted_time_columns,{...a,[e]:t})}},48251:(e,t,a)=>{a.d(t,{c9:()=>q,Tg:()=>D});var r,n=a(67294),i=a(51995),o=a(61988),s=a(70163),l=a(71262),d=a(61337);!function(e){e.Results="results",e.Samples="samples"}(r||(r={}));var c=a(55786),u=a(38703),p=a(94301),h=a(52256),m=a(98286);const g={mixed_timeseries:2};var b=a(76962),y=a(50909),f=a(4788),v=a.n(f),Z=a(88889),S=a(11965),x=a(54076),C=a(61587);const w=i.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*e.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}
`,T=({data:e,datasourceId:t,onInputChange:a,columnNames:r,columnTypes:i,isLoading:o})=>{const s=(0,C.W)(t),l=v()(r,i).filter((([e,t])=>t===Z.Z.TEMPORAL&&e&&!s.includes(e))).map((([e])=>e)),d=(0,n.useMemo)((()=>(0,x.cD)(e,l)),[e,l]);return(0,S.tZ)(w,null,(0,S.tZ)(y.HS,{onChangeHandler:a}),(0,S.tZ)("div",{css:S.iv`
          display: flex;
          align-items: center;
        `},(0,S.tZ)(y.uy,{data:e,loading:o}),(0,S.tZ)(y.m,{data:d,columns:r})))},k=({data:e,colnames:t,coltypes:a,datasourceId:r,dataSize:i=50,isVisible:s})=>{const[l,d]=(0,n.useState)(""),c=(0,y._q)(t,a,e,r,s),u=(0,y.C4)(l,e);return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:u,columnNames:t,columnTypes:a,datasourceId:r,onInputChange:e=>d(e),isLoading:!1}),(0,S.tZ)(b.Z,{columns:c,data:u,pageSize:i,noDataText:(0,o.t)("No results"),emptyWrapperType:b.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},$=i.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,R=new WeakSet,_=({isRequest:e,queryFormData:t,queryForce:a,ownState:r,errorMessage:i,actions:s,isVisible:l,dataSize:d=50})=>{const[b,y]=(0,n.useState)([]),[f,v]=(0,n.useState)(!0),[Z,x]=(0,n.useState)(""),C=(w=(null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType),(null==g?void 0:g[w])||1);var w;if((0,n.useEffect)((()=>{i||e&&!R.has(t)&&(v(!0),(0,h.getChartDataRequest)({formData:t,force:a,resultFormat:"json",resultType:"results",ownState:r}).then((({json:e})=>{y((0,c.Z)(e.result)),x(""),R.add(t),a&&s&&s.setForceQuery(!1)})).catch((e=>{(0,m.O)(e).then((({error:e,message:t})=>{x(e||t||(0,o.t)("Sorry, an error occurred"))}))})).finally((()=>{v(!1)})))}),[t,e]),(0,n.useEffect)((()=>{i&&v(!1)}),[i]),f)return Array(C).fill((0,S.tZ)(u.Z,null));if(i){const e=(0,o.t)("Run a query to display results");return Array(C).fill((0,S.tZ)(p.x3,{image:"document.svg",title:e}))}if(Z){const e=(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:[],columnNames:[],columnTypes:[],datasourceId:t.datasource,onInputChange:()=>{},isLoading:!1}),(0,S.tZ)($,null,Z));return Array(C).fill(e)}if(0===b.length){const e=(0,o.t)("No results were returned for this query");return Array(C).fill((0,S.tZ)(p.x3,{image:"document.svg",title:e}))}return b.map(((e,a)=>(0,S.tZ)(k,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,dataSize:d,datasourceId:t.datasource,key:a,isVisible:l})))},D=({isRequest:e,queryFormData:t,queryForce:a,ownState:n,errorMessage:i,actions:s,isVisible:d,dataSize:c=50})=>{const u=_({errorMessage:i,queryFormData:t,queryForce:a,ownState:n,isRequest:e,actions:s,dataSize:c,isVisible:d});if(1===u.length)return u[0];const p=u.map(((e,t)=>0===t?(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results"),key:r.Results},e):(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${r.Results} ${t+1}`},e)));return(0,S.tZ)(l.ZP,{fullWidth:!1}," ",p," ")},I=i.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,F=new WeakSet,E=({isRequest:e,datasource:t,queryForce:a,actions:r,dataSize:i=50,isVisible:s})=>{const[l,d]=(0,n.useState)(""),[m,g]=(0,n.useState)([]),[f,v]=(0,n.useState)([]),[Z,x]=(0,n.useState)([]),[C,w]=(0,n.useState)(!1),[k,$]=(0,n.useState)(""),R=(0,n.useMemo)((()=>`${t.id}__${t.type}`),[t]);(0,n.useEffect)((()=>{e&&a&&F.delete(t),e&&!F.has(t)&&(w(!0),(0,h.getDatasetSamples)(t.id,a).then((e=>{g((0,c.Z)(e.data)),v((0,c.Z)(e.colnames)),x((0,c.Z)(e.coltypes)),$(""),F.add(t),a&&r&&r.setForceQuery(!1)})).catch((e=>{g([]),v([]),x([]),$(`${e.name}: ${e.message}`)})).finally((()=>{w(!1)})))}),[t,e,a]);const _=(0,y._q)(f,Z,m,R,s),D=(0,y.C4)(l,m);if(C)return(0,S.tZ)(u.Z,null);if(k)return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:D,columnNames:f,columnTypes:Z,datasourceId:R,onInputChange:e=>d(e),isLoading:C}),(0,S.tZ)(I,null,k));if(0===m.length){const e=(0,o.t)("No samples were returned for this dataset");return(0,S.tZ)(p.x3,{image:"document.svg",title:e})}return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(T,{data:D,columnNames:f,columnTypes:Z,datasourceId:R,onInputChange:e=>d(e),isLoading:C}),(0,S.tZ)(b.Z,{columns:_,data:D,pageSize:i,noDataText:(0,o.t)("No results"),emptyWrapperType:b.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},M=i.iK.div`
  ${({theme:e})=>`\n    position: relative;\n    background-color: ${e.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*e.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*e.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}
`,q=({queryFormData:e,datasource:t,queryForce:a,onCollapseChange:c,chartStatus:u,ownState:p,errorMessage:h,actions:m})=>{const g=(0,i.Fg)(),[b,y]=(0,n.useState)(r.Results),[f,v]=(0,n.useState)({results:!1,samples:!1}),[Z,x]=(0,n.useState)((0,d.rV)(d.dR.is_datapanel_open,!1));(0,n.useEffect)((()=>{(0,d.LS)(d.dR.is_datapanel_open,Z)}),[Z]),(0,n.useEffect)((()=>{Z||v({results:!1,samples:!1}),Z&&b.startsWith(r.Results)&&"rendered"===u&&v({results:!0,samples:!1}),Z&&b===r.Samples&&v({results:!1,samples:!0})}),[Z,b,u]);const C=(0,n.useCallback)((e=>{c(e),x(e)}),[c]),T=(0,n.useCallback)(((e,t)=>{Z?e===b&&(t.preventDefault(),C(!1)):C(!0),y(e)}),[b,C,Z]),k=(0,n.useMemo)((()=>{const e=Z?(0,S.tZ)(s.Z.CaretUp,{iconColor:g.colors.grayscale.base,"aria-label":(0,o.t)("Collapse data panel")}):(0,S.tZ)(s.Z.CaretDown,{iconColor:g.colors.grayscale.base,"aria-label":(0,o.t)("Expand data panel")});return(0,S.tZ)(w,null,Z?(0,S.tZ)("span",{role:"button",tabIndex:0,onClick:()=>C(!1)},e):(0,S.tZ)("span",{role:"button",tabIndex:0,onClick:()=>C(!0)},e))}),[C,Z,g.colors.grayscale.base]),$=_({errorMessage:h,queryFormData:e,queryForce:a,ownState:p,isRequest:f.results,actions:m,isVisible:r.Results===b}).map(((e,t)=>0===t?(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results"),key:r.Results},e):t>0?(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${r.Results} ${t+1}`},e):null));return(0,S.tZ)(M,{"data-test":"some-purposeful-instance"},(0,S.tZ)(l.ZP,{fullWidth:!1,tabBarExtraContent:k,activeKey:Z?b:"",onTabClick:T},$,(0,S.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Samples"),key:r.Samples},(0,S.tZ)(E,{datasource:t,queryForce:a,isRequest:f.samples,actions:m,isVisible:r.Samples===b}))))}},89555:(e,t,a)=>{a.d(t,{Z:()=>l}),a(67294);var r=a(67190),n=a(61988),i=a(37921),o=a(58593),s=a(11965);function l(e){const{rowcount:t=0,limit:a,loading:l}=e,d=t===a,c=d||0===t&&!l?"danger":"default",u=(0,r.JB)()(t),p=(0,s.tZ)(i.Z,{type:c,"data-test":"row-count-label"},l?(0,n.t)("Loading..."):(0,n.tn)("%s row","%s rows",t,u));return d?(0,s.tZ)(o.u,{id:"tt-rowcount-tooltip",title:(0,s.tZ)("span",null,(0,n.t)("Limit reached"))},p):p}},15423:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(67294),n=a(51995),i=a(55786),o=a(61988),s=a(42110),l=a(120),d=a(13433),c=a(38703),u=a(50909),p=a(98286),h=a(52256),m=a(53459),g=a(49889),b=a(33743),y=a(22489),f=a(11965);const v=(0,n.iK)(u.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`;s.Z.registerLanguage("markdown",m.Z),s.Z.registerLanguage("html",g.Z),s.Z.registerLanguage("sql",b.Z),s.Z.registerLanguage("json",y.Z);const Z=n.iK.div`
  height: 100%;
`,S=(0,n.iK)(s.Z)`
  height: calc(100% - 26px); // 100% - clipboard height
`,x=e=>{const[t,a]=(0,r.useState)([]),[n,s]=(0,r.useState)(!1),[u,m]=(0,r.useState)(null);return(0,r.useEffect)((()=>{s(!0),(0,h.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((({json:e})=>{a((0,i.Z)(e.result)),s(!1),m(null)})).catch((e=>{(0,p.O)(e).then((({error:t,message:a})=>{m(t||a||e.statusText||(0,o.t)("Sorry, An error occurred")),s(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),n?(0,f.tZ)(c.Z,null):u?(0,f.tZ)("pre",null,u):(0,f.tZ)(r.Fragment,null,t.map((e=>e.query?(0,f.tZ)(Z,{key:e.query},(0,f.tZ)(d.Z,{text:e.query,shouldShowText:!1,copyNode:(0,f.tZ)(v,{buttonSize:"xsmall"},(0,f.tZ)("i",{className:"fa fa-clipboard"}))}),(0,f.tZ)(S,{language:e.language||void 0,style:l.Z},e.query)):null)))}},40219:(e,t,a)=>{a.d(t,{BR:()=>s,nv:()=>c,LW:()=>u});var r=a(57557),n=a.n(r),i=a(31069);const o=["url_params"],s=e=>n()(e,o),l=(e,t)=>{let a="api/v1/explore/form_data";return e&&(a=a.concat(`/${e}`)),t&&(a=a.concat(`?tab_id=${t}`)),a},d=(e,t,a,r)=>{const n={datasource_id:e,datasource_type:t,form_data:JSON.stringify(s(a))};return r&&(n.chart_id=r),n},c=(e,t,a,r,n)=>i.Z.post({endpoint:l(void 0,n),jsonPayload:d(e,t,a,r)}).then((e=>e.json.key)),u=(e,t,a,r,n,o)=>i.Z.put({endpoint:l(a,o),jsonPayload:d(e,t,r,n)}).then((e=>e.json.message))},28615:(e,t,a)=>{a.d(t,{S:()=>i});var r=a(67294),n=a(60812);function i(e,t){const a=(0,n.D)(e);(0,r.useEffect)((()=>{e!==a&&t(a,e)}),[e,a,t])}},6954:(e,t,a)=>{a.d(t,{z:()=>i});var r=a(67294);const n=new(a(11133).g0)("tab_id_channel");function i(){const[e,t]=(0,r.useState)();return(0,r.useEffect)((()=>{const a=()=>{const e=window.localStorage.getItem("last_tab_id"),a=String(e?Number.parseInt(e,10)+1:1);window.sessionStorage.setItem("tab_id",a),window.localStorage.setItem("last_tab_id",a),t(a)},r=window.sessionStorage.getItem("tab_id");r?(n.postMessage({type:"REQUESTING_TAB_ID",tabId:r}),t(r)):a(),n.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};n.postMessage(e)}else"TAB_ID_DENIED"===t.type&&a()}}),[e]),e}},56727:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(46926),n=a.n(r),i=a(21804),o=a.n(i),s=a(61988),l=a(72570);function d(e,t,a=!1){return r=>{const i=a?document.querySelector(e):r.currentTarget.closest(e);return i?n().toJpeg(i,{quality:.95,bgcolor:"#F5F5F5",filter:e=>"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!e.className.includes("ant-dropdown")}).then((e=>{const a=document.createElement("a");a.download=`${((e,t=new Date)=>`${o()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`)(t)}.jpg`,a.href=e,a.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,l.Dz)((0,s.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,a)=>{a.d(t,{J:()=>n});var r=a(61988);const n=e=>(0,r.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",e?'"Create chart"':'"Update chart"')}}]);
//# sourceMappingURL=4489.aee985408a9c69296147.entry.js.map