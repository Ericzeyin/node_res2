"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1862],{1862:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Ct});var n=a(11965),i=a(15926),o=a.n(i),s=a(67294),l=a(45697),r=a.n(l),d=a(87183),c=a(57011),h=a(29487),u=a(82607),m=a(14670),p=a.n(m),g=a(51995),b=a(61988),f=a(31069),y=a(68135),Z=a(4715),C=a(49238),_=a(35932),v=a(71262),x=a(79789),E=a(86057),w=a(73995),S=a(37921),D=a(38703),T=a(17982),k=a(38270),A=a(98286),I=a(79069),M=a(79684),K=a(42878),N=a(665),P=a(14114),L=a(91877),$=a(93185),q=a(70163);function R(t,e,a){return s.Children.map(t,(t=>{let n=t;return t&&t.type.name===e.name&&(n=s.cloneElement(t,a(t))),n&&n.props.children&&(n=s.cloneElement(n,{children:R(n.props.children,e,a)})),n}))}var U=a(58593);const B=n.iv`
  .ant-form-item-control-input-content {
    display: flex;
    flex-direction: row;
  }
`;function F({fieldKey:t,value:e,label:a,description:i=null,control:o,onChange:l=(()=>{}),compact:r=!1,inline:d}){const c=(0,s.useCallback)((e=>{l(t,e)}),[l,t]),h=s.cloneElement(o,{value:e,onChange:c});return(0,n.tZ)(C.xJ,{label:(0,n.tZ)(C.lX,{className:"m-r-5"},a||t,r&&i&&(0,n.tZ)(U.u,{id:"field-descr",placement:"right",title:i},(0,n.tZ)("i",{className:"fa fa-info-circle m-l-5"}))),css:d&&B},h,!r&&i&&(0,n.tZ)("div",{css:t=>({color:t.colors.grayscale.base,[d?"marginLeft":"marginTop"]:t.gridUnit})},i))}class O extends s.PureComponent{constructor(t){super(t),this.onChange=this.onChange.bind(this)}onChange(t,e){return this.props.onChange({...this.props.item,[t]:e})}render(){const{title:t}=this.props;return(0,n.tZ)(C.l0,{className:"CRUD",layout:"vertical"},t&&(0,n.tZ)("legend",null,t),R(this.props.children,F,(t=>({onChange:this.onChange,value:this.props.item[t.props.fieldKey],compact:this.props.compact}))))}}var j;function G(t){const e=t.map((t=>({...t,id:t.id||p().generate()}))),a={};return e.forEach((t=>{a[t.id]=t})),{collection:a,collectionArray:e}}O.defaultProps={compact:!1,title:null},function(t){t[t.asc=1]="asc",t[t.desc=2]="desc",t[t.unsort=0]="unsort"}(j||(j={}));const z=g.iK.div`
  ${({stickyHeader:t})=>t&&"\n      height: 350px;\n      overflow-y: auto;\n      overflow-x: auto;\n\n      .table {\n        min-width: 800px;\n      }\n      thead th {\n        background: #fff;\n        position: sticky;\n        top: 0;\n        z-index: 9;\n        min\n      }\n    "}
  ${({theme:t})=>`\n    th span {\n      vertical-align: ${-2*t.gridUnit}px;\n    }\n    .text-right {\n      text-align: right;\n    }\n    .empty-collection {\n      padding: ${2*t.gridUnit+2}px;\n    }\n    .tiny-cell {\n      width: ${t.gridUnit+1}px;\n    }\n    i.fa-caret-down,\n    i.fa-caret-up {\n      width: ${t.gridUnit+1}px;\n    }\n    td.expanded {\n      border-top: 0;\n      padding: 0;\n    }\n  `}
`,H=g.iK.div`
  text-align: right;
  ${({theme:t})=>`margin-bottom: ${2*t.gridUnit}px`}
`,Y=g.iK.span`
  ${({theme:t})=>`\n    margin-top: ${3*t.gridUnit}px;\n    margin-left: ${3*t.gridUnit}px;\n  `}
