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

type TModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  selectedBook: string;
  onClose: () => void;
};

const Modal = ({
  isVisible,
  setIsVisible,
  selectedBook,
  onClose,
}: TModalProps) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // db.comment.add(selectedBook, comment);
    console.log(`Commentaire pour le livre ${selectedBook}: ${comment}`);

    setComment("");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <ModalRN visible={isVisible}>
      <View style={styles.modal}>
        <Text style={styles.title}>Ajouter un commentaire</Text>
        <TextInput
          style={styles.input}
          placeholder="Tapez votre commentaire"
          value={comment}
          onChangeText={setComment}
        />
        <View style={styles.buttons}>
          <Button title="Fermer" onPress={onClose} />
          <Button title="Envoyer" onPress={handleSubmit} />
        </View>
      </View>
    </ModalRN>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default Modal;
