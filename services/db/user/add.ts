// import { firebase } from "@/utils";
// import { collection, addDoc } from "firebase/firestore";

// const addData = async () => {
// 	const { db } = firebase.config;
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