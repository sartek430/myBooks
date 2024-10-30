import { firebase } from "@/utils";
import { collection, getDocs } from "firebase/firestore";

const getAll = async () => {
	const { db } = firebase.config;

	const querySnapshot = await getDocs(collection(db, "user"));

	querySnapshot.forEach((doc) => {
	  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
	});
};

export default getAll;
