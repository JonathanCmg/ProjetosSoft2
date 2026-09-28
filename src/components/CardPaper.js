import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

export default function CardPaper() {
  return (
    <Card style={styles.card}>
      <Card.Title
        title="Título Profissional"
        left={(props) => (
          <Avatar.Icon {...props} icon="folder" />
        )}
      />

      <Card.Content>
        <Text variant="bodyMedium">
          Conteúdo com React Native Paper.
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});