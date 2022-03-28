import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './routes/login';
import NotFound from './routes/notFound';

function App() {
  return (
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
      </Routes>
  );
}

export default App;
