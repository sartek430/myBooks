import { signOut } from "firebase/auth";
import { firebase } from "@/utils";
import { FirebaseError } from "firebase/app";
import Toast from "react-native-toast-message";

const logout = async () => {
	const { config, getErrorMessage } = firebase;

  try {
    await signOut(config.auth);

	console.log("Déconnexion réussie");

	Toast.show({
		type: "success",
		position: "bottom",
		text1: "Success",
		text2: "You are now disconnected",
		visibilityTime: 3000,
		autoHide: true,
	});
  } catch (error: any) {
	const err = error as FirebaseError;

    // console.error("Erreur lors de la déconnexion :", err.message);

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

export default logout;
