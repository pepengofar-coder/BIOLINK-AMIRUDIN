import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BiolinkPage from './pages/BiolinkPage';

import './styles/index.css';
import './components/shared/shared.css';

/**
 * App — Root application with routing
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BiolinkPage />} />
        {/* Admin dashboard route will be added in Phase 2 */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
