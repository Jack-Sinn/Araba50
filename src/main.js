document.querySelector(
  "#app"
).innerHTML = `<div id="titleFloat">ARABA @ 50 CELEBRATION</div><div id="mainColumnA"></div><div id="mainColumnB"></div>`;

// Initialize the main columns
const mainColumnA = document.getElementById("mainColumnA");
const mainColumnB = document.getElementById("mainColumnB");
// Create the message module panel
mainColumnA.innerHTML = `<div id="messageModule">
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
        <div id="messageModulePanelButton"><img src="/message.svg" alt="" /></div>
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
      </div>`;

mainColumnB.innerHTML = `<div class="videoSection">
  <h2>Birthday Wishes</h2>
  <p>Thank you for what all you do for our community!</p>
  <video width="640" height="360" controls poster="/blacksquare.png" src="/video1.mp4"></video>
  <p>Words can barely capture it</p>
</div>
<div class="videoSection">
  <h2>Humble Beginnings</h2>
  <p>Some preamble on Arabas story</p>
  <video width="640" height="360" controls poster="/blacksquare.png" src="/video2.mp4"></video>
  <p>We've all had a journey</p>
</div>
<span>@50 Music List</span>
<iframe 
  width="90%"
  aspectratio="16/9"
  height="320"
  title="YouTube video player"
  src="https://www.youtube.com/embed/videoseries?list=PLujr2enf4jz07QsIlXzsQg0-kRvR-DPNG" 
  frameborder="0" 
  style="pointer-events: auto; z-index: 1;"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

<div style="min-height: 3vh; width: 100%"></div>
<p style="font-size: 1.2rem">For your gifts on this joyous occasion kindly use</p>
<span><img src="momo.png" class="moneyImg" />Momo @ 0596043456 </span>
or
<span><img src="zelle.png" class="moneyImg" />Zelle @ 0596043456</span>
<span>Rosemary Gifty Araba Oppong Mensah</span>

<span style="font-style: italic;text-decoration:none">"Thank You Lord for how far you've brought me</span>
<span style="font-style: italic;text-decoration:none">by your grace i'm crossing 90 with ease"</span>
<div style="min-height: 5vh; width: 100%"></div>
`;

document.addEventListener("DOMContentLoaded", () => {
  import("./elementScrollReveal.js");
  import("./messageModule.js");
  console.log("Modules loaded successfully");
});
// This is a test message to ensure the script is running correctly. If you see this, the script is working!
