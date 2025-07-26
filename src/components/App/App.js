import '../../index.css';

export const App = () => {
  return (
    <section className='container advantages'>
      <div className='advantages-heading'>
        <h1 className='advantages-heading__text heading__text'>
          What do we offer
        </h1>
      </div>
      <div className='cards'>
        <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
          <svg className='advantages-card__svg'>
            <use href='src/icons/sprite.svg#headset-icon'></use>
          </svg>
          <p className='advantages-card__text'>Support 24/7</p>
        </div>
        <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
          <svg className='advantages-card__svg'>
            <use href='src/icons/sprite.svg#forum-icon'></use>
          </svg>
          <p className='advantages-card__text'>Communicate directly</p>
        </div>
        <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
          <svg className='advantages-card__svg'>
            <use href='src/icons/sprite.svg#devices-icon'></use>
          </svg>
          <p className='advantages-card__text'>Book online</p>
        </div>
        <div className='advantages-card col-lg-3 col-md-6 col-sm-6'>
          <svg className='advantages-card__svg'>
            <use href='src/icons/sprite.svg#thumb-up-icon'></use>
          </svg>
          <p className='advantages-card__text'>Real guest reviews</p>
        </div>
      </div>
    </section>
  );
};
