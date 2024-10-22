import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { Driver } from "../types/driver";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

export const getDrivers = async () => {
  try {
    const snapshot = await get(child(dbRef, "drivers"));

    if (!snapshot.exists()) {
      console.log("No data available");
    }

    return snapshot.val();
  } catch (error) {
    console.error(error);
  }
};

export const getDriver = async (name: string): Promise<Driver | null> => {
  try {
    const driversRef = ref(db, "drivers");
    const snapshot = await get(driversRef);

    if (!snapshot.exists()) {
      console.log("No drivers found.");
      return null;
    }

    // Indexes as keys
    const drivers = snapshot.val() as Record<string, Driver>;
    const driver = Object.values(drivers).find(
      (d: Driver) => d.name === name
    ) as Driver | undefined;

    if (!driver) {
      console.log("Driver not found.");
      return null;
    }

    // console.log(driver);
    return driver;
  } catch (error) {
    console.error("Error fetching driver:", error);
    return null;
  }
};