`;class J extends s.PureComponent{constructor(t){super(t);const{collection:e,collectionArray:a}=G(t.collection);this.state={expandedColumns:{},collection:e,collectionArray:a,sortColumn:"",sort:0},this.renderItem=this.renderItem.bind(this),this.onAddItem=this.onAddItem.bind(this),this.renderExpandableSection=this.renderExpandableSection.bind(this),this.getLabel=this.getLabel.bind(this),this.onFieldsetChange=this.onFieldsetChange.bind(this),this.renderTableBody=this.renderTableBody.bind(this),this.changeCollection=this.changeCollection.bind(this),this.sortColumn=this.sortColumn.bind(this),this.renderSortIcon=this.renderSortIcon.bind(this)}UNSAFE_componentWillReceiveProps(t){if(t.collection!==this.props.collection){const{collection:e,collectionArray:a}=G(t.collection);this.setState({collection:e,collectionArray:a})}}onCellChange(t,e,a){this.changeCollection({...this.state.collection,[t]:{...this.state.collection[t],[e]:a}})}onAddItem(){if(this.props.itemGenerator){let t=this.props.itemGenerator();t.id||(t={...t,id:p().generate()}),this.changeCollection(this.state.collection,t)}}onFieldsetChange(t){this.changeCollection({...this.state.collection,[t.id]:t})}getLabel(t){const{columnLabels:e}=this.props;let a=e&&e[t]?e[t]:t;return a.startsWith("__")&&(a=""),a}changeCollection(t,e){if(this.setState({collection:t}),this.props.onChange){const a=this.state.collectionArray.map((e=>t[e.id])).filter((t=>void 0!==t));e&&a.unshift(e),this.props.onChange(a)}}deleteItem(t){const e={...this.state.collection};delete e[t],this.changeCollection(e)}effectiveTableColumns(){const{tableColumns:t,allowDeletes:e,expandFieldset:a}=this.props,n=e?t.concat(["__actions"]):t;return a?["__expand"].concat(n):n}toggleExpand(t){this.onCellChange(t,"__expanded",!1),this.setState((e=>({expandedColumns:{...e.expandedColumns,[t]:!e.expandedColumns[t]}})))}sortColumn(t,e=j.unsort){const{sortColumns:a}=this.props;return()=>{if(null!=a&&a.includes(t)){if(e===j.unsort){const{collection:t}=G(this.props.collection),a=function(t){return Object.keys(t).map((e=>t[e]))}(t);return void this.setState({collectionArray:a,sortColumn:"",sort:e})}const a=[...this.state.collectionArray].sort(((e,a)=>{return n=e[t],i=a[t],"string"==typeof n?(n||" ").localeCompare(i):n-i;var n,i})),n=e===j.asc?a:a.reverse();this.setState((a=>({...a,collectionArray:n,sortColumn:t,sort:e})))}}}renderSortIcon(t){return this.state.sortColumn===t&&this.state.sort===j.asc?(0,n.tZ)(q.Z.SortAsc,{onClick:this.sortColumn(t,2)}):this.state.sortColumn===t&&this.state.sort===j.desc?(0,n.tZ)(q.Z.SortDesc,{onClick:this.sortColumn(t,0)}):(0,n.tZ)(q.Z.Sort,{onClick:this.sortColumn(t,1)})}renderHeaderRow(){const t=this.effectiveTableColumns(),{allowDeletes:e,expandFieldset:a,extraButtons:i,sortColumns:o}=this.props;return(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,a&&(0,n.tZ)("th",{"aria-label":"Expand",className:"tiny-cell"}),t.map((t=>(0,n.tZ)("th",{key:t},this.getLabel(t),(null==o?void 0:o.includes(t))&&this.renderSortIcon(t)))),i,e&&(0,n.tZ)("th",{key:"delete-item","aria-label":"Delete",className:"tiny-cell"})))}renderExpandableSection(t){return R(this.props.expandFieldset,O,(()=>({item:t,onChange:this.onFieldsetChange})))}renderCell(t,e){const a=this.props.itemRenderers&&this.props.itemRenderers[e],n=t[e],i=this.onCellChange.bind(this,t.id,e);return a?a(n,i,this.getLabel(e),t):n}renderItem(t){const{allowAddItem:e,allowDeletes:a,expandFieldset:i,tableColumns:o}=this.props,s=!!this.state.expandedColumns[t.id]||t.__expanded;let l=[];i&&l.push((0,n.tZ)("td",{key:"__expand",className:"expand"},(0,n.tZ)("i",{role:"button","aria-label":"Toggle expand",tabIndex:0,className:`fa fa-caret-${s?"down":"right"} text-primary pointer`,onClick:this.toggleExpand.bind(this,t.id)}))),l=l.concat(o.map((e=>(0,n.tZ)("td",{key:e},this.renderCell(t,e))))),e&&l.push((0,n.tZ)("td",{key:"add"})),a&&l.push((0,n.tZ)("td",{key:"__actions","data-test":"crud-delete-option",className:"text-primary"},(0,n.tZ)(q.Z.Trash,{"aria-label":"Delete item",className:"pointer","data-test":"crud-delete-icon",role:"button",tabIndex:0,onClick:this.deleteItem.bind(this,t.id)})));const r=[(0,n.tZ)("tr",{"data-test":"table-row",className:"row",key:t.id},l)];return s&&r.push((0,n.tZ)("tr",{className:"exp",key:`exp__${t.id}`},(0,n.tZ)("td",{colSpan:this.effectiveTableColumns().length,className:"expanded"},(0,n.tZ)("div",null,this.renderExpandableSection(t))))),r}renderEmptyCell(){return(0,n.tZ)("tr",null,(0,n.tZ)("td",{className:"empty-collection"},this.props.emptyMessage))}renderTableBody(){const t=this.state.collectionArray,e=t.length?t.map((t=>this.renderItem(t))):this.renderEmptyCell();return(0,n.tZ)("tbody",{"data-test":"table-content-rows"},e)}render(){return(0,n.tZ)(s.Fragment,null,(0,n.tZ)(H,null,this.props.allowAddItem&&(0,n.tZ)(Y,null,(0,n.tZ)(_.Z,{buttonSize:"small",buttonStyle:"tertiary",onClick:this.onAddItem,"data-test":"add-item-button"},(0,n.tZ)("i",{"data-test":"crud-add-table-item",className:"fa fa-plus"})," ",(0,b.t)("Add item")))),(0,n.tZ)(z,{className:"CRUD",stickyHeader:this.props.stickyHeader},(0,n.tZ)("table",{"data-test":"crud-table",className:"table"},this.renderHeaderRow(),this.renderTableBody())))}}const W=g.iK.div`
  .change-warning {
    margin: 16px 10px 0;
    color: ${({theme:t})=>t.colors.warning.base};
  }

  .change-warning .bold {
    font-weight: ${({theme:t})=>t.typography.weights.bold};
  }

  .form-group.has-feedback > .help-block {
    margin-top: 8px;
  }

  .form-group.form-group-md {
    margin-bottom: 8px;
  }
