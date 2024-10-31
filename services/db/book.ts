import { firebase } from "@/utils";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { constants } from "@/utils";

const { db } = firebase.config;

// TODO : better error handling
// TODO : verif if doc already exists
const add = async (book: BookDto) => {
  try {
    const docRef = await addDoc(collection(db, constants.BOOK_COLLECTION), {
      ...book,
    });

    console.log("Document ajouté avec ID :", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Erreur lors de l'ajout du document :", e);
  }
};

// TODO : better error handling
const get = async (bookId: string) => {
  const docRef = doc(db, constants.BOOK_COLLECTION, bookId);

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

// TODO : better error handling
const getAll = async () => {
  const querySnapshot = await getDocs(
    collection(db, constants.BOOK_COLLECTION)
  );

  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  // });

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// TODO : better error handling
const update = async (bookId: string, author: string, title: string) => {
  const docRef = doc(db, constants.BOOK_COLLECTION, bookId);

  try {
    await updateDoc(docRef, { author, title });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export default { add, get, getAll, update };
