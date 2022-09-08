import {collection,
  doc,
  getDocs,
  setDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { firebase} from "../firebase.config";

// Saving new item
export const saveItem = async (data) => {
  await setDoc(doc(firebase, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firebase, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};