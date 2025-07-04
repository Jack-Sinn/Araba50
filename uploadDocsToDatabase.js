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
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_i04DAMCW9yIFwsvcSV-6txGA6itEFm0",
  authDomain: "araba50messages.firebaseapp.com",
  projectId: "araba50messages",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendData() {
  messageArray.forEach(async (message) => {
    try {
      const docRef = await addDoc(collection(db, "messageArray"), {
        text: message.text,
        user: message.user,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  });
}

sendData();
