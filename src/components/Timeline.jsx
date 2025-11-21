import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = ({ data, title }) => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-main-title">{title}</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
            index={index}
            details={item.details}
            impact={item.impact}
            funFact={item.funFact}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
