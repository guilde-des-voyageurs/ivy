import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuqjsdTn8YveGJ3cSmOjb5JzDBCy6TvNg",
  authDomain: "ivy-runesdechene.firebaseapp.com",
  projectId: "ivy-runesdechene",
  storageBucket: "ivy-runesdechene.firebasestorage.app",
  messagingSenderId: "883999443638",
  appId: "1:883999443638:web:f241d95f94b2c605cc3417",
  measurementId: "G-5DSH99GZ66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
