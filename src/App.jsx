import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuranList from './pages/QuranList';
import SurahDetail from './pages/SurahDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuranList />} />
        
        <Route path="/surat/:nomor" element={<SurahDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;