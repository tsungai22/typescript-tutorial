import React from 'react';
import './App.css';

import { Footer } from "./domain/Footer";
import { Main } from "./domain/Main";

import { GlobalStyle } from "./design-system/styled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
