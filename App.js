import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import Usuarios from './src/pages/Usuarios';

export default function App() {
  return (
    <PaperProvider>
      <Usuarios />
    </PaperProvider>
  );
}