export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Reaxzy25Pedia</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Selamat datang di layanan API Reaxzy25Pedia.<br />Silakan gunakan endpoint yang tersedia untuk integrasi dengan sistem Anda.</p>
      <a href="/api/orderkuota-callback" style={{ marginTop: '2rem', padding: '10px 20px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', borderRadius: '8px' }}>
        Lihat Callback API
      </a>
    </div>
  );
}