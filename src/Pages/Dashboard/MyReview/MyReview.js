import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const MyReview = () => {

    const { user } = useContext(UserContext);
    const [newReview, setNewReview] = useState({});


    const handleBlur = (event) => {
        const optReview = { ...newReview };
        optReview[event.target.name] = event.target.value;
        optReview.photo = user.photo;
        setNewReview(optReview);
    }

    const addReview = (event) => {
        event.preventDefault();


        fetch('https://agile-escarpment-45536.herokuapp.com/addReviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })

            .then(res => res.json())
            .then(data => {
                document.getElementById('reviewForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Thanks For Sharing Your Thoughts</b></h3>';
            })
    }


    return (
        <section id="myReview" className="p-4">
            <div className="container">
                <h3>Review</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form id="reviewForm" onSubmit={addReview}>
                            <input type="text" name="name" placeholder="Your name" onBlur={handleBlur} className="form-control my-3" required />
                            <input type="text" name="company" placeholder="Designation and Company" className="form-control bg-white my-3" onBlur={handleBlur} required />
                            <textarea name="text" onBlur={handleBlur} placeholder="Your review" className="form-control my-3" cols="30" rows="10" required></textarea>
                            <button className="btn btn-dark px-4">Send Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyReview;