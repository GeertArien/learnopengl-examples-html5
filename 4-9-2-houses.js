
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,C,ja=!1;function assert(a,b){a||x("Assertion failed: "+b)}
function ka(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}function la(a){var b=["string"],c={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=D(q);E(m,F,p,q)}return p},array:function(m){var p=D(m.length);ma.set(m,p);return p}},d=ka(),f=[],k=0;if(a)for(var g=0;g<a.length;g++){var n=c[b[g]];n?(0===k&&(k=na()),f[g]=n(a[g])):f[g]=a[g]}d.apply(null,f);0!==k&&oa(k)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var n=a.charCodeAt(++k);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=D(b);E(a,ma,c,b);return c}var H,ma,F,sa,ta,I,ua,va,J;
function wa(a){H=a;e.HEAP8=ma=new Int8Array(a);e.HEAP16=sa=new Int16Array(a);e.HEAP32=I=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=ta=new Uint16Array(a);e.HEAPU32=ua=new Uint32Array(a);e.HEAPF32=va=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:xa/65536,maximum:32768});B&&(H=B.buffer);xa=H.byteLength;wa(H);var ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=e.preRun.shift();ya.unshift(a)}var K=0,Ea=null,L=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Fa(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ga(){return Fa("data:application/octet-stream;base64,")}var M="4-9-2-houses.wasm";if(!Ga()){var Ha=M;M=e.locateFile?e.locateFile(Ha,v):v+Ha}
function Ia(){try{if(A)return new Uint8Array(A);if(w)return w(M);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ja(){return A||!ba&&!u||"function"!==typeof fetch||Fa("file://")?Promise.resolve().then(Ia):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.fc;"number"===typeof c?void 0===b.Tb?C.get(c)():C.get(c)(b.Tb):c(void 0===b.Tb?null:b.Tb)}}}var La=0;function Ma(){for(var a=N.length-1;0<=a;--a)Na(a);N=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Rb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.vc.apply(null,b.lc)}}var N=[];function Na(a){var b=N[a];b.target.removeEventListener(b.Jb,b.dc,b.Kb);N.splice(a,1)}
function O(a){function b(d){++La;Qa=a;Pa();a.Mb(d);Pa();--La}if(a.Lb)a.dc=b,a.target.addEventListener(a.Jb,b,a.Kb),N.push(a),Ra||(Ba.push(Ma),Ra=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Jb==a.Jb&&Na(c--)}var Ra,Qa,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?G(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function $a(a,b,c,d,f,k){Sa||(Sa=Q(164));a={target:P(a),Rb:!0,Jb:k,Lb:d,Mb:function(g){var n=Sa,m=n>>2;I[m]=g.location;I[m+1]=g.ctrlKey;I[m+2]=g.shiftKey;I[m+3]=g.altKey;I[m+4]=g.metaKey;I[m+5]=g.repeat;I[m+6]=g.charCode;I[m+7]=g.keyCode;I[m+8]=g.which;E(g.key||"",F,n+36,32);E(g.code||"",F,n+68,32);E(g.char||"",F,n+100,32);E(g.locale||"",F,n+132,32);C.get(d)(f,n,b)&&g.preventDefault()},Kb:c};O(a)}
function ab(a,b,c){a>>=2;I[a]=b.screenX;I[a+1]=b.screenY;I[a+2]=b.clientX;I[a+3]=b.clientY;I[a+4]=b.ctrlKey;I[a+5]=b.shiftKey;I[a+6]=b.altKey;I[a+7]=b.metaKey;sa[2*a+16]=b.button;sa[2*a+17]=b.buttons;I[a+9]=b.movementX;I[a+10]=b.movementY;c=Za(c);I[a+11]=b.clientX-c.left;I[a+12]=b.clientY-c.top}function R(a,b,c,d,f,k){Ta||(Ta=Q(64));a=P(a);O({target:a,Rb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Jb:k,Lb:d,Mb:function(g){g=g||event;ab(Ta,g,a);C.get(d)(f,Ta,b)&&g.preventDefault()},Kb:c})}
function bb(a,b,c,d,f){Ua||(Ua=Q(260));O({target:a,Jb:f,Lb:d,Mb:function(k){k=k||event;var g=Ua,n=document.pointerLockElement||document.Vb||document.Xb||document.Wb;I[g>>2]=!!n;var m=n&&n.id?n.id:"";E(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",F,g+4,128);E(m,F,g+132,128);C.get(d)(20,g,b)&&k.preventDefault()},Kb:c})}function cb(a,b,c,d,f){O({target:a,Jb:f,Lb:d,Mb:function(k){k=k||event;C.get(d)(38,0,b)&&k.preventDefault()},Kb:c})}
function db(a,b,c,d){Va||(Va=Q(36));a=P(a);O({target:a,Jb:"resize",Lb:d,Mb:function(f){f=f||event;if(f.target==a){var k=Va,g=document.body;I[k>>2]=f.detail;I[k+4>>2]=g.clientWidth;I[k+8>>2]=g.clientHeight;I[k+12>>2]=innerWidth;I[k+16>>2]=innerHeight;I[k+20>>2]=outerWidth;I[k+24>>2]=outerHeight;I[k+28>>2]=pageXOffset;I[k+32>>2]=pageYOffset;C.get(d)(10,k,b)&&f.preventDefault()}},Kb:c})}
function eb(a,b,c,d,f,k){Wa||(Wa=Q(1684));a=P(a);O({target:a,Rb:"touchstart"==k||"touchend"==k,Jb:k,Lb:d,Mb:function(g){for(var n={},m=g.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=g.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.ic=1,n[q.identifier]=q;m=g.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].jc=1;m=Wa;q=m>>2;I[q+1]=g.ctrlKey;I[q+2]=g.shiftKey;I[q+3]=g.altKey;I[q+4]=g.metaKey;q+=5;var kb=Za(a),lb=0;for(p in n){var z=n[p];I[q]=z.identifier;I[q+1]=z.screenX;I[q+2]=
z.screenY;I[q+3]=z.clientX;I[q+4]=z.clientY;I[q+5]=z.pageX;I[q+6]=z.pageY;I[q+7]=z.ic;I[q+8]=z.jc;I[q+9]=z.clientX-kb.left;I[q+10]=z.clientY-kb.top;q+=13;if(31<++lb)break}I[m>>2]=lb;C.get(d)(f,m,b)&&g.preventDefault()},Kb:c})}function fb(a,b,c,d,f,k){a={target:P(a),Jb:k,Lb:d,Mb:function(g){g=g||event;C.get(d)(f,0,b)&&g.preventDefault()},Kb:c};O(a)}
function gb(a,b,c,d){Xa||(Xa=Q(96));O({target:a,Rb:!0,Jb:"wheel",Lb:d,Mb:function(f){f=f||event;var k=Xa;ab(k,f,a);J[k+64>>3]=f.deltaX;J[k+72>>3]=f.deltaY;J[k+80>>3]=f.deltaZ;I[k+88>>2]=f.deltaMode;C.get(d)(9,k,b)&&f.preventDefault()},Kb:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function ib(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function jb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.nc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function nb(a){a.qc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.sc=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],S=[],rb=[],sb=[],tb=[],T=[],U=[],ub=[],vb=[],V={},wb={},xb={};function W(a){yb||(yb=a)}function X(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a){a||(a=Y);if(!a.hc){a.hc=!0;var b=a.Sb;hb(b);ib(b);jb(b);mb(b);nb(b);b.oc=b.getExtension("EXT_disjoint_timer_query");ob(b);var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var yb,Y,Ab=["default","low-power","high-performance"];function Bb(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),g=k&&X(d);k?(k.name=g,d[g]=k):W(1282);I[b+4*f>>2]=g}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Y.version){W(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Y.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else W(1281)}
function Db(a){var b=qa(a)+1,c=Q(b);E(a,F,c,b);return c}function Eb(a){a-=5120;return 0==a?ma:1==a?F:2==a?sa:4==a?I:6==a?va:5==a||28922==a||28520==a||30779==a||30782==a?ua:ta}function Fb(a,b,c,d,f){a=Eb(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}var Z;za.push({fc:function(){Gb()}});
var Nb={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},W:function(a,b,c){a=P(a);if(!a)return-4;a=Za(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Wa:function(a,b,c){F.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){C.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){a>>>=0;var b=F.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{B.grow(Math.min(2147483648,d)-H.byteLength+65535>>>16);wa(B.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},L:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},ea:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,
d){R(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Vb||document.body.Xb||document.body.Wb))return-1;a=P(a);if(!a)return-4;bb(a,b,c,d,"pointerlockchange");bb(a,b,c,d,"mozpointerlockchange");bb(a,b,c,d,"webkitpointerlockchange");bb(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||
!(document.body.requestPointerLock||document.body.Vb||document.body.Xb||document.body.Wb))return-1;a=P(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Oa:function(a,b,c,d){db(a,b,c,d);return 0},_:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){eb(a,
b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){fb(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d),0):-1},z:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=Ab[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.$b=I[b+8];c.rc=
I[b+9];c.Zb=I[b+10];c.ec=I[b+11];c.tc=I[b+12];c.uc=I[b+13];a=P(a);if(!a||c.ec)c=0;else if(a=1<c.$b?a.getContext("webgl2",c):a.getContext("webgl",c)){b=X(vb);var d={pc:b,attributes:c,version:c.$b,Sb:a};a.canvas&&(a.canvas.kc=d);vb[b]=d;("undefined"===typeof c.Zb||c.Zb)&&zb(d);c=b}else c=0;return c},Za:function(a,b){a=vb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(Z);"OES_vertex_array_object"==b&&ib(Z);"WEBGL_draw_buffers"==b&&jb(Z);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&mb(Z);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&nb(Z);"WEBGL_multi_draw"==b&&ob(Z);return!!a.Sb.getExtension(b)},Aa:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},fb:function(a){Y=vb[a];e.mc=Z=Y&&Y.Sb;return!a||Z?0:-5},c:function(a){Z.activeTexture(a)},E:function(a,b){Z.attachShader(S[a],U[b])},d:function(a,b){35051==a?Z.Yb=b:35052==a&&(Z.Nb=b);Z.bindBuffer(a,qb[b])},i:function(a,b){Z.bindFramebuffer(a,rb[b])},H:function(a,b){Z.bindRenderbuffer(a,
sb[b])},b:function(a,b){Z.bindTexture(a,tb[b])},U:function(a){Z.bindVertexArray(ub[a])},P:function(a,b,c,d){Z.blendColor(a,b,c,d)},Q:function(a,b){Z.blendEquationSeparate(a,b)},R:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,f,k,g,n,m,p){Z.blitFramebuffer(a,b,c,d,f,k,g,n,m,p)},J:function(a,b,c,d){2<=Y.version?c?Z.bufferData(a,F,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?F.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=Y.version?Z.bufferSubData(a,b,F,d,c):Z.bufferSubData(a,b,F.subarray(d,
d+c))},db:function(a){Z.clear(a)},pa:function(a,b,c,d){Z.clearColor(a,b,c,d)},oa:function(a){Z.clearDepth(a)},eb:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){Z.compileShader(U[a])},Ga:function(a,b,c,d,f,k,g,n){2<=Y.version?Z.Nb?Z.compressedTexImage2D(a,b,c,d,f,k,g,n):Z.compressedTexImage2D(a,b,c,d,f,k,F,n,g):Z.compressedTexImage2D(a,b,c,d,f,k,n?F.subarray(n,n+g):null)},Ea:function(a,b,c,d,f,k,g,n,m){Z.Nb?Z.compressedTexImage3D(a,b,c,d,f,k,g,n,m):
Z.compressedTexImage3D(a,b,c,d,f,k,g,F,m,n)},Ca:function(){var a=X(S),b=Z.createProgram();b.name=a;S[a]=b;return a},ya:function(a){var b=X(U);U[b]=Z.createShader(a);return b},M:function(a){Z.cullFace(a)},ta:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=qb[d];f&&(Z.deleteBuffer(f),f.name=0,qb[d]=null,d==Z.Yb&&(Z.Yb=0),d==Z.Nb&&(Z.Nb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],f=rb[d];f&&(Z.deleteFramebuffer(f),f.name=0,rb[d]=null)}},C:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),
b.name=0,S[a]=null,V[a]=null):W(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=sb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},s:function(a){if(a){var b=U[a];b?(Z.deleteShader(b),U[a]=null):W(1281)}},sa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=tb[d];f&&(Z.deleteTexture(f),f.name=0,tb[d]=null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Z.deleteVertexArray(ub[d]);ub[d]=null}},w:function(a){Z.depthFunc(a)},v:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},
T:function(a){Z.disableVertexAttribArray(a)},_a:function(a,b,c){Z.drawArrays(a,b,c)},$a:function(a,b,c,d){Z.drawElements(a,b,c,d)},h:function(a){Z.enable(a)},ab:function(a){Z.enableVertexAttribArray(a)},N:function(a){Z.frontFace(a)},K:function(a,b){Bb(a,b,"createBuffer",qb)},I:function(a,b){Bb(a,b,"createRenderbuffer",sb)},Ia:function(a,b){Bb(a,b,"createTexture",tb)},Ma:function(a,b){Bb(a,b,"createVertexArray",ub)},ua:function(a,b){return Z.getAttribLocation(S[a],G(b))},f:function(a,b){Cb(a,b)},za:function(a,
b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},D:function(a,b,c){if(c)if(a>=pb)W(1281);else{var d=V[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Ub;else if(35722==b){if(-1==d.Ob){a=S[a];var f=Z.getProgramParameter(a,35721);for(b=d.Ob=0;b<f;++b)d.Ob=Math.max(d.Ob,Z.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.Ob}else if(35381==b){if(-1==d.Pb)for(a=S[a],f=Z.getProgramParameter(a,
35382),b=d.Pb=0;b<f;++b)d.Pb=Math.max(d.Pb,Z.getActiveUniformBlockName(a,b).length+1);I[c>>2]=d.Pb}else I[c>>2]=Z.getProgramParameter(S[a],b);else W(1282)}else W(1281)},va:function(a,b,c,d){a=Z.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(U[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=Z.getShaderParameter(U[a],b):W(1281)},
Qa:function(a){if(wb[a])return wb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Db(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||W(1280);b=Db(b);break;case 7938:b=Z.getParameter(7938);b=2<=Y.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Db(b);break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+
c[1]+" ("+b+")");b=Db(b);break;default:return W(1280),0}return wb[a]=b},Pa:function(a,b){if(2>Y.version)return W(1282),0;var c=xb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Db(d)}),c=xb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},l:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+
1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].cc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ba:function(a){Z.linkProgram(S[a]);var b=S[a];a=V[a]={cc:{},Ub:0,Ob:-1,Pb:-1};for(var c=a.cc,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var k=Z.getActiveUniform(b,f),g=k.name;a.Ub=Math.max(a.Ub,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var n=Z.getUniformLocation(b,g);if(n){var m=X(T);c[g]=[k.size,m];T[m]=n;for(var p=1;p<k.size;++p)n=Z.getUniformLocation(b,g+"["+p+"]"),m=X(T),T[m]=n}}},O:function(a,b){Z.polygonOffset(a,
b)},r:function(a){Z.readBuffer(a)},Ja:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,f){Z.renderbufferStorageMultisample(a,b,c,d,f)},qa:function(a,b,c,d){Z.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?I[d+4*k>>2]:-1;f+=G(I[c+4*k>>2],0>g?void 0:g)}Z.shaderSource(U[a],f)},La:function(a,b,c){Z.stencilFunc(a,b,c)},ma:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},Ka:function(a,b,c){Z.stencilOp(a,b,c)},la:function(a,b,
c,d){Z.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,f,k,g,n,m){if(2<=Y.version)if(Z.Nb)Z.texImage2D(a,b,c,d,f,k,g,n,m);else if(m){var p=Eb(n);Z.texImage2D(a,b,c,d,f,k,g,n,p,m>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Z.texImage2D(a,b,c,d,f,k,g,n,null);else Z.texImage2D(a,b,c,d,f,k,g,n,m?Fb(n,g,d,f,m):null)},Da:function(a,b,c,d,f,k,g,n,m,p){if(Z.Nb)Z.texImage3D(a,b,c,d,f,k,g,n,m,p);else if(p){var q=Eb(m);Z.texImage3D(a,b,c,d,f,k,g,n,m,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Z.texImage3D(a,
b,c,d,f,k,g,n,m,null)},F:function(a,b,c){Z.texParameterf(a,b,c)},g:function(a,b,c){Z.texParameteri(a,b,c)},B:function(a,b){Z.uniform1i(T[a],b)},k:function(a){Z.useProgram(S[a])},bb:function(a,b){Z.vertexAttribDivisor(a,b)},cb:function(a,b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},ra:function(a,b,c,d){Z.viewport(a,b,c,d)},a:B,Ua:function(){e.ac=function(a){0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.ac)},Ta:function(){e.bc=function(a){a=a.clipboardData.getData("text");
la([a])};window.addEventListener("paste",e.bc)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ib()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Va:function(a){a=G(a);e.Qb=document.getElementById(a);e.Qb||console.log("sokol_app.h: invalid target:"+a);e.Qb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Sa:function(){window.removeEventListener("beforeunload",e.ac)},Ra:function(){window.removeEventListener("paste",e.bc)},x:function(){e.Qb&&e.Qb.requestPointerLock&&e.Qb.requestPointerLock()},n:function(){document.getElementById("_sokol_app_input_element").blur()},na:function(a,b,c,d,f,k){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var n=0<d;n&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==
this.status||200==this.status&&!n){var m=new Uint8Array(g.response),p=m.length;p<=k?(F.set(m,f),Jb(a,d,p)):Kb(a)}else Lb(a,this.status)};g.send()},Ya:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Mb(a,d)}else Lb(a,this.status)};c.send()},gb:function(){return performance.now()}};
(function(){function a(f){e.asm=f.exports;C=e.asm.hb;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ea&&(clearInterval(Ea),Ea=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ja().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){y("failed to asynchronously prepare wasm: "+k);x(k)})}var d={a:Nb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||Fa("file://")||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Gb=e.___wasm_call_ctors=function(){return(Gb=e.___wasm_call_ctors=e.asm.ib).apply(null,arguments)},Q=e._malloc=function(){return(Q=e._malloc=e.asm.jb).apply(null,arguments)},Ib=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ib=e.__sapp_emsc_notify_keyboard_hidden=e.asm.kb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.lb).apply(null,arguments)};
var Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.mb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.nb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.ob).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.pb).apply(null,arguments)};
e.___em_js__sapp_js_add_hook_beforeunload=function(){return(e.___em_js__sapp_js_add_hook_beforeunload=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_js_remove_hook_beforeunload=function(){return(e.___em_js__sapp_js_remove_hook_beforeunload=e.asm.rb).apply(null,arguments)};e.___em_js__sapp_js_add_hook_clipboard=function(){return(e.___em_js__sapp_js_add_hook_clipboard=e.asm.sb).apply(null,arguments)};
e.___em_js__sapp_js_remove_hook_clipboard=function(){return(e.___em_js__sapp_js_remove_hook_clipboard=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.vb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.wb).apply(null,arguments)};
e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.xb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.yb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.zb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Ab).apply(null,arguments)};
e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Bb).apply(null,arguments)};
var Mb=e.__sfetch_emsc_head_response=function(){return(Mb=e.__sfetch_emsc_head_response=e.asm.Cb).apply(null,arguments)},Jb=e.__sfetch_emsc_get_response=function(){return(Jb=e.__sfetch_emsc_get_response=e.asm.Db).apply(null,arguments)},Lb=e.__sfetch_emsc_failed_http_status=function(){return(Lb=e.__sfetch_emsc_failed_http_status=e.asm.Eb).apply(null,arguments)},Kb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Kb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Fb).apply(null,arguments)},na=
e.stackSave=function(){return(na=e.stackSave=e.asm.Gb).apply(null,arguments)},oa=e.stackRestore=function(){return(oa=e.stackRestore=e.asm.Hb).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Ib).apply(null,arguments)},Ob;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Pb(){Ob||Qb();Ob||(L=Pb)};
function Qb(a){function b(){if(!Ob&&(Ob=!0,e.calledRun=!0,!ja)){Ka(za);Ka(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Rb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=D(4*(f+1));I[k>>2]=ra(aa);for(var g=1;g<f;g++)I[(k>>2)+g]=ra(c[g-1]);I[(k>>2)+f]=0;try{var n=d(f,k);if(!noExitRuntime||0!==n){if(!noExitRuntime){if(e.onExit)e.onExit(n);ja=!0}t(n,new ia(n))}}catch(m){m instanceof ia||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),y("exception thrown: "+
c),t(1,m)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ca.unshift(c);Ka(Ca)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();Ka(ya);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Qb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Rb=!0;e.noInitialRun&&(Rb=!1);noExitRuntime=!0;Qb();
