/*import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);*/

let messageArray = [
  {
    user: "John Doe",
    text: "Happy 50th Birthday!",
  },
  {
    user: "Jane Smith",
    text: "Wishing you a fantastic year ahead!",
  },
  {
    user: "Alice Johnson",
    text: "Cheers to 50 years of amazing memories!",
  },
  {
    user: "Bobert Green",
    text: "Here's to many more adventures together!",
  },
  {
    user: "Charlie Brown",
    text: "Celebrating 50 years of friendship!",
  },
  {
    user: "David Smith",
    text: "Here's to the next chapter!",
  },
  {
    user: "Emily Davis",
    text: "Cheers to 50 years of love and laughter!",
  },
  {
    user: "Frank Wilson",
    text: "Here's to many more years of happiness!",
  },
  {
    user: "George Martin",
    text: "Wishing you all the best on this special occasion!",
  },
  {
    user: "Hannah Brown",
    text: "Here's to 50 years of wonderful memories!",
  },
  {
    user: "Irene Adler",
    text: "Celebrating a lifetime of achievements!",
  },
  {
    user: "Jack Daniels",
    text: "Here's to 50 years of great times!",
  },
  {
    user: "Kathy Lee",
    text: "Wishing you a fabulous 50th birthday!",
  },
  {
    user: "Liam Neeson",
    text: "Cheers to 50 years of love and laughter!",
  },
  {
    user: "Mia Wong",
    text: "Here's to many more years of happiness!",
  },
  {
    user: "Nina Simone",
    text: "Celebrating a lifetime of wonderful memories!",
  },
  {
    user: "Oscar Wilde",
    text: "Wishing you all the best on this special occasion!",
  },
  {
    user: "Paul Atreides",
    text: "Here's to the next chapter in your life!",
  },
  {
    user: "Quinn Fabray",
    text: "Wishing you a fabulous 50th birthday!",
  },
  {
    user: "Ryder Lynn",
    text: "Cheers to 50 years of love and laughter!",
  },
  {
    user: "Samantha Evans",
    text: "Here's to many more years of happiness!",
  },
  {
    user: "Tina Cohen-Chang",
    text: "Celebrating a lifetime of wonderful memories!",
  },
  {
    user: "Ursula K. Le Guin",
    text: "Wishing you all the best on this special occasion!",
  },
  {
    user: "Wanda Maximoff",
    text: "Wishing you a fabulous 50th birthday!",
  },
  {
    user: "Xander Harris",
    text: "Cheers to 50 years of love and laughter!",
  },
  {
    user: "Yara Greyjoy",
    text: "Here's to many more years of happiness!",
  },
  {
    user: "Zoe Washburne",
    text: "Celebrating a lifetime of wonderful memories!",
  },
  {
    user: "Victor Hugo",
    text: "Here's to the next chapter in your life!",
  },

  // Add more messages as needed
];

//#region Message Loop Dragging and Auto-Scrolling
let messageModuleRows = document.querySelectorAll(".messageModuleRow");
let messageModuleRowTracks = document.querySelectorAll(".messageModuleRowTrack");
let trackResets = document.querySelectorAll(".trackReset");
//find the position of the first message loop
let initialLoopPosition = messageModuleRows[0].getBoundingClientRect().left;
// Reset Position when track reset reaches the same position as the first message started
messageModuleRows.forEach((Row) => {
  Row.addEventListener("scroll", (e) => {
    let firstMessage = Row.querySelector(".message");
    let trackReset = Row.querySelector(".trackReset");
    if (trackReset.getBoundingClientRect().left <= initialLoopPosition) {
      // Reset the position of the track
      Row.scrollLeft = 0;
      console.log("Resetting Row Position");
    }
  });
});
// Automatically scroll the message loop to the right

let scrollInterval0 = setInterval(() => {
  messageModuleRows[0].scrollBy({
    left: messageModuleRows[0].scrollWidth / 4,
    behavior: "smooth",
  });
}, 6000);
messageModuleRows[0].addEventListener("mousedown", () => {
  clearInterval(scrollInterval0);
});
messageModuleRows[0].addEventListener("touchstart", () => {
  clearInterval(scrollInterval0);
});

