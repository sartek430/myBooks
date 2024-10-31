import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "@/utils";
import Toast from "react-native-toast-message";

const login = async (email: string, password: string) => {
	const { config, getErrorMessage } = firebase;

  try {
    const userCredential = await signInWithEmailAndPassword(config.auth, email, password);

    const user = userCredential.user;

    console.log("Connexion réussie : ", user);

	Toast.show({
	  type: "success",
	  position: "bottom",
	  text1: "Success",
	  text2: "You are now connected",
	  visibilityTime: 3000,
	  autoHide: true,
	});
  } catch (error: any) {
	const err = error as FirebaseError;

	// console.error("Erreur lors de la connexion :", err.message);

	Toast.show({
	  type: "error",
	  position: "bottom",
	  text1: err.name,
	  text2: getErrorMessage(err.code),
	  visibilityTime: 3000,
	  autoHide: true,
	});
  }
};

export default login;
