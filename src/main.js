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
        <div id="messageModulePanelButton"><img src="src/resources/message.svg" alt="" /></div>
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
  <video width="640" height="360" controls poster="src/resources/blacksquare.png" src="src/resources/video1.mp4"></video>
  <p>Words can barely capture it</p>
</div>
<div class="videoSection">
  <h2>Humble Beginnings</h2>
  <p>Some preamble on Arabas story</p>
  <video width="640" height="360" controls poster="src/resources/blacksquare.png" src="src/resources/video2.mp4"></video>
  <p>We've all had a journey</p>
</div>
<p style="font-size: 1.2rem">For your gifts on this joyous occasion kindly use</p>
<span><img src="src/resources/momo.png" class="moneyImg" />Momo @ 0596043456 </span>
or
<span><img src="src/resources/zelle.png" class="moneyImg" />Zelle @ 0596043456</span>
<span>Rosemary Gifty Araba Oppong Mensah</span>
<div style="min-height: 5vh; width: 100%"></div>
`;

document.addEventListener("DOMContentLoaded", () => {
  import("./elementScrollReveal.js");
  import("./messageModule.js");
  console.log("Modules loaded successfully");
});
// This is a test message to ensure the script is running correctly. If you see this, the script is working!