messageModuleRows[0].addEventListener("mouseup", () => {
  scrollInterval0 = setInterval(() => {
    messageModuleRows[0].scrollBy({
      left: messageModuleRows[0].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
messageModuleRows[0].addEventListener("touchend", () => {
  scrollInterval0 = setInterval(() => {
    messageModuleRows[0].scrollBy({
      left: messageModuleRows[0].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
//////////////////////////////////////////////////////////

let scrollInterval1 = setInterval(() => {
  messageModuleRows[1].scrollBy({
    left: messageModuleRows[1].scrollWidth / 4,
    behavior: "smooth",
  });
}, 6000);
messageModuleRows[1].addEventListener("mousedown", () => {
  clearInterval(scrollInterval1);
});
messageModuleRows[1].addEventListener("touchstart", () => {
  clearInterval(scrollInterval1);
});

messageModuleRows[1].addEventListener("mouseup", () => {
  scrollInterval1 = setInterval(() => {
    messageModuleRows[1].scrollBy({
      left: messageModuleRows[1].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
messageModuleRows[1].addEventListener("touchend", () => {
  scrollInterval1 = setInterval(() => {
    messageModuleRows[1].scrollBy({
      left: messageModuleRows[1].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});

//////////////////////////////////////////////////////////
let scrollInterval2 = setInterval(() => {
  messageModuleRows[2].scrollBy({
    left: messageModuleRows[2].scrollWidth / 4,
    behavior: "smooth",
  });
}, 6000);

messageModuleRows[2].addEventListener("mousedown", () => {
  clearInterval(scrollInterval2);
});
messageModuleRows[2].addEventListener("touchstart", () => {
  clearInterval(scrollInterval2);
});

messageModuleRows[2].addEventListener("mouseup", () => {
  scrollInterval2 = setInterval(() => {
    messageModuleRows[2].scrollBy({
      left: messageModuleRows[2].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
messageModuleRows[2].addEventListener("touchend", () => {
  scrollInterval2 = setInterval(() => {
    messageModuleRows[2].scrollBy({
      left: messageModuleRows[2].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
//////////////////////////////////////////////////////////
let scrollInterval3 = setInterval(() => {
  messageModuleRows[3].scrollBy({
    left: messageModuleRows[3].scrollWidth / 4,
    behavior: "smooth",
  });
}, 6000);

messageModuleRows[3].addEventListener("mousedown", () => {
  clearInterval(scrollInterval3);
});
messageModuleRows[3].addEventListener("touchstart", () => {
  clearInterval(scrollInterval3);
});

messageModuleRows[3].addEventListener("mouseup", () => {
  scrollInterval3 = setInterval(() => {
    messageModuleRows[3].scrollBy({
      left: messageModuleRows[3].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
messageModuleRows[3].addEventListener("touchend", () => {
  scrollInterval3 = setInterval(() => {
    messageModuleRows[3].scrollBy({
      left: messageModuleRows[3].scrollWidth / 4,
      behavior: "smooth",
    });
  }, 6000);
});
//#endregion

//#region Adding Messages
let messagePanelOpen = false;
const messagePanel = document.getElementById("messageModulePanel");
const messagePanelButton = document.getElementById("messageModulePanelButton");
messagePanelButton.addEventListener("click", () => {
  //console.log("Message Panel Button Clicked");
  messagePanelOpen = !messagePanelOpen;
  if (messagePanelOpen) {
    messagePanel.classList.add("open");
  } else {
    messagePanel.classList.remove("open");
  }
});
//#endregion

//setVideos to correct size

//#region Messages from database

let fourCycleCount = 0;

function assignMessagesToTracks() {
  for (let i = 0; i < messageArray.length; i++) {
    let message = document.createElement("div");
    message.classList.add("messageModuleMessage");
    message.innerHTML = `<p class="messageText"><i>${messageArray[i].text}:</i></p> <p class="messageUser">${messageArray[i].user}</p>`;
    //console.log(message);
    //console.log(`Message:${i} added to row ${fourCycleCount}`);
    messageModuleRowTracks[fourCycleCount].appendChild(message);
    fourCycleCount = fourCycleCount >= 3 ? 0 : fourCycleCount + 1;
  }
  fourCycleCount = 0; // Reset for the next set of messages
  //add copies of the first message of each row to the end of the row
  messageModuleRowTracks.forEach((track, index) => {
    let firstMessage = track.querySelector(".messageModuleMessage");
    if (firstMessage) {
      let copy = firstMessage.cloneNode(true);
      copy.classList.add("trackReset");
      track.appendChild(copy);
    }
  });
  ``;
  // add copy of the second message of each row to the end of the row
  messageModuleRowTracks.forEach((track, index) => {
    let secondMessage = track.querySelectorAll(".messageModuleMessage")[1];
    if (secondMessage) {
      let copy = secondMessage.cloneNode(true);
      track.appendChild(copy);
    }
  });
}

assignMessagesToTracks();
//#endregion
