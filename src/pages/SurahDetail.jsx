import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDetailSurah } from '../services/surahService';

export default function SurahDetail() {
  const { nomor } = useParams(); // Menangkap :nomor dari URL
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getDetailSurah(nomor);
        setDetail(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [nomor]); // Jalankan ulang jika nomor di URL berubah

  if (loading) return <p>Memuat ayat...</p>;

  return (
    <div style={{ padding: '20px' }}>
    
      <h1 style={{
        marginBottom: '100px',
        
        }}>{detail.namaLatin} ({detail.nama})</h1>

      <hr />
      <Link to="/">← Kembali ke Daftar</Link>
      {detail.ayat.map((item) => (
       <div 
       key={item.nomorAyat} 
       style={{ 
         marginBottom: '20px', // Jarak antar kotak ayat
         padding: '20px', 
         borderBottom: '1px solid #333', // Garis tipis pemisah
         backgroundColor: '#1a1a1a' // Background gelap agar nyaman di mata
       }}
     >
       {/* Teks Arab dengan font Amiri dan jarak baris tinggi */}
       <p className="arabic-text" style={{ 
         fontSize: '20px', 
         margin: '0 0 20px 0', 
         color: '#ffffff' 
       }}>
         {item.teksArab} <span style={{ fontSize: '1.2rem', color: '#888' }}>({item.nomorAyat})</span>
       </p>
       
       {/* Teks Terjemahan */}
       <p style={{ 
         textAlign: 'left', 
         color: '#ccc', 
         lineHeight: '1.6', 
         fontSize: '1rem' 
       }}>
         {item.teksIndonesia}
       </p>
     </div>
      ))}
    </div>
  );
}
