"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9137],{25163:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var a=r(51995),s=r(11965),o=r(61988),l=r(30381),n=r.n(l),i=r(67294),c=r(5977),u=r(73727),d=r(18782),g=r(58593),Z=r(20755),m=r(14114),p=r(44814),b=r(46714),h=r(34858);const f=a.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: ${4*e.gridUnit}px;
      font-size: ${e.typography.sizes.s};
      font-weight: ${e.typography.weights.normal};
      text-decoration: underline;
    }
  `}
`,k=(0,m.ZP)((function({addDangerToast:e,isReportEnabled:t}){const{alertId:r}=(0,c.UO)(),{state:{loading:a,resourceCount:l,resourceCollection:m},fetchData:k}=(0,h.Yi)(`report/${r}/log`,(0,o.t)("log"),e,!1),{state:{loading:S,resource:w},fetchResource:C}=(0,h.LE)("report",(0,o.t)("reports"),e);(0,i.useEffect)((()=>{null===r||S||C(r)}),[r]);const E=(0,i.useMemo)((()=>[{Cell:({row:{original:{state:e}}})=>(0,s.tZ)(b.Z,{state:e,isReportEnabled:t}),accessor:"state",Header:(0,o.t)("State"),size:"xs",disableSortBy:!0},{Cell:({row:{original:{uuid:e}}})=>e?e.slice(0,6):"none",accessor:"uuid",Header:(0,o.t)("Execution ID"),size:"xs",disableSortBy:!0},{Cell:({row:{original:{scheduled_dttm:e}}})=>n()(new Date(e)).format("YYYY-MM-DD hh:mm:ss a"),accessor:"scheduled_dttm",Header:(0,o.t)("Scheduled at (UTC)")},{Cell:({row:{original:{start_dttm:e}}})=>n()(new Date(e)).format("YYYY-MM-DD hh:mm:ss a"),Header:(0,o.t)("Start at (UTC)"),accessor:"start_dttm"},{Cell:({row:{original:{start_dttm:e,end_dttm:t}}})=>(0,p.zQ)(new Date(e).getTime(),new Date(t).getTime()),Header:(0,o.t)("Duration"),disableSortBy:!0},{accessor:"value",Header:(0,o.t)("Value")},{accessor:"error_message",Header:(0,o.t)("Error message"),Cell:({row:{original:{error_message:e=""}}})=>(0,s.tZ)(g.u,{title:e,placement:"topLeft"},(0,s.tZ)("span",null,e))}]),[t]),D=`/${t?"report":"alert"}/list/`;return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(Z.Z,{name:(0,s.tZ)(f,null,(0,s.tZ)("span",null,null==w?void 0:w.type," ",null==w?void 0:w.name),(0,s.tZ)("span",null,(0,s.tZ)(u.rU,{to:D},"Back to all")))}),(0,s.tZ)(d.Z,{className:"execution-log-list-view",columns:E,count:l,data:m,fetchData:k,initialSort:[{id:"start_dttm",desc:!0}],loading:a,pageSize:25}))}))},46714:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(51995),s=r(61988),o=(r(67294),r(58593)),l=r(70163),n=r(28745),i=r(11965);function c(e,t,r){switch(e){case n.Z.Working:return r.colors.primary.base;case n.Z.Error:return r.colors.error.base;case n.Z.Success:return t?r.colors.success.base:r.colors.alert.base;case n.Z.Noop:return r.colors.success.base;case n.Z.Grace:return r.colors.alert.base;default:return r.colors.grayscale.base}}function u({state:e,isReportEnabled:t=!1}){const r=(0,a.Fg)(),u={icon:l.Z.Check,label:"",status:""};switch(e){case n.Z.Success:u.icon=t?l.Z.Check:l.Z.AlertSolidSmall,u.label=t?(0,s.t)("Report sent"):(0,s.t)("Alert triggered, notification sent"),u.status=n.Z.Success;break;case n.Z.Working:u.icon=l.Z.Running,u.label=t?(0,s.t)("Report sending"):(0,s.t)("Alert running"),u.status=n.Z.Working;break;case n.Z.Error:u.icon=l.Z.XSmall,u.label=t?(0,s.t)("Report failed"):(0,s.t)("Alert failed"),u.status=n.Z.Error;break;case n.Z.Noop:u.icon=l.Z.Check,u.label=(0,s.t)("Nothing triggered"),u.status=n.Z.Noop;break;case n.Z.Grace:u.icon=l.Z.AlertSolidSmall,u.label=(0,s.t)("Alert Triggered, In Grace Period"),u.status=n.Z.Grace;break;default:u.icon=l.Z.Check,u.label=(0,s.t)("Nothing triggered"),u.status=n.Z.Noop}const d=u.icon;return(0,i.tZ)(o.u,{title:u.label,placement:"bottomLeft"},(0,i.tZ)(d,{iconColor:c(u.status,t,r)}))}},28745:(e,t,r)=>{var a,s;r.d(t,{Z:()=>a,u:()=>s}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(a||(a={})),function(e){e.Email="Email",e.Slack="Slack"}(s||(s={}))}}]);
//# sourceMappingURL=7d3bedaee463aca9b4bc.chunk.js.map