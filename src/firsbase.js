import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqV7a74rIZfiSkoKZe_Kvk-rma8dIJZac",
  authDomain: "otp-app-demo-7c1da.firebaseapp.com",
  databaseURL: "https://otp-app-demo-7c1da-default-rtdb.firebaseio.com",
  projectId: "otp-app-demo-7c1da",
  storageBucket: "otp-app-demo-7c1da.appspot.com",
  messagingSenderId: "130925204569",
  appId: "1:130925204569:web:174f2b416ad0d080a78d48"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
