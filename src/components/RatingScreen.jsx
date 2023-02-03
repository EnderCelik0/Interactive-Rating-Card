import starSVG from '../img/icon-star.svg';
import thankYou from '../img/illustration-thank-you.svg';
import { useState } from 'react';

export default function RatingScreen(props) {
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRating(rating) {
    setRating(rating);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleClickBack(){

  }

  return isSubmitted ? (
    <main className='thank-you-card'>
      <img src={thankYou} alt='thank-you-icon-svg' className='icon-thank-you' />
      <p className='rating'>You selected {rating} out of 5</p>
      <h2 className='thank-you-header'>Thank you!</h2>
      <p className='thank-you-description'>
        We appreciate you taking the time to give a rating. If you ever need
        more support , don't hesitate to get in touch.
      </p>
    </main>
  ) : (
    <form onSubmit={handleSubmit} className='rating-card'>
      <div className='star-sign-container'>
        <img src={starSVG} alt='icon-svg' />
      </div>
      <h2 className='rating-header'>How did we do?</h2>
      <p className='rating-description'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className='rating-buttons-container'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type='button'
            onClick={() => handleRating(rating)}
            className='btn-rating'
          >
            {rating}
          </button>
        ))}
      </div>
      <button className='btn-submit'>SUBMIT</button>
    </form>
  );
}
