import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function TituloUsuarios() {
    return (
        <Text style={styles.titulo}>
            Usuários
        </Text>
    );
}

const styles = StyleSheet.create({
    titulo: {
        margin: 20,
        textAlign: 'center',
    },
});