(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const y="modulepreload",M=function(u){return"/Araba50/"+u},v={},g=function(a,l,m){let e=Promise.resolve();if(l&&l.length>0){let p=function(t){return Promise.all(t.map(n=>Promise.resolve(n).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var c=p;document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=i?.nonce||i?.getAttribute("nonce");e=p(l.map(t=>{if(t=M(t),t in v)return;v[t]=!0;const n=t.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${d}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":y,n||(r.as="script"),r.crossOrigin="",r.href=t,o&&r.setAttribute("nonce",o),document.head.appendChild(r),n)return new Promise((h,f)=>{r.addEventListener("load",h),r.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return a().catch(s)})};document.querySelector("#app").innerHTML='<div id="titleFloat">ARABA @ 50 CELEBRATION</div><div id="mainColumnA"></div><div id="mainColumnB"></div>';const b=document.getElementById("mainColumnA"),w=document.getElementById("mainColumnB");b.innerHTML=`<div id="messageModule">
        <div id="messageModuleRow0" class="messageModuleRow">
          <div class="messageModuleRowTrack"></div>
        </div>
        <div id="messageModuleRow1" class="messageModuleRow">
          <div class="messageModuleRowTrack"></div>
        </div>
        <div id="messageModuleRow2" class="messageModuleRow">
          <div class="messageModuleRowTrack"></div>
        </div>
        <div id="messageModuleRow3" class="messageModuleRow">
          <div class="messageModuleRowTrack"></div>
        </div>
        <div id="messageModulePanelButton"><img src="message.svg" alt="" /></div>
        <div id="messageModulePanel" class="">
          <h1>
            Share Your Thoughts <br />
            with Araba!
          </h1>
          <p><i>Charcter Limit 80</i></p>
          <label for="messageUserName">Name</label>
          <input type="text" id="messageUserName" maxlength="25" placeholder="Bishop Namar" />
          <label for="messageUserMessage">Message</label>
          <textarea
            id="messageUserMessage"
            placeholder="Type your message here..."
            maxlength="80"
          ></textarea>
          <button id="messageUserSubmit">Submit</button>
          <div id="messageStatus"></div>
        </div>
      </div>`;w.innerHTML=`<div class="videoSection">
  <h2>Birthday Wishes</h2>
  <p>Thank you for what all you do for our community!</p>
  <video width="640" height="360" controls poster="blacksquare.png" src="video1.mp4"></video>
  <p>Words can barely capture it</p>
</div>
<div class="videoSection">
  <h2>Humble Beginnings</h2>
  <p>Some preamble on Arabas story</p>
  <video width="640" height="360" controls poster="blacksquare.png" src="video2.mp4"></video>
  <p>We've all had a journey</p>
</div>
<p style="font-size: 1.2rem">For your gifts on this joyous occasion kindly use</p>
<span><img src="momo.png" class="moneyImg" />Momo @ 0596043456 </span>
or
<span><img src="zelle.png" class="moneyImg" />Zelle @ 0596043456</span>
<span>Rosemary Gifty Araba Oppong Mensah</span>
<div style="min-height: 5vh; width: 100%"></div>
`;document.addEventListener("DOMContentLoaded",()=>{g(()=>import("./elementScrollReveal-CvvDQf1H.js"),[]),g(()=>import("./messageModule-GfCCl9n0.js"),[])});
