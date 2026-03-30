import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Foundations from './pages/Foundations';
import Communication from './pages/Communication';
import Advanced from './pages/Advanced';
import SelfImprovement from './pages/SelfImprovement';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Foundations />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/self-improvement" element={<SelfImprovement />} />
        </Routes>
      </Layout>
    </Router>
  );
}
