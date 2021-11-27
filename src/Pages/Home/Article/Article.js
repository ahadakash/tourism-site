import React from 'react';
import tour1 from '../../../images/tour1.jpg';
import tour2 from '../../../images/tour2.jpg';
import tour3 from '../../../images/tour3.jpg';
import './Article.css';


const Article = () => {
    return (
        <div className=" article">
            <h1 className="">Articles & Tips</h1>
            <p>Explore some of the best tips from around the world</p>
            <div>
                <div className="card-group">
                    <div className="card">
                        <img src={tour1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Memorial Day to Someone Told Me to Travel</h5>
                            <p className="card-text">Experiencing the world with your own eyes is special for so many reasons.

                                Yet, we all know the struggle of trying to convey what you’ve seen and learned while traveling in a tangible and memorable way.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 50 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={tour2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">7 Tips For Nomads On A Budget Trips</h5>
                            <p className="card-text">Experiencing the world with your own eyes is special for so many reasons.

                                Yet, we all know the struggle of trying to convey what you’ve seen and learned while traveling in a tangible and memorable way.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 2 hours ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={tour3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Taking A Travel Blog Victory Lap</h5>
                            <p className="card-text">Experiencing the world with your own eyes is special for so many reasons.

                                Yet, we all know the struggle of trying to convey what you’ve seen and learned while traveling in a tangible and memorable way.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 5 hours ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;