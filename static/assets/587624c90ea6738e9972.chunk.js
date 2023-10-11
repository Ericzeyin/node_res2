"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1382],{36665:(t,e,o)=>{o.d(e,{Z:()=>u});var n=o(67294),i=o(45697),a=o.n(i),r=o(51995),s=o(67190),c=o(11965);const l=r.iK.div`
  ${({theme:t})=>`\n    font-size: ${t.typography.sizes.s}px;\n    position: absolute;\n    background: ${t.colors.grayscale.light5};\n    box-shadow: 0 0 ${t.gridUnit}px ${t.colors.grayscale.light2};\n    margin: ${6*t.gridUnit}px;\n    padding: ${3*t.gridUnit}px ${5*t.gridUnit}px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n\n    & ul {\n      list-style: none;\n      padding-left: 0;\n      margin: 0;\n\n      & li a {\n        color: ${t.colors.grayscale.base};\n        text-decoration: none;\n\n        & span {\n          margin-right: ${3*t.gridUnit}px;\n        }\n      }\n    }\n  `}
`,g=" - ",d={categories:a().object,forceCategorical:a().bool,format:a().string,position:a().oneOf([null,"tl","tr","bl","br"]),showSingleCategory:a().func,toggleCategory:a().func};class u extends n.PureComponent{format(t){if(!this.props.format||this.props.forceCategorical)return t;const e=parseFloat(t);return(0,s.uf)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(g)){const e=t.split(g);return this.format(e[0])+g+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map((([t,e])=>{const o={color:`rgba(${e.color.join(", ")})`},n=e.enabled?"◼":"◻";return(0,c.tZ)("li",{key:t},(0,c.tZ)("a",{href:"#",onClick:()=>this.props.toggleCategory(t),onDoubleClick:()=>this.props.showSingleCategory(t)},(0,c.tZ)("span",{style:o},n)," ",this.formatCategoryLabel(t)))})),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return(0,c.tZ)(l,{style:e},(0,c.tZ)("ul",null,t))}}u.propTypes=d,u.defaultProps={categories:{},forceCategorical:!1,format:null,position:"tr",showSingleCategory:()=>{},toggleCategory:()=>{}}},21382:(t,e,o)=>{o.r(e),o.d(e,{default:()=>x,getLayer:()=>f});var n=o(95772),i=o(93844),a=o(51331),r=o(1113),s=o(53982);const c=[0,0,0,255],l={getSourcePosition:{type:"accessor",value:t=>t.sourcePosition},getTargetPosition:{type:"accessor",value:t=>t.targetPosition},getSourceColor:{type:"accessor",value:c},getTargetColor:{type:"accessor",value:c},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0}};class g extends n.Z{getShaders(){return super.getShaders({vs:"#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec3 instanceSourcePositions;\nattribute vec3 instanceSourcePositions64Low;\nattribute vec3 instanceTargetPositions;\nattribute vec3 instanceTargetPositions64Low;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\nattribute float instanceHeights;\nattribute float instanceTilts;\n\nuniform bool greatCircle;\nuniform bool useShortestPath;\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\nvarying vec2 uv;\nvarying float isValid;\n\nfloat paraboloid(float distance, float sourceZ, float targetZ, float ratio) {\n\n  float deltaZ = targetZ - sourceZ;\n  float dh = distance * instanceHeights;\n  if (dh == 0.0) {\n    return sourceZ + deltaZ * ratio;\n  }\n  float unitZ = deltaZ / dh;\n  float p2 = unitZ * unitZ + 1.0;\n  float dir = step(deltaZ, 0.0);\n  float z0 = mix(sourceZ, targetZ, dir);\n  float r = mix(ratio, 1.0 - ratio, dir);\n  return sqrt(r * (p2 - r)) * dh + z0;\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  return dir_screenspace * offset_direction * width / 2.0;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {\n  float distance = length(source.xy - target.xy);\n  float z = paraboloid(distance, source.z, target.z, segmentRatio);\n\n  float tiltAngle = radians(instanceTilts);\n  vec2 tiltDirection = normalize(target.xy - source.xy);\n  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);\n\n  return vec3(\n    mix(source.xy, target.xy, segmentRatio) + tilt,\n    z * cos(tiltAngle)\n  );\n}\nfloat getAngularDist (vec2 source, vec2 target) {\n  vec2 sourceRadians = radians(source);\n  vec2 targetRadians = radians(target);\n  vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);\n  vec2 shd_sq = sin_half_delta * sin_half_delta;\n\n  float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;\n  return 2.0 * asin(sqrt(a));\n}\n\nvec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {\n  vec2 lngLat;\n  if(abs(angularDist - PI) < 0.001) {\n    lngLat = (1.0 - t) * source.xy + t * target.xy;\n  } else {\n    float a = sin((1.0 - t) * angularDist);\n    float b = sin(t * angularDist);\n    vec3 p = source3D.yxz * a + target3D.yxz * b;\n    lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));\n  }\n\n  float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);\n\n  return vec3(lngLat, z);\n}\n\nvoid main(void) {\n  geometry.worldPosition = instanceSourcePositions;\n  geometry.worldPositionAlt = instanceTargetPositions;\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));\n  float nextSegmentRatio = getSegmentRatio(min(numSegments - 1.0, segmentIndex + 1.0));\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  isValid = 1.0;\n\n  uv = vec2(segmentRatio, positions.y);\n  geometry.uv = uv;\n  geometry.pickingColor = instancePickingColors;\n\n  vec4 curr;\n  vec4 next;\n  vec3 source;\n  vec3 target;\n\n  if ((greatCircle || project_uProjectionMode == PROJECTION_MODE_GLOBE) && project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT) {\n    source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));\n    target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));\n    float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);\n\n    vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);\n    vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);\n    vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);\n\n    if (abs(currPos.x - prevPos.x) > 180.0) {\n      indexDir = -1.0;\n      isValid = 0.0;\n    } else if (abs(currPos.x - nextPos.x) > 180.0) {\n      indexDir = 1.0;\n      isValid = 0.0;\n    }\n    nextPos = indexDir < 0.0 ? prevPos : nextPos;\n    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;\n\n    if (isValid == 0.0) {\n      nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;\n      float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);\n      currPos = mix(currPos, nextPos, t);\n      segmentRatio = mix(segmentRatio, nextSegmentRatio, t);\n    }\n\n    vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);\n    vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);\n  \n    curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);\n    next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));\n  \n  } else {\n    vec3 source_world = instanceSourcePositions;\n    vec3 target_world = instanceTargetPositions;\n    if (useShortestPath) {\n      source_world.x = mod(source_world.x + 180., 360.0) - 180.;\n      target_world.x = mod(target_world.x + 180., 360.0) - 180.;\n\n      float deltaLng = target_world.x - source_world.x;\n      if (deltaLng > 180.) target_world.x -= 360.;\n      if (deltaLng < -180.) source_world.x -= 360.;\n    }\n    source = project_position(source_world, instanceSourcePositions64Low);\n    target = project_position(target_world, instanceTargetPositions64Low);\n    float antiMeridianX = 0.0;\n\n    if (useShortestPath) {\n      if (project_uProjectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {\n        antiMeridianX = -(project_uCoordinateOrigin.x + 180.) / 360. * TILE_SIZE;\n      }\n      float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);\n\n      if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {\n        isValid = 0.0;\n        indexDir = sign(segmentRatio - thresholdRatio);\n        segmentRatio = thresholdRatio;\n      }\n    }\n\n    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;\n    vec3 currPos = interpolateFlat(source, target, segmentRatio);\n    vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);\n\n    if (useShortestPath) {\n      if (nextPos.x < antiMeridianX) {\n        currPos.x += TILE_SIZE;\n        nextPos.x += TILE_SIZE;\n      }\n    }\n\n    curr = project_common_position_to_clipspace(vec4(currPos, 1.0));\n    next = project_common_position_to_clipspace(vec4(nextPos, 1.0));\n    geometry.position = vec4(currPos, 1.0);\n  }\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n  vec3 offset = vec3(\n    getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels),\n    0.0);\n  DECKGL_FILTER_SIZE(offset, geometry);\n  gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);\n  vColor = vec4(color.rgb, color.a * opacity);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#define SHADER_NAME arc-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying vec2 uv;\nvarying float isValid;\n\nvoid main(void) {\n  if (isValid == 0.0) {\n    discard;\n  }\n\n  gl_FragColor = vColor;\n  geometry.uv = uv;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[i.Z,a.Z]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getSourceColor",defaultValue:c},instanceTargetColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getTargetColor",defaultValue:c},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState({props:t,oldProps:e,changeFlags:o}){if(super.updateState({props:t,oldProps:e,changeFlags:o}),o.extensionsChanged){var n;const{gl:t}=this.context;null===(n=this.state.model)||void 0===n||n.delete(),this.state.model=this._getModel(t),this.getAttributeManager().invalidateAll()}}draw({uniforms:t}){const{viewport:e}=this.context,{widthUnits:o,widthScale:n,widthMinPixels:i,widthMaxPixels:a,greatCircle:r,wrapLongitude:s}=this.props,c="pixels"===o?e.metersPerPixel:1;this.state.model.setUniforms(t).setUniforms({greatCircle:r,widthScale:n*c,widthMinPixels:i,widthMaxPixels:a,useShortestPath:s}).draw()}_getModel(t){let e=[];for(let t=0;t<50;t++)e=e.concat([t,1,0,t,-1,0]);const o=new r.Z(t,{...this.getShaders(),id:this.props.id,geometry:new s.Z({drawMode:5,attributes:{positions:new Float32Array(e)}}),isInstanced:!0});return o.setUniforms({numSegments:50}),o}}g.layerName="ArcLayer",g.defaultProps=l,o(67294);var d=o(61988),u=o(52154),p=o(26331),h=o(1740),m=o(11965);function f(t,e,o,n){const i=e.data.features,a=t.color_picker,r=t.target_color_picker;return new g({data:i,getSourceColor:t=>t.sourceColor||t.color||[a.r,a.g,a.b,255*a.a],getTargetColor:t=>t.targetColor||t.color||[r.r,r.g,r.b,255*r.a],id:`path-layer-${t.slice_id}`,strokeWidth:t.stroke_width?t.stroke_width:3,...(0,u.N)(t,n,(s=t,t=>(0,m.tZ)("div",{className:"deckgl-tooltip"},(0,m.tZ)(h.Z,{label:`${(0,d.t)("Start (Longitude, Latitude)")}: `,value:`${t.object.sourcePosition[0]}, ${t.object.sourcePosition[1]}`}),(0,m.tZ)(h.Z,{label:`${(0,d.t)("End (Longitude, Latitude)")}: `,value:`${t.object.targetPosition[0]}, ${t.object.targetPosition[1]}`}),s.dimension&&(0,m.tZ)(h.Z,{label:`${s.dimension}: `,value:`${t.object.cat_color}`}))))});var s}const x=(0,p.B)(f,(function(t){const e=[];return t.forEach((t=>{e.push(t.sourcePosition),e.push(t.targetPosition)})),e}))},26331:(t,e,o)=>{o.d(e,{B:()=>P,G:()=>_});var n=o(18446),i=o.n(n),a=o(67294),r=o(84502),s=o(45697),c=o.n(s),l=o(28062),g=o(85531),d=o(36665),u=o(64106),p=o(66911),h=o(21207),m=o(40461),f=o(11965);const{getScale:x}=l,v={datasource:c().object.isRequired,formData:c().object.isRequired,getLayer:c().func.isRequired,getPoints:c().func.isRequired,height:c().number.isRequired,mapboxApiKey:c().string.isRequired,onAddFilter:c().func,payload:c().object.isRequired,setControlValue:c().func.isRequired,viewport:c().object.isRequired,width:c().number.isRequired};class y extends a.PureComponent{constructor(t){super(t),this.containerRef=a.createRef(),this.setTooltip=t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)},this.state=this.getStateFromProps(t),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(t){t.payload.form_data!==this.state.formData&&this.setState({...this.getStateFromProps(t)})}onValuesChange(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}getStateFromProps(t,e){const o=t.payload.data.features||[],n=o.map((t=>t.__timestamp)),i=function(t,e){const o=t.color_picker||{r:0,g:0,b:0,a:1},n=[o.r,o.g,o.b,255*o.a],i=x(t.color_scheme),a={};return e.forEach((e=>{if(null!=e.cat_color&&!a.hasOwnProperty(e.cat_color)){let r;r=t.dimension?(0,u.hexToRGB)(i(e.cat_color,t.sliceId),255*o.a):n,a[e.cat_color]={color:r,enabled:!0}}})),a}(t.formData,o);if(e&&t.payload.form_data===e.formData)return{...e,categories:i};const a=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",{start:r,end:s,getStep:c,values:l,disabled:g}=(0,p.g)(n,a),{width:d,height:h,formData:f}=t;let{viewport:v}=t;return f.autozoom&&(v=(0,m.Z)(v,{width:d,height:h,points:t.getPoints(o)})),v.zoom<0&&(v.zoom=0),{start:r,end:s,getStep:c,values:l,disabled:g,viewport:v,selected:[],lastClick:0,formData:t.payload.form_data,categories:i}}getLayers(t){const{getLayer:e,payload:o,formData:n,onAddFilter:i}=this.props;let a=o.data.features?[...o.data.features]:[];a=this.addColor(a,n),n.js_data_mutator&&(a=(0,h.Z)(n.js_data_mutator)(a)),a=t[0]===t[1]||t[1]===this.end?a.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<=t[1])):a.filter((e=>e.__timestamp>=t[0]&&e.__timestamp<t[1]));const r=this.state.categories;return n.dimension&&(a=a.filter((t=>r[t.cat_color]&&r[t.cat_color].enabled))),[e(n,{...o,data:{...o.data,features:a}},i,this.setTooltip,this.props.datasource)]}addColor(t,e){const o=e.color_picker||{r:0,g:0,b:0,a:1},n=x(e.color_scheme);return t.map((t=>{let i;return e.dimension?(i=(0,u.hexToRGB)(n(t.cat_color,e.sliceId),255*o.a),{...t,color:i}):t}))}toggleCategory(t){const e=this.state.categories[t],o={...this.state.categories,[t]:{...e,enabled:!e.enabled}};Object.values(o).every((t=>!t.enabled))&&Object.values(o).forEach((t=>{t.enabled=!0})),this.setState({categories:o})}showSingleCategory(t){const e={...this.state.categories};Object.values(e).forEach((t=>{t.enabled=!1})),e[t].enabled=!0,this.setState({categories:e})}render(){return(0,f.tZ)("div",{style:{position:"relative"}},(0,f.tZ)(g.Z,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},(0,f.tZ)(d.Z,{forceCategorical:!0,categories:this.state.categories,format:this.props.formData.legend_format,position:this.props.formData.legend_position,showSingleCategory:this.showSingleCategory,toggleCategory:this.toggleCategory})))}}function _(t,e){class o extends a.PureComponent{constructor(t){super(t),this.containerRef=a.createRef(),this.setTooltip=t=>{const{current:e}=this.containerRef;e&&(null==e||e.setTooltip(t))};const{width:o,height:n,formData:i}=t;let{viewport:r}=t;i.autozoom&&(r=(0,m.Z)(r,{width:o,height:n,points:e(t.payload.data.features)})),this.state={viewport:r,layer:this.computeLayer(t)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(t){const e={...t.formData,viewport:null},o={...this.props.formData,viewport:null};i()(e,o)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}onViewportChange(t){this.setState({viewport:t})}computeLayer(e){const{formData:o,payload:n,onAddFilter:i}=e;return t(o,n,i,this.setTooltip)}render(){const{formData:t,payload:e,setControlValue:o,height:n,width:i}=this.props,{layer:a,viewport:s}=this.state;return(0,f.tZ)(r.F,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:s,layers:[a],mapStyle:t.mapbox_style,setControlValue:o,width:i,height:n,onViewportChange:this.onViewportChange})}}return o}function P(t,e){return function(o){const{datasource:n,formData:i,height:a,payload:r,setControlValue:s,viewport:c,width:l}=o;return(0,f.tZ)(y,{datasource:n,formData:i,mapboxApiKey:r.data.mapboxApiKey,setControlValue:s,viewport:c,getLayer:t,payload:r,getPoints:e,width:l,height:a})}}y.propTypes=v}}]);
//# sourceMappingURL=587624c90ea6738e9972.chunk.js.map