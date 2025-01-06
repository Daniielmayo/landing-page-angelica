import React from 'react';

interface CarouselProps {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className="carousel-icon">{item.icon}</div>
          <h3 className="carousel-title">{item.title}</h3>
          <p className="carousel-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
