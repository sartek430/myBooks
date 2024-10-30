import { firebase } from "@/utils";
import { doc, getDoc } from "firebase/firestore";

const me = async (userId: string) => {
  const { db } = firebase.config;

  const docRef = doc(db, "user", userId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

export default me;
