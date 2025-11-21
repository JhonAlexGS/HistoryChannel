import { useState } from 'react';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import {
  codeHistory,
  programmingLanguages,
  aiHistory,
  videoGamesHistory,
  hacksHistory,
  devicesHistory,
  internetSocialHistory,
  databasesHistory
} from './data/historyData';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('code');

  const tabs = [
    { id: 'code', label: 'Historia del Código', icon: '💻' },
    { id: 'languages', label: 'Lenguajes de Programación', icon: '📚' },
    { id: 'ai', label: 'Inteligencia Artificial', icon: '🤖' },
    { id: 'games', label: 'Videojuegos', icon: '🎮' },
    { id: 'hacks', label: 'Hacks & Seguridad', icon: '🔐' },
    { id: 'devices', label: 'Dispositivos', icon: '📱' },
    { id: 'internet', label: 'Internet & Redes Sociales', icon: '🌐' },
    { id: 'databases', label: 'Bases de Datos', icon: '💾' },
    { id: 'quiz', label: 'Quiz', icon: '🧩' }
  ];

  const getTimelineData = () => {
    switch(activeTab) {
      case 'code':
        return { data: codeHistory, title: '⏳ Historia del Código' };
      case 'languages':
        return { data: programmingLanguages, title: '📖 Evolución de Lenguajes' };
      case 'ai':
        return { data: aiHistory, title: '🧠 Historia de la IA' };
      case 'games':
        return { data: videoGamesHistory, title: '🎮 Historia de los Videojuegos' };
      case 'hacks':
        return { data: hacksHistory, title: '🔐 Hacks y Ciberseguridad' };
      case 'devices':
        return { data: devicesHistory, title: '📱 Dispositivos que Cambiaron el Mundo' };
      case 'internet':
        return { data: internetSocialHistory, title: '🌐 Internet y Redes Sociales' };
      case 'databases':
        return { data: databasesHistory, title: '💾 Historia de las Bases de Datos' };
      default:
        return { data: codeHistory, title: 'Historia del Código' };
    }
  };

  const { data, title } = getTimelineData();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🚀 History Channel Tech</h1>
        <p className="app-subtitle">Un viaje a través del tiempo en tecnología</p>
      </header>

      <nav className="navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activeTab === 'quiz' ? (
          <Quiz />
        ) : (
          <Timeline data={data} title={title} />
        )}
      </main>

      <footer className="app-footer">
        <p>Creado con React | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
