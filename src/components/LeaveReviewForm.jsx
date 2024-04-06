import React from 'react';
import './styles/LeaveReviewForm-style.css';

const LeaveReviewForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rating = formData.get('rating');
    const opinion = formData.get('opinion');
    
    // Perform any necessary actions with the rating and opinion data
    // For example, send the data to an API or update the state in a parent component
    console.log('Rating:', rating);
    console.log('Opinion:', opinion);
  };

  return (
    <div className='wrapper-div'>
<div className="wrapper">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <input type="number" name="rating" hidden />
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} className="bx bx-star star" style={{ '--i': i }}></i>
          ))}
        </div>
        <textarea name="opinion" cols="30" rows="5" placeholder="Your opinion..."></textarea>
        <div className="btn-group">
          <button type="submit" className="btn submit">Submit</button>
          <button className="btn cancel">Cancel</button>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default LeaveReviewForm;