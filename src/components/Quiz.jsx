import { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizData';
import ScoreBoard from './ScoreBoard';
import './Quiz.css';

const Quiz = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const topics = [
    { id: 'code', label: 'Historia del Código', icon: '💻', color: '#1e90ff' },
    { id: 'languages', label: 'Lenguajes de Programación', icon: '📚', color: '#00a8ff' },
    { id: 'ai', label: 'Inteligencia Artificial', icon: '🤖', color: '#4ecdc4' },
    { id: 'games', label: 'Videojuegos', icon: '🎮', color: '#ff6b6b' },
    { id: 'hacks', label: 'Hacks & Seguridad', icon: '🔐', color: '#ffd700' },
    { id: 'devices', label: 'Dispositivos', icon: '📱', color: '#9b59b6' },
    { id: 'internet', label: 'Internet & Redes Sociales', icon: '🌐', color: '#00d4ff' },
    { id: 'databases', label: 'Bases de Datos', icon: '💾', color: '#2ecc71' }
  ];

  const startQuiz = (topicId) => {
    const topicQuestions = [...quizQuestions[topicId]].sort(() => Math.random() - 0.5);
    setQuestions(topicQuestions.slice(0, 5)); // 5 preguntas aleatorias
    setSelectedTopic(topicId);
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedOption(null);
    setQuizCompleted(false);
  };

  const handleAnswer = (optionIndex) => {
    if (showAnswer) return;

    setSelectedOption(optionIndex);
    setShowAnswer(true);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
      setShowNameInput(true);
    }
  };

  const saveScore = () => {
    if (!playerName.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    const scoreData = {
      name: playerName.trim(),
      score: score,
      total: questions.length,
      topic: selectedTopic,
      date: new Date().toISOString(),
      percentage: Math.round((score / questions.length) * 100)
    };

    // Obtener puntuaciones existentes
    const existingScores = JSON.parse(localStorage.getItem('quizScores') || '[]');

    // Agregar nueva puntuación
    existingScores.push(scoreData);

    // Ordenar por puntuación (descendente)
    existingScores.sort((a, b) => b.percentage - a.percentage);

    // Mantener solo las mejores 10 puntuaciones
    const topScores = existingScores.slice(0, 10);

    // Guardar en localStorage
    localStorage.setItem('quizScores', JSON.stringify(topScores));

    setShowNameInput(false);
  };

  const restartQuiz = () => {
    setSelectedTopic(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedOption(null);
    setQuizCompleted(false);
    setPlayerName('');
  };

  if (!selectedTopic) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h2 className="quiz-title">🎮 Quiz de Conocimientos</h2>
          <p className="quiz-subtitle">Pon a prueba lo que has aprendido sobre la historia de la tecnología</p>
        </div>

        <div className="topic-selection">
          <h3>Selecciona un tema:</h3>
          <div className="topic-grid">
            {topics.map(topic => (
              <button
                key={topic.id}
                className="topic-card"
                style={{ borderColor: topic.color }}
                onClick={() => startQuiz(topic.id)}
              >
                <div className="topic-icon" style={{ color: topic.color }}>
                  {topic.icon}
                </div>
                <h4>{topic.label}</h4>
                <p>5 preguntas</p>
              </button>
            ))}
          </div>
        </div>

        <ScoreBoard />
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const topicInfo = topics.find(t => t.id === selectedTopic);

    return (
      <div className="quiz-container">
        <div className="quiz-completed">
          <div className="completion-icon" style={{ color: topicInfo.color }}>
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '💪'}
          </div>
          <h2>¡Quiz Completado!</h2>
          <div className="final-score">
            <div className="score-display" style={{ borderColor: topicInfo.color }}>
              <span className="score-number">{score}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <div className="percentage" style={{ color: topicInfo.color }}>
              {percentage}%
            </div>
          </div>

          <p className="score-message">
            {percentage >= 80 ? '¡Excelente! Dominas este tema' :
             percentage >= 60 ? '¡Buen trabajo! Sigue aprendiendo' :
             '¡Sigue practicando! Revisa la historia nuevamente'}
          </p>

          {showNameInput ? (
            <div className="name-input-section">
              <h3>Guarda tu puntuación</h3>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && saveScore()}
                maxLength={20}
                className="name-input"
              />
              <div className="button-group">
                <button onClick={saveScore} className="save-button">
                  Guardar Puntuación
                </button>
                <button onClick={restartQuiz} className="restart-button">
                  Volver al Inicio
                </button>
              </div>
            </div>
          ) : (
            <button onClick={restartQuiz} className="restart-button">
              Intentar Otro Quiz
            </button>
          )}
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const topicInfo = topics.find(t => t.id === selectedTopic);

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              backgroundColor: topicInfo.color
            }}
          />
        </div>
        <div className="progress-text">
          Pregunta {currentQuestion + 1} de {questions.length}
        </div>
        <div className="current-score">
          Puntuación: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-text">{question.question}</h3>

        <div className="options-grid">
          {question.options.map((option, index) => {
            let optionClass = 'option';

            if (showAnswer) {
              if (index === question.correct) {
                optionClass += ' correct';
              } else if (index === selectedOption) {
                optionClass += ' incorrect';
              }
            } else if (selectedOption === index) {
              optionClass += ' selected';
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswer(index)}
                disabled={showAnswer}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
              </button>
            );
          })}
        </div>

        {showAnswer && (
          <div className="answer-feedback">
            <div className={selectedOption === question.correct ? 'feedback correct-feedback' : 'feedback incorrect-feedback'}>
              <strong>
                {selectedOption === question.correct ? '✓ ¡Correcto!' : '✗ Incorrecto'}
              </strong>
              <p>{question.explanation}</p>
            </div>
            <button
              className="next-button"
              onClick={nextQuestion}
              style={{ backgroundColor: topicInfo.color }}
            >
              {currentQuestion + 1 < questions.length ? 'Siguiente Pregunta →' : 'Ver Resultados'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
