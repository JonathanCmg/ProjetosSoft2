import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

export default function CardUsuario({ usuario }) {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={`${usuario.firstName} ${usuario.lastName}`}
                subtitle={usuario.email}
                left={(props) => (
                    <Avatar.Text
                        {...props}
                        label={usuario.firstName.charAt(0)}
                    />
                )}
            />

            <Card.Content>
                <Text variant="bodyMedium">
                    Idade: {usuario.age}
                </Text>

                <Text variant="bodyMedium">
                    Cidade: {usuario.address.city}
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
    },
});