import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [duration, setDuration] = useState('5 min');
  const [isPremium, setIsPremium] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    
    setTimeout(() => {
      setGeneratedContent({
        title: `Estrategia e Idea IA: ${topic}`,
        script: `[00:00 - 02:00] Gancho de alta retención sobre ${topic}.\n[02:00 - 15:00] Análisis profundo, datos clave y narrativa visual.\n[15:00 - ${duration}] Conclusiones finales, llamados a la acción y debate en comentarios.`,
        schedule: [
          { day: 'Lunes', time: '18:00 hrs', platform: 'TikTok / YouTube Shorts' },
          { day: 'Miércoles', time: '20:30 hrs', platform: 'YouTube (Largo)' },
          { day: 'Viernes', time: '17:00 hrs', platform: 'TikTok' }
        ],
        hashtags: '#Toktube #IA #Creadores #ContenidoViral'
      });
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div style={{
      backgroundColor: '#0d0d12',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        paddingBottom: '20px',
        borderBottom: '1px solid #222',
        marginBottom: '25px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto 25px auto'
      }}>
        <h1 style={{ margin: 0, color: '#ff0050', fontSize: '24px' }}>Toktube Studio AI 🚀</h1>
        <button
          onClick={() => setIsPremium(!isPremium)}
          style={{
            backgroundColor: isPremium ? '#ffd700' : '#222',
            color: isPremium ? '#000' : '#fff',
            border: '1px solid #ffd700',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {isPremium ? '👑 Plan Premium Activo' : '⭐ Pasarse a Premium'}
        </button>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Banner de Estado Plan */}
        {!isPremium && (
          <div style={{
            backgroundColor: '#1f1a08',
            border: '1px solid #ffd700',
            padding: '12px 20px',
            borderRadius: '10px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px', color: '#ffe875' }}>
              <strong>Modo Gratuito:</strong> Límite de 5 min. Activa Premium para generar videos de hasta 30 minutos y calendario semanal automático.
            </span>
            <button
              onClick={() => setIsPremium(true)}
              style={{
                backgroundColor: '#ffd700',
                color: '#000',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Desbloquear
            </button>
          </div>
        )}

        {/* Panel Principal */}
        <div style={{
          backgroundColor: '#16161f',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #2a2a38',
          marginBottom: '20px'
        }}>
          <h3 style={{ marginTop: 0 }}>Generador de Ideas y Guiones</h3>
          
          <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Tema o concepto:</label>
          <input
            type="text"
            placeholder="Ej: Historia oculta de la tecnología..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #333',
              backgroundColor: '#0d0d12',
              color: '#fff',
              boxSizing: 'border-box',
              marginBottom: '15px'
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Plataforma:</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #333',
                  backgroundColor: '#0d0d12',
                  color: '#fff'
                }}
              >
                <option value="TikTok">TikTok (Short / Longform)</option>
                <option value="YouTube">YouTube / Shorts</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>
                Duración del video:
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #333',
                  backgroundColor: '#0d0d12',
                  color: '#fff'
                }}
              >
                <option value="1 min">1 minuto (Gratis)</option>
                <option value="5 min">5 minutos (Gratis)</option>
                <option value="10 min" disabled={!isPremium}>10 minutos {!isPremium && '(👑 Premium)'}</option>
                <option value="15 min" disabled={!isPremium}>15 minutos {!isPremium && '(👑 Premium)'}</option>
                <option value="30 min" disabled={!isPremium}>30 minutos {!isPremium && '(👑 Premium)'}</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#ff0050',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: topic ? 'pointer' : 'not-allowed',
              opacity: topic ? 1 : 0.6
            }}
          >
            {isGenerating ? 'Analizando algoritmos e IA...' : '⚡ Generar Video y Programación'}
          </button>
        </div>

        {/* Resultados */}
        {generatedContent && (
          <div style={{
            backgroundColor: '#16161f',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #ff0050'
          }}>
            <h3 style={{ marginTop: 0, color: '#00f2fe' }}>Estrategia Generada</h3>
            <h4>{generatedContent.title} ({platform} - {duration})</h4>
            
            <p style={{ color: '#ccc', fontWeight: 'bold' }}>Estructura del Guión:</p>
            <pre style={{
              backgroundColor: '#0d0d12',
              padding: '12px',
              borderRadius: '6px',
              whiteSpace: 'pre-wrap',
              fontSize: '13px',
              color: '#ddd'
            }}>
              {generatedContent.script}
            </pre>

            <h4 style={{ marginTop: '20px', color: '#ffd700' }}>📅 Horarios Sugeridos de Publicación</h4>
            <div style={{ display: 'grid', gap: '8px' }}>
              {generatedContent.schedule.map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#0d0d12',
                  padding: '10px 15px',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px'
                }}>
                  <span><strong>{item.day}:</strong> {item.time}</span>
                  <span style={{ color: '#aaa' }}>{item.platform}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#aaa' }}>
              🏷️ <strong>Hashtags Recomendados:</strong> {generatedContent.hashtags}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
