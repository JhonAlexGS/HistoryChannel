import React, { useState } from 'react';
import './TimelineItem.css';

const TimelineItem = ({ year, title, description, icon, color, index, details, impact, funFact }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const hasExpandableContent = details || impact || funFact;

  const toggleExpand = () => {
    if (hasExpandableContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <div
        className={`timeline-content ${isExpanded ? 'expanded' : ''} ${!hasExpandableContent ? 'no-expand' : ''}`}
        style={{ borderColor: color || '#4ecdc4' }}
        onClick={toggleExpand}
      >
        <div className="timeline-icon" style={{ backgroundColor: color || '#4ecdc4' }}>
          {icon}
        </div>
        <div className="timeline-year">{year}</div>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>

        {isExpanded && (details || impact || funFact) && (
          <div className="timeline-expanded-content">
            {details && (
              <div className="timeline-section">
                <h4 className="timeline-section-title">📋 Detalles</h4>
                <p className="timeline-section-text">{details}</p>
              </div>
            )}

            {impact && (
              <div className="timeline-section">
                <h4 className="timeline-section-title">⚡ Impacto</h4>
                <p className="timeline-section-text">{impact}</p>
              </div>
            )}

            {funFact && (
              <div className="timeline-section fun-fact">
                <h4 className="timeline-section-title">💡 Dato Curioso</h4>
                <p className="timeline-section-text">{funFact}</p>
              </div>
            )}
          </div>
        )}

        {hasExpandableContent && (
          <div className="timeline-expand-indicator">
            {isExpanded ? '▲ Contraer' : '▼ Expandir'}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
