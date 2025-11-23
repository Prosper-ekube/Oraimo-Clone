import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAak-_HQKtIDqmW3ZDT3QsK0Nz8nys0Dsw",
  authDomain: "oraimo-clone.firebaseapp.com",
  projectId: "oraimo-clone",
  storageBucket: "oraimo-clone.firebasestorage.app",
  messagingSenderId: "536705305250",
  appId: "1:536705305250:web:61a0d645882a36144725fb",
  measurementId: "G-SEZZ2R5WQJ"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)