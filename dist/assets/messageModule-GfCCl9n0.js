const lr=()=>{};var Pi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=function(s){const e=[];let i=0;for(let o=0;o<s.length;o++){let h=s.charCodeAt(o);h<128?e[i++]=h:h<2048?(e[i++]=h>>6|192,e[i++]=h&63|128):(h&64512)===55296&&o+1<s.length&&(s.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(s.charCodeAt(++o)&1023),e[i++]=h>>18|240,e[i++]=h>>12&63|128,e[i++]=h>>6&63|128,e[i++]=h&63|128):(e[i++]=h>>12|224,e[i++]=h>>6&63|128,e[i++]=h&63|128)}return e},ur=function(s){const e=[];let i=0,o=0;for(;i<s.length;){const h=s[i++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const p=s[i++];e[o++]=String.fromCharCode((h&31)<<6|p&63)}else if(h>239&&h<365){const p=s[i++],_=s[i++],E=s[i++],A=((h&7)<<18|(p&63)<<12|(_&63)<<6|E&63)-65536;e[o++]=String.fromCharCode(55296+(A>>10)),e[o++]=String.fromCharCode(56320+(A&1023))}else{const p=s[i++],_=s[i++];e[o++]=String.fromCharCode((h&15)<<12|(p&63)<<6|_&63)}}return e.join("")},as={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<s.length;h+=3){const p=s[h],_=h+1<s.length,E=_?s[h+1]:0,A=h+2<s.length,S=A?s[h+2]:0,F=p>>2,x=(p&3)<<4|E>>4;let I=(E&15)<<2|S>>6,B=S&63;A||(B=64,_||(I=64)),o.push(i[F],i[x],i[I],i[B])}return o.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(os(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):ur(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<s.length;){const p=i[s.charAt(h++)],E=h<s.length?i[s.charAt(h)]:0;++h;const S=h<s.length?i[s.charAt(h)]:64;++h;const x=h<s.length?i[s.charAt(h)]:64;if(++h,p==null||E==null||S==null||x==null)throw new cr;const I=p<<2|E>>4;if(o.push(I),S!==64){const B=E<<4&240|S>>2;if(o.push(B),x!==64){const R=S<<6&192|x;o.push(R)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class cr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fr=function(s){const e=os(s);return as.encodeByteArray(e,!0)},Pe=function(s){return fr(s).replace(/\./g,"")},dr=function(s){try{return as.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=()=>pr().__FIREBASE_DEFAULTS__,mr=()=>{if(typeof process>"u"||typeof Pi>"u")return;const s=Pi.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},yr=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&dr(s[1]);return e&&JSON.parse(e)},hs=()=>{try{return lr()||gr()||mr()||yr()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},vr=s=>{var e,i;return(i=(e=hs())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[s]},_r=s=>{const e=vr(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),o]:[e.substring(0,i),o]},ls=()=>{var s;return(s=hs())===null||s===void 0?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wr(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},o=e||"demo-project",h=s.iat||0,p=s.sub||s.user_id;if(!p)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const _=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:h,exp:h+3600,auth_time:h,sub:p,user_id:p,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Pe(JSON.stringify(i)),Pe(JSON.stringify(_)),""].join(".")}const ee={};function Ar(){const s={prod:[],emulator:[]};for(const e of Object.keys(ee))ee[e]?s.emulator.push(e):s.prod.push(e);return s}function Sr(s){let e=document.getElementById(s),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),i=!0),{created:i,element:e}}let Ni=!1;function Tr(s,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||ee[s]===e||ee[s]||Ni)return;ee[s]=e;function i(I){return`__firebase__banner__${I}`}const o="__firebase__banner",p=Ar().prod.length>0;function _(){const I=document.getElementById(o);I&&I.remove()}function E(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function A(I,B){I.setAttribute("width","24"),I.setAttribute("id",B),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function S(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ni=!0,_()},I}function F(I,B){I.setAttribute("id",B),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function x(){const I=Sr(o),B=i("text"),R=document.getElementById(B)||document.createElement("span"),V=i("learnmore"),k=document.getElementById(V)||document.createElement("a"),at=i("preprendIcon"),q=document.getElementById(at)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const H=I.element;E(H),F(k,V);const nt=S();A(q,at),H.append(q,R,k,nt),document.body.appendChild(H)}p?(R.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}function br(){try{return typeof indexedDB=="object"}catch{return!1}}function Cr(){return new Promise((s,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),i||self.indexedDB.deleteDatabase(o),s(!0)},h.onupgradeneeded=()=>{i=!1},h.onerror=()=>{var p;e(((p=h.error)===null||p===void 0?void 0:p.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="FirebaseError";class Mt extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=Dr,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},h=`${this.service}/${e}`,p=this.errors[e],_=p?Rr(p,o):"Error",E=`${this.serviceName}: ${_} (${h}).`;return new Mt(h,E,o)}}function Rr(s,e){return s.replace(Pr,(i,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const Pr=/\{\$([^}]+)}/g;function Ne(s,e){if(s===e)return!0;const i=Object.keys(s),o=Object.keys(e);for(const h of i){if(!o.includes(h))return!1;const p=s[h],_=e[h];if(Oi(p)&&Oi(_)){if(!Ne(p,_))return!1}else if(p!==_)return!1}for(const h of o)if(!i.includes(h))return!1;return!0}function Oi(s){return s!==null&&typeof s=="object"}class re{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const o=new Er;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:i});h&&o.resolve(h)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const o=this.normalizeInstanceIdentifier(e?.identifier),h=(i=e?.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(p){if(h)return null;throw p}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lr(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(i);try{const p=this.getOrInitializeService({instanceIdentifier:h});o.resolve(p)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[p,_]of this.instancesDeferred.entries()){const E=this.normalizeInstanceIdentifier(p);o===E&&_.resolve(h)}return h}onInit(e,i){var o;const h=this.normalizeInstanceIdentifier(i),p=(o=this.onInitCallbacks.get(h))!==null&&o!==void 0?o:new Set;p.add(e),this.onInitCallbacks.set(h,p);const _=this.instances.get(h);return _&&e(_,h),()=>{p.delete(e)}}invokeOnInitCallbacks(e,i){const o=this.onInitCallbacks.get(i);if(o)for(const h of o)try{h(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Or(e),options:i}),this.instances.set(e,o),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Or(s){return s===It?void 0:s}function Lr(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Nr(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(N||(N={}));const xr={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Mr=N.INFO,jr={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Br=(s,e,...i)=>{if(e<s.logLevel)return;const o=new Date().toISOString(),h=jr[e];if(h)console[h](`[${o}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fs{constructor(e){this.name=e,this._logLevel=Mr,this._logHandler=Br,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Vr=(s,e)=>e.some(i=>s instanceof i);let Li,ki;function Fr(){return Li||(Li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ur(){return ki||(ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ds=new WeakMap,En=new WeakMap,ps=new WeakMap,fn=new WeakMap,bn=new WeakMap;function Hr(s){const e=new Promise((i,o)=>{const h=()=>{s.removeEventListener("success",p),s.removeEventListener("error",_)},p=()=>{i(yt(s.result)),h()},_=()=>{o(s.error),h()};s.addEventListener("success",p),s.addEventListener("error",_)});return e.then(i=>{i instanceof IDBCursor&&ds.set(i,s)}).catch(()=>{}),bn.set(e,s),e}function $r(s){if(En.has(s))return;const e=new Promise((i,o)=>{const h=()=>{s.removeEventListener("complete",p),s.removeEventListener("error",_),s.removeEventListener("abort",_)},p=()=>{i(),h()},_=()=>{o(s.error||new DOMException("AbortError","AbortError")),h()};s.addEventListener("complete",p),s.addEventListener("error",_),s.addEventListener("abort",_)});En.set(s,e)}let wn={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return En.get(s);if(e==="objectStoreNames")return s.objectStoreNames||ps.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return yt(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Wr(s){wn=s(wn)}function Gr(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=s.call(dn(this),e,...i);return ps.set(o,e.sort?e.sort():[e]),yt(o)}:Ur().includes(s)?function(...e){return s.apply(dn(this),e),yt(ds.get(this))}:function(...e){return yt(s.apply(dn(this),e))}}function zr(s){return typeof s=="function"?Gr(s):(s instanceof IDBTransaction&&$r(s),Vr(s,Fr())?new Proxy(s,wn):s)}function yt(s){if(s instanceof IDBRequest)return Hr(s);if(fn.has(s))return fn.get(s);const e=zr(s);return e!==s&&(fn.set(s,e),bn.set(e,s)),e}const dn=s=>bn.get(s);function qr(s,e,{blocked:i,upgrade:o,blocking:h,terminated:p}={}){const _=indexedDB.open(s,e),E=yt(_);return o&&_.addEventListener("upgradeneeded",A=>{o(yt(_.result),A.oldVersion,A.newVersion,yt(_.transaction),A)}),i&&_.addEventListener("blocked",A=>i(A.oldVersion,A.newVersion,A)),E.then(A=>{p&&A.addEventListener("close",()=>p()),h&&A.addEventListener("versionchange",S=>h(S.oldVersion,S.newVersion,S))}).catch(()=>{}),E}const Jr=["get","getKey","getAll","getAllKeys","count"],Xr=["put","add","delete","clear"],pn=new Map;function xi(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(pn.get(e))return pn.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,h=Xr.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(h||Jr.includes(i)))return;const p=async function(_,...E){const A=this.transaction(_,h?"readwrite":"readonly");let S=A.store;return o&&(S=S.index(E.shift())),(await Promise.all([S[i](...E),h&&A.done]))[0]};return pn.set(e,p),p}Wr(s=>({...s,get:(e,i,o)=>xi(e,i)||s.get(e,i,o),has:(e,i)=>!!xi(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Yr(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function Yr(s){const e=s.getComponent();return e?.type==="VERSION"}const In="@firebase/app",Mi="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new fs("@firebase/app"),Zr="@firebase/app-compat",Qr="@firebase/analytics-compat",to="@firebase/analytics",eo="@firebase/app-check-compat",no="@firebase/app-check",io="@firebase/auth",so="@firebase/auth-compat",ro="@firebase/database",oo="@firebase/data-connect",ao="@firebase/database-compat",ho="@firebase/functions",lo="@firebase/functions-compat",uo="@firebase/installations",co="@firebase/installations-compat",fo="@firebase/messaging",po="@firebase/messaging-compat",go="@firebase/performance",mo="@firebase/performance-compat",yo="@firebase/remote-config",vo="@firebase/remote-config-compat",_o="@firebase/storage",Eo="@firebase/storage-compat",wo="@firebase/firestore",Io="@firebase/ai",Ao="@firebase/firestore-compat",So="firebase",To="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]",bo={[In]:"fire-core",[Zr]:"fire-core-compat",[to]:"fire-analytics",[Qr]:"fire-analytics-compat",[no]:"fire-app-check",[eo]:"fire-app-check-compat",[io]:"fire-auth",[so]:"fire-auth-compat",[ro]:"fire-rtdb",[oo]:"fire-data-connect",[ao]:"fire-rtdb-compat",[ho]:"fire-fn",[lo]:"fire-fn-compat",[uo]:"fire-iid",[co]:"fire-iid-compat",[fo]:"fire-fcm",[po]:"fire-fcm-compat",[go]:"fire-perf",[mo]:"fire-perf-compat",[yo]:"fire-rc",[vo]:"fire-rc-compat",[_o]:"fire-gcs",[Eo]:"fire-gcs-compat",[wo]:"fire-fst",[Ao]:"fire-fst-compat",[Io]:"fire-vertex","fire-js":"fire-js",[So]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Map,Co=new Map,Sn=new Map;function ji(s,e){try{s.container.addComponent(e)}catch(i){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function Le(s){const e=s.name;if(Sn.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Sn.set(e,s);for(const i of Oe.values())ji(i,s);for(const i of Co.values())ji(i,s);return!0}function Do(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function Ro(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new cs("app","Firebase",Po);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,i,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=To;function gs(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const o=Object.assign({name:An,automaticDataCollectionEnabled:!0},e),h=o.name;if(typeof h!="string"||!h)throw vt.create("bad-app-name",{appName:String(h)});if(i||(i=ls()),!i)throw vt.create("no-options");const p=Oe.get(h);if(p){if(Ne(i,p.options)&&Ne(o,p.config))return p;throw vt.create("duplicate-app",{appName:h})}const _=new kr(h);for(const A of Sn.values())_.addComponent(A);const E=new No(i,o,_);return Oe.set(h,E),E}function Lo(s=An){const e=Oe.get(s);if(!e&&s===An&&ls())return gs();if(!e)throw vt.create("no-app",{appName:s});return e}function Lt(s,e,i){var o;let h=(o=bo[s])!==null&&o!==void 0?o:s;i&&(h+=`-${i}`);const p=h.match(/\s|\//),_=e.match(/\s|\//);if(p||_){const E=[`Unable to register library "${h}" with version "${e}":`];p&&E.push(`library name "${h}" contains illegal characters (whitespace or "/")`),p&&_&&E.push("and"),_&&E.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(E.join(" "));return}Le(new re(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="firebase-heartbeat-database",xo=1,oe="firebase-heartbeat-store";let gn=null;function ms(){return gn||(gn=qr(ko,xo,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(oe)}catch(i){console.warn(i)}}}}).catch(s=>{throw vt.create("idb-open",{originalErrorMessage:s.message})})),gn}async function Mo(s){try{const i=(await ms()).transaction(oe),o=await i.objectStore(oe).get(ys(s));return await i.done,o}catch(e){if(e instanceof Mt)ft.warn(e.message);else{const i=vt.create("idb-get",{originalErrorMessage:e?.message});ft.warn(i.message)}}}async function Bi(s,e){try{const o=(await ms()).transaction(oe,"readwrite");await o.objectStore(oe).put(e,ys(s)),await o.done}catch(i){if(i instanceof Mt)ft.warn(i.message);else{const o=vt.create("idb-set",{originalErrorMessage:i?.message});ft.warn(o.message)}}}function ys(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=1024,Bo=30;class Vo{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Uo(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,i;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),p=Vi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===p||this._heartbeatsCache.heartbeats.some(_=>_.date===p))return;if(this._heartbeatsCache.heartbeats.push({date:p,agent:h}),this._heartbeatsCache.heartbeats.length>Bo){const _=Ho(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(_,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ft.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Vi(),{heartbeatsToSend:o,unsentEntries:h}=Fo(this._heartbeatsCache.heartbeats),p=Pe(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=i,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),p}catch(i){return ft.warn(i),""}}}function Vi(){return new Date().toISOString().substring(0,10)}function Fo(s,e=jo){const i=[];let o=s.slice();for(const h of s){const p=i.find(_=>_.agent===h.agent);if(p){if(p.dates.push(h.date),Fi(i)>e){p.dates.pop();break}}else if(i.push({agent:h.agent,dates:[h.date]}),Fi(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class Uo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return br()?Cr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Mo(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const h=await this.read();return Bi(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const h=await this.read();return Bi(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function Fi(s){return Pe(JSON.stringify({version:2,heartbeats:s})).length}function Ho(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let o=1;o<s.length;o++)s[o].date<i&&(i=s[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(s){Le(new re("platform-logger",e=>new Kr(e),"PRIVATE")),Le(new re("heartbeat",e=>new Vo(e),"PRIVATE")),Lt(In,Mi,s),Lt(In,Mi,"esm2017"),Lt("fire-js","")}$o("");var Wo="firebase",Go="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(Wo,Go,"app");var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function c(){}c.prototype=l.prototype,g.D=l.prototype,g.prototype=new c,g.prototype.constructor=g,g.C=function(f,d,y){for(var u=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)u[ht-2]=arguments[ht];return l.prototype[d].apply(f,u)}}function i(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,i),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(g,l,c){c||(c=0);var f=Array(16);if(typeof l=="string")for(var d=0;16>d;++d)f[d]=l.charCodeAt(c++)|l.charCodeAt(c++)<<8|l.charCodeAt(c++)<<16|l.charCodeAt(c++)<<24;else for(d=0;16>d;++d)f[d]=l[c++]|l[c++]<<8|l[c++]<<16|l[c++]<<24;l=g.g[0],c=g.g[1],d=g.g[2];var y=g.g[3],u=l+(y^c&(d^y))+f[0]+3614090360&4294967295;l=c+(u<<7&4294967295|u>>>25),u=y+(d^l&(c^d))+f[1]+3905402710&4294967295,y=l+(u<<12&4294967295|u>>>20),u=d+(c^y&(l^c))+f[2]+606105819&4294967295,d=y+(u<<17&4294967295|u>>>15),u=c+(l^d&(y^l))+f[3]+3250441966&4294967295,c=d+(u<<22&4294967295|u>>>10),u=l+(y^c&(d^y))+f[4]+4118548399&4294967295,l=c+(u<<7&4294967295|u>>>25),u=y+(d^l&(c^d))+f[5]+1200080426&4294967295,y=l+(u<<12&4294967295|u>>>20),u=d+(c^y&(l^c))+f[6]+2821735955&4294967295,d=y+(u<<17&4294967295|u>>>15),u=c+(l^d&(y^l))+f[7]+4249261313&4294967295,c=d+(u<<22&4294967295|u>>>10),u=l+(y^c&(d^y))+f[8]+1770035416&4294967295,l=c+(u<<7&4294967295|u>>>25),u=y+(d^l&(c^d))+f[9]+2336552879&4294967295,y=l+(u<<12&4294967295|u>>>20),u=d+(c^y&(l^c))+f[10]+4294925233&4294967295,d=y+(u<<17&4294967295|u>>>15),u=c+(l^d&(y^l))+f[11]+2304563134&4294967295,c=d+(u<<22&4294967295|u>>>10),u=l+(y^c&(d^y))+f[12]+1804603682&4294967295,l=c+(u<<7&4294967295|u>>>25),u=y+(d^l&(c^d))+f[13]+4254626195&4294967295,y=l+(u<<12&4294967295|u>>>20),u=d+(c^y&(l^c))+f[14]+2792965006&4294967295,d=y+(u<<17&4294967295|u>>>15),u=c+(l^d&(y^l))+f[15]+1236535329&4294967295,c=d+(u<<22&4294967295|u>>>10),u=l+(d^y&(c^d))+f[1]+4129170786&4294967295,l=c+(u<<5&4294967295|u>>>27),u=y+(c^d&(l^c))+f[6]+3225465664&4294967295,y=l+(u<<9&4294967295|u>>>23),u=d+(l^c&(y^l))+f[11]+643717713&4294967295,d=y+(u<<14&4294967295|u>>>18),u=c+(y^l&(d^y))+f[0]+3921069994&4294967295,c=d+(u<<20&4294967295|u>>>12),u=l+(d^y&(c^d))+f[5]+3593408605&4294967295,l=c+(u<<5&4294967295|u>>>27),u=y+(c^d&(l^c))+f[10]+38016083&4294967295,y=l+(u<<9&4294967295|u>>>23),u=d+(l^c&(y^l))+f[15]+3634488961&4294967295,d=y+(u<<14&4294967295|u>>>18),u=c+(y^l&(d^y))+f[4]+3889429448&4294967295,c=d+(u<<20&4294967295|u>>>12),u=l+(d^y&(c^d))+f[9]+568446438&4294967295,l=c+(u<<5&4294967295|u>>>27),u=y+(c^d&(l^c))+f[14]+3275163606&4294967295,y=l+(u<<9&4294967295|u>>>23),u=d+(l^c&(y^l))+f[3]+4107603335&4294967295,d=y+(u<<14&4294967295|u>>>18),u=c+(y^l&(d^y))+f[8]+1163531501&4294967295,c=d+(u<<20&4294967295|u>>>12),u=l+(d^y&(c^d))+f[13]+2850285829&4294967295,l=c+(u<<5&4294967295|u>>>27),u=y+(c^d&(l^c))+f[2]+4243563512&4294967295,y=l+(u<<9&4294967295|u>>>23),u=d+(l^c&(y^l))+f[7]+1735328473&4294967295,d=y+(u<<14&4294967295|u>>>18),u=c+(y^l&(d^y))+f[12]+2368359562&4294967295,c=d+(u<<20&4294967295|u>>>12),u=l+(c^d^y)+f[5]+4294588738&4294967295,l=c+(u<<4&4294967295|u>>>28),u=y+(l^c^d)+f[8]+2272392833&4294967295,y=l+(u<<11&4294967295|u>>>21),u=d+(y^l^c)+f[11]+1839030562&4294967295,d=y+(u<<16&4294967295|u>>>16),u=c+(d^y^l)+f[14]+4259657740&4294967295,c=d+(u<<23&4294967295|u>>>9),u=l+(c^d^y)+f[1]+2763975236&4294967295,l=c+(u<<4&4294967295|u>>>28),u=y+(l^c^d)+f[4]+1272893353&4294967295,y=l+(u<<11&4294967295|u>>>21),u=d+(y^l^c)+f[7]+4139469664&4294967295,d=y+(u<<16&4294967295|u>>>16),u=c+(d^y^l)+f[10]+3200236656&4294967295,c=d+(u<<23&4294967295|u>>>9),u=l+(c^d^y)+f[13]+681279174&4294967295,l=c+(u<<4&4294967295|u>>>28),u=y+(l^c^d)+f[0]+3936430074&4294967295,y=l+(u<<11&4294967295|u>>>21),u=d+(y^l^c)+f[3]+3572445317&4294967295,d=y+(u<<16&4294967295|u>>>16),u=c+(d^y^l)+f[6]+76029189&4294967295,c=d+(u<<23&4294967295|u>>>9),u=l+(c^d^y)+f[9]+3654602809&4294967295,l=c+(u<<4&4294967295|u>>>28),u=y+(l^c^d)+f[12]+3873151461&4294967295,y=l+(u<<11&4294967295|u>>>21),u=d+(y^l^c)+f[15]+530742520&4294967295,d=y+(u<<16&4294967295|u>>>16),u=c+(d^y^l)+f[2]+3299628645&4294967295,c=d+(u<<23&4294967295|u>>>9),u=l+(d^(c|~y))+f[0]+4096336452&4294967295,l=c+(u<<6&4294967295|u>>>26),u=y+(c^(l|~d))+f[7]+1126891415&4294967295,y=l+(u<<10&4294967295|u>>>22),u=d+(l^(y|~c))+f[14]+2878612391&4294967295,d=y+(u<<15&4294967295|u>>>17),u=c+(y^(d|~l))+f[5]+4237533241&4294967295,c=d+(u<<21&4294967295|u>>>11),u=l+(d^(c|~y))+f[12]+1700485571&4294967295,l=c+(u<<6&4294967295|u>>>26),u=y+(c^(l|~d))+f[3]+2399980690&4294967295,y=l+(u<<10&4294967295|u>>>22),u=d+(l^(y|~c))+f[10]+4293915773&4294967295,d=y+(u<<15&4294967295|u>>>17),u=c+(y^(d|~l))+f[1]+2240044497&4294967295,c=d+(u<<21&4294967295|u>>>11),u=l+(d^(c|~y))+f[8]+1873313359&4294967295,l=c+(u<<6&4294967295|u>>>26),u=y+(c^(l|~d))+f[15]+4264355552&4294967295,y=l+(u<<10&4294967295|u>>>22),u=d+(l^(y|~c))+f[6]+2734768916&4294967295,d=y+(u<<15&4294967295|u>>>17),u=c+(y^(d|~l))+f[13]+1309151649&4294967295,c=d+(u<<21&4294967295|u>>>11),u=l+(d^(c|~y))+f[4]+4149444226&4294967295,l=c+(u<<6&4294967295|u>>>26),u=y+(c^(l|~d))+f[11]+3174756917&4294967295,y=l+(u<<10&4294967295|u>>>22),u=d+(l^(y|~c))+f[2]+718787259&4294967295,d=y+(u<<15&4294967295|u>>>17),u=c+(y^(d|~l))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(d+(u<<21&4294967295|u>>>11))&4294967295,g.g[2]=g.g[2]+d&4294967295,g.g[3]=g.g[3]+y&4294967295}o.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var c=l-this.blockSize,f=this.B,d=this.h,y=0;y<l;){if(d==0)for(;y<=c;)h(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<l;)if(f[d++]=g.charCodeAt(y++),d==this.blockSize){h(this,f),d=0;break}}else for(;y<l;)if(f[d++]=g[y++],d==this.blockSize){h(this,f),d=0;break}}this.h=d,this.o+=l},o.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var c=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=c&255,c/=256;for(this.u(g),g=Array(16),l=c=0;4>l;++l)for(var f=0;32>f;f+=8)g[c++]=this.g[l]>>>f&255;return g};function p(g,l){var c=E;return Object.prototype.hasOwnProperty.call(c,g)?c[g]:c[g]=l(g)}function _(g,l){this.h=l;for(var c=[],f=!0,d=g.length-1;0<=d;d--){var y=g[d]|0;f&&y==l||(c[d]=y,f=!1)}this.g=c}var E={};function A(g){return-128<=g&&128>g?p(g,function(l){return new _([l|0],0>l?-1:0)}):new _([g|0],0>g?-1:0)}function S(g){if(isNaN(g)||!isFinite(g))return x;if(0>g)return k(S(-g));for(var l=[],c=1,f=0;g>=c;f++)l[f]=g/c|0,c*=4294967296;return new _(l,0)}function F(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return k(F(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=S(Math.pow(l,8)),f=x,d=0;d<g.length;d+=8){var y=Math.min(8,g.length-d),u=parseInt(g.substring(d,d+y),l);8>y?(y=S(Math.pow(l,y)),f=f.j(y).add(S(u))):(f=f.j(c),f=f.add(S(u)))}return f}var x=A(0),I=A(1),B=A(16777216);s=_.prototype,s.m=function(){if(V(this))return-k(this).m();for(var g=0,l=1,c=0;c<this.g.length;c++){var f=this.i(c);g+=(0<=f?f:4294967296+f)*l,l*=4294967296}return g},s.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(R(this))return"0";if(V(this))return"-"+k(this).toString(g);for(var l=S(Math.pow(g,6)),c=this,f="";;){var d=nt(c,l).g;c=at(c,d.j(l));var y=((0<c.g.length?c.g[0]:c.h)>>>0).toString(g);if(c=d,R(c))return y+f;for(;6>y.length;)y="0"+y;f=y+f}},s.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function R(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function V(g){return g.h==-1}s.l=function(g){return g=at(this,g),V(g)?-1:R(g)?0:1};function k(g){for(var l=g.g.length,c=[],f=0;f<l;f++)c[f]=~g.g[f];return new _(c,~g.h).add(I)}s.abs=function(){return V(this)?k(this):this},s.add=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],f=0,d=0;d<=l;d++){var y=f+(this.i(d)&65535)+(g.i(d)&65535),u=(y>>>16)+(this.i(d)>>>16)+(g.i(d)>>>16);f=u>>>16,y&=65535,u&=65535,c[d]=u<<16|y}return new _(c,c[c.length-1]&-2147483648?-1:0)};function at(g,l){return g.add(k(l))}s.j=function(g){if(R(this)||R(g))return x;if(V(this))return V(g)?k(this).j(k(g)):k(k(this).j(g));if(V(g))return k(this.j(k(g)));if(0>this.l(B)&&0>g.l(B))return S(this.m()*g.m());for(var l=this.g.length+g.g.length,c=[],f=0;f<2*l;f++)c[f]=0;for(f=0;f<this.g.length;f++)for(var d=0;d<g.g.length;d++){var y=this.i(f)>>>16,u=this.i(f)&65535,ht=g.i(d)>>>16,jt=g.i(d)&65535;c[2*f+2*d]+=u*jt,q(c,2*f+2*d),c[2*f+2*d+1]+=y*jt,q(c,2*f+2*d+1),c[2*f+2*d+1]+=u*ht,q(c,2*f+2*d+1),c[2*f+2*d+2]+=y*ht,q(c,2*f+2*d+2)}for(f=0;f<l;f++)c[f]=c[2*f+1]<<16|c[2*f];for(f=l;f<2*l;f++)c[f]=0;return new _(c,0)};function q(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function H(g,l){this.g=g,this.h=l}function nt(g,l){if(R(l))throw Error("division by zero");if(R(g))return new H(x,x);if(V(g))return l=nt(k(g),l),new H(k(l.g),k(l.h));if(V(l))return l=nt(g,k(l)),new H(k(l.g),l.h);if(30<g.g.length){if(V(g)||V(l))throw Error("slowDivide_ only works with positive integers.");for(var c=I,f=l;0>=f.l(g);)c=ue(c),f=ue(f);var d=it(c,1),y=it(f,1);for(f=it(f,2),c=it(c,2);!R(f);){var u=y.add(f);0>=u.l(g)&&(d=d.add(c),y=u),f=it(f,1),c=it(c,1)}return l=at(g,d.j(l)),new H(d,l)}for(d=x;0<=g.l(l);){for(c=Math.max(1,Math.floor(g.m()/l.m())),f=Math.ceil(Math.log(c)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),y=S(c),u=y.j(l);V(u)||0<u.l(g);)c-=f,y=S(c),u=y.j(l);R(y)&&(y=I),d=d.add(y),g=at(g,u)}return new H(d,g)}s.A=function(g){return nt(this,g).h},s.and=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],f=0;f<l;f++)c[f]=this.i(f)&g.i(f);return new _(c,this.h&g.h)},s.or=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],f=0;f<l;f++)c[f]=this.i(f)|g.i(f);return new _(c,this.h|g.h)},s.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),c=[],f=0;f<l;f++)c[f]=this.i(f)^g.i(f);return new _(c,this.h^g.h)};function ue(g){for(var l=g.g.length+1,c=[],f=0;f<l;f++)c[f]=g.i(f)<<1|g.i(f-1)>>>31;return new _(c,g.h)}function it(g,l){var c=l>>5;l%=32;for(var f=g.g.length-c,d=[],y=0;y<f;y++)d[y]=0<l?g.i(y+c)>>>l|g.i(y+c+1)<<32-l:g.i(y+c);return new _(d,g.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,_.prototype.add=_.prototype.add,_.prototype.multiply=_.prototype.j,_.prototype.modulo=_.prototype.A,_.prototype.compare=_.prototype.l,_.prototype.toNumber=_.prototype.m,_.prototype.toString=_.prototype.toString,_.prototype.getBits=_.prototype.i,_.fromNumber=S,_.fromString=F,Cn=_}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,n,r){return t==Array.prototype||t==Object.prototype||(t[n]=r.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ce=="object"&&Ce];for(var n=0;n<t.length;++n){var r=t[n];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var o=i(this);function h(t,n){if(n)t:{var r=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var m=t[a];if(!(m in r))break t;r=r[m]}t=t[t.length-1],a=r[t],n=n(a),n!=a&&n!=null&&e(r,t,{configurable:!0,writable:!0,value:n})}}function p(t,n){t instanceof String&&(t+="");var r=0,a=!1,m={next:function(){if(!a&&r<t.length){var v=r++;return{value:n(v,t[v]),done:!1}}return a=!0,{done:!0,value:void 0}}};return m[Symbol.iterator]=function(){return m},m}h("Array.prototype.values",function(t){return t||function(){return p(this,function(n,r){return r})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var _=_||{},E=this||self;function A(t){var n=typeof t;return n=n!="object"?n:t?Array.isArray(t)?"array":n:"null",n=="array"||n=="object"&&typeof t.length=="number"}function S(t){var n=typeof t;return n=="object"&&t!=null||n=="function"}function F(t,n,r){return t.call.apply(t.bind,arguments)}function x(t,n,r){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var m=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(m,a),t.apply(n,m)}}return function(){return t.apply(n,arguments)}}function I(t,n,r){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?F:x,I.apply(null,arguments)}function B(t,n){var r=Array.prototype.slice.call(arguments,1);return function(){var a=r.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function R(t,n){function r(){}r.prototype=n.prototype,t.aa=n.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(a,m,v){for(var w=Array(arguments.length-2),O=2;O<arguments.length;O++)w[O-2]=arguments[O];return n.prototype[m].apply(a,w)}}function V(t){const n=t.length;if(0<n){const r=Array(n);for(let a=0;a<n;a++)r[a]=t[a];return r}return[]}function k(t,n){for(let r=1;r<arguments.length;r++){const a=arguments[r];if(A(a)){const m=t.length||0,v=a.length||0;t.length=m+v;for(let w=0;w<v;w++)t[m+w]=a[w]}else t.push(a)}}class at{constructor(n,r){this.i=n,this.j=r,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function q(t){return/^[\s\xa0]*$/.test(t)}function H(){var t=E.navigator;return t&&(t=t.userAgent)?t:""}function nt(t){return nt[" "](t),t}nt[" "]=function(){};var ue=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function it(t,n,r){for(const a in t)n.call(r,t[a],a,t)}function g(t,n){for(const r in t)n.call(void 0,t[r],r,t)}function l(t){const n={};for(const r in t)n[r]=t[r];return n}const c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,n){let r,a;for(let m=1;m<arguments.length;m++){a=arguments[m];for(r in a)t[r]=a[r];for(let v=0;v<c.length;v++)r=c[v],Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}}function d(t){var n=1;t=t.split(":");const r=[];for(;0<n&&t.length;)r.push(t.shift()),n--;return t.length&&r.push(t.join(":")),r}function y(t){E.setTimeout(()=>{throw t},0)}function u(){var t=Ve;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}class ht{constructor(){this.h=this.g=null}add(n,r){const a=jt.get();a.set(n,r),this.h?this.h.next=a:this.g=a,this.h=a}}var jt=new at(()=>new bs,t=>t.reset());class bs{constructor(){this.next=this.g=this.h=null}set(n,r){this.h=n,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,Vt=!1,Ve=new ht,On=()=>{const t=E.Promise.resolve(void 0);Bt=()=>{t.then(Cs)}};var Cs=()=>{for(var t;t=u();){try{t.h.call(t.g)}catch(r){y(r)}var n=jt;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}Vt=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var Ds=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};E.addEventListener("test",r,n),E.removeEventListener("test",r,n)}catch{}return t}();function Ft(t,n){if($.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(ue){t:{try{nt(n.nodeName);var m=!0;break t}catch{}m=!1}m||(n=null)}}else r=="mouseover"?n=t.fromElement:r=="mouseout"&&(n=t.toElement);this.relatedTarget=n,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Rs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ft.aa.h.call(this)}}R(Ft,$);var Rs={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),Ps=0;function Ns(t,n,r,a,m){this.listener=t,this.proxy=null,this.src=n,this.type=r,this.capture=!!a,this.ha=m,this.key=++Ps,this.da=this.fa=!1}function fe(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function de(t){this.src=t,this.g={},this.h=0}de.prototype.add=function(t,n,r,a,m){var v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);var w=Ue(t,n,a,m);return-1<w?(n=t[w],r||(n.fa=!1)):(n=new Ns(n,this.src,v,!!a,m),n.fa=r,t.push(n)),n};function Fe(t,n){var r=n.type;if(r in t.g){var a=t.g[r],m=Array.prototype.indexOf.call(a,n,void 0),v;(v=0<=m)&&Array.prototype.splice.call(a,m,1),v&&(fe(n),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Ue(t,n,r,a){for(var m=0;m<t.length;++m){var v=t[m];if(!v.da&&v.listener==n&&v.capture==!!r&&v.ha==a)return m}return-1}var He="closure_lm_"+(1e6*Math.random()|0),$e={};function Ln(t,n,r,a,m){if(Array.isArray(n)){for(var v=0;v<n.length;v++)Ln(t,n[v],r,a,m);return null}return r=Mn(r),t&&t[ce]?t.K(n,r,S(a)?!!a.capture:!1,m):Os(t,n,r,!1,a,m)}function Os(t,n,r,a,m,v){if(!n)throw Error("Invalid event type");var w=S(m)?!!m.capture:!!m,O=Ge(t);if(O||(t[He]=O=new de(t)),r=O.add(n,r,a,w,v),r.proxy)return r;if(a=Ls(),r.proxy=a,a.src=t,a.listener=r,t.addEventListener)Ds||(m=w),m===void 0&&(m=!1),t.addEventListener(n.toString(),a,m);else if(t.attachEvent)t.attachEvent(xn(n.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Ls(){function t(r){return n.call(t.src,t.listener,r)}const n=ks;return t}function kn(t,n,r,a,m){if(Array.isArray(n))for(var v=0;v<n.length;v++)kn(t,n[v],r,a,m);else a=S(a)?!!a.capture:!!a,r=Mn(r),t&&t[ce]?(t=t.i,n=String(n).toString(),n in t.g&&(v=t.g[n],r=Ue(v,r,a,m),-1<r&&(fe(v[r]),Array.prototype.splice.call(v,r,1),v.length==0&&(delete t.g[n],t.h--)))):t&&(t=Ge(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Ue(n,r,a,m)),(r=-1<t?n[t]:null)&&We(r))}function We(t){if(typeof t!="number"&&t&&!t.da){var n=t.src;if(n&&n[ce])Fe(n.i,t);else{var r=t.type,a=t.proxy;n.removeEventListener?n.removeEventListener(r,a,t.capture):n.detachEvent?n.detachEvent(xn(r),a):n.addListener&&n.removeListener&&n.removeListener(a),(r=Ge(n))?(Fe(r,t),r.h==0&&(r.src=null,n[He]=null)):fe(t)}}}function xn(t){return t in $e?$e[t]:$e[t]="on"+t}function ks(t,n){if(t.da)t=!0;else{n=new Ft(n,this);var r=t.listener,a=t.ha||t.src;t.fa&&We(t),t=r.call(a,n)}return t}function Ge(t){return t=t[He],t instanceof de?t:null}var ze="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mn(t){return typeof t=="function"?t:(t[ze]||(t[ze]=function(n){return t.handleEvent(n)}),t[ze])}function W(){dt.call(this),this.i=new de(this),this.M=this,this.F=null}R(W,dt),W.prototype[ce]=!0,W.prototype.removeEventListener=function(t,n,r,a){kn(this,t,n,r,a)};function J(t,n){var r,a=t.F;if(a)for(r=[];a;a=a.F)r.push(a);if(t=t.M,a=n.type||n,typeof n=="string")n=new $(n,t);else if(n instanceof $)n.target=n.target||t;else{var m=n;n=new $(a,t),f(n,m)}if(m=!0,r)for(var v=r.length-1;0<=v;v--){var w=n.g=r[v];m=pe(w,a,!0,n)&&m}if(w=n.g=t,m=pe(w,a,!0,n)&&m,m=pe(w,a,!1,n)&&m,r)for(v=0;v<r.length;v++)w=n.g=r[v],m=pe(w,a,!1,n)&&m}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var t=this.i,n;for(n in t.g){for(var r=t.g[n],a=0;a<r.length;a++)fe(r[a]);delete t.g[n],t.h--}}this.F=null},W.prototype.K=function(t,n,r,a){return this.i.add(String(t),n,!1,r,a)},W.prototype.L=function(t,n,r,a){return this.i.add(String(t),n,!0,r,a)};function pe(t,n,r,a){if(n=t.i.g[String(n)],!n)return!0;n=n.concat();for(var m=!0,v=0;v<n.length;++v){var w=n[v];if(w&&!w.da&&w.capture==r){var O=w.listener,U=w.ha||w.src;w.fa&&Fe(t.i,w),m=O.call(U,a)!==!1&&m}}return m&&!a.defaultPrevented}function jn(t,n,r){if(typeof t=="function")r&&(t=I(t,r));else if(t&&typeof t.handleEvent=="function")t=I(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(n)?-1:E.setTimeout(t,n||0)}function Bn(t){t.g=jn(()=>{t.g=null,t.i&&(t.i=!1,Bn(t))},t.l);const n=t.h;t.h=null,t.m.apply(null,n)}class xs extends dt{constructor(n,r){super(),this.m=n,this.l=r,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:Bn(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ut(t){dt.call(this),this.h=t,this.g={}}R(Ut,dt);var Vn=[];function Fn(t){it(t.g,function(n,r){this.g.hasOwnProperty(r)&&We(n)},t),t.g={}}Ut.prototype.N=function(){Ut.aa.N.call(this),Fn(this)},Ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qe=E.JSON.stringify,Ms=E.JSON.parse,js=class{stringify(t){return E.JSON.stringify(t,void 0)}parse(t){return E.JSON.parse(t,void 0)}};function Je(){}Je.prototype.h=null;function Un(t){return t.h||(t.h=t.i())}function Bs(){}var Ht={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xe(){$.call(this,"d")}R(Xe,$);function Ke(){$.call(this,"c")}R(Ke,$);var Dt={},Hn=null;function Ye(){return Hn=Hn||new W}Dt.La="serverreachability";function $n(t){$.call(this,Dt.La,t)}R($n,$);function $t(t){const n=Ye();J(n,new $n(n))}Dt.STAT_EVENT="statevent";function Wn(t,n){$.call(this,Dt.STAT_EVENT,t),this.stat=n}R(Wn,$);function X(t){const n=Ye();J(n,new Wn(n,t))}Dt.Ma="timingevent";function Gn(t,n){$.call(this,Dt.Ma,t),this.size=n}R(Gn,$);function Wt(t,n){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},n)}function Gt(){this.g=!0}Gt.prototype.xa=function(){this.g=!1};function Vs(t,n,r,a,m,v){t.info(function(){if(t.g)if(v)for(var w="",O=v.split("&"),U=0;U<O.length;U++){var P=O[U].split("=");if(1<P.length){var G=P[0];P=P[1];var z=G.split("_");w=2<=z.length&&z[1]=="type"?w+(G+"="+P+"&"):w+(G+"=redacted&")}}else w=null;else w=v;return"XMLHTTP REQ ("+a+") [attempt "+m+"]: "+n+`
`+r+`
`+w})}function Fs(t,n,r,a,m,v,w){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+m+"]: "+n+`
`+r+`
`+v+" "+w})}function Rt(t,n,r,a){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+Hs(t,r)+(a?" "+a:"")})}function Us(t,n){t.info(function(){return"TIMEOUT: "+n})}Gt.prototype.info=function(){};function Hs(t,n){if(!t.g)return n;if(!n)return null;try{var r=JSON.parse(n);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var a=r[t];if(!(2>a.length)){var m=a[1];if(Array.isArray(m)&&!(1>m.length)){var v=m[0];if(v!="noop"&&v!="stop"&&v!="close")for(var w=1;w<m.length;w++)m[w]=""}}}}return qe(r)}catch{return n}}var Ze={NO_ERROR:0,TIMEOUT:8},$s={},Qe;function ge(){}R(ge,Je),ge.prototype.g=function(){return new XMLHttpRequest},ge.prototype.i=function(){return{}},Qe=new ge;function pt(t,n,r,a){this.j=t,this.i=n,this.l=r,this.R=a||1,this.U=new Ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zn}function zn(){this.i=null,this.g="",this.h=!1}var qn={},tn={};function en(t,n,r){t.L=1,t.v=_e(lt(n)),t.m=r,t.P=!0,Jn(t,null)}function Jn(t,n){t.F=Date.now(),me(t),t.A=lt(t.v);var r=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),hi(r.i,"t",a),t.C=0,r=t.j.J,t.h=new zn,t.g=bi(t.j,r?n:null,!t.m),0<t.O&&(t.M=new xs(I(t.Y,t,t.g),t.O)),n=t.U,r=t.g,a=t.ca;var m="readystatechange";Array.isArray(m)||(m&&(Vn[0]=m.toString()),m=Vn);for(var v=0;v<m.length;v++){var w=Ln(r,m[v],a||n.handleEvent,!1,n.h||n);if(!w)break;n.g[w.key]=w}n=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),$t(),Vs(t.i,t.u,t.A,t.l,t.R,t.m)}pt.prototype.ca=function(t){t=t.target;const n=this.M;n&&ut(t)==3?n.j():this.Y(t)},pt.prototype.Y=function(t){try{if(t==this.g)t:{const z=ut(this.g);var n=this.g.Ba();const Ot=this.g.Z();if(!(3>z)&&(z!=3||this.g&&(this.h.h||this.g.oa()||gi(this.g)))){this.J||z!=4||n==7||(n==8||0>=Ot?$t(3):$t(2)),nn(this);var r=this.g.Z();this.X=r;e:if(Xn(this)){var a=gi(this.g);t="";var m=a.length,v=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_t(this),zt(this);var w="";break e}this.h.i=new E.TextDecoder}for(n=0;n<m;n++)this.h.h=!0,t+=this.h.i.decode(a[n],{stream:!(v&&n==m-1)});a.length=0,this.h.g+=t,this.C=0,w=this.h.g}else w=this.g.oa();if(this.o=r==200,Fs(this.i,this.u,this.A,this.l,this.R,z,r),this.o){if(this.T&&!this.K){e:{if(this.g){var O,U=this.g;if((O=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(O)){var P=O;break e}}P=null}if(r=P)Rt(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sn(this,r);else{this.o=!1,this.s=3,X(12),_t(this),zt(this);break t}}if(this.P){r=!0;let Z;for(;!this.J&&this.C<w.length;)if(Z=Ws(this,w),Z==tn){z==4&&(this.s=4,X(14),r=!1),Rt(this.i,this.l,null,"[Incomplete Response]");break}else if(Z==qn){this.s=4,X(15),Rt(this.i,this.l,w,"[Invalid Chunk]"),r=!1;break}else Rt(this.i,this.l,Z,null),sn(this,Z);if(Xn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||w.length!=0||this.h.h||(this.s=1,X(16),r=!1),this.o=this.o&&r,!r)Rt(this.i,this.l,w,"[Invalid Chunked Response]"),_t(this),zt(this);else if(0<w.length&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.ba&&!G.M&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),un(G),G.M=!0,X(11))}}else Rt(this.i,this.l,w,null),sn(this,w);z==4&&_t(this),this.o&&!this.J&&(z==4?Ii(this.j,this):(this.o=!1,me(this)))}else ar(this.g),r==400&&0<w.indexOf("Unknown SID")?(this.s=3,X(12)):(this.s=0,X(13)),_t(this),zt(this)}}}catch{}finally{}};function Xn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Ws(t,n){var r=t.C,a=n.indexOf(`
`,r);return a==-1?tn:(r=Number(n.substring(r,a)),isNaN(r)?qn:(a+=1,a+r>n.length?tn:(n=n.slice(a,a+r),t.C=a+r,n)))}pt.prototype.cancel=function(){this.J=!0,_t(this)};function me(t){t.S=Date.now()+t.I,Kn(t,t.I)}function Kn(t,n){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wt(I(t.ba,t),n)}function nn(t){t.B&&(E.clearTimeout(t.B),t.B=null)}pt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Us(this.i,this.A),this.L!=2&&($t(),X(17)),_t(this),this.s=2,zt(this)):Kn(this,this.S-t)};function zt(t){t.j.G==0||t.J||Ii(t.j,t)}function _t(t){nn(t);var n=t.M;n&&typeof n.ma=="function"&&n.ma(),t.M=null,Fn(t.U),t.g&&(n=t.g,t.g=null,n.abort(),n.ma())}function sn(t,n){try{var r=t.j;if(r.G!=0&&(r.g==t||rn(r.h,t))){if(!t.K&&rn(r.h,t)&&r.G==3){try{var a=r.Da.g.parse(n)}catch{a=null}if(Array.isArray(a)&&a.length==3){var m=a;if(m[0]==0){t:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)Te(r),Ae(r);else break t;ln(r),X(18)}}else r.za=m[1],0<r.za-r.T&&37500>m[2]&&r.F&&r.v==0&&!r.C&&(r.C=Wt(I(r.Za,r),6e3));if(1>=Qn(r.h)&&r.ca){try{r.ca()}catch{}r.ca=void 0}}else wt(r,11)}else if((t.K||r.g==t)&&Te(r),!q(n))for(m=r.Da.g.parse(n),n=0;n<m.length;n++){let P=m[n];if(r.T=P[0],P=P[1],r.G==2)if(P[0]=="c"){r.K=P[1],r.ia=P[2];const G=P[3];G!=null&&(r.la=G,r.j.info("VER="+r.la));const z=P[4];z!=null&&(r.Aa=z,r.j.info("SVER="+r.Aa));const Ot=P[5];Ot!=null&&typeof Ot=="number"&&0<Ot&&(a=1.5*Ot,r.L=a,r.j.info("backChannelRequestTimeoutMs_="+a)),a=r;const Z=t.g;if(Z){const be=Z.g?Z.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(be){var v=a.h;v.g||be.indexOf("spdy")==-1&&be.indexOf("quic")==-1&&be.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(on(v,v.h),v.h=null))}if(a.D){const cn=Z.g?Z.g.getResponseHeader("X-HTTP-Session-Id"):null;cn&&(a.ya=cn,L(a.I,a.D,cn))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),a=r;var w=t;if(a.qa=Ti(a,a.J?a.ia:null,a.W),w.K){ti(a.h,w);var O=w,U=a.L;U&&(O.I=U),O.B&&(nn(O),me(O)),a.g=w}else Ei(a);0<r.i.length&&Se(r)}else P[0]!="stop"&&P[0]!="close"||wt(r,7);else r.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?wt(r,7):hn(r):P[0]!="noop"&&r.l&&r.l.ta(P),r.v=0)}}$t(4)}catch{}}var Gs=class{constructor(t,n){this.g=t,this.map=n}};function Yn(t){this.l=t||10,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.chrome&&E.chrome.loadTimes&&E.chrome.loadTimes()&&E.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qn(t){return t.h?1:t.g?t.g.size:0}function rn(t,n){return t.h?t.h==n:t.g?t.g.has(n):!1}function on(t,n){t.g?t.g.add(n):t.h=n}function ti(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}Yn.prototype.cancel=function(){if(this.i=ei(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ei(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let n=t.i;for(const r of t.g.values())n=n.concat(r.D);return n}return V(t.i)}function zs(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(A(t)){for(var n=[],r=t.length,a=0;a<r;a++)n.push(t[a]);return n}n=[],r=0;for(a in t)n[r++]=t[a];return n}function qs(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(A(t)||typeof t=="string"){var n=[];t=t.length;for(var r=0;r<t;r++)n.push(r);return n}n=[],r=0;for(const a in t)n[r++]=a;return n}}}function ni(t,n){if(t.forEach&&typeof t.forEach=="function")t.forEach(n,void 0);else if(A(t)||typeof t=="string")Array.prototype.forEach.call(t,n,void 0);else for(var r=qs(t),a=zs(t),m=a.length,v=0;v<m;v++)n.call(void 0,a[v],r&&r[v],t)}var ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Js(t,n){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var a=t[r].indexOf("="),m=null;if(0<=a){var v=t[r].substring(0,a);m=t[r].substring(a+1)}else v=t[r];n(v,m?decodeURIComponent(m.replace(/\+/g," ")):"")}}}function Et(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Et){this.h=t.h,ye(this,t.j),this.o=t.o,this.g=t.g,ve(this,t.s),this.l=t.l;var n=t.i,r=new Xt;r.i=n.i,n.g&&(r.g=new Map(n.g),r.h=n.h),si(this,r),this.m=t.m}else t&&(n=String(t).match(ii))?(this.h=!1,ye(this,n[1]||"",!0),this.o=qt(n[2]||""),this.g=qt(n[3]||"",!0),ve(this,n[4]),this.l=qt(n[5]||"",!0),si(this,n[6]||"",!0),this.m=qt(n[7]||"")):(this.h=!1,this.i=new Xt(null,this.h))}Et.prototype.toString=function(){var t=[],n=this.j;n&&t.push(Jt(n,ri,!0),":");var r=this.g;return(r||n=="file")&&(t.push("//"),(n=this.o)&&t.push(Jt(n,ri,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Jt(r,r.charAt(0)=="/"?Ys:Ks,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Jt(r,Qs)),t.join("")};function lt(t){return new Et(t)}function ye(t,n,r){t.j=r?qt(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function ve(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.s=n}else t.s=null}function si(t,n,r){n instanceof Xt?(t.i=n,tr(t.i,t.h)):(r||(n=Jt(n,Zs)),t.i=new Xt(n,t.h))}function L(t,n,r){t.i.set(n,r)}function _e(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qt(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jt(t,n,r){return typeof t=="string"?(t=encodeURI(t).replace(n,Xs),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xs(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ri=/[#\/\?@]/g,Ks=/[#\?:]/g,Ys=/[#\?]/g,Zs=/[#\?@]/g,Qs=/#/g;function Xt(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function gt(t){t.g||(t.g=new Map,t.h=0,t.i&&Js(t.i,function(n,r){t.add(decodeURIComponent(n.replace(/\+/g," ")),r)}))}s=Xt.prototype,s.add=function(t,n){gt(this),this.i=null,t=Pt(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(n),this.h+=1,this};function oi(t,n){gt(t),n=Pt(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function ai(t,n){return gt(t),n=Pt(t,n),t.g.has(n)}s.forEach=function(t,n){gt(this),this.g.forEach(function(r,a){r.forEach(function(m){t.call(n,m,a,this)},this)},this)},s.na=function(){gt(this);const t=Array.from(this.g.values()),n=Array.from(this.g.keys()),r=[];for(let a=0;a<n.length;a++){const m=t[a];for(let v=0;v<m.length;v++)r.push(n[a])}return r},s.V=function(t){gt(this);let n=[];if(typeof t=="string")ai(this,t)&&(n=n.concat(this.g.get(Pt(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)n=n.concat(t[r])}return n},s.set=function(t,n){return gt(this),this.i=null,t=Pt(this,t),ai(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},s.get=function(t,n){return t?(t=this.V(t),0<t.length?String(t[0]):n):n};function hi(t,n,r){oi(t,n),0<r.length&&(t.i=null,t.g.set(Pt(t,n),V(r)),t.h+=r.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(var r=0;r<n.length;r++){var a=n[r];const v=encodeURIComponent(String(a)),w=this.V(a);for(a=0;a<w.length;a++){var m=v;w[a]!==""&&(m+="="+encodeURIComponent(String(w[a]))),t.push(m)}}return this.i=t.join("&")};function Pt(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function tr(t,n){n&&!t.j&&(gt(t),t.i=null,t.g.forEach(function(r,a){var m=a.toLowerCase();a!=m&&(oi(this,a),hi(this,m,r))},t)),t.j=n}function er(t,n){const r=new Gt;if(E.Image){const a=new Image;a.onload=B(mt,r,"TestLoadImage: loaded",!0,n,a),a.onerror=B(mt,r,"TestLoadImage: error",!1,n,a),a.onabort=B(mt,r,"TestLoadImage: abort",!1,n,a),a.ontimeout=B(mt,r,"TestLoadImage: timeout",!1,n,a),E.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else n(!1)}function nr(t,n){const r=new Gt,a=new AbortController,m=setTimeout(()=>{a.abort(),mt(r,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:a.signal}).then(v=>{clearTimeout(m),v.ok?mt(r,"TestPingServer: ok",!0,n):mt(r,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(m),mt(r,"TestPingServer: error",!1,n)})}function mt(t,n,r,a,m){try{m&&(m.onload=null,m.onerror=null,m.onabort=null,m.ontimeout=null),a(r)}catch{}}function ir(){this.g=new js}function sr(t,n,r){const a=r||"";try{ni(t,function(m,v){let w=m;S(m)&&(w=qe(m)),n.push(a+v+"="+encodeURIComponent(w))})}catch(m){throw n.push(a+"type="+encodeURIComponent("_badmap")),m}}function Ee(t){this.l=t.Ub||null,this.j=t.eb||!1}R(Ee,Je),Ee.prototype.g=function(){return new we(this.l,this.j)},Ee.prototype.i=function(t){return function(){return t}}({});function we(t,n){W.call(this),this.D=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(we,W),s=we.prototype,s.open=function(t,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=n,this.readyState=1,Yt(this)},s.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||E).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kt(this)),this.readyState=0},s.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yt(this)),this.g&&(this.readyState=3,Yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;li(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function li(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}s.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Kt(this):Yt(this),this.readyState==3&&li(this)}},s.Ra=function(t){this.g&&(this.response=this.responseText=t,Kt(this))},s.Qa=function(t){this.g&&(this.response=t,Kt(this))},s.ga=function(){this.g&&Kt(this)};function Kt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Yt(t)}s.setRequestHeader=function(t,n){this.u.append(t,n)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var r=n.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=n.next();return t.join(`\r
`)};function Yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(we.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ui(t){let n="";return it(t,function(r,a){n+=a,n+=":",n+=r,n+=`\r
`}),n}function an(t,n,r){t:{for(a in r){var a=!1;break t}a=!0}a||(r=ui(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):L(t,n,r))}function M(t){W.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(M,W);var rr=/^https?$/i,or=["POST","PUT"];s=M.prototype,s.Ha=function(t){this.J=t},s.ea=function(t,n,r,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qe.g(),this.v=this.o?Un(this.o):Un(Qe),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(v){ci(this,v);return}if(t=r||"",r=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var m in a)r.set(m,a[m]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const v of a.keys())r.set(v,a.get(v));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(r.keys()).find(v=>v.toLowerCase()=="content-type"),m=E.FormData&&t instanceof E.FormData,!(0<=Array.prototype.indexOf.call(or,n,void 0))||a||m||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,w]of r)this.g.setRequestHeader(v,w);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pi(this),this.u=!0,this.g.send(t),this.u=!1}catch(v){ci(this,v)}};function ci(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.m=5,fi(t),Ie(t)}function fi(t){t.A||(t.A=!0,J(t,"complete"),J(t,"error"))}s.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,J(this,"complete"),J(this,"abort"),Ie(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ie(this,!0)),M.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?di(this):this.bb())},s.bb=function(){di(this)};function di(t){if(t.h&&typeof _<"u"&&(!t.v[1]||ut(t)!=4||t.Z()!=2)){if(t.u&&ut(t)==4)jn(t.Ea,0,t);else if(J(t,"readystatechange"),ut(t)==4){t.h=!1;try{const w=t.Z();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var r;if(!(r=n)){var a;if(a=w===0){var m=String(t.D).match(ii)[1]||null;!m&&E.self&&E.self.location&&(m=E.self.location.protocol.slice(0,-1)),a=!rr.test(m?m.toLowerCase():"")}r=a}if(r)J(t,"complete"),J(t,"success");else{t.m=6;try{var v=2<ut(t)?t.g.statusText:""}catch{v=""}t.l=v+" ["+t.Z()+"]",fi(t)}}finally{Ie(t)}}}}function Ie(t,n){if(t.g){pi(t);const r=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,n||J(t,"ready");try{r.onreadystatechange=a}catch{}}}function pi(t){t.I&&(E.clearTimeout(t.I),t.I=null)}s.isActive=function(){return!!this.g};function ut(t){return t.g?t.g.readyState:0}s.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(t){if(this.g){var n=this.g.responseText;return t&&n.indexOf(t)==0&&(n=n.substring(t.length)),Ms(n)}};function gi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ar(t){const n={};t=(t.g&&2<=ut(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(q(t[a]))continue;var r=d(t[a]);const m=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const v=n[m]||[];n[m]=v,v.push(r)}g(n,function(a){return a.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zt(t,n,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||n}function mi(t){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zt("baseRetryDelayMs",5e3,t),this.cb=Zt("retryDelaySeedMs",1e4,t),this.Wa=Zt("forwardChannelMaxRetries",2,t),this.wa=Zt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Yn(t&&t.concurrentRequestLimit),this.Da=new ir,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=mi.prototype,s.la=8,s.G=1,s.connect=function(t,n,r,a){X(0),this.W=t,this.H=n||{},r&&a!==void 0&&(this.H.OSID=r,this.H.OAID=a),this.F=this.X,this.I=Ti(this,null,this.W),Se(this)};function hn(t){if(yi(t),t.G==3){var n=t.U++,r=lt(t.I);if(L(r,"SID",t.K),L(r,"RID",n),L(r,"TYPE","terminate"),Qt(t,r),n=new pt(t,t.j,n),n.L=2,n.v=_e(lt(r)),r=!1,E.navigator&&E.navigator.sendBeacon)try{r=E.navigator.sendBeacon(n.v.toString(),"")}catch{}!r&&E.Image&&(new Image().src=n.v,r=!0),r||(n.g=bi(n.j,null),n.g.ea(n.v)),n.F=Date.now(),me(n)}Si(t)}function Ae(t){t.g&&(un(t),t.g.cancel(),t.g=null)}function yi(t){Ae(t),t.u&&(E.clearTimeout(t.u),t.u=null),Te(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&E.clearTimeout(t.s),t.s=null)}function Se(t){if(!Zn(t.h)&&!t.s){t.s=!0;var n=t.Ga;Bt||On(),Vt||(Bt(),Vt=!0),Ve.add(n,t),t.B=0}}function hr(t,n){return Qn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=n.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Wt(I(t.Ga,t,n),Ai(t,t.B)),t.B++,!0)}s.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const m=new pt(this,this.j,t);let v=this.o;if(this.S&&(v?(v=l(v),f(v,this.S)):v=this.S),this.m!==null||this.O||(m.H=v,v=null),this.P)t:{for(var n=0,r=0;r<this.i.length;r++){e:{var a=this.i[r];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(n+=a,4096<n){n=r;break t}if(n===4096||r===this.i.length-1){n=r+1;break t}}n=1e3}else n=1e3;n=_i(this,m,n),r=lt(this.I),L(r,"RID",t),L(r,"CVER",22),this.D&&L(r,"X-HTTP-Session-Id",this.D),Qt(this,r),v&&(this.O?n="headers="+encodeURIComponent(String(ui(v)))+"&"+n:this.m&&an(r,this.m,v)),on(this.h,m),this.Ua&&L(r,"TYPE","init"),this.P?(L(r,"$req",n),L(r,"SID","null"),m.T=!0,en(m,r,null)):en(m,r,n),this.G=2}}else this.G==3&&(t?vi(this,t):this.i.length==0||Zn(this.h)||vi(this))};function vi(t,n){var r;n?r=n.l:r=t.U++;const a=lt(t.I);L(a,"SID",t.K),L(a,"RID",r),L(a,"AID",t.T),Qt(t,a),t.m&&t.o&&an(a,t.m,t.o),r=new pt(t,t.j,r,t.B+1),t.m===null&&(r.H=t.o),n&&(t.i=n.D.concat(t.i)),n=_i(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),on(t.h,r),en(r,a,n)}function Qt(t,n){t.H&&it(t.H,function(r,a){L(n,a,r)}),t.l&&ni({},function(r,a){L(n,a,r)})}function _i(t,n,r){r=Math.min(t.i.length,r);var a=t.l?I(t.l.Na,t.l,t):null;t:{var m=t.i;let v=-1;for(;;){const w=["count="+r];v==-1?0<r?(v=m[0].g,w.push("ofs="+v)):v=0:w.push("ofs="+v);let O=!0;for(let U=0;U<r;U++){let P=m[U].g;const G=m[U].map;if(P-=v,0>P)v=Math.max(0,m[U].g-100),O=!1;else try{sr(G,w,"req"+P+"_")}catch{a&&a(G)}}if(O){a=w.join("&");break t}}}return t=t.i.splice(0,r),n.D=t,a}function Ei(t){if(!t.g&&!t.u){t.Y=1;var n=t.Fa;Bt||On(),Vt||(Bt(),Vt=!0),Ve.add(n,t),t.v=0}}function ln(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Wt(I(t.Fa,t),Ai(t,t.v)),t.v++,!0)}s.Fa=function(){if(this.u=null,wi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Wt(I(this.ab,this),t)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,X(10),Ae(this),wi(this))};function un(t){t.A!=null&&(E.clearTimeout(t.A),t.A=null)}function wi(t){t.g=new pt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var n=lt(t.qa);L(n,"RID","rpc"),L(n,"SID",t.K),L(n,"AID",t.T),L(n,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(n,"TO",t.ja),L(n,"TYPE","xmlhttp"),Qt(t,n),t.m&&t.o&&an(n,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=_e(lt(n)),r.m=null,r.P=!0,Jn(r,t)}s.Za=function(){this.C!=null&&(this.C=null,Ae(this),ln(this),X(19))};function Te(t){t.C!=null&&(E.clearTimeout(t.C),t.C=null)}function Ii(t,n){var r=null;if(t.g==n){Te(t),un(t),t.g=null;var a=2}else if(rn(t.h,n))r=n.D,ti(t.h,n),a=1;else return;if(t.G!=0){if(n.o)if(a==1){r=n.m?n.m.length:0,n=Date.now()-n.F;var m=t.B;a=Ye(),J(a,new Gn(a,r)),Se(t)}else Ei(t);else if(m=n.s,m==3||m==0&&0<n.X||!(a==1&&hr(t,n)||a==2&&ln(t)))switch(r&&0<r.length&&(n=t.h,n.i=n.i.concat(r)),m){case 1:wt(t,5);break;case 4:wt(t,10);break;case 3:wt(t,6);break;default:wt(t,2)}}}function Ai(t,n){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*n}function wt(t,n){if(t.j.info("Error code "+n),n==2){var r=I(t.fb,t),a=t.Xa;const m=!a;a=new Et(a||"//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||ye(a,"https"),_e(a),m?er(a.toString(),r):nr(a.toString(),r)}else X(2);t.G=0,t.l&&t.l.sa(n),Si(t),yi(t)}s.fb=function(t){t?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function Si(t){if(t.G=0,t.ka=[],t.l){const n=ei(t.h);(n.length!=0||t.i.length!=0)&&(k(t.ka,n),k(t.ka,t.i),t.h.i.length=0,V(t.i),t.i.length=0),t.l.ra()}}function Ti(t,n,r){var a=r instanceof Et?lt(r):new Et(r);if(a.g!="")n&&(a.g=n+"."+a.g),ve(a,a.s);else{var m=E.location;a=m.protocol,n=n?n+"."+m.hostname:m.hostname,m=+m.port;var v=new Et(null);a&&ye(v,a),n&&(v.g=n),m&&ve(v,m),r&&(v.l=r),a=v}return r=t.D,n=t.ya,r&&n&&L(a,r,n),L(a,"VER",t.la),Qt(t,a),a}function bi(t,n,r){if(n&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return n=t.Ca&&!t.pa?new M(new Ee({eb:r})):new M(t.pa),n.Ha(t.J),n}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ci(){}s=Ci.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Y(t,n){W.call(this),this.g=new mi(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(t?t["X-WebChannel-Client-Profile"]=n.va:t={"X-WebChannel-Client-Profile":n.va}),this.g.S=t,(t=n&&n.Sb)&&!q(t)&&(this.g.m=t),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!q(n)&&(this.g.D=n,t=this.h,t!==null&&n in t&&(t=this.h,n in t&&delete t[n])),this.j=new Nt(this)}R(Y,W),Y.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Y.prototype.close=function(){hn(this.g)},Y.prototype.o=function(t){var n=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.u&&(r={},r.__data__=qe(t),t=r);n.i.push(new Gs(n.Ya++,t)),n.G==3&&Se(n)},Y.prototype.N=function(){this.g.l=null,delete this.j,hn(this.g),delete this.g,Y.aa.N.call(this)};function Di(t){Xe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){t:{for(const r in n){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,n=n!==null&&t in n?n[t]:void 0),this.data=n}else this.data=t}R(Di,Xe);function Ri(){Ke.call(this),this.status=1}R(Ri,Ke);function Nt(t){this.g=t}R(Nt,Ci),Nt.prototype.ua=function(){J(this.g,"a")},Nt.prototype.ta=function(t){J(this.g,new Di(t))},Nt.prototype.sa=function(t){J(this.g,new Ri)},Nt.prototype.ra=function(){J(this.g,"b")},Y.prototype.send=Y.prototype.o,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,Ze.NO_ERROR=0,Ze.TIMEOUT=8,Ze.HTTP_ERROR=6,$s.COMPLETE="complete",Bs.EventType=Ht,Ht.OPEN="a",Ht.CLOSE="b",Ht.ERROR="c",Ht.MESSAGE="d",W.prototype.listen=W.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof Ce<"u"?Ce:typeof self<"u"?self:typeof window<"u"?window:{});const Hi="@firebase/firestore",$i="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let he="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new fs("@firebase/firestore");function tt(s,...e){if(xt.logLevel<=N.DEBUG){const i=e.map(Dn);xt.debug(`Firestore (${he}): ${s}`,...i)}}function vs(s,...e){if(xt.logLevel<=N.ERROR){const i=e.map(Dn);xt.error(`Firestore (${he}): ${s}`,...i)}}function zo(s,...e){if(xt.logLevel<=N.WARN){const i=e.map(Dn);xt.warn(`Firestore (${he}): ${s}`,...i)}}function Dn(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(s,e,i){let o="Unexpected state";typeof e=="string"?o=e:i=e,_s(s,o,i)}function _s(s,e,i){let o=`FIRESTORE (${he}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(i!==void 0)try{o+=" CONTEXT: "+JSON.stringify(i)}catch{o+=" CONTEXT: "+i}throw vs(o),new Error(o)}function ne(s,e,i,o){let h="Unexpected state";typeof i=="string"?h=i:o=i,s||_s(e,h,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class D extends Mt{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(K.UNAUTHENTICATED))}shutdown(){}}class Jo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Xo{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){ne(this.o===void 0,42304);let o=this.i;const h=A=>this.i!==o?(o=this.i,i(A)):Promise.resolve();let p=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),p.resolve(),p=new ie,e.enqueueRetryable(()=>h(this.currentUser))};const _=()=>{const A=p;e.enqueueRetryable(async()=>{await A.promise,await h(this.currentUser)})},E=A=>{tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),_())};this.t.onInit(A=>E(A)),setTimeout(()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?E(A):(tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),p.resolve(),p=new ie)}},0),_()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(o=>this.i!==e?(tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(ne(typeof o.accessToken=="string",31837,{l:o}),new Es(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new K(e)}}class Ko{constructor(e,i,o){this.P=e,this.T=i,this.I=o,this.type="FirstParty",this.user=K.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Yo{constructor(e,i,o){this.P=e,this.T=i,this.I=o}getToken(){return Promise.resolve(new Ko(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zo{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ro(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){ne(this.o===void 0,3512);const o=p=>{p.error!=null&&tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${p.error.message}`);const _=p.token!==this.m;return this.m=p.token,tt("FirebaseAppCheckTokenProvider",`Received ${_?"new":"existing"} token.`),_?i(p.token):Promise.resolve()};this.o=p=>{e.enqueueRetryable(()=>o(p))};const h=p=>{tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=p,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(p=>h(p)),setTimeout(()=>{if(!this.appCheck){const p=this.V.getImmediate({optional:!0});p?h(p):tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wi(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(ne(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Wi(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let o=0;o<s;o++)i[o]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const h=Qo(40);for(let p=0;p<h.length;++p)o.length<20&&h[p]<i&&(o+=e.charAt(h[p]%62))}return o}}function et(s,e){return s<e?-1:s>e?1:0}function na(s,e){let i=0;for(;i<s.length&&i<e.length;){const o=s.codePointAt(i),h=e.codePointAt(i);if(o!==h){if(o<128&&h<128)return et(o,h);{const p=ta(),_=ia(p.encode(Gi(s,i)),p.encode(Gi(e,i)));return _!==0?_:et(o,h)}}i+=o>65535?2:1}return et(s.length,e.length)}function Gi(s,e){return s.codePointAt(e)>65535?s.substring(e,e+2):s.substring(e,e+1)}function ia(s,e){for(let i=0;i<s.length&&i<e.length;++i)if(s[i]!==e[i])return et(s[i],e[i]);return et(s.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="__name__";class st{constructor(e,i,o){i===void 0?i=0:i>e.length&&ae(637,{offset:i,range:e.length}),o===void 0?o=e.length-i:o>e.length-i&&ae(1746,{length:o,range:e.length-i}),this.segments=e,this.offset=i,this.len=o}get length(){return this.len}isEqual(e){return st.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof st?e.forEach(o=>{i.push(o)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,o=this.limit();i<o;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const o=Math.min(e.length,i.length);for(let h=0;h<o;h++){const p=st.compareSegments(e.get(h),i.get(h));if(p!==0)return p}return et(e.length,i.length)}static compareSegments(e,i){const o=st.isNumericId(e),h=st.isNumericId(i);return o&&!h?-1:!o&&h?1:o&&h?st.extractNumericId(e).compare(st.extractNumericId(i)):na(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class Q extends st{construct(e,i,o){return new Q(e,i,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const o of e){if(o.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);i.push(...o.split("/").filter(h=>h.length>0))}return new Q(i)}static emptyPath(){return new Q([])}}const sa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends st{construct(e,i,o){return new At(e,i,o)}static isValidIdentifier(e){return sa.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zi}static keyField(){return new At([zi])}static fromServerFormat(e){const i=[];let o="",h=0;const p=()=>{if(o.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(o),o=""};let _=!1;for(;h<e.length;){const E=e[h];if(E==="\\"){if(h+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const A=e[h+1];if(A!=="\\"&&A!=="."&&A!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=A,h+=2}else E==="`"?(_=!_,h++):E!=="."||_?(o+=E,h++):(p(),h++)}if(p(),_)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(i)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.path=e}static fromPath(e){return new St(Q.fromString(e))}static fromName(e){return new St(Q.fromString(e).popFirst(5))}static empty(){return new St(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return Q.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new St(new Q(e.slice()))}}function ra(s,e,i,o){if(e===!0&&o===!0)throw new D(C.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function oa(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function aa(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":ae(12329,{type:typeof s})}function ha(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=aa(s);throw new D(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(s,e){const i={typeString:s};return e&&(i.value=e),i}function le(s,e){if(!oa(s))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let i;for(const o in e)if(e[o]){const h=e[o].typeString,p="value"in e[o]?{value:e[o].value}:void 0;if(!(o in s)){i=`JSON missing required field: '${o}'`;break}const _=s[o];if(h&&typeof _!==h){i=`JSON field '${o}' must be a ${h}.`;break}if(p!==void 0&&_!==p.value){i=`Expected '${o}' field to equal '${p.value}'`;break}}if(i)throw new D(C.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=-62135596800,Ji=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),o=Math.floor((e-1e3*i)*Ji);return new rt(i,o)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<qi)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ji}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(le(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qi;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:j("string",rt._jsonSchemaVersion),seconds:j("number"),nanoseconds:j("number")};function la(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(h){try{return atob(h)}catch(p){throw typeof DOMException<"u"&&p instanceof DOMException?new ua("Invalid base64 string: "+p):p}}(e);return new Ct(i)}static fromUint8Array(e){const i=function(h){let p="";for(let _=0;_<h.length;++_)p+=String.fromCharCode(h[_]);return p}(e);return new Ct(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const o=new Uint8Array(i.length);for(let h=0;h<i.length;h++)o[h]=i.charCodeAt(h);return o}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Tn="(default)";class ke{constructor(e,i){this.projectId=e,this.database=i||Tn}static empty(){return new ke("","")}get isDefaultDatabase(){return this.database===Tn}isEqual(e){return e instanceof ke&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,i=null,o=[],h=[],p=null,_="F",E=null,A=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=o,this.filters=h,this.limit=p,this.limitType=_,this.startAt=E,this.endAt=A,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function fa(s){return new ca(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi,b;(b=Xi||(Xi={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Cn([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=1048576;function mn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,i,o=1e3,h=1.5,p=6e4){this.Fi=e,this.timerId=i,this.d_=o,this.E_=h,this.A_=p,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const i=Math.floor(this.R_+this.p_()),o=Math.max(0,Date.now()-this.m_),h=Math.max(0,i-o);h>0&&tt("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.R_} ms, delay with jitter: ${i} ms, last attempt: ${o} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,h,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,i,o,h,p){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=o,this.op=h,this.removalCallback=p,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(_=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,o,h,p){const _=Date.now()+o,E=new Rn(e,i,_,h,p);return E.start(o),E}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ki,Yi;(Yi=Ki||(Ki={})).Fa="default",Yi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="firestore.googleapis.com",Qi=!0;class ts{constructor(e){var i,o;if(e.host===void 0){if(e.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ws,this.ssl=Qi}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:Qi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=da;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pa)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ra("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ma((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(p){if(p.timeoutSeconds!==void 0){if(isNaN(p.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${p.timeoutSeconds} (must not be NaN)`);if(p.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${p.timeoutSeconds} (minimum allowed value is 5)`);if(p.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${p.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,h){return o.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Is{constructor(e,i,o,h){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ts({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ts(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new qo;switch(o.type){case"firstParty":return new Yo(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const o=Zi.get(i);o&&(tt("ComponentProvider","Removing Datastore"),Zi.delete(i),o.terminate())}(this),Promise.resolve()}}function ya(s,e,i,o={}){var h;s=ha(s,Is);const p=us(e),_=s._getSettings(),E=Object.assign(Object.assign({},_),{emulatorOptions:s._getEmulatorOptions()}),A=`${e}:${i}`;p&&(wr(`https://${A}`),Tr("Firestore",!0)),_.host!==ws&&_.host!==A&&zo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const S=Object.assign(Object.assign({},_),{host:A,ssl:p,emulatorOptions:o});if(!Ne(S,E)&&(s._setSettings(S),o.mockUserToken)){let F,x;if(typeof o.mockUserToken=="string")F=o.mockUserToken,x=K.MOCK_USER;else{F=Ir(o.mockUserToken,(h=s._app)===null||h===void 0?void 0:h.options.projectId);const I=o.mockUserToken.sub||o.mockUserToken.user_id;if(!I)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new K(I)}s._authCredentials=new Jo(new Es(F,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,i,o){this.converter=i,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new Pn(this.firestore,e,this._query)}}class ot{constructor(e,i,o){this.converter=i,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,o){if(le(i,ot._jsonSchema))return new ot(e,o||null,new St(Q.fromString(i.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:j("string",ot._jsonSchemaVersion),referencePath:j("string")};class Nn extends Pn{constructor(e,i,o){super(e,i,fa(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new St(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="AsyncQueue";class ns{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ga(this,"async_queue_retry"),this.oc=()=>{const o=mn();o&&tt(es,"Visibility state changed to "+o.visibilityState),this.F_.y_()},this._c=e;const i=mn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const i=mn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const i=new ie;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!la(e))throw e;tt(es,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const i=this._c.then(()=>(this.nc=!0,e().catch(o=>{throw this.tc=o,this.nc=!1,vs("INTERNAL UNHANDLED ERROR: ",is(o)),o}).then(o=>(this.nc=!1,o))));return this._c=i,i}enqueueAfterDelay(e,i,o){this.ac(),this.sc.indexOf(e)>-1&&(i=0);const h=Rn.createAndSchedule(this,e,i,o,p=>this.lc(p));return this.ec.push(h),h}ac(){this.tc&&ae(47125,{hc:is(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const i of this.ec)if(i.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((i,o)=>i.targetTimeMs-o.targetTimeMs);for(const i of this.ec)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const i=this.ec.indexOf(e);this.ec.splice(i,1)}}function is(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class va extends Is{constructor(e,i,o,h){super(e,i,o,h),this.type="firestore",this._queue=new ns,this._persistenceKey=h?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ns(e),this._firestoreClient=void 0,await e}}}function _a(s,e){const i=typeof s=="object"?s:Lo(),o=typeof s=="string"?s:Tn,h=Do(i,"firestore").getImmediate({identifier:o});if(!h._initialized){const p=_r("firestore");p&&ya(h,...p)}return h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(Ct.fromBase64String(e))}catch(i){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new ct(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(le(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:j("string",ct._jsonSchemaVersion),bytes:j("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tt._jsonSchemaVersion}}static fromJSON(e){if(le(e,Tt._jsonSchema))return new Tt(e.latitude,e.longitude)}}Tt._jsonSchemaVersion="firestore/geoPoint/1.0",Tt._jsonSchema={type:j("string",Tt._jsonSchemaVersion),latitude:j("number"),longitude:j("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(o,h){if(o.length!==h.length)return!1;for(let p=0;p<o.length;++p)if(o[p]!==h[p])return!1;return!0}(this._values,e._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(le(e,bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new bt(e.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:j("string",bt._jsonSchemaVersion),vectorValues:j("object")};const Ea=new RegExp("[~\\*/\\[\\]]");function wa(s,e,i){if(e.search(Ea)>=0)throw ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new As(...e.split("."))._internalPath}catch{throw ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function ss(s,e,i,o,h){let p=`Function ${e}() called with invalid data`;p+=". ";let _="";return new D(C.INVALID_ARGUMENT,p+s+_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,i,o,h,p){this._firestore=e,this._userDataWriter=i,this._key=o,this._document=h,this._converter=p}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ia(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(Ts("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Ia extends Ss{data(){return super.data()}}function Ts(s,e){return typeof e=="string"?wa(s,e):e instanceof As?e._internalPath:e._delegate._internalPath}class De{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kt extends Ss{constructor(e,i,o,h,p,_){super(e,i,o,h,_),this._firestore=e,this._firestoreImpl=e,this.metadata=p}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Re(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const o=this._document.data.field(Ts("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=kt._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}kt._jsonSchemaVersion="firestore/documentSnapshot/1.0",kt._jsonSchema={type:j("string",kt._jsonSchemaVersion),bundleSource:j("string","DocumentSnapshot"),bundleName:j("string"),bundle:j("string")};class Re extends kt{data(e={}){return super.data(e)}}class se{constructor(e,i,o,h){this._firestore=e,this._userDataWriter=i,this._snapshot=h,this.metadata=new De(h.hasPendingWrites,h.fromCache),this.query=o}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(o=>{e.call(i,new Re(this._firestore,this._userDataWriter,o.key,o,new De(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(h,p){if(h._snapshot.oldDocs.isEmpty()){let _=0;return h._snapshot.docChanges.map(E=>{const A=new Re(h._firestore,h._userDataWriter,E.doc.key,E.doc,new De(h._snapshot.mutatedKeys.has(E.doc.key),h._snapshot.fromCache),h.query.converter);return E.doc,{type:"added",doc:A,oldIndex:-1,newIndex:_++}})}{let _=h._snapshot.oldDocs;return h._snapshot.docChanges.filter(E=>p||E.type!==3).map(E=>{const A=new Re(h._firestore,h._userDataWriter,E.doc.key,E.doc,new De(h._snapshot.mutatedKeys.has(E.doc.key),h._snapshot.fromCache),h.query.converter);let S=-1,F=-1;return E.type!==0&&(S=_.indexOf(E.doc.key),_=_.delete(E.doc.key)),E.type!==1&&(_=_.add(E.doc),F=_.indexOf(E.doc.key)),{type:Aa(E.type),doc:A,oldIndex:S,newIndex:F}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=se._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],o=[],h=[];return this.docs.forEach(p=>{p._document!==null&&(i.push(p._document),o.push(this._userDataWriter.convertObjectMap(p._document.data.value.mapValue.fields,"previous")),h.push(p.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Aa(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:s})}}se._jsonSchemaVersion="firestore/querySnapshot/1.0",se._jsonSchema={type:j("string",se._jsonSchemaVersion),bundleSource:j("string","QuerySnapshot"),bundleName:j("string"),bundle:j("string")};(function(e,i=!0){(function(h){he=h})(Oo),Le(new re("firestore",(o,{instanceIdentifier:h,options:p})=>{const _=o.getProvider("app").getImmediate(),E=new va(new Xo(o.getProvider("auth-internal")),new Zo(_,o.getProvider("app-check-internal")),function(S,F){if(!Object.prototype.hasOwnProperty.apply(S.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ke(S.options.projectId,F)}(_,h),_);return p=Object.assign({useFetchStreams:i},p),E._setSettings(p),E},"PUBLIC").setMultipleInstances(!0)),Lt(Hi,$i,e),Lt(Hi,$i,"esm2017")})();const Sa={apiKey:"YOUR_API_KEY",authDomain:"PROJECT_ID.firebaseapp.com",projectId:"PROJECT_ID"},Ta=gs(Sa);_a(Ta);let yn=[{user:"John Doe",text:"Happy 50th Birthday!"},{user:"Jane Smith",text:"Wishing you a fantastic year ahead!"},{user:"Alice Johnson",text:"Cheers to 50 years of amazing memories!"},{user:"Bobert Green",text:"Here's to many more adventures together!"},{user:"Charlie Brown",text:"Celebrating 50 years of friendship!"},{user:"David Smith",text:"Here's to the next chapter!"},{user:"Emily Davis",text:"Cheers to 50 years of love and laughter!"},{user:"Frank Wilson",text:"Here's to many more years of happiness!"},{user:"George Martin",text:"Wishing you all the best on this special occasion!"},{user:"Hannah Brown",text:"Here's to 50 years of wonderful memories!"},{user:"Irene Adler",text:"Celebrating a lifetime of achievements!"},{user:"Jack Daniels",text:"Here's to 50 years of great times!"},{user:"Kathy Lee",text:"Wishing you a fabulous 50th birthday!"},{user:"Liam Neeson",text:"Cheers to 50 years of love and laughter!"},{user:"Mia Wong",text:"Here's to many more years of happiness!"},{user:"Nina Simone",text:"Celebrating a lifetime of wonderful memories!"},{user:"Oscar Wilde",text:"Wishing you all the best on this special occasion!"},{user:"Paul Atreides",text:"Here's to the next chapter in your life!"},{user:"Quinn Fabray",text:"Wishing you a fabulous 50th birthday!"},{user:"Ryder Lynn",text:"Cheers to 50 years of love and laughter!"},{user:"Samantha Evans",text:"Here's to many more years of happiness!"},{user:"Tina Cohen-Chang",text:"Celebrating a lifetime of wonderful memories!"},{user:"Ursula K. Le Guin",text:"Wishing you all the best on this special occasion!"},{user:"Wanda Maximoff",text:"Wishing you a fabulous 50th birthday!"},{user:"Xander Harris",text:"Cheers to 50 years of love and laughter!"},{user:"Yara Greyjoy",text:"Here's to many more years of happiness!"},{user:"Zoe Washburne",text:"Celebrating a lifetime of wonderful memories!"},{user:"Victor Hugo",text:"Here's to the next chapter in your life!"}],T=document.querySelectorAll(".messageModuleRow"),vn=document.querySelectorAll(".messageModuleRowTrack");document.querySelectorAll(".trackReset");let ba=T[0].getBoundingClientRect().left;T.forEach(s=>{s.addEventListener("scroll",e=>{s.querySelector(".message"),s.querySelector(".trackReset").getBoundingClientRect().left<=ba&&(s.scrollLeft=0,console.log("Resetting Row Position"))})});let xe=setInterval(()=>{T[0].scrollBy({left:T[0].scrollWidth/4,behavior:"smooth"})},6e3);T[0].addEventListener("mousedown",()=>{clearInterval(xe)});T[0].addEventListener("touchstart",()=>{clearInterval(xe)});T[0].addEventListener("mouseup",()=>{xe=setInterval(()=>{T[0].scrollBy({left:T[0].scrollWidth/4,behavior:"smooth"})},6e3)});T[0].addEventListener("touchend",()=>{xe=setInterval(()=>{T[0].scrollBy({left:T[0].scrollWidth/4,behavior:"smooth"})},6e3)});let Me=setInterval(()=>{T[1].scrollBy({left:T[1].scrollWidth/4,behavior:"smooth"})},6e3);T[1].addEventListener("mousedown",()=>{clearInterval(Me)});T[1].addEventListener("touchstart",()=>{clearInterval(Me)});T[1].addEventListener("mouseup",()=>{Me=setInterval(()=>{T[1].scrollBy({left:T[1].scrollWidth/4,behavior:"smooth"})},6e3)});T[1].addEventListener("touchend",()=>{Me=setInterval(()=>{T[1].scrollBy({left:T[1].scrollWidth/4,behavior:"smooth"})},6e3)});let je=setInterval(()=>{T[2].scrollBy({left:T[2].scrollWidth/4,behavior:"smooth"})},6e3);T[2].addEventListener("mousedown",()=>{clearInterval(je)});T[2].addEventListener("touchstart",()=>{clearInterval(je)});T[2].addEventListener("mouseup",()=>{je=setInterval(()=>{T[2].scrollBy({left:T[2].scrollWidth/4,behavior:"smooth"})},6e3)});T[2].addEventListener("touchend",()=>{je=setInterval(()=>{T[2].scrollBy({left:T[2].scrollWidth/4,behavior:"smooth"})},6e3)});let Be=setInterval(()=>{T[3].scrollBy({left:T[3].scrollWidth/4,behavior:"smooth"})},6e3);T[3].addEventListener("mousedown",()=>{clearInterval(Be)});T[3].addEventListener("touchstart",()=>{clearInterval(Be)});T[3].addEventListener("mouseup",()=>{Be=setInterval(()=>{T[3].scrollBy({left:T[3].scrollWidth/4,behavior:"smooth"})},6e3)});T[3].addEventListener("touchend",()=>{Be=setInterval(()=>{T[3].scrollBy({left:T[3].scrollWidth/4,behavior:"smooth"})},6e3)});let _n=!1;const rs=document.getElementById("messageModulePanel"),Ca=document.getElementById("messageModulePanelButton");Ca.addEventListener("click",()=>{_n=!_n,_n?rs.classList.add("open"):rs.classList.remove("open")});let te=0;function Da(){for(let s=0;s<yn.length;s++){let e=document.createElement("div");e.classList.add("messageModuleMessage"),e.innerHTML=`<p class="messageText"><i>${yn[s].text}:</i></p> <p class="messageUser">${yn[s].user}</p>`,vn[te].appendChild(e),te=te>=3?0:te+1}te=0,vn.forEach((s,e)=>{let i=s.querySelector(".messageModuleMessage");if(i){let o=i.cloneNode(!0);o.classList.add("trackReset"),s.appendChild(o)}}),vn.forEach((s,e)=>{let i=s.querySelectorAll(".messageModuleMessage")[1];if(i){let o=i.cloneNode(!0);s.appendChild(o)}})}Da();
