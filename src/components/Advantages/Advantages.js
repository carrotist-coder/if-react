import React from 'react';
import AdvantagesCard from './AdvantagesCard';
import './Advantages.css';

const Advantages = () => {
  const cardsData = [
    { icon: 'headset-icon', text: 'Support 24/7' },
    { icon: 'forum-icon', text: 'Communicate directly' },
    { icon: 'devices-icon', text: 'Book online' },
    { icon: 'thumb-up-icon', text: 'Real guest reviews' },
  ];
  return (
    <section className='container advantages'>
      <div className='advantages-heading'>
        <h1 className='advantages-heading__text heading__text'>
          What do we offer
        </h1>
      </div>
      <div className='cards'>
        {cardsData.map((card, index) => (
          <AdvantagesCard key={index} icon={card.icon} text={card.text} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
