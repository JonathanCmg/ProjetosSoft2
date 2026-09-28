import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import CardPaper from '../components/CardPaper';
import Botao from '../components/Botao';
import Texto from '../components/Texto';

export default function Home() {
    return (
        <View style={styles.container}>
            <Texto />
            <CardPaper />
            <Botao />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});