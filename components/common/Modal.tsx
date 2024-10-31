import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal as ModalRN,
} from "react-native";
import { db } from "@/services";
import { AuthContext } from "@/contexts";

type TModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  selectedBookId: string;
  onClose: () => void;
};

const Modal = ({
  isVisible,
  setIsVisible,
  selectedBookId,
  onClose,
}: TModalProps) => {
  const [comment, setComment] = useState("");
  const { userId } = AuthContext.useAuth();
  const handleSubmit = () => {
    db.comment.add(selectedBookId, comment, userId);
    // console.log(`Commentaire pour le livre ${selectedBookId}: ${comment}`);

    setComment("");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <ModalRN visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Ajouter un commentaire</Text>
          <TextInput
            style={styles.input}
            placeholder="Tapez votre commentaire"
            value={comment}
            onChangeText={setComment}
            multiline
          />
          <View style={styles.buttons}>
            <Button title="Fermer" onPress={onClose} color="#ff5c5c" />
            <Button title="Envoyer" onPress={handleSubmit} color="#4CAF50" />
          </View>
        </View>
      </View>
    </ModalRN>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default Modal;
