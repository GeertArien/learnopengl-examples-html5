
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime;f.noExitRuntime&&(noExitRuntime=f.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,C,ja=!1;function assert(a,b){a||x("Assertion failed: "+b)}
function ka(){var a=f.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}function la(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=D(q);E(n,F,p,q)}return p},array:function(n){var p=D(n.length);ma.set(n,p);return p}},d=ka(),e=[],h=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===h&&(h=na()),e[g]=m(a[g])):e[g]=a[g]}d.apply(null,e);0!==h&&oa(h)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=D(b);E(a,ma,c,b);return c}var H,ma,F,sa,ta,I,ua,J,K;
function va(a){H=a;f.HEAP8=ma=new Int8Array(a);f.HEAP16=sa=new Int16Array(a);f.HEAP32=I=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=ta=new Uint16Array(a);f.HEAPU32=ua=new Uint32Array(a);f.HEAPF32=J=new Float32Array(a);f.HEAPF64=K=new Float64Array(a)}var wa=f.INITIAL_MEMORY||33554432;f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:wa/65536,maximum:32768});A&&(H=A.buffer);wa=H.byteLength;va(H);var xa=[],ya=[],za=[],Aa=[],Ba=[];
function Ca(){var a=f.preRun.shift();xa.unshift(a)}var L=0,Da=null,M=null;f.preloadedImages={};f.preloadedAudios={};function x(a){if(f.onAbort)f.onAbort(a);y(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ea(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var N="2-1-1-scene.wasm";if(!Fa()){var Ga=N;N=f.locateFile?f.locateFile(Ga,v):v+Ga}
function Ha(){try{if(z)return new Uint8Array(z);if(w)return w(N);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ia(){return z||!ba&&!u||"function"!==typeof fetch||Ea("file://")?Promise.resolve().then(Ha):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.lc;"number"===typeof c?void 0===b.Yb?C.get(c)():C.get(c)(b.Yb):c(void 0===b.Yb?null:b.Yb)}}}var Ka=0;function La(){for(var a=O.length-1;0<=a;--a)Ma(a);O=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.Wb)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Ac.apply(null,b.qc)}}var O=[];function Ma(a){var b=O[a];b.target.removeEventListener(b.Ob,b.jc,b.Pb);O.splice(a,1)}
function P(a){function b(d){++Ka;Pa=a;Oa();a.Rb(d);Oa();--Ka}if(a.Qb)a.jc=b,a.target.addEventListener(a.Ob,b,a.Pb),O.push(a),Qa||(Aa.push(La),Qa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Ob==a.Ob&&Ma(c--)}var Qa,Pa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?G(a):a;return Xa[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Za(a,b,c,d,e,h){Ra||(Ra=R(164));a={target:Q(a),Wb:!0,Ob:h,Qb:d,Rb:function(g){var m=Ra,n=m>>2;I[n]=g.location;I[n+1]=g.ctrlKey;I[n+2]=g.shiftKey;I[n+3]=g.altKey;I[n+4]=g.metaKey;I[n+5]=g.repeat;I[n+6]=g.charCode;I[n+7]=g.keyCode;I[n+8]=g.which;E(g.key||"",F,m+36,32);E(g.code||"",F,m+68,32);E(g.char||"",F,m+100,32);E(g.locale||"",F,m+132,32);C.get(d)(e,m,b)&&g.preventDefault()},Pb:c};P(a)}
function $a(a,b,c){a>>=2;I[a]=b.screenX;I[a+1]=b.screenY;I[a+2]=b.clientX;I[a+3]=b.clientY;I[a+4]=b.ctrlKey;I[a+5]=b.shiftKey;I[a+6]=b.altKey;I[a+7]=b.metaKey;sa[2*a+16]=b.button;sa[2*a+17]=b.buttons;I[a+9]=b.movementX;I[a+10]=b.movementY;c=Ya(c);I[a+11]=b.clientX-c.left;I[a+12]=b.clientY-c.top}function ab(a,b,c,d,e,h){Sa||(Sa=R(64));a=Q(a);P({target:a,Wb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ob:h,Qb:d,Rb:function(g){g=g||event;$a(Sa,g,a);C.get(d)(e,Sa,b)&&g.preventDefault()},Pb:c})}
function bb(a,b,c,d,e){Ta||(Ta=R(260));P({target:a,Ob:e,Qb:d,Rb:function(h){h=h||event;var g=Ta,m=document.pointerLockElement||document.$b||document.bc||document.ac;I[g>>2]=!!m;var n=m&&m.id?m.id:"";E(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",F,g+4,128);E(n,F,g+132,128);C.get(d)(20,g,b)&&h.preventDefault()},Pb:c})}function cb(a,b,c,d,e){P({target:a,Ob:e,Qb:d,Rb:function(h){h=h||event;C.get(d)(38,0,b)&&h.preventDefault()},Pb:c})}
function db(a,b,c,d){Ua||(Ua=R(36));a=Q(a);P({target:a,Ob:"resize",Qb:d,Rb:function(e){e=e||event;if(e.target==a){var h=Ua,g=document.body;I[h>>2]=e.detail;I[h+4>>2]=g.clientWidth;I[h+8>>2]=g.clientHeight;I[h+12>>2]=innerWidth;I[h+16>>2]=innerHeight;I[h+20>>2]=outerWidth;I[h+24>>2]=outerHeight;I[h+28>>2]=pageXOffset;I[h+32>>2]=pageYOffset;C.get(d)(10,h,b)&&e.preventDefault()}},Pb:c})}
function eb(a,b,c,d,e,h){Va||(Va=R(1684));a=Q(a);P({target:a,Wb:"touchstart"==h||"touchend"==h,Ob:h,Qb:d,Rb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.nc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].oc=1;n=Va;q=n>>2;I[q+1]=g.ctrlKey;I[q+2]=g.shiftKey;I[q+3]=g.altKey;I[q+4]=g.metaKey;q+=5;var mb=Ya(a),nb=0;for(p in m){var B=m[p];I[q]=B.identifier;I[q+1]=B.screenX;I[q+2]=
B.screenY;I[q+3]=B.clientX;I[q+4]=B.clientY;I[q+5]=B.pageX;I[q+6]=B.pageY;I[q+7]=B.nc;I[q+8]=B.oc;I[q+9]=B.clientX-mb.left;I[q+10]=B.clientY-mb.top;q+=13;if(31<++nb)break}I[n>>2]=nb;C.get(d)(e,n,b)&&g.preventDefault()},Pb:c})}function fb(a,b,c,d,e,h){a={target:Q(a),Ob:h,Qb:d,Rb:function(g){g=g||event;C.get(d)(e,0,b)&&g.preventDefault()},Pb:c};P(a)}
function gb(a,b,c,d){Wa||(Wa=R(96));P({target:a,Wb:!0,Ob:"wheel",Qb:d,Rb:function(e){e=e||event;var h=Wa;$a(h,e,a);K[h+64>>3]=e.deltaX;K[h+72>>3]=e.deltaY;K[h+80>>3]=e.deltaZ;I[h+88>>2]=e.deltaMode;C.get(d)(9,h,b)&&e.preventDefault()},Pb:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ib(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function jb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function kb(a){a.sc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function lb(a){a.vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.xc=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],S=[],rb=[],sb=[],tb=[],T=[],U=[],ub=[],vb=[],wb={},xb={},yb={};function V(a){zb||(zb=a)}function W(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a){a||(a=X);if(!a.mc){a.mc=!0;var b=a.Xb;hb(b);ib(b);jb(b);kb(b);lb(b);b.tc=b.getExtension("EXT_disjoint_timer_query");ob(b);var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var zb,X,Bb=["default","low-power","high-performance"];function Cb(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);I[b+4*e>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else V(1281)}
function Eb(a){var b=qa(a)+1,c=R(b);E(a,F,c,b);return c}function Fb(a){a-=5120;return 0==a?ma:1==a?F:2==a?sa:4==a?I:6==a?J:5==a||28922==a||28520==a||30779==a||30782==a?ua:ta}function Gb(a,b,c,d,e){a=Fb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Hb=new Float32Array(288),Ib=0;288>Ib;++Ib)Z[Ib]=Hb.subarray(0,Ib+1);ya.push({lc:function(){Jb()}});
var Qb={P:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},T:function(a,b,c){a=Q(a);if(!a)return-4;a=Ya(a);K[b>>3]=a.width;K[c>>3]=a.height;return 0},Xa:function(a,b,c){F.copyWithin(a,b,b+c)},Fa:function(a,b){function c(d){C.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){a>>>=0;var b=F.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-H.byteLength+65535>>>16);va(A.buffer);var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},I:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){ab(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){ab(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,
d){ab(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){ab(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){ab(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.$b||document.body.bc||document.body.ac))return-1;a=Q(a);if(!a)return-4;bb(a,b,c,d,"pointerlockchange");bb(a,b,c,d,"mozpointerlockchange");bb(a,b,c,d,"webkitpointerlockchange");bb(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||
!(document.body.requestPointerLock||document.body.$b||document.body.bc||document.body.ac))return-1;a=Q(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Pa:function(a,b,c,d){db(a,b,c,d);return 0},X:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){eb(a,
b,c,d,22,"touchstart");return 0},U:function(a,b,c,d){fb(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d),0):-1},z:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=Bb[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.ec=I[b+8];c.wc=
I[b+9];c.dc=I[b+10];c.kc=I[b+11];c.yc=I[b+12];c.zc=I[b+13];a=Q(a);if(!a||c.kc)c=0;else if(a=1<c.ec?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(vb);var d={uc:b,attributes:c,version:c.ec,Xb:a};a.canvas&&(a.canvas.pc=d);vb[b]=d;("undefined"===typeof c.dc||c.dc)&&Ab(d);c=b}else c=0;return c},cb:function(a,b){a=vb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(Y);"OES_vertex_array_object"==b&&ib(Y);"WEBGL_draw_buffers"==b&&jb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&kb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&lb(Y);"WEBGL_multi_draw"==b&&ob(Y);return!!a.Xb.getExtension(b)},ya:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},lb:function(a){X=vb[a];f.rc=Y=X&&X.Xb;return!a||Y?0:-5},c:function(a){Y.activeTexture(a)},E:function(a,b){Y.attachShader(S[a],U[b])},d:function(a,b){35051==a?Y.cc=b:35052==a&&(Y.Sb=b);Y.bindBuffer(a,qb[b])},i:function(a,b){Y.bindFramebuffer(a,rb[b])},Ja:function(a,b){Y.bindRenderbuffer(a,
sb[b])},b:function(a,b){Y.bindTexture(a,tb[b])},R:function(a){Y.bindVertexArray(ub[a])},M:function(a,b,c,d){Y.blendColor(a,b,c,d)},N:function(a,b){Y.blendEquationSeparate(a,b)},O:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},G:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,F,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?F.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,F,d,c):Y.bufferSubData(a,b,F.subarray(d,
d+c))},jb:function(a){Y.clear(a)},na:function(a,b,c,d){Y.clearColor(a,b,c,d)},ma:function(a){Y.clearDepth(a)},kb:function(a){Y.clearStencil(a)},t:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){Y.compileShader(U[a])},Ea:function(a,b,c,d,e,h,g,m){2<=X.version?Y.Sb?Y.compressedTexImage2D(a,b,c,d,e,h,g,m):Y.compressedTexImage2D(a,b,c,d,e,h,F,m,g):Y.compressedTexImage2D(a,b,c,d,e,h,m?F.subarray(m,m+g):null)},Ca:function(a,b,c,d,e,h,g,m,n){Y.Sb?Y.compressedTexImage3D(a,b,c,d,e,h,g,m,n):
Y.compressedTexImage3D(a,b,c,d,e,h,g,F,n,m)},Aa:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},wa:function(a){var b=W(U);U[b]=Y.createShader(a);return b},J:function(a){Y.cullFace(a)},ra:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=qb[d];e&&(Y.deleteBuffer(e),e.name=0,qb[d]=null,d==Y.cc&&(Y.cc=0),d==Y.Sb&&(Y.Sb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],e=rb[d];e&&(Y.deleteFramebuffer(e),e.name=0,rb[d]=null)}},C:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),
b.name=0,S[a]=null,wb[a]=null):V(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=sb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,sb[d]=null)}},s:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},qa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=tb[d];e&&(Y.deleteTexture(e),e.name=0,tb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Y.deleteVertexArray(ub[d]);ub[d]=null}},w:function(a){Y.depthFunc(a)},v:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},
Q:function(a){Y.disableVertexAttribArray(a)},_a:function(a,b,c){Y.drawArrays(a,b,c)},$a:function(a,b,c,d){Y.drawElements(a,b,c,d)},h:function(a){Y.enable(a)},gb:function(a){Y.enableVertexAttribArray(a)},K:function(a){Y.frontFace(a)},H:function(a,b){Cb(a,b,"createBuffer",qb)},Ka:function(a,b){Cb(a,b,"createRenderbuffer",sb)},Ga:function(a,b){Cb(a,b,"createTexture",tb)},Na:function(a,b){Cb(a,b,"createVertexArray",ub)},sa:function(a,b){return Y.getAttribLocation(S[a],G(b))},f:function(a,b){Db(a,b)},
xa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},D:function(a,b,c){if(c)if(a>=pb)V(1281);else{var d=wb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Zb;else if(35722==b){if(-1==d.Tb){a=S[a];var e=Y.getProgramParameter(a,35721);for(b=d.Tb=0;b<e;++b)d.Tb=Math.max(d.Tb,Y.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.Tb}else if(35381==b){if(-1==d.Ub)for(a=
S[a],e=Y.getProgramParameter(a,35382),b=d.Ub=0;b<e;++b)d.Ub=Math.max(d.Ub,Y.getActiveUniformBlockName(a,b).length+1);I[c>>2]=d.Ub}else I[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},ta:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=Y.getShaderParameter(U[a],
b):V(1281)},Ra:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Eb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Eb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+=
"0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:return V(1280),0}return xb[a]=b},Qa:function(a,b){if(2>X.version)return V(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Eb(d)}),c=yb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},l:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=
b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=wb[a]&&wb[a].ic[b])&&0<=c&&c<a[0]?a[1]+c:-1},za:function(a){Y.linkProgram(S[a]);var b=S[a];a=wb[a]={ic:{},Zb:0,Tb:-1,Ub:-1};for(var c=a.ic,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var h=Y.getActiveUniform(b,e),g=h.name;a.Zb=Math.max(a.Zb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),
T[n]=m}}},L:function(a,b){Y.polygonOffset(a,b)},r:function(a){Y.readBuffer(a)},Ha:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ia:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},oa:function(a,b,c,d){Y.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?I[d+4*h>>2]:-1;e+=G(I[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],e)},Ma:function(a,b,c){Y.stencilFunc(a,b,c)},ja:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},u:function(a){Y.stencilMask(a)},La:function(a,
b,c){Y.stencilOp(a,b,c)},ia:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,e,h,g,m,n){if(2<=X.version)if(Y.Sb)Y.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Fb(m);Y.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,e,h,g,m,null);else Y.texImage2D(a,b,c,d,e,h,g,m,n?Gb(m,g,d,e,n):null)},Ba:function(a,b,c,d,e,h,g,m,n,p){if(Y.Sb)Y.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Fb(n);Y.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,e,h,g,m,n,null)},F:function(a,b,c){Y.texParameterf(a,b,c)},g:function(a,b,c){Y.texParameteri(a,b,c)},fb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],J,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=J[c+4*e>>2];else d=J.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},B:function(a,b){Y.uniform1i(T[a],b)},eb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],J,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2];else d=J.subarray(c>>2,
c+8*b>>2);Y.uniform2fv(T[a],d)}},db:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],J,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},bb:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],J,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=J;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=J.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],
d)}},ab:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,J,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=J;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=J.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,e)}},k:function(a){Y.useProgram(S[a])},hb:function(a,
b){Y.vertexAttribDivisor(a,b)},ib:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},pa:function(a,b,c,d){Y.viewport(a,b,c,d)},a:A,Va:function(){f.fc=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.fc)},Ua:function(){f.hc=function(a){a=a.clipboardData.getData("text");la([a])};window.addEventListener("paste",f.hc)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Lb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Wa:function(a){a=G(a);f.Vb=document.getElementById(a);f.Vb||console.log("sokol_app.h: invalid target:"+a);f.Vb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",f.fc)},Sa:function(){window.removeEventListener("paste",f.hc)},x:function(){f.Vb&&f.Vb.requestPointerLock&&f.Vb.requestPointerLock()},
n:function(){document.getElementById("_sokol_app_input_element").blur()},ka:function(a,b,c,d,e,h){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(F.set(n,e),Mb(a,d,p)):Nb(a)}else Ob(a,this.status)};g.send()},Za:function(a,b){b=G(b);var c=new XMLHttpRequest;
c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Pb(a,d)}else Ob(a,this.status)};c.send()},la:function(){return performance.now()}};
(function(){function a(e){f.asm=e.exports;C=f.asm.mb;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Da&&(clearInterval(Da),Da=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Qb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch)return c(b);fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Jb=f.___wasm_call_ctors=function(){return(Jb=f.___wasm_call_ctors=f.asm.nb).apply(null,arguments)},R=f._malloc=function(){return(R=f._malloc=f.asm.ob).apply(null,arguments)},Lb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Lb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.pb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.qb).apply(null,arguments)};
var Kb=f.__sapp_html5_get_ask_leave_site=function(){return(Kb=f.__sapp_html5_get_ask_leave_site=f.asm.rb).apply(null,arguments)};f.___em_js__sapp_js_create_textfield=function(){return(f.___em_js__sapp_js_create_textfield=f.asm.sb).apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return(f.___em_js__sapp_js_focus_textfield=f.asm.tb).apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return(f.___em_js__sapp_js_unfocus_textfield=f.asm.ub).apply(null,arguments)};
f.___em_js__sapp_js_add_hook_beforeunload=function(){return(f.___em_js__sapp_js_add_hook_beforeunload=f.asm.vb).apply(null,arguments)};f.___em_js__sapp_js_remove_hook_beforeunload=function(){return(f.___em_js__sapp_js_remove_hook_beforeunload=f.asm.wb).apply(null,arguments)};f.___em_js__sapp_js_add_hook_clipboard=function(){return(f.___em_js__sapp_js_add_hook_clipboard=f.asm.xb).apply(null,arguments)};
f.___em_js__sapp_js_remove_hook_clipboard=function(){return(f.___em_js__sapp_js_remove_hook_clipboard=f.asm.yb).apply(null,arguments)};f.___em_js__sapp_js_write_clipboard=function(){return(f.___em_js__sapp_js_write_clipboard=f.asm.zb).apply(null,arguments)};f.___em_js__sapp_js_pointer_init=function(){return(f.___em_js__sapp_js_pointer_init=f.asm.Ab).apply(null,arguments)};f.___em_js__sapp_js_request_pointerlock=function(){return(f.___em_js__sapp_js_request_pointerlock=f.asm.Bb).apply(null,arguments)};
f.___em_js__sapp_js_exit_pointerlock=function(){return(f.___em_js__sapp_js_exit_pointerlock=f.asm.Cb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Db).apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return(f.___em_js__stm_js_perfnow=f.asm.Eb).apply(null,arguments)};f.___em_js__sfetch_js_send_head_request=function(){return(f.___em_js__sfetch_js_send_head_request=f.asm.Fb).apply(null,arguments)};
f.___em_js__sfetch_js_send_get_request=function(){return(f.___em_js__sfetch_js_send_get_request=f.asm.Gb).apply(null,arguments)};
var Pb=f.__sfetch_emsc_head_response=function(){return(Pb=f.__sfetch_emsc_head_response=f.asm.Hb).apply(null,arguments)},Mb=f.__sfetch_emsc_get_response=function(){return(Mb=f.__sfetch_emsc_get_response=f.asm.Ib).apply(null,arguments)},Ob=f.__sfetch_emsc_failed_http_status=function(){return(Ob=f.__sfetch_emsc_failed_http_status=f.asm.Jb).apply(null,arguments)},Nb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Nb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Kb).apply(null,arguments)},na=
f.stackSave=function(){return(na=f.stackSave=f.asm.Lb).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.Mb).apply(null,arguments)},D=f.stackAlloc=function(){return(D=f.stackAlloc=f.asm.Nb).apply(null,arguments)},Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Sb(){Rb||Tb();Rb||(M=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ja)){Ja(ya);Ja(za);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,h=D(4*(e+1));I[h>>2]=ra(aa);for(var g=1;g<e;g++)I[(h>>2)+g]=ra(c[g-1]);I[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ja=!0}t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ba.unshift(c);Ja(Ba)}}a=a||r;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ca();Ja(xa);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var Ub=!0;f.noInitialRun&&(Ub=!1);noExitRuntime=!0;Tb();
