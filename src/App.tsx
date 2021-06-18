import React from 'react';
import './App.css';
import { ImageViewer } from './modules/imageViewer';
import { ThemeProvider } from './modules/theme'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ImageViewer />
      </div>
    </ThemeProvider>
  );
}

export default App;
