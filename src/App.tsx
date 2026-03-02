import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import _01Homepage17Nov  from './pages/_01Homepage17Nov ';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<_01Homepage17Nov  />} />
			<Route path="/_01Homepage17Nov " element={<_01Homepage17Nov  />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;