`,V=g.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:t})=>t.gridUnit}px;
  }
`,X=(0,g.iK)(v.ZP)`
  overflow: visible;
  .ant-tabs-content-holder {
    overflow: visible;
  }
`,Q=(0,g.iK)(u.Z)`
  .ant-badge-count {
    line-height: ${({theme:t})=>4*t.gridUnit}px;
    height: ${({theme:t})=>4*t.gridUnit}px;
    margin-left: ${({theme:t})=>t.gridUnit}px;
  }
`,tt=g.iK.div`
  font-size: ${({theme:t})=>t.typography.sizes.s}px;
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
  }
`,et=g.iK.div`
  text-align: right;
  ${({theme:t})=>`margin-bottom: ${2*t.gridUnit}px`}
`,at=g.iK.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${({theme:t})=>t.gridUnit}px;
  }
`,nt=g.iK.div`
  .table > tbody > tr > td {
    vertical-align: middle;
  }

  .ant-tag {
    margin-top: ${({theme:t})=>t.gridUnit}px;
  }
`,it=g.iK.span`
  ${({theme:t})=>`\n    margin-top: ${3*t.gridUnit}px;\n    margin-left: ${3*t.gridUnit}px;\n  `}
`,ot=(t,e)=>(0,n.tZ)(I.Z,{value:t,onChange:e}),st=[{value:"STRING",label:"STRING"},{value:"NUMERIC",label:"NUMERIC"},{value:"DATETIME",label:"DATETIME"},{value:"BOOLEAN",label:"BOOLEAN"}],lt=[{key:"physical",label:(0,b.t)("Physical (table or view)")},{key:"virtual",label:(0,b.t)("Virtual (SQL)")}],rt={};lt.forEach((t=>{rt[t.key]=t}));var dt={name:"s5xdrg",styles:"display:flex;align-items:center"};function ct({title:t,collection:e}){return(0,n.tZ)("div",{css:dt,"data-test":`collection-tab-${t}`},t," ",(0,n.tZ)(Q,{count:e?e.length:0,showZero:!0}))}function ht({columns:t,datasource:e,onColumnsChange:a,onDatasourceChange:i,editableColumnName:o,showExpression:l,allowAddItem:r,allowEditDataType:c,itemGenerator:h}){return(0,n.tZ)(J,{collection:t,tableColumns:(0,L.cr)($.T.ENABLE_ADVANCED_DATA_TYPES)?["column_name","advanced_data_type","type","is_dttm","main_dttm_col","filterable","groupby"]:["column_name","type","is_dttm","main_dttm_col","filterable","groupby"],sortColumns:(0,L.cr)($.T.ENABLE_ADVANCED_DATA_TYPES)?["column_name","advanced_data_type","type","is_dttm","main_dttm_col","filterable","groupby"]:["column_name","type","is_dttm","main_dttm_col","filterable","groupby"],allowDeletes:!0,allowAddItem:r,itemGenerator:h,stickyHeader:!0,expandFieldset:(0,n.tZ)(mt,null,(0,n.tZ)(O,{compact:!0},l&&(0,n.tZ)(F,{fieldKey:"expression",label:(0,b.t)("SQL expression"),control:(0,n.tZ)(K.Z,{language:"markdown",offerEditInModal:!1})}),(0,n.tZ)(F,{fieldKey:"verbose_name",label:(0,b.t)("Label"),control:(0,n.tZ)(M.Z,{controlId:"verbose_name",placeholder:(0,b.t)("Label")})}),(0,n.tZ)(F,{fieldKey:"description",label:(0,b.t)("Description"),control:(0,n.tZ)(M.Z,{controlId:"description",placeholder:(0,b.t)("Description")})}),c&&(0,n.tZ)(F,{fieldKey:"type",label:(0,b.t)("Data type"),control:(0,n.tZ)(Z.Ph,{ariaLabel:(0,b.t)("Data type"),options:st,name:"type",allowNewOptions:!0,allowClear:!0})}),(0,L.cr)($.T.ENABLE_ADVANCED_DATA_TYPES)?(0,n.tZ)(F,{fieldKey:"advanced_data_type",label:(0,b.t)("Advanced data type"),control:(0,n.tZ)(M.Z,{controlId:"advanced_data_type",placeholder:(0,b.t)("Advanced Data type")})}):(0,n.tZ)(s.Fragment,null),(0,n.tZ)(F,{fieldKey:"python_date_format",label:(0,b.t)("Datetime format"),description:(0,n.tZ)("div",null,(0,b.t)("The pattern of timestamp format. For strings use "),(0,n.tZ)("a",{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},(0,b.t)("Python datetime string pattern")),(0,b.t)(" expression which needs to adhere to the "),(0,n.tZ)("a",{href:"https://en.wikipedia.org/wiki/ISO_8601"},(0,b.t)("ISO 8601")),(0,b.t)(" standard to ensure that the lexicographical ordering\n                      coincides with the chronological ordering. If the\n                      timestamp format does not adhere to the ISO 8601 standard\n                      you will need to define an expression and type for\n                      transforming the string into a date or timestamp. Note\n                      currently time zones are not supported. If time is stored\n                      in epoch format, put `epoch_s` or `epoch_ms`. If no pattern\n                      is specified we fall back to using the optional defaults on a per\n                      database/column name level via the extra parameter.")),control:(0,n.tZ)(M.Z,{controlId:"python_date_format",placeholder:"%Y/%m/%d"})}),(0,n.tZ)(F,{fieldKey:"certified_by",label:(0,b.t)("Certified By"),description:(0,b.t)("Person or group that has certified this metric"),control:(0,n.tZ)(M.Z,{controlId:"certified",placeholder:(0,b.t)("Certified by")})}),(0,n.tZ)(F,{fieldKey:"certification_details",label:(0,b.t)("Certification details"),description:(0,b.t)("Details of the certification"),control:(0,n.tZ)(M.Z,{controlId:"certificationDetails",placeholder:(0,b.t)("Certification details")})}))),columnLabels:(0,L.cr)($.T.ENABLE_ADVANCED_DATA_TYPES)?{column_name:(0,b.t)("Column"),advanced_data_type:(0,b.t)("Advanced data type"),type:(0,b.t)("Data type"),groupby:(0,b.t)("Is dimension"),is_dttm:(0,b.t)("Is temporal"),main_dttm_col:(0,b.t)("Default datetime"),filterable:(0,b.t)("Is filterable")}:{column_name:(0,b.t)("Column"),type:(0,b.t)("Data type"),groupby:(0,b.t)("Is dimension"),is_dttm:(0,b.t)("Is temporal"),main_dttm_col:(0,b.t)("Default datetime"),filterable:(0,b.t)("Is filterable")},onChange:a,itemRenderers:(0,L.cr)($.T.ENABLE_ADVANCED_DATA_TYPES)?{column_name:(t,e,a,i)=>o?(0,n.tZ)(at,null,i.is_certified&&(0,n.tZ)(x.Z,{certifiedBy:i.certified_by,details:i.certification_details}),(0,n.tZ)(k.Z,{canEdit:!0,title:t,onSaveTitle:e})):(0,n.tZ)(at,null,i.is_certified&&(0,n.tZ)(x.Z,{certifiedBy:i.certified_by,details:i.certification_details}),t),main_dttm_col:(a,o,s,l)=>{const r=e.main_dttm_col===l.column_name,c=!t.find((t=>t.column_name===l.column_name)).is_dttm;return(0,n.tZ)(d.Y,{"data-test":`radio-default-dttm-${l.column_name}`,checked:r,disabled:c,onChange:()=>i({...e,main_dttm_col:l.column_name})})},type:t=>t?(0,n.tZ)(S.Z,null,t):null,advanced_data_type:t=>(0,n.tZ)(S.Z,{onChange:a},t),is_dttm:ot,filterable:ot,groupby:ot}:{column_name:(t,e,a,i)=>o?(0,n.tZ)(at,null,i.is_certified&&(0,n.tZ)(x.Z,{certifiedBy:i.certified_by,details:i.certification_details}),(0,n.tZ)(M.Z,{value:t,onChange:e})):(0,n.tZ)(at,null,i.is_certified&&(0,n.tZ)(x.Z,{certifiedBy:i.certified_by,details:i.certification_details}),t),main_dttm_col:(a,o,s,l)=>{const r=e.main_dttm_col===l.column_name,c=!t.find((t=>t.column_name===l.column_name)).is_dttm;return(0,n.tZ)(d.Y,{"data-test":`radio-default-dttm-${l.column_name}`,checked:r,disabled:c,onChange:()=>i({...e,main_dttm_col:l.column_name})})},type:t=>t?(0,n.tZ)(S.Z,null,t):null,is_dttm:ot,filterable:ot,groupby:ot}})}function ut({label:t,formElement:e}){return(0,n.tZ)("div",null,(0,n.tZ)("div",null,(0,n.tZ)("strong",null,t)),(0,n.tZ)("div",null,e))}function mt({children:t}){return(0,n.tZ)(c.Z,{padded:!0},t)}ct.propTypes={title:r().string,collection:r().array},ht.propTypes={columns:r().array.isRequired,datasource:r().object.isRequired,onColumnsChange:r().func.isRequired,onDatasourceChange:r().func.isRequired,editableColumnName:r().bool,showExpression:r().bool,allowAddItem:r().bool,allowEditDataType:r().bool,itemGenerator:r().func},ht.defaultProps={editableColumnName:!1,showExpression:!1,allowAddItem:!1,allowEditDataType:!1,itemGenerator:()=>({column_name:"<new column>",filterable:!0,groupby:!0})},ut.propTypes={label:r().string,formElement:r().node},mt.propTypes={children:r().node};const pt={datasource:r().object.isRequired,onChange:r().func,addSuccessToast:r().func.isRequired,addDangerToast:r().func.isRequired,setIsEditing:r().func};function gt({datasource:t,onChange:e}){const a=(0,s.useCallback)(((t="",e,a)=>{const n=o().encode({filter:t,page:e,page_size:a});return f.Z.get({endpoint:`/api/v1/dataset/related/owners?q=${n}`}).then((t=>({data:t.json.result.map((t=>({value:t.value,label:t.text}))),totalCount:t.json.count})))}),[]);return(0,n.tZ)(Z.Ph,{ariaLabel:(0,b.t)("Select owners"),mode:"multiple",name:"owners",value:t.owners,options:a,onChange:e,header:(0,n.tZ)(C.lX,null,(0,b.t)("Owners")),allowClear:!0})}var bt={name:"hkh81z",styles:"margin-top:8px"},ft={name:"hkh81z",styles:"margin-top:8px"};class yt extends s.PureComponent{constructor(t){var e;super(t),this.state={datasource:{...t.datasource,owners:t.datasource.owners.map((t=>({value:t.value||t.id,label:t.label||`${t.first_name} ${t.last_name}`}))),metrics:null==(e=t.datasource.metrics)?void 0:e.map((t=>{const{certified_by:e,certification_details:a}=t,{certification:{details:n,certified_by:i}={},warning_markdown:o}=JSON.parse(t.extra||"{}")||{};return{...t,certification_details:a||n,warning_markdown:o||"",certified_by:i||e}}))},errors:[],isDruid:"druid"===t.datasource.type||"druid"===t.datasource.datasource_type,isSqla:"table"===t.datasource.datasource_type||"table"===t.datasource.type,isEditMode:!1,databaseColumns:t.datasource.columns.filter((t=>!t.expression)),calculatedColumns:t.datasource.columns.filter((t=>!!t.expression)),metadataLoading:!1,activeTabKey:0,datasourceType:t.datasource.sql?rt.virtual.key:rt.physical.key},this.onChange=this.onChange.bind(this),this.onChangeEditMode=this.onChangeEditMode.bind(this),this.onDatasourcePropChange=this.onDatasourcePropChange.bind(this),this.onDatasourceChange=this.onDatasourceChange.bind(this),this.tableChangeAndSyncMetadata=this.tableChangeAndSyncMetadata.bind(this),this.syncMetadata=this.syncMetadata.bind(this),this.setColumns=this.setColumns.bind(this),this.validateAndChange=this.validateAndChange.bind(this),this.handleTabSelect=this.handleTabSelect.bind(this),this.allowEditSource=!(0,L.cr)($.T.DISABLE_DATASET_SOURCE_EDIT)}onChange(){const{datasourceType:t,datasource:e}=this.state,a=t===rt.physical.key?"":e.sql,n={...this.state.datasource,sql:a,columns:[...this.state.databaseColumns,...this.state.calculatedColumns]};this.props.onChange(n,this.state.errors)}onChangeEditMode(){this.props.setIsEditing(!this.state.isEditMode),this.setState((t=>({isEditMode:!t.isEditMode})))}onDatasourceChange(t,e=this.validateAndChange){this.setState({datasource:t},e)}onDatasourcePropChange(t,e){if(void 0===e)return;const a={...this.state.datasource,[t]:e};this.setState((a=>({datasource:{...a.datasource,[t]:e}})),"table_name"===t?this.onDatasourceChange(a,this.tableChangeAndSyncMetadata):this.onDatasourceChange(a,this.validateAndChange))}onDatasourceTypeChange(t){this.setState({datasourceType:t})}setColumns(t){this.setState(t,this.validateAndChange)}validateAndChange(){this.validate(this.onChange)}tableChangeAndSyncMetadata(){this.validate((()=>{this.syncMetadata(),this.onChange()}))}updateColumns(t){const{databaseColumns:e}=this.state,a=t.map((t=>t.name)),n=e.reduce(((t,e)=>({...t,[e.column_name]:e})),{}),i=[],o={added:[],modified:[],removed:e.map((t=>t.column_name)).filter((t=>!a.includes(t)))};return t.forEach((t=>{const e=n[t.name];e?e.type!==t.type||!e.is_dttm&&t.is_dttm?(i.push({...e,type:t.type,is_dttm:e.is_dttm||t.is_dttm}),o.modified.push(t.name)):i.push(e):(i.push({id:p().generate(),column_name:t.name,type:t.type,groupby:!0,filterable:!0,is_dttm:t.is_dttm}),o.added.push(t.name))})),(o.added.length||o.modified.length||o.removed.length)&&this.setColumns({databaseColumns:i}),o}syncMetadata(){const{datasource:t}=this.state,e={datasource_type:t.type||t.datasource_type,database_name:t.database.database_name||t.database.name,schema_name:t.schema,table_name:t.table_name};Object.entries(e).forEach((([t,a])=>{void 0===a&&(e[t]=null)}));const a=`/datasource/external_metadata_by_name/?q=${o().encode(e)}`;this.setState({metadataLoading:!0}),f.Z.get({endpoint:a}).then((({json:t})=>{const e=this.updateColumns(t);e.modified.length&&this.props.addSuccessToast((0,b.t)("Modified columns: %s",e.modified.join(", "))),e.removed.length&&this.props.addSuccessToast((0,b.t)("Removed columns: %s",e.removed.join(", "))),e.added.length&&this.props.addSuccessToast((0,b.t)("New columns added: %s",e.added.join(", "))),this.props.addSuccessToast((0,b.t)("Metadata has been synced")),this.setState({metadataLoading:!1})})).catch((t=>(0,A.O)(t).then((({error:t,statusText:e})=>{this.props.addDangerToast(t||e||(0,b.t)("An error has occurred")),this.setState({metadataLoading:!1})}))))}findDuplicates(t,e){const a={},n=[];return t.forEach((t=>{const i=e(t);i in a?n.push(i):a[i]=null})),n}validate(t){let e,a=[];const{datasource:n}=this.state;e=this.findDuplicates(n.columns,(t=>t.column_name)),a=a.concat(e.map((t=>(0,b.t)("Column name [%s] is duplicated",t)))),e=this.findDuplicates(n.metrics,(t=>t.metric_name)),a=a.concat(e.map((t=>(0,b.t)("Metric name [%s] is duplicated",t))));const i=this.state.calculatedColumns.filter((t=>!t.expression&&!t.json));a=a.concat(i.map((t=>(0,b.t)("Calculated column [%s] requires an expression",t.column_name)))),this.setState({errors:a},t)}handleTabSelect(t){this.setState({activeTabKey:t})}sortMetrics(t){return t.sort((({id:t},{id:e})=>e-t))}renderSettingsFieldset(){const{datasource:t}=this.state;return(0,n.tZ)(O,{title:(0,b.t)("Basic"),item:t,onChange:this.onDatasourceChange},(0,n.tZ)(F,{fieldKey:"description",label:(0,b.t)("Description"),control:(0,n.tZ)(K.Z,{language:"markdown",offerEditInModal:!1})}),(0,n.tZ)(F,{fieldKey:"default_endpoint",label:(0,b.t)("Default URL"),description:(0,b.t)("Default URL to redirect to when accessing from the dataset list page"),control:(0,n.tZ)(M.Z,{controlId:"default_endpoint"})}),(0,n.tZ)(F,{inline:!0,fieldKey:"filter_select_enabled",label:(0,b.t)("Autocomplete filters"),description:(0,b.t)("Whether to populate autocomplete filters options"),control:(0,n.tZ)(I.Z,null)}),this.state.isSqla&&(0,n.tZ)(F,{fieldKey:"fetch_values_predicate",label:(0,b.t)("Autocomplete query predicate"),description:(0,b.t)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:(0,n.tZ)(K.Z,{language:"sql",controlId:"fetch_values_predicate",minLines:5})}),this.state.isSqla&&(0,n.tZ)(F,{fieldKey:"extra",label:(0,b.t)("Extra"),description:(0,b.t)('Extra data to specify table metadata. Currently supports metadata of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." }, "warning_markdown": "This is a warning." }`.'),control:(0,n.tZ)(K.Z,{controlId:"extra",language:"json",offerEditInModal:!1})}),(0,n.tZ)(gt,{datasource:t,onChange:e=>{this.onDatasourceChange({...t,owners:e})}}))}renderAdvancedFieldset(){const{datasource:t}=this.state;return(0,n.tZ)(O,{title:(0,b.t)("Advanced"),item:t,onChange:this.onDatasourceChange},(0,n.tZ)(F,{fieldKey:"cache_timeout",label:(0,b.t)("Cache timeout"),description:(0,b.t)("The duration of time in seconds before the cache is invalidated"),control:(0,n.tZ)(M.Z,{controlId:"cache_timeout"})}),(0,n.tZ)(F,{fieldKey:"offset",label:(0,b.t)("Hours offset"),control:(0,n.tZ)(M.Z,{controlId:"offset"}),description:(0,b.t)("The number of hours, negative or positive, to shift the time column. This can be used to move UTC time to local time.")}),this.state.isSqla&&(0,n.tZ)(F,{fieldKey:"template_params",label:(0,b.t)("Template parameters"),description:(0,b.t)("A set of parameters that become available in the query using Jinja templating syntax"),control:(0,n.tZ)(M.Z,{controlId:"template_params"})}))}renderSpatialTab(){const{datasource:t}=this.state,{spatials:e,all_cols:a}=t;return(0,n.tZ)(v.ZP.TabPane,{tab:(0,n.tZ)(ct,{collection:e,title:(0,b.t)("Spatial")}),key:4},(0,n.tZ)(J,{tableColumns:["name","config"],onChange:this.onDatasourcePropChange.bind(this,"spatials"),itemGenerator:()=>({name:"<new spatial>",type:"<no type>",config:null}),collection:e,allowDeletes:!0,itemRenderers:{name:(t,e)=>(0,n.tZ)(k.Z,{canEdit:!0,title:t,onSaveTitle:e}),config:(t,e)=>(0,n.tZ)(N.Z,{value:t,onChange:e,choices:a})}}))}renderSourceFieldset(t){var e,a,i;const{datasource:o}=this.state;return(0,n.tZ)("div",null,this.allowEditSource&&(0,n.tZ)(tt,null,(0,n.tZ)("span",{role:"button",tabIndex:0,onClick:this.onChangeEditMode},this.state.isEditMode?(0,n.tZ)(q.Z.LockUnlocked,{iconColor:t.colors.grayscale.base}):(0,n.tZ)(q.Z.LockLocked,{iconColor:t.colors.grayscale.base})),!this.state.isEditMode&&(0,n.tZ)("div",null,(0,b.t)("Click the lock to make changes.")),this.state.isEditMode&&(0,n.tZ)("div",null,(0,b.t)("Click the lock to prevent further changes."))),(0,n.tZ)("div",{className:"m-l-10 m-t-20 m-b-10"},lt.map((t=>(0,n.tZ)(d.Y,{key:t.key,value:t.key,inline:!0,onChange:this.onDatasourceTypeChange.bind(this,t.key),checked:this.state.datasourceType===t.key,disabled:!this.state.isEditMode},t.label)))),(0,n.tZ)("hr",null),(0,n.tZ)(O,{item:o,onChange:this.onDatasourceChange,compact:!0},this.state.datasourceType===rt.virtual.key&&(0,n.tZ)("div",null,this.state.isSqla&&(0,n.tZ)(s.Fragment,null,(0,n.tZ)(Z.JX,{xs:24,md:12},(0,n.tZ)(F,{fieldKey:"databaseSelector",label:(0,b.t)("virtual"),control:(0,n.tZ)("div",{css:bt},(0,n.tZ)(w.Z,{db:null==o?void 0:o.database,schema:o.schema,onSchemaChange:t=>this.state.isEditMode&&this.onDatasourcePropChange("schema",t),onDbChange:t=>this.state.isEditMode&&this.onDatasourcePropChange("database",t),formMode:!1,handleError:this.props.addDangerToast,readOnly:!this.state.isEditMode}))}),(0,n.tZ)("div",{css:(0,n.iv)({width:"calc(100% - 34px)",marginTop:-16},"","")},(0,n.tZ)(F,{fieldKey:"table_name",label:(0,b.t)("Dataset name"),control:(0,n.tZ)(M.Z,{controlId:"table_name",onChange:t=>{this.onDatasourcePropChange("table_name",t)},placeholder:(0,b.t)("Dataset name"),disabled:!this.state.isEditMode})}))),(0,n.tZ)(F,{fieldKey:"sql",label:(0,b.t)("SQL"),description:(0,b.t)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries."),control:(0,n.tZ)(K.Z,{language:"sql",offerEditInModal:!1,minLines:20,maxLines:20,readOnly:!this.state.isEditMode})})),this.state.isDruid&&(0,n.tZ)(F,{fieldKey:"json",label:(0,b.t)("JSON"),description:(0,n.tZ)("div",null,(0,b.t)("The JSON metric or post aggregation definition.")),control:(0,n.tZ)(K.Z,{language:"json",offerEditInModal:!1})})),this.state.datasourceType===rt.physical.key&&(0,n.tZ)(Z.JX,{xs:24,md:12},this.state.isSqla&&(0,n.tZ)(F,{fieldKey:"tableSelector",label:(0,b.t)("Physical"),control:(0,n.tZ)("div",{css:ft},(0,n.tZ)(T.Z,{clearable:!1,database:{...o.database,database_name:(null==(e=o.database)?void 0:e.database_name)||(null==(a=o.database)?void 0:a.name)},dbId:null==(i=o.database)?void 0:i.id,handleError:this.props.addDangerToast,schema:o.schema,sqlLabMode:!1,tableValue:o.table_name,onSchemaChange:this.state.isEditMode?t=>this.onDatasourcePropChange("schema",t):void 0,onDbChange:this.state.isEditMode?t=>this.onDatasourcePropChange("database",t):void 0,onTableSelectChange:this.state.isEditMode?t=>this.onDatasourcePropChange("table_name",t):void 0,readOnly:!this.state.isEditMode})),description:(0,b.t)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")}))))}renderErrors(){return this.state.errors.length>0?(0,n.tZ)(h.Z,{css:t=>({marginBottom:4*t.gridUnit}),type:"error",message:(0,n.tZ)(s.Fragment,null,this.state.errors.map((t=>(0,n.tZ)("div",{key:t},t))))}):null}renderMetricCollection(){const{datasource:t}=this.state,{metrics:e}=t,a=null!=e&&e.length?this.sortMetrics(e):[];return(0,n.tZ)(J,{tableColumns:["metric_name","verbose_name","expression"],sortColumns:["metric_name","verbose_name","expression"],columnLabels:{metric_name:(0,b.t)("Metric"),verbose_name:(0,b.t)("Label"),expression:(0,b.t)("SQL expression")},expandFieldset:(0,n.tZ)(mt,null,(0,n.tZ)(O,{compact:!0},(0,n.tZ)(F,{fieldKey:"description",label:(0,b.t)("Description"),control:(0,n.tZ)(M.Z,{controlId:"description",placeholder:(0,b.t)("Description")})}),(0,n.tZ)(F,{fieldKey:"d3format",label:(0,b.t)("D3 format"),control:(0,n.tZ)(M.Z,{controlId:"d3format",placeholder:"%y/%m/%d"})}),(0,n.tZ)(F,{label:(0,b.t)("Certified by"),fieldKey:"certified_by",description:(0,b.t)("Person or group that has certified this metric"),control:(0,n.tZ)(M.Z,{controlId:"certified_by",placeholder:(0,b.t)("Certified by")})}),(0,n.tZ)(F,{label:(0,b.t)("Certification details"),fieldKey:"certification_details",description:(0,b.t)("Details of the certification"),control:(0,n.tZ)(M.Z,{controlId:"certification_details",placeholder:(0,b.t)("Certification details")})}),(0,n.tZ)(F,{label:(0,b.t)("Warning"),fieldKey:"warning_markdown",description:(0,b.t)("Optional warning about use of this metric"),control:(0,n.tZ)(K.Z,{controlId:"warning_markdown",language:"markdown",offerEditInModal:!1})}))),collection:a,allowAddItem:!0,onChange:this.onDatasourcePropChange.bind(this,"metrics"),itemGenerator:()=>({metric_name:"<new metric>",verbose_name:"",expression:""}),itemRenderers:{metric_name:(t,e,a,i)=>(0,n.tZ)(V,null,i.is_certified&&(0,n.tZ)(x.Z,{certifiedBy:i.certified_by,details:i.certification_details}),i.warning_markdown&&(0,n.tZ)(E.Z,{warningMarkdown:i.warning_markdown}),(0,n.tZ)(k.Z,{canEdit:!0,title:t,onSaveTitle:e})),verbose_name:(t,e)=>(0,n.tZ)(M.Z,{canEdit:!0,value:t,onChange:e}),expression:(t,e)=>(0,n.tZ)(K.Z,{canEdit:!0,initialValue:t,onChange:e,extraClasses:["datasource-sql-expression"],language:"sql",offerEditInModal:!1,minLines:5}),description:(t,e,a)=>(0,n.tZ)(ut,{label:a,formElement:(0,n.tZ)(M.Z,{value:t,onChange:e})}),d3format:(t,e,a)=>(0,n.tZ)(ut,{label:a,formElement:(0,n.tZ)(M.Z,{value:t,onChange:e})})},allowDeletes:!0,stickyHeader:!0})}render(){const{datasource:t,activeTabKey:e}=this.state,{metrics:a}=t,i=null!=a&&a.length?this.sortMetrics(a):[],{theme:o}=this.props;return(0,n.tZ)(W,null,this.renderErrors(),(0,n.tZ)(h.Z,{css:t=>({marginBottom:4*t.gridUnit}),type:"warning",message:(0,n.tZ)(s.Fragment,null," ",(0,n.tZ)("strong",null,(0,b.t)("Be careful.")," "),(0,b.t)("Changing these settings will affect all charts using this dataset, including charts owned by other people."))}),(0,n.tZ)(X,{fullWidth:!1,id:"table-tabs","data-test":"edit-dataset-tabs",onChange:this.handleTabSelect,defaultActiveKey:e},(0,n.tZ)(v.ZP.TabPane,{key:0,tab:(0,b.t)("Source")},this.renderSourceFieldset(o)),(0,n.tZ)(v.ZP.TabPane,{tab:(0,n.tZ)(ct,{collection:i,title:(0,b.t)("Metrics")}),key:1},this.renderMetricCollection()),(0,n.tZ)(v.ZP.TabPane,{tab:(0,n.tZ)(ct,{collection:this.state.databaseColumns,title:(0,b.t)("Columns")}),key:2},(0,n.tZ)(nt,null,(0,n.tZ)(et,null,(0,n.tZ)(it,null,(0,n.tZ)(_.Z,{buttonSize:"small",buttonStyle:"tertiary",onClick:this.syncMetadata,className:"sync-from-source",disabled:this.state.isEditMode},(0,n.tZ)("i",{className:"fa fa-database"})," ",(0,b.t)("Sync columns from source")))),(0,n.tZ)(ht,{className:"columns-table",columns:this.state.databaseColumns,datasource:t,onColumnsChange:t=>this.setColumns({databaseColumns:t}),onDatasourceChange:this.onDatasourceChange}),this.state.metadataLoading&&(0,n.tZ)(D.Z,null))),(0,n.tZ)(v.ZP.TabPane,{tab:(0,n.tZ)(ct,{collection:this.state.calculatedColumns,title:(0,b.t)("Calculated columns")}),key:3},(0,n.tZ)(nt,null,(0,n.tZ)(ht,{columns:this.state.calculatedColumns,onColumnsChange:t=>this.setColumns({calculatedColumns:t}),onDatasourceChange:this.onDatasourceChange,datasource:t,editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:"<new column>",filterable:!0,groupby:!0,expression:"<enter SQL expression here>",__expanded:!0})}))),(0,n.tZ)(v.ZP.TabPane,{key:4,tab:(0,b.t)("Settings")},(0,n.tZ)(Z.X2,{gutter:16},(0,n.tZ)(Z.JX,{xs:24,md:12},(0,n.tZ)(mt,null,this.renderSettingsFieldset())),(0,n.tZ)(Z.JX,{xs:24,md:12},(0,n.tZ)(mt,null,this.renderAdvancedFieldset()))))))}}yt.defaultProps={onChange:()=>{},setIsEditing:()=>{}},yt.propTypes=pt;const Zt=(0,y.b)(yt),Ct=(0,P.ZP)(Zt)},38270:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(5872),i=a.n(n),o=a(67294),s=a(94184),l=a.n(s),r=a(51995),d=a(61988),c=a(11965),h=a(58593),u=a(79789);const m=(0,r.iK)(u.Z)`
  vertical-align: middle;
