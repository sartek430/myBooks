import { firebase } from "@/utils";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { constants } from "@/utils";
import { AuthContext } from "@/contexts";
import Toast from "react-native-toast-message";

const { db } = firebase.config;

// TODO : better error handling
// TODO : verif if doc already exists
const add = async (bookId: string, message: string, userId: string) => {
  try {
    const docRef = await addDoc(collection(db, constants.COMMENT_COLLECTION), {
      bookId,
      creationDate: serverTimestamp(),
      message,
      updateDate: serverTimestamp(),
      userId,
    });

    console.log("commentaire ajouté avec ID :", docRef.id);

	Toast.show({
		type: "success",
		position: "bottom",
		text1: "Commentaire ajouté sur le livre",
		visibilityTime: 3000,
		autoHide: true
	});
  } catch (e) {
    // console.error("Erreur lors de l'ajout du document :", e);

	Toast.show({
		type: "error",
		position: "bottom",
		text1: "Erreur lors de l'ajout du commentaire",
		visibilityTime: 3000,
		autoHide: true
	});
  }
};

// TODO : better error handling
const get = async (commentId: string) => {
  const docRef = doc(db, constants.COMMENT_COLLECTION, commentId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data get comment:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

// TODO : better error handling
const getAll = async (userId: string) => {
  const q = query(
    collection(db, constants.COMMENT_COLLECTION),
    where("userId", "==", userId)
  );

  // const querySnapshot = await getDocs(collection(db, constants.USER_BOOKS_COLLECTION));
  const querySnapshot = await getDocs(q);

  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  // });  

  return querySnapshot.docs.map((doc) => (doc.data()));
};

// TODO : better error handling
const update = async (commentId: string, message: string) => {
  const docRef = doc(db, constants.COMMENT_COLLECTION, commentId);

  try {
    await updateDoc(docRef, { message, updateDate: serverTimestamp() });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export default { add, get, getAll, update };
