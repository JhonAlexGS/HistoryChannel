import { useState, useEffect } from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => {
  const [scores, setScores] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadScores();
  }, [filter]);

  const loadScores = () => {
    const savedScores = JSON.parse(localStorage.getItem('quizScores') || '[]');

    let filteredScores = savedScores;
    if (filter !== 'all') {
      filteredScores = savedScores.filter(score => score.topic === filter);
    }

    setScores(filteredScores.slice(0, 10));
  };

  const clearScores = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todas las puntuaciones?')) {
      localStorage.removeItem('quizScores');
      setScores([]);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getTopicIcon = (topic) => {
    const icons = {
      code: '💻',
      languages: '📚',
      ai: '🤖'
    };
    return icons[topic] || '🎮';
  };

  const getTopicLabel = (topic) => {
    const labels = {
      code: 'Código',
      languages: 'Lenguajes',
      ai: 'IA'
    };
    return labels[topic] || topic;
  };

  const getMedalIcon = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '🏅';
  };

  if (scores.length === 0) {
    return (
      <div className="scoreboard">
        <h3 className="scoreboard-title">🏆 Mejores Puntuaciones</h3>
        <div className="empty-scores">
          <p>Aún no hay puntuaciones guardadas</p>
          <p className="empty-subtitle">¡Completa un quiz para aparecer aquí!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scoreboard">
      <div className="scoreboard-header">
        <h3 className="scoreboard-title">🏆 Mejores Puntuaciones</h3>
        <button onClick={clearScores} className="clear-button" title="Borrar todas las puntuaciones">
          🗑️
        </button>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${filter === 'code' ? 'active' : ''}`}
          onClick={() => setFilter('code')}
        >
          💻 Código
        </button>
        <button
          className={`filter-btn ${filter === 'languages' ? 'active' : ''}`}
          onClick={() => setFilter('languages')}
        >
          📚 Lenguajes
        </button>
        <button
          className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
          onClick={() => setFilter('ai')}
        >
          🤖 IA
        </button>
      </div>

      <div className="scores-list">
        {scores.map((score, index) => (
          <div key={index} className="score-item">
            <div className="score-rank">
              <span className="medal">{getMedalIcon(index)}</span>
              <span className="rank-number">#{index + 1}</span>
            </div>

            <div className="score-info">
              <div className="score-name">{score.name}</div>
              <div className="score-details">
                <span className="score-topic">
                  {getTopicIcon(score.topic)} {getTopicLabel(score.topic)}
                </span>
                <span className="score-date">{formatDate(score.date)}</span>
              </div>
            </div>

            <div className="score-result">
              <div className="score-points">{score.score}/{score.total}</div>
              <div
                className="score-percentage"
                style={{
                  color: score.percentage >= 80 ? '#26de81' :
                         score.percentage >= 60 ? '#f093fb' : '#ff6b6b'
                }}
              >
                {score.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
