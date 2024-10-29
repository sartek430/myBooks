import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from "@/utils";
import { Alert } from "react-native";
import { FirebaseError } from "firebase/app";

const register = async (email: string, password: string) => {
	const { config, getErrorMessage } = firebase;

  try {
    const userCredential = await createUserWithEmailAndPassword(config.auth, email, password);

    const user = userCredential.user;

	console.log("Inscription réussie : ", JSON.stringify(user));
	// Alert.alert("Inscription réussie", JSON.stringify(user));
	// TODO : toast message
  } catch (error: any) {
	const err = error as FirebaseError;

    console.error("Erreur lors de l'inscription :", err.message);
	Alert.alert(err.name, getErrorMessage(err.code));
  }
};

export default register;
