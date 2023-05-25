import React from 'react';
import LitChatContainer from './components/LitChatContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LitChatContainer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
