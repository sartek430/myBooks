import { signOut } from "firebase/auth";
import { firebase } from "@/utils";
import { Alert } from "react-native";
import { FirebaseError } from "firebase/app";

const logout = async () => {
	const { config, getErrorMessage } = firebase;

  try {
    await signOut(config.auth);

	console.log("Déconnexion réussie");
	// Alert.alert("Déconnexion réussie");
	// TODO : toast message
  } catch (error: any) {
	const err = error as FirebaseError;

    console.error("Erreur lors de la déconnexion :", err.message);
	Alert.alert(err.name, getErrorMessage(err.code));
  }
};

export default logout;
