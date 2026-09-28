import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import TituloUsuarios from '../components/TituloUsuarios';
import Carregando from '../components/Carregando';
import CardUsuario from '../components/CardUsuario';

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);

    async function listarUsuarios() {
        setCarregando(true);

        fetch('https://dummyjson.com/users')
            .then(response => {
                response.json().then(dados => {
                    setUsuarios(dados.users);
                    setCarregando(false);
                });
            })
            .catch(err => {
                alert('Erro ao listar usuários!');
                setCarregando(false);
            });
    }

    useEffect(() => {
        listarUsuarios();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TituloUsuarios />

            {carregando && usuarios.length === 0 ? (
                <Carregando />
            ) : (
                <FlatList
                    data={usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardUsuario usuario={item} />
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});