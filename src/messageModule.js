import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "araba50messages.firebaseapp.com",
  projectId: "araba50messages",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchData() {
  try {
    const querySnapshot = await getDocs(collection(db, "messageArray"));
    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(dataArray);
    return dataArray;
  } catch (error) {
    console.error("Error fetching Firestore data:", error);
  }
}
let messageArray = [];
let initialLoopPosition = 0;

fetchData()
  .then((data) => {
    if (data && data.length > 0) {
      messageArray = data;
    }
  })
  .then(() => assignMessagesToTracks())
  .then(() => {
    initialLoopPosition = messageModuleRows[0].getBoundingClientRect().left;
  });

//#region Message Loop Dragging and Auto-Scrolling
let messageModuleRows = document.querySelectorAll(".messageModuleRow");
let messageModuleRowTracks = document.querySelectorAll(".messageModuleRowTrack");
let trackResets = document.querySelectorAll(".trackReset");
//find the position of the first message loop
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
  // add copy of the second message of each row to the end of the row
  messageModuleRowTracks.forEach((track, index) => {
    let secondMessage = track.querySelectorAll(".messageModuleMessage")[1];
    if (secondMessage) {
      let copy = secondMessage.cloneNode(true);
      track.appendChild(copy);
    }
  });
}

//#endregion
async function submitNewMessage() {
  try {
    const docRef = await addDoc(collection(db, "messageArray"), {
      text: document.getElementById("messageUserMessage").value,
      user: document.getElementById("messageUserName").value,
    });
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

let messagePanelOpen = false;
const messagePanel = document.getElementById("messageModulePanel");
const messagePanelButton = document.getElementById("messageModulePanelButton");
messagePanelButton.addEventListener("click", () => {
  messagePanelOpen = !messagePanelOpen;
  if (messagePanelOpen) {
    messagePanel.classList.add("open");
  } else {
    messagePanel.classList.remove("open");
  }
});
const messageUserSubmit = document.getElementById("messageUserSubmit");
messageUserSubmit.addEventListener("click", () => {
  submitNewMessage();
  document.getElementById("messageUserMessage").value = "";
  document.getElementById("messageUserName").value = "";
  messagePanelOpen = false;
  messagePanel.classList.remove("open");
});
