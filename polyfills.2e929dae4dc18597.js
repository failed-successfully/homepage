"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[461],{50:(te,J,ge)=>{ge(935)},935:()=>{const te=globalThis;function J(t){return(te.__Zone_symbol_prefix||"__zone_symbol__")+t}const he=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,ft=Object.create,ht=Array.prototype.slice,Me="addEventListener",Le="removeEventListener",Ze=J(Me),je=J(Le),ie="true",ce="false",ye=J("");function Ae(t,r){return Zone.current.wrap(t,r)}function He(t,r,c,n,i){return Zone.current.scheduleMacroTask(t,r,c,n,i)}const H=J,Pe=typeof window<"u",de=Pe?window:void 0,$=Pe&&de||globalThis,dt="removeAttribute";function xe(t,r){for(let c=t.length-1;c>=0;c--)"function"==typeof t[c]&&(t[c]=Ae(t[c],r+"_"+c));return t}function We(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const ze=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in $)&&typeof $.process<"u"&&"[object process]"==={}.toString.call($.process),Ge=!we&&!ze&&!(!Pe||!de.HTMLElement),qe=typeof $.process<"u"&&"[object process]"==={}.toString.call($.process)&&!ze&&!(!Pe||!de.HTMLElement),Re={},Xe=function(t){if(!(t=t||$.event))return;let r=Re[t.type];r||(r=Re[t.type]=H("ON_PROPERTY"+t.type));const c=this||t.target||$,n=c[r];let i;return Ge&&c===de&&"error"===t.type?(i=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===i&&t.preventDefault()):(i=n&&n.apply(this,arguments),null!=i&&!i&&t.preventDefault()),i};function Ye(t,r,c){let n=he(t,r);if(!n&&c&&he(c,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const i=H("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;const l=n.get,_=n.set,E=r.slice(2);let p=Re[E];p||(p=Re[E]=H("ON_PROPERTY"+E)),n.set=function(C){let T=this;!T&&t===$&&(T=$),T&&("function"==typeof T[p]&&T.removeEventListener(E,Xe),_&&_.call(T,null),T[p]=C,"function"==typeof C&&T.addEventListener(E,Xe,!1))},n.get=function(){let C=this;if(!C&&t===$&&(C=$),!C)return null;const T=C[p];if(T)return T;if(l){let L=l.call(this);if(L)return n.set.call(this,L),"function"==typeof C[dt]&&C.removeAttribute(r),L}return null},Ne(t,r,n),t[i]=!0}function $e(t,r,c){if(r)for(let n=0;n<r.length;n++)Ye(t,"on"+r[n],c);else{const n=[];for(const i in t)"on"==i.slice(0,2)&&n.push(i);for(let i=0;i<n.length;i++)Ye(t,n[i],c)}}const re=H("originalInstance");function me(t){const r=$[t];if(!r)return;$[H(t)]=r,$[t]=function(){const i=xe(arguments,t);switch(i.length){case 0:this[re]=new r;break;case 1:this[re]=new r(i[0]);break;case 2:this[re]=new r(i[0],i[1]);break;case 3:this[re]=new r(i[0],i[1],i[2]);break;case 4:this[re]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},le($[t],r);const c=new r(function(){});let n;for(n in c)"XMLHttpRequest"===t&&"responseBlob"===n||function(i){"function"==typeof c[i]?$[t].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:Ne($[t].prototype,i,{set:function(l){"function"==typeof l?(this[re][i]=Ae(l,t+"."+i),le(this[re][i],l)):this[re][i]=l},get:function(){return this[re][i]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&($[t][n]=r[n])}function ae(t,r,c){let n=t;for(;n&&!n.hasOwnProperty(r);)n=Ie(n);!n&&t[r]&&(n=t);const i=H(r);let l=null;if(n&&(!(l=n[i])||!n.hasOwnProperty(i))&&(l=n[i]=n[r],We(n&&he(n,r)))){const E=c(l,i,r);n[r]=function(){return E(this,arguments)},le(n[r],l)}return l}function Et(t,r,c){let n=null;function i(l){const _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments)},n.apply(_.target,_.args),l}n=ae(t,r,l=>function(_,E){const p=c(_,E);return p.cbIdx>=0&&"function"==typeof E[p.cbIdx]?He(p.name,E[p.cbIdx],p,i):l.apply(_,E)})}function le(t,r){t[H("OriginalDelegate")]=r}let Ke=!1,Ve=!1;function gt(){if(Ke)return Ve;Ke=!0;try{const t=de.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Ve=!0)}catch{}return Ve}let _e=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{_e=!1}const pt={useG:!0},ne={},Je={},Qe=new RegExp("^"+ye+"(\\w+)(true|false)$"),et=H("propagationStopped");function tt(t,r){const c=(r?r(t):t)+ce,n=(r?r(t):t)+ie,i=ye+c,l=ye+n;ne[t]={},ne[t][ce]=i,ne[t][ie]=l}function yt(t,r,c,n){const i=n&&n.add||Me,l=n&&n.rm||Le,_=n&&n.listeners||"eventListeners",E=n&&n.rmAll||"removeAllListeners",p=H(i),C="."+i+":",T="prependListener",L="."+T+":",w=function(v,h,G){if(v.isRemoved)return;const W=v.callback;let X;"object"==typeof W&&W.handleEvent&&(v.callback=g=>W.handleEvent(g),v.originalDelegate=W);try{v.invoke(v,h,[G])}catch(g){X=g}const V=v.options;return V&&"object"==typeof V&&V.once&&h[l].call(h,G.type,v.originalDelegate?v.originalDelegate:v.callback,V),X};function A(v,h,G){if(!(h=h||t.event))return;const W=v||h.target||t,X=W[ne[h.type][G?ie:ce]];if(X){const V=[];if(1===X.length){const g=w(X[0],W,h);g&&V.push(g)}else{const g=X.slice();for(let B=0;B<g.length&&(!h||!0!==h[et]);B++){const M=w(g[B],W,h);M&&V.push(M)}}if(1===V.length)throw V[0];for(let g=0;g<V.length;g++){const B=V[g];r.nativeScheduleMicroTask(()=>{throw B})}}}const U=function(v){return A(this,v,!1)},x=function(v){return A(this,v,!0)};function oe(v,h){if(!v)return!1;let G=!0;h&&void 0!==h.useG&&(G=h.useG);const W=h&&h.vh;let X=!0;h&&void 0!==h.chkDup&&(X=h.chkDup);let V=!1;h&&void 0!==h.rt&&(V=h.rt);let g=v;for(;g&&!g.hasOwnProperty(i);)g=Ie(g);if(!g&&v[i]&&(g=v),!g||g[p])return!1;const B=h&&h.eventNameToString,M={},R=g[p]=g[i],k=g[H(l)]=g[l],O=g[H(_)]=g[_],Q=g[H(E)]=g[E];let z;h&&h.prepend&&(z=g[H(h.prepend)]=g[h.prepend]);const Y=G?function(s){if(!M.isExisting)return R.call(M.target,M.eventName,M.capture?x:U,M.options)}:function(s){return R.call(M.target,M.eventName,s.invoke,M.options)},Z=G?function(s){if(!s.isRemoved){const a=ne[s.eventName];let f;a&&(f=a[s.capture?ie:ce]);const b=f&&s.target[f];if(b)for(let D=0;D<b.length;D++)if(b[D]===s){b.splice(D,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[f]=null);break}}if(s.allRemoved)return k.call(s.target,s.eventName,s.capture?x:U,s.options)}:function(s){return k.call(s.target,s.eventName,s.invoke,s.options)},ke=h&&h.diff?h.diff:function(s,a){const f=typeof a;return"function"===f&&s.callback===a||"object"===f&&s.originalDelegate===a},ue=Zone[H("UNPATCHED_EVENTS")],Se=t[H("PASSIVE_EVENTS")],u=function(s,a,f,b,D=!1,m=!1){return function(){const P=this||t;let S=arguments[0];h&&h.transferEventName&&(S=h.transferEventName(S));let j=arguments[1];if(!j)return s.apply(this,arguments);if(we&&"uncaughtException"===S)return s.apply(this,arguments);let F=!1;if("function"!=typeof j){if(!j.handleEvent)return s.apply(this,arguments);F=!0}if(W&&!W(s,j,P,arguments))return;const K=_e&&!!Se&&-1!==Se.indexOf(S),ee=function I(s,a){return!_e&&"object"==typeof s&&s?!!s.capture:_e&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],K),ve=ee&&"object"==typeof ee&&ee.signal&&"object"==typeof ee.signal?ee.signal:void 0;if(ve?.aborted)return;if(ue)for(let fe=0;fe<ue.length;fe++)if(S===ue[fe])return K?s.call(P,S,j,ee):s.apply(this,arguments);const Fe=!!ee&&("boolean"==typeof ee||ee.capture),it=!(!ee||"object"!=typeof ee)&&ee.once,It=Zone.current;let Ue=ne[S];Ue||(tt(S,B),Ue=ne[S]);const ct=Ue[Fe?ie:ce];let Oe,Te=P[ct],at=!1;if(Te){if(at=!0,X)for(let fe=0;fe<Te.length;fe++)if(ke(Te[fe],j))return}else Te=P[ct]=[];const lt=P.constructor.name,ut=Je[lt];ut&&(Oe=ut[S]),Oe||(Oe=lt+a+(B?B(S):S)),M.options=ee,it&&(M.options.once=!1),M.target=P,M.capture=Fe,M.eventName=S,M.isExisting=at;const be=G?pt:void 0;be&&(be.taskData=M),ve&&(M.options.signal=void 0);const se=It.scheduleEventTask(Oe,j,be,f,b);return ve&&(M.options.signal=ve,s.call(ve,"abort",()=>{se.zone.cancelTask(se)},{once:!0})),M.target=null,be&&(be.taskData=null),it&&(ee.once=!0),!_e&&"boolean"==typeof se.options||(se.options=ee),se.target=P,se.capture=Fe,se.eventName=S,F&&(se.originalDelegate=j),m?Te.unshift(se):Te.push(se),D?P:void 0}};return g[i]=u(R,C,Y,Z,V),z&&(g[T]=u(z,L,function(s){return z.call(M.target,M.eventName,s.invoke,M.options)},Z,V,!0)),g[l]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=arguments[2],b=!!f&&("boolean"==typeof f||f.capture),D=arguments[1];if(!D)return k.apply(this,arguments);if(W&&!W(k,D,s,arguments))return;const m=ne[a];let P;m&&(P=m[b?ie:ce]);const S=P&&s[P];if(S)for(let j=0;j<S.length;j++){const F=S[j];if(ke(F,D))return S.splice(j,1),F.isRemoved=!0,0!==S.length||(F.allRemoved=!0,s[P]=null,b||"string"!=typeof a)||(s[ye+"ON_PROPERTY"+a]=null),F.zone.cancelTask(F),V?s:void 0}return k.apply(this,arguments)},g[_]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=[],b=nt(s,B?B(a):a);for(let D=0;D<b.length;D++){const m=b[D];f.push(m.originalDelegate?m.originalDelegate:m.callback)}return f},g[E]=function(){const s=this||t;let a=arguments[0];if(a){h&&h.transferEventName&&(a=h.transferEventName(a));const f=ne[a];if(f){const m=s[f[ce]],P=s[f[ie]];if(m){const S=m.slice();for(let j=0;j<S.length;j++){const F=S[j];this[l].call(this,a,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(P){const S=P.slice();for(let j=0;j<S.length;j++){const F=S[j];this[l].call(this,a,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const f=Object.keys(s);for(let b=0;b<f.length;b++){const m=Qe.exec(f[b]);let P=m&&m[1];P&&"removeListener"!==P&&this[E].call(this,P)}this[E].call(this,"removeListener")}if(V)return this},le(g[i],R),le(g[l],k),Q&&le(g[E],Q),O&&le(g[_],O),!0}let q=[];for(let v=0;v<c.length;v++)q[v]=oe(c[v],n);return q}function nt(t,r){if(!r){const l=[];for(let _ in t){const E=Qe.exec(_);let p=E&&E[1];if(p&&(!r||p===r)){const C=t[_];if(C)for(let T=0;T<C.length;T++)l.push(C[T])}}return l}let c=ne[r];c||(tt(r),c=ne[r]);const n=t[c[ce]],i=t[c[ie]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function mt(t,r){const c=t.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(i,l){i[et]=!0,n&&n.apply(i,l)})}const Ce=H("zoneTask");function Ee(t,r,c,n){let i=null,l=null;c+=n;const _={};function E(C){const T=C.data;return T.args[0]=function(){return C.invoke.apply(this,arguments)},T.handleId=i.apply(t,T.args),C}function p(C){return l.call(t,C.data.handleId)}i=ae(t,r+=n,C=>function(T,L){if("function"==typeof L[0]){const w={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?L[1]||0:void 0,args:L},A=L[0];L[0]=function(){try{return A.apply(this,arguments)}finally{w.isPeriodic||("number"==typeof w.handleId?delete _[w.handleId]:w.handleId&&(w.handleId[Ce]=null))}};const U=He(r,L[0],w,E,p);if(!U)return U;const x=U.data.handleId;return"number"==typeof x?_[x]=U:x&&(x[Ce]=U),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(U.ref=x.ref.bind(x),U.unref=x.unref.bind(x)),"number"==typeof x||x?x:U}return C.apply(t,L)}),l=ae(t,c,C=>function(T,L){const w=L[0];let A;"number"==typeof w?A=_[w]:(A=w&&w[Ce],A||(A=w)),A&&"string"==typeof A.type?"notScheduled"!==A.state&&(A.cancelFn&&A.data.isPeriodic||0===A.runCount)&&("number"==typeof w?delete _[w]:w&&(w[Ce]=null),A.zone.cancelTask(A)):C.apply(t,L)})}function rt(t,r,c){if(!c||0===c.length)return r;const n=c.filter(l=>l.target===t);if(!n||0===n.length)return r;const i=n[0].ignoreProperties;return r.filter(l=>-1===i.indexOf(l))}function ot(t,r,c,n){t&&$e(t,rt(t,r,c),n)}function Be(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function St(t,r,c,n,i){const l=Zone.__symbol__(n);if(r[l])return;const _=r[l]=r[n];r[n]=function(E,p,C){return p&&p.prototype&&i.forEach(function(T){const L=`${c}.${n}::`+T,w=p.prototype;try{if(w.hasOwnProperty(T)){const A=t.ObjectGetOwnPropertyDescriptor(w,T);A&&A.value?(A.value=t.wrapWithCurrentZone(A.value,L),t._redefineProperty(p.prototype,T,A)):w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],L))}else w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],L))}catch{}}),_.call(r,E,p,C)},t.attachOriginToPatched(r[n],_)}const st=function pe(){const t=globalThis,r=!0===t[J("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function ge(){const t=te.performance;function r(I){t&&t.mark&&t.mark(I)}function c(I,d){t&&t.measure&&t.measure(I,d)}r("Zone");let n=(()=>{class I{static#e=this.__symbol__=J;static assertZonePatched(){if(te.Promise!==M.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=I.current;for(;e.parent;)e=e.parent;return e}static get current(){return k.zone}static get currentTask(){return O}static __load_patch(e,o,y=!1){if(M.hasOwnProperty(e)){const N=!0===te[J("forceDuplicateZoneCheck")];if(!y&&N)throw Error("Already loaded patch: "+e)}else if(!te["__Zone_disable_"+e]){const N="Zone:"+e;r(N),M[e]=o(te,I,R),c(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,o){this._parent=e,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,o)}get(e){const o=this.getZoneWith(e);if(o)return o._properties[e]}getZoneWith(e){let o=this;for(;o;){if(o._properties.hasOwnProperty(e))return o;o=o._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,o){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const y=this._zoneDelegate.intercept(this,e,o),N=this;return function(){return N.runGuarded(y,this,arguments,o)}}run(e,o,y,N){k={parent:k,zone:this};try{return this._zoneDelegate.invoke(this,e,o,y,N)}finally{k=k.parent}}runGuarded(e,o=null,y,N){k={parent:k,zone:this};try{try{return this._zoneDelegate.invoke(this,e,o,y,N)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{k=k.parent}}runTask(e,o,y){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===q&&(e.type===B||e.type===g))return;const N=e.state!=G;N&&e._transitionTo(G,h),e.runCount++;const Y=O;O=e,k={parent:k,zone:this};try{e.type==g&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,o,y)}catch(Z){if(this._zoneDelegate.handleError(this,Z))throw Z}}finally{e.state!==q&&e.state!==X&&(e.type==B||e.data&&e.data.isPeriodic?N&&e._transitionTo(h,G):(e.runCount=0,this._updateTaskCount(e,-1),N&&e._transitionTo(q,G,q))),k=k.parent,O=Y}}scheduleTask(e){if(e.zone&&e.zone!==this){let y=this;for(;y;){if(y===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);y=y.parent}}e._transitionTo(v,q);const o=[];e._zoneDelegates=o,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(y){throw e._transitionTo(X,v,q),this._zoneDelegate.handleError(this,y),y}return e._zoneDelegates===o&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,o,y,N){return this.scheduleTask(new _(V,e,o,y,N,void 0))}scheduleMacroTask(e,o,y,N,Y){return this.scheduleTask(new _(g,e,o,y,N,Y))}scheduleEventTask(e,o,y,N,Y){return this.scheduleTask(new _(B,e,o,y,N,Y))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===h||e.state===G){e._transitionTo(W,h,G);try{this._zoneDelegate.cancelTask(this,e)}catch(o){throw e._transitionTo(X,W),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(e,-1),e._transitionTo(q,W),e.runCount=0,e}}_updateTaskCount(e,o){const y=e._zoneDelegates;-1==o&&(e._zoneDelegates=null);for(let N=0;N<y.length;N++)y[N]._updateTaskCount(e.type,o)}}return I})();const i={name:"",onHasTask:(I,d,e,o)=>I.hasTask(e,o),onScheduleTask:(I,d,e,o)=>I.scheduleTask(e,o),onInvokeTask:(I,d,e,o,y,N)=>I.invokeTask(e,o,y,N),onCancelTask:(I,d,e,o)=>I.cancelTask(e,o)};class l{get zone(){return this._zone}constructor(d,e,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=d,this._parentDelegate=e,this._forkZS=o&&(o&&o.onFork?o:e._forkZS),this._forkDlgt=o&&(o.onFork?e:e._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:e._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:e._interceptZS),this._interceptDlgt=o&&(o.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:e._invokeZS),this._invokeDlgt=o&&(o.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:e._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:e._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:e._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:e._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const y=o&&o.onHasTask;(y||e&&e._hasTaskZS)&&(this._hasTaskZS=y?o:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(d,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,e):new n(d,e)}intercept(d,e,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,e,o):e}invoke(d,e,o,y,N){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,e,o,y,N):e.apply(o,y)}handleError(d,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,e)}scheduleTask(d,e){let o=e;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,e),o||(o=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=V)throw new Error("Task is missing scheduleFn.");U(e)}return o}invokeTask(d,e,o,y){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,e,o,y):e.callback.apply(o,y)}cancelTask(d,e){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");o=e.cancelFn(e)}return o}hasTask(d,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,e)}catch(o){this.handleError(d,o)}}_updateTaskCount(d,e){const o=this._taskCounts,y=o[d],N=o[d]=y+e;if(N<0)throw new Error("More tasks executed then were scheduled.");0!=y&&0!=N||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:d})}}class _{constructor(d,e,o,y,N,Y){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=e,this.data=y,this.scheduleFn=N,this.cancelFn=Y,!o)throw new Error("callback is not defined");this.callback=o;const Z=this;this.invoke=d===B&&y&&y.useG?_.invokeTask:function(){return _.invokeTask.call(te,Z,this,arguments)}}static invokeTask(d,e,o){d||(d=this),Q++;try{return d.runCount++,d.zone.runTask(d,e,o)}finally{1==Q&&x(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,v)}_transitionTo(d,e,o){if(this._state!==e&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${e}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=d,d==q&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const E=J("setTimeout"),p=J("Promise"),C=J("then");let w,T=[],L=!1;function A(I){if(w||te[p]&&(w=te[p].resolve(0)),w){let d=w[C];d||(d=w.then),d.call(w,I)}else te[E](I,0)}function U(I){0===Q&&0===T.length&&A(x),I&&T.push(I)}function x(){if(!L){for(L=!0;T.length;){const I=T;T=[];for(let d=0;d<I.length;d++){const e=I[d];try{e.zone.runTask(e,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),L=!1}}const oe={name:"NO ZONE"},q="notScheduled",v="scheduling",h="scheduled",G="running",W="canceling",X="unknown",V="microTask",g="macroTask",B="eventTask",M={},R={symbol:J,currentZoneFrame:()=>k,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:U,showUncaughtError:()=>!n[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:A};let k={parent:null,zone:new n(null,null)},O=null,Q=0;function z(){}return c("Zone","Zone"),n}(),t.Zone}();(function Nt(t){(function Ct(t){t.__load_patch("ZoneAwarePromise",(r,c,n)=>{const i=Object.getOwnPropertyDescriptor,l=Object.defineProperty,E=n.symbol,p=[],C=!1!==r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=E("Promise"),L=E("then"),w="__creationTrace__";n.onUnhandledError=u=>{if(n.showUncaughtError()){const s=u&&u.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(u)}},n.microtaskDrainDone=()=>{for(;p.length;){const u=p.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(s){U(s)}}};const A=E("unhandledPromiseRejectionHandler");function U(u){n.onUnhandledError(u);try{const s=c[A];"function"==typeof s&&s.call(this,u)}catch{}}function x(u){return u&&u.then}function oe(u){return u}function q(u){return Z.reject(u)}const v=E("state"),h=E("value"),G=E("finally"),W=E("parentPromiseValue"),X=E("parentPromiseState"),V="Promise.then",g=null,B=!0,M=!1,R=0;function k(u,s){return a=>{try{I(u,s,a)}catch(f){I(u,!1,f)}}}const O=function(){let u=!1;return function(a){return function(){u||(u=!0,a.apply(null,arguments))}}},Q="Promise resolved with itself",z=E("currentTaskTrace");function I(u,s,a){const f=O();if(u===a)throw new TypeError(Q);if(u[v]===g){let b=null;try{("object"==typeof a||"function"==typeof a)&&(b=a&&a.then)}catch(D){return f(()=>{I(u,!1,D)})(),u}if(s!==M&&a instanceof Z&&a.hasOwnProperty(v)&&a.hasOwnProperty(h)&&a[v]!==g)e(a),I(u,a[v],a[h]);else if(s!==M&&"function"==typeof b)try{b.call(a,f(k(u,s)),f(k(u,!1)))}catch(D){f(()=>{I(u,!1,D)})()}else{u[v]=s;const D=u[h];if(u[h]=a,u[G]===G&&s===B&&(u[v]=u[X],u[h]=u[W]),s===M&&a instanceof Error){const m=c.currentTask&&c.currentTask.data&&c.currentTask.data[w];m&&l(a,z,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<D.length;)o(u,D[m++],D[m++],D[m++],D[m++]);if(0==D.length&&s==M){u[v]=R;let m=a;try{throw new Error("Uncaught (in promise): "+function _(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(P){m=P}C&&(m.throwOriginal=!0),m.rejection=a,m.promise=u,m.zone=c.current,m.task=c.currentTask,p.push(m),n.scheduleMicroTask()}}}return u}const d=E("rejectionHandledHandler");function e(u){if(u[v]===R){try{const s=c[d];s&&"function"==typeof s&&s.call(this,{rejection:u[h],promise:u})}catch{}u[v]=M;for(let s=0;s<p.length;s++)u===p[s].promise&&p.splice(s,1)}}function o(u,s,a,f,b){e(u);const D=u[v],m=D?"function"==typeof f?f:oe:"function"==typeof b?b:q;s.scheduleMicroTask(V,()=>{try{const P=u[h],S=!!a&&G===a[G];S&&(a[W]=P,a[X]=D);const j=s.run(m,void 0,S&&m!==q&&m!==oe?[]:[P]);I(a,!0,j)}catch(P){I(a,!1,P)}},a)}const N=function(){},Y=r.AggregateError;class Z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return s instanceof Z?s:I(new this(null),B,s)}static reject(s){return I(new this(null),M,s)}static withResolvers(){const s={};return s.promise=new Z((a,f)=>{s.resolve=a,s.reject=f}),s}static any(s){if(!s||"function"!=typeof s[Symbol.iterator])return Promise.reject(new Y([],"All promises were rejected"));const a=[];let f=0;try{for(let m of s)f++,a.push(Z.resolve(m))}catch{return Promise.reject(new Y([],"All promises were rejected"))}if(0===f)return Promise.reject(new Y([],"All promises were rejected"));let b=!1;const D=[];return new Z((m,P)=>{for(let S=0;S<a.length;S++)a[S].then(j=>{b||(b=!0,m(j))},j=>{D.push(j),f--,0===f&&(b=!0,P(new Y(D,"All promises were rejected")))})})}static race(s){let a,f,b=new this((P,S)=>{a=P,f=S});function D(P){a(P)}function m(P){f(P)}for(let P of s)x(P)||(P=this.resolve(P)),P.then(D,m);return b}static all(s){return Z.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(s,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(s,a){let f,b,D=new this((j,F)=>{f=j,b=F}),m=2,P=0;const S=[];for(let j of s){x(j)||(j=this.resolve(j));const F=P;try{j.then(K=>{S[F]=a?a.thenCallback(K):K,m--,0===m&&f(S)},K=>{a?(S[F]=a.errorCallback(K),m--,0===m&&f(S)):b(K)})}catch(K){b(K)}m++,P++}return m-=2,0===m&&f(S),D}constructor(s){const a=this;if(!(a instanceof Z))throw new Error("Must be an instanceof Promise.");a[v]=g,a[h]=[];try{const f=O();s&&s(f(k(a,B)),f(k(a,M)))}catch(f){I(a,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Z}then(s,a){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||Z);const b=new f(N),D=c.current;return this[v]==g?this[h].push(D,b,s,a):o(this,D,b,s,a),b}catch(s){return this.then(null,s)}finally(s){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=Z);const f=new a(N);f[G]=G;const b=c.current;return this[v]==g?this[h].push(b,f,s,s):o(this,b,f,s,s),f}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;const De=r[T]=r.Promise;r.Promise=Z;const ke=E("thenPatched");function ue(u){const s=u.prototype,a=i(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const f=s.then;s[L]=f,u.prototype.then=function(b,D){return new Z((P,S)=>{f.call(this,P,S)}).then(b,D)},u[ke]=!0}return n.patchThen=ue,De&&(ue(De),ae(r,"fetch",u=>function Se(u){return function(s,a){let f=u.apply(s,a);if(f instanceof Z)return f;let b=f.constructor;return b[ke]||ue(b),f}}(u))),Promise[c.__symbol__("uncaughtPromiseErrors")]=p,Z})})(t),function Dt(t){t.__load_patch("toString",r=>{const c=Function.prototype.toString,n=H("OriginalDelegate"),i=H("Promise"),l=H("Error"),_=function(){if("function"==typeof this){const T=this[n];if(T)return"function"==typeof T?c.call(T):Object.prototype.toString.call(T);if(this===Promise){const L=r[i];if(L)return c.call(L)}if(this===Error){const L=r[l];if(L)return c.call(L)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}})}(t),function Ot(t){t.__load_patch("util",(r,c,n)=>{const i=Be(r);n.patchOnProperties=$e,n.patchMethod=ae,n.bindArguments=xe,n.patchMacroTask=Et;const l=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");r[_]&&(r[l]=r[_]),r[l]&&(c[l]=c[_]=r[l]),n.patchEventPrototype=mt,n.patchEventTarget=yt,n.isIEOrEdge=gt,n.ObjectDefineProperty=Ne,n.ObjectGetOwnPropertyDescriptor=he,n.ObjectCreate=ft,n.ArraySlice=ht,n.patchClass=me,n.wrapWithCurrentZone=Ae,n.filterProperties=rt,n.attachOriginToPatched=le,n._redefineProperty=Object.defineProperty,n.patchCallbacks=St,n.getGlobalObjects=()=>({globalSources:Je,zoneSymbolEventNames:ne,eventNames:i,isBrowser:Ge,isMix:qe,isNode:we,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:ye,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Le})})}(t)})(st),function Rt(t){t.__load_patch("legacy",r=>{const c=r[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",r=>{const c="set",n="clear";Ee(r,c,n,"Timeout"),Ee(r,c,n,"Interval"),Ee(r,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{Ee(r,"request","cancel","AnimationFrame"),Ee(r,"mozRequest","mozCancel","AnimationFrame"),Ee(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,c)=>{const n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++)ae(r,n[i],(_,E,p)=>function(C,T){return c.current.run(_,r,T,p)})}),t.__load_patch("EventTarget",(r,c,n)=>{(function Pt(t,r){r.patchEventPrototype(t,r)})(r,n),function bt(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=r.getGlobalObjects();for(let p=0;p<c.length;p++){const C=c[p],w=_+(C+l),A=_+(C+i);n[C]={},n[C][l]=w,n[C][i]=A}const E=t.EventTarget;E&&E.prototype&&r.patchEventTarget(t,r,[E&&E.prototype])}(r,n);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,c,n)=>{me("MutationObserver"),me("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,c,n)=>{me("IntersectionObserver")}),t.__load_patch("FileReader",(r,c,n)=>{me("FileReader")}),t.__load_patch("on_property",(r,c,n)=>{!function wt(t,r){if(we&&!qe||Zone[t.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let n=[];if(Ge){const i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function Tt(){try{const t=de.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];ot(i,Be(i),c&&c.concat(l),Ie(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){const l=r[n[i]];l&&l.prototype&&ot(l.prototype,Be(l.prototype),c)}}(n,r)}),t.__load_patch("customElements",(r,c,n)=>{!function vt(t,r){const{isBrowser:c,isMix:n}=r.getGlobalObjects();(c||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,c)=>{!function C(T){const L=T.XMLHttpRequest;if(!L)return;const w=L.prototype;let U=w[Ze],x=w[je];if(!U){const R=T.XMLHttpRequestEventTarget;if(R){const k=R.prototype;U=k[Ze],x=k[je]}}const oe="readystatechange",q="scheduled";function v(R){const k=R.data,O=k.target;O[_]=!1,O[p]=!1;const Q=O[l];U||(U=O[Ze],x=O[je]),Q&&x.call(O,oe,Q);const z=O[l]=()=>{if(O.readyState===O.DONE)if(!k.aborted&&O[_]&&R.state===q){const d=O[c.__symbol__("loadfalse")];if(0!==O.status&&d&&d.length>0){const e=R.invoke;R.invoke=function(){const o=O[c.__symbol__("loadfalse")];for(let y=0;y<o.length;y++)o[y]===R&&o.splice(y,1);!k.aborted&&R.state===q&&e.call(R)},d.push(R)}else R.invoke()}else!k.aborted&&!1===O[_]&&(O[p]=!0)};return U.call(O,oe,z),O[n]||(O[n]=R),B.apply(O,k.args),O[_]=!0,R}function h(){}function G(R){const k=R.data;return k.aborted=!0,M.apply(k.target,k.args)}const W=ae(w,"open",()=>function(R,k){return R[i]=0==k[2],R[E]=k[1],W.apply(R,k)}),V=H("fetchTaskAborting"),g=H("fetchTaskScheduling"),B=ae(w,"send",()=>function(R,k){if(!0===c.current[g]||R[i])return B.apply(R,k);{const O={target:R,url:R[E],isPeriodic:!1,args:k,aborted:!1},Q=He("XMLHttpRequest.send",h,O,v,G);R&&!0===R[p]&&!O.aborted&&Q.state===q&&Q.invoke()}}),M=ae(w,"abort",()=>function(R,k){const O=function A(R){return R[n]}(R);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===c.current[V])return M.apply(R,k)})}(r);const n=H("xhrTask"),i=H("xhrSync"),l=H("xhrListener"),_=H("xhrScheduled"),E=H("xhrURL"),p=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function _t(t,r){const c=t.constructor.name;for(let n=0;n<r.length;n++){const i=r[n],l=t[i];if(l){if(!We(he(t,i)))continue;t[i]=(E=>{const p=function(){return E.apply(this,xe(arguments,c+"."+i))};return le(p,E),p})(l)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,c)=>{function n(i){return function(l){nt(r,i).forEach(E=>{const p=r.PromiseRejectionEvent;if(p){const C=new p(i,{promise:l.promise,reason:l.rejection});E.invoke(C)}})}}r.PromiseRejectionEvent&&(c[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,c,n)=>{!function kt(t,r){r.patchMethod(t,"queueMicrotask",c=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,n)})}(st)}},te=>{te(te.s=50)}]);