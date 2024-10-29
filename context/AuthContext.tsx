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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.config.auth.onAuthStateChanged((user) => {
      console.log("onAuthStateChanged:", user);

      setUser(user); // Met à jour l'utilisateur
      if (isLoading) setIsLoading(false); // Met à jour le chargement
    });

    return () => unsubscribe();
  }, [firebase.config.auth]);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export des composants pour une utilisation dans d'autres parties de l'application
export default { useAuth, AuthProvider };
