import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import Home from './src/pages/Home';

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}