import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCyK7GeBdnReMF4stK139wDAXHzb3BEY7E",
  authDomain: "airbnb-62994.firebaseapp.com",
  projectId: "airbnb-62994",
  storageBucket: "airbnb-62994.firebasestorage.app",
  messagingSenderId: "1018310514192",
  appId: "1:1018310514192:web:a77481bf3df84c2b83dc95"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };