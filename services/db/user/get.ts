import { firebase } from "@/utils";
import { collection, getDoc, getDocs } from "firebase/firestore";

const get = async () => {
	const { db } = firebase.config;

	const querySnapshot = await getDocs(collection(db, "user"));

	querySnapshot.forEach((doc) => {
	  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
	});
};

export default get;
