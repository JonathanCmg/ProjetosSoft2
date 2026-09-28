import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';

export default function Home() {
    const [tarefas, setTarefas] = useState([]);
    const [carregando, setCarregando] = useState(false);

    async function listarTarefas() {
        setCarregando(true);

        fetch('https://dummyjson.com/todos')
            .then(response => {
                response.json().then(dados => {
                    setTarefas(dados.todos);
                    setCarregando(false);
                });
            })
            .catch(err => {
                alert('Erro ao listar tarefas!');
                setCarregando(false);
            });
    }

    useEffect(() => {
        listarTarefas();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {carregando && tarefas.length === 0 ? (
                <ActivityIndicator size="large" />
            ) : (
                <FlatList
                    data={tarefas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <Card.Content>
                                <Text variant="bodyLarge">
                                    {item.todo}
                                </Text>

                                <Text variant="bodyMedium">
                                    {item.completed ? 'Concluída' : 'Pendente'}
                                </Text>
                            </Card.Content>
                        </Card>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={carregando}
                            onRefresh={listarTarefas}
                        />
                    }
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    card: {
        margin: 8,
    },
});