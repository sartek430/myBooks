import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { firebase } from "@/utils";
import { User } from "firebase/auth";

// Typage du contexte
type TAuthProps = {
  user: User | null; // Utilisateur connecté
  userId: string; // ID de l'utilisateur connecté
  isLoading: boolean; // Chargement de l'utilisateur
};

// Création du contexte avec une valeur par défaut `undefined`
const AuthContext = createContext<TAuthProps | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte d'authentification
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};

// Fournisseur de contexte pour gérer l'état d'authentification
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.config.auth.onAuthStateChanged((_user) => {
      //   console.log("onAuthStateChanged:", _user);
      console.log(`User ${_user ? "connected" : "disconnected"}`);

      setUser(_user); // Met à jour l'utilisateur
      setUserId(_user ? _user.uid : ""); // Met à jour l'ID de l'utilisateur
      setIsLoading(isLoading ? false : true); // Met à jour le chargement
    });

    return () => unsubscribe();
  }, [firebase.config.auth]);

  return (
    <AuthContext.Provider value={{ user, userId, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export des composants pour une utilisation dans d'autres parties de l'application
export default { useAuth, AuthProvider };