`;function p({canEdit:t=!1,editing:e=!1,extraClasses:a,multiLine:n=!1,noPermitTooltip:s,onSaveTitle:r,showTooltip:u=!0,style:p,title:g="",defaultTitle:b="",placeholder:f="",certifiedBy:y,certificationDetails:Z,onClickTitle:C,..._}){const[v,x]=(0,o.useState)(e),[E,w]=(0,o.useState)(g),[S,D]=(0,o.useState)(g),[T,k]=(0,o.useState)(null),A=(0,o.useRef)();function I(){if(!t||v)return;const e=A.current?A.current.getBoundingClientRect():null;x(!0),k(e)}function M(){const e=E.trim();t&&(x(!1),e.length?(S!==e&&D(e),g!==e&&r(e)):w(S))}function K(t){" "===t.key&&t.stopPropagation(),"Enter"===t.key&&(t.preventDefault(),M())}function N(e){t&&w(e.target.value)}function P(t){"Enter"===t.key&&(t.preventDefault(),M())}let L;(0,o.useEffect)((()=>{g!==E&&(D(E),w(g))}),[g]),(0,o.useEffect)((()=>{if(v&&(A.current.focus(),A.current.setSelectionRange)){const{length:t}=A.current.value;A.current.setSelectionRange(t,t),A.current.scrollLeft=A.current.scrollWidth,A.current.scrollTop=A.current.scrollHeight}}),[v]),L=E,v||E||(L=b||g);const $=v&&T?{height:`${T.height}px`}:void 0;let q=n&&v?(0,c.tZ)("textarea",{"data-test":"editable-title-input",ref:A,value:L,className:g?void 0:"text-muted",onKeyDown:K,onChange:N,onBlur:M,onClick:I,onKeyPress:P,placeholder:f,style:$}):(0,c.tZ)("input",{"data-test":"editable-title-input",ref:A,type:v?"text":"button",value:L,className:g?void 0:"text-muted",onKeyDown:K,onChange:N,onBlur:M,onClick:I,onKeyPress:P,placeholder:f});return u&&!v&&(q=(0,c.tZ)(h.u,{id:"title-tooltip",title:t?(0,d.t)("Click to edit"):s||(0,d.t)("You don't have the rights to alter this title.")},q)),t||(q=C?(0,c.tZ)("span",{role:"button",onClick:C,tabIndex:0,"data-test":"editable-title-input",css:c.iv`
          :hover {
            text-decoration: underline;
          }
        `},L):(0,c.tZ)("span",{"data-test":"editable-title-input"},L)),(0,c.tZ)("span",i()({"data-test":"editable-title",className:l()("editable-title",a,t&&"editable-title--editable",v&&"editable-title--editing"),style:p},_),y&&(0,c.tZ)(o.Fragment,null,(0,c.tZ)(m,{certifiedBy:y,details:Z,size:"xl"})," "),q)}}}]);
//# sourceMappingURL=4f5a2ebd6e31cf1109d8.chunk.js.map