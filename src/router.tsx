import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DocumentView from './pages/DocumentView';
import Automation from './pages/Automation';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/document/:id" element={<DocumentView />} />
      <Route path="/automation" element={<Automation />} />
    </Routes>
  );
}
