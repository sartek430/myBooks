import { firebase } from "@/utils";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { constants } from "@/utils";
import { AuthContext } from "@/contexts";

const { db } = firebase.config;

// TODO : better error handling
// TODO : verif if doc already exists
const add = async (bookId: string, userId: string) => {
  try {
    const docRef = await addDoc(
      collection(db, constants.USER_BOOKS_COLLECTION),
      { bookId, userId }
    );

    console.log("Livre ajouté au user :", docRef.id);
  } catch (e) {
    console.error("Erreur lors de l'ajout du document :", e);
  }
};

// TODO : better error handling
// const get = async (userBookId: string) => {
// 	const docRef = doc(db, constants.USER_BOOKS_COLLECTION, userBookId);

// 	try {
// 		const docSnap = await getDoc(docRef);

// 		if (docSnap.exists()) {
// 			console.log("Document data:", docSnap.data());
// 			return docSnap.data();
// 		} else {
// 			// doc.data() will be undefined in this case
// 			console.log("No such document!");
// 		}
// 	} catch (error) {
// 		console.error("Error getting document:", error);
// 	}
// };

// TODO : better error handling
const getAll = async (userId: string) => {
  const q = query(
    collection(db, constants.USER_BOOKS_COLLECTION),
    where("userId", "==", userId)
  );

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => doc.data().bookId);

  //   return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// TODO : better error handling
const update = async (userBookId: string, bookId: string) => {
  const { userId } = AuthContext.useAuth();

  const docRef = doc(db, constants.USER_BOOKS_COLLECTION, userBookId);

  try {
    await updateDoc(docRef, { bookId, userId });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export default { add, getAll, update };
