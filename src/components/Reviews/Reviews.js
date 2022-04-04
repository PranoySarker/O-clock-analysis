import React from 'react';
import useWatch from '../../hooks/useWatch';
import Review from '../Review/Review';
import './Reviews.css';


const Reviews = () => {
    const [watches, setWatches] = useWatch();
    console.log(watches);
    return (

        <div className='review-container'>
            {
                watches.map(watch => <Review key={watch._id}
                    watch={watch}></Review>)
            }
        </div>
    );
};

export default Reviews;