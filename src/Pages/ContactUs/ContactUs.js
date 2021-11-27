import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (

        <div className='contact-us '>

            <div className="contact mt-3 p-4">
                <div className=""><h2 className="text-white">Contact Us :</h2></div>
                <div></div>

            </div>
            <div className="col-12 margin-2">
                <h1>We do whatever it takes to bring
                    you peace of mind</h1>
                <button className="btn-margin btn btn-primary">Request A Callback</button>
            </div>
            <div className="col-12 row margin mb-4">

                <h4 className="col-12"> Level-4, 34, Awal Centre, Banani, Dhaka <br />
                    Official: web@programming-hero.com <br />
                    Helpline : 01322810867 <br />(Available : 09:00am to 7:00pm)</h4>
            </div>
        </div>
    );
};

export default ContactUs;