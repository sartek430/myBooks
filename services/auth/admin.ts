import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "@/utils";
import { Alert } from "react-native";
import admin from "firebase-admin";

interface AdminUser {
  uid: string;
  email: string;
  isAdmin: boolean;
}

const loginAdmin = async (email: string, password: string): Promise<AdminUser | null> => {
  const { config, getErrorMessage } = firebase;

  try {
    const userCredential = await signInWithEmailAndPassword(config.auth, email, password);
    const user = userCredential.user;

    if (user) {
      const token = await user.getIdTokenResult();

      // Vérifie si l'utilisateur a le rôle d'admin
      if (token.claims.admin) {
        console.log("Connexion admin réussie :", user);
        return {
          uid: user.uid,
          email: user.email || "",
          isAdmin: true
        };
      } else {
        Alert.alert("Accès refusé", "Cet utilisateur n'est pas un administrateur.");
        return null;
      }
    }
  } catch (error: any) {
    const err = error as FirebaseError;
    console.error("Erreur lors de la connexion admin :", err.message);
    Alert.alert(err.name, getErrorMessage(err.code));
  }

  return null;
};

const getAllUsers = async () => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    return listUsersResult.users.map((userRecord: { uid: string; email: string; displayName: string; }) => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    throw error;
  }
};

const grantAdminRole = async (uid: string) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`Rôle admin accordé à l'utilisateur : ${uid}`);
  } catch (error) {
    console.error("Erreur lors de l'attribution du rôle admin :", error);
  }
};

// Fonction pour supprimer un rôle d'admin
const revokeAdminRole = async (uid: string) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: false });
    console.log(`Rôle admin révoqué pour l'utilisateur : ${uid}`);
  } catch (error) {
    console.error("Erreur lors de la révocation du rôle admin :", error);
  }
};

export { loginAdmin, getAllUsers, grantAdminRole, revokeAdminRole };
