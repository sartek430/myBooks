import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "@/utils";
import { Alert } from "react-native";

const login = async (email: string, password: string) => {
	const { config, getErrorMessage } = firebase;

  try {
    const userCredential = await signInWithEmailAndPassword(config.auth, email, password);

    const user = userCredential.user;

    console.log("Connexion réussie : ", user);
	// Alert.alert("Connexion réussie", JSON.stringify(user));
	// TODO : toast message
  } catch (error: any) {
	const err = error as FirebaseError;

    console.error("Erreur lors de la connexion :", err.message);
	Alert.alert(err.name, getErrorMessage(err.code));
  }
};

export default login;
