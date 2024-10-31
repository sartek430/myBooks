import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Modal = ({ isVisible, onClose, onSubmit }) => {
    const [comment, setComment] = useState('');
  
    if (!isVisible) {
      return null;
    }
  
    return (
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
          <Button
            title="Envoyer"
            onPress={() => {
              onSubmit(comment);
              setComment('');
            }}
          />
        </View>
      </View>
    );
  };
  
  export default Modal;
  
  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      padding: 10,
      backgroundColor: 'white',
      marginBottom: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
  });
  