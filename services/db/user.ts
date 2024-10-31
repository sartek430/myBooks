import { firebase } from "@/utils";
import { doc, getDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { AuthContext } from "@/contexts";
import { constants } from "@/utils";

const { db } = firebase.config;


// TODO : better error handling
// const addData = async () => {
//   try {
    // const docRef = await addDoc(collection(db, constants.USER_COLLECTION), {
//       name: "John Doe",
//       email: "johndoe@example.com",
//     });
//     console.log("Document ajouté avec ID :", docRef.id);
//   } catch (e) {
//     console.error("Erreur lors de l'ajout du document :", e);
//   }
// };
// const addUser = async (name: string, email: string) => {
//   try {
//     const docRef = await addDoc(collection(db, constants.USER_COLLECTION), { name, email });
//     console.log("Document ajouté avec ID :", docRef.id);
//   } catch (e) {
//     console.error("Erreur lors de l'ajout du document :", e);
//   }
// };







// TODO : better error handling
// const get = async () => {
// 	const querySnapshot = await getDocs(collection(db, constants.USER_COLLECTION));

// 	querySnapshot.forEach((doc) => {
// 	  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// 	});
// };

// export default get;




// TODO : better error handling
// const getAll = async () => {
// 	const querySnapshot = await getDocs(collection(db, constants.USER_COLLECTION));

// 	querySnapshot.forEach((doc) => {
// 	  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// 	});
// };

// export default getAll;








// TODO : better error handling
const me = async () => {
  const { userId } = AuthContext.useAuth();

  const docRef = doc(db, constants.USER_COLLECTION, userId);

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

export default { me };
