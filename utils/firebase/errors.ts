type TFirebaseErrorMessages = { [key: string]: string };

const errorMessages: TFirebaseErrorMessages = {
  "auth/invalid-email": "L'adresse email est invalide.",
  "auth/missing-password": "Le mot de passe est requis.",
  "auth/wrong-password": "Le mot de passe est incorrect.",
  "auth/user-not-found": "Utilisateur non trouvé.",
  "auth/invalid-credential": "Les informations d'identification sont invalides.",
  "auth/too-many-requests": "Trop de tentatives, veuillez réessayer plus tard.",
};

const getErrorMessage = (errorCode: string): string => {
  return errorMessages[errorCode] || "Une erreur inconnue s'est produite.";
};

export default getErrorMessage;
