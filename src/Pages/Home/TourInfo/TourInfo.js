import React from 'react';
import './TourInfo.css';

const TourInfo = () => {
    return (
        <div className="d-flex tour row mt-4">
            <div className="col-lg-12 col-sm-12 p-3 mb-3 mt-3">
                <h1>Featured Testimonials</h1>
                <p>DISCOVER YOUR NEXT EXPERIENCES AND PLACES</p>
            </div>

            <div className="col-lg-4  col-sm-12  tour2 p-4">
                <p>“We want to express our appreciation for the excellent service that extra special effort that you provide and as our business was built on service we know how important this quality is and we value what CrissCross Tours & Travel has to offer.”</p>
                <h5>Mark Anthony</h5>
                <h6>CEO - WIKIMEDIA</h6>
            </div>
            <div className="col-lg-4  col-sm-12 tour2 p-4">
                <p>“I have to admit that this was by far the most outstanding, and adventurous, client trip I have ever participated in! The itinerary was perfectly planned! There was time to mingle, play and sightsee with the entire crew, and time enough to explore on our own.”</p>
                <h5>Steve House</h5>
                <h6>CEO - METAPEDIA</h6>
            </div>
            <div className="col-lg-4 col-sm-12  tour2 p-4">
                <p>“It is extremely gratifying to discover at long last an agency that truly understands the meaning of service. You are always prompt, consistent and very attentive to our erratic schedule.”</p>
                <h5>Eric Louttit</h5>
                <h6>CEO - PICSART</h6>
            </div>


        </div>
    );
};

export default TourInfo;