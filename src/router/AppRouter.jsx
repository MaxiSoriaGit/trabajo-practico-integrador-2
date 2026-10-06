import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
