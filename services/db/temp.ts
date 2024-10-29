// // Firestore
// // Pour utiliser Firestore et stocker des données dans la base de données de Firebase :

// // Ajouter des données :
// import { db } from "./App";
// import { collection, addDoc } from "firebase/firestore";

// const addData = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       name: "John Doe",
//       email: "johndoe@example.com",
//     });
//     console.log("Document ajouté avec ID :", docRef.id);
//   } catch (e) {
//     console.error("Erreur lors de l'ajout du document :", e);
//   }
// };



// // Récupérer des données :
// import { db } from "./App";
// import { collection, getDocs } from "firebase/firestore";

// const fetchData = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   });
// };



// import { db } from './firebaseConfig';
// import { collection, addDoc, getDocs } from "firebase/firestore";

// const addUser = async (name: string, email: string) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), { name, email });
//     console.log("Document ajouté avec ID :", docRef.id);
//   } catch (e) {
//     console.error("Erreur lors de l'ajout du document :", e);
//   }
// };

// const fetchUsers = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   });
// };
