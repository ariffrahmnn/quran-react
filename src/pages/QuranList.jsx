import { useState, useEffect } from 'react';
import { getAllSurah } from '../services/surahService';
import { Link } from 'react-router-dom';

export default function QuranList() {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const data = await getAllSurah();
        setSurahs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, []);

  if (loading) return <p>Sedang memuat daftar surah...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Surah</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '50px' }}>
        {surahs.map((surah) => (
          <Link 
            to={`/surat/${surah.nomor}`} 
            key={surah.nomor} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', height: '100%' }}>
              <h3 style={{ margin: '0' }}>{surah.nomor}. {surah.namaLatin}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{surah.arti} ({surah.jumlahAyat} Ayat)</p>
              <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>{surah.nama}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}