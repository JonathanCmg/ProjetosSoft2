import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Botao() {
    return (
        <Button
            mode="contained"
            style={styles.botao}
        >
            Ação
        </Button>
    );
}

const styles = StyleSheet.create({
    botao: {
        margin: 10,
    },
});