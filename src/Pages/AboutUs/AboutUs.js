import React from 'react';
import aboutLogo from '../../images/aboutus.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>

            <div className="about-style d-flex row">
                <div className="about mt-4 p-4">
                    <div className=""><h2 className="text-white">About Us :</h2></div>

                </div>
                <div >
                    <img width="300px" className="mt-4 col-4" src={aboutLogo} alt="" />
                </div>
                <div className=" col-12-lg mt-4">
                    <h2>Our Proud History</h2>
                    <p className="m-4">A travel agency is a company who plans, arranges, books, and makes the necessary arrangements for travellers. They sell flights, accommodation and tours, and package them together for travels who don’t wish to book themselves.

                        Worth noting that there are now many independent travel agents, who take on this role without being connected to an agency, and this can be a great travel industry job for people who want to work remotely.

                        There are several types of travel agents. Some put together itineraries from scratch for their clients while others work for specific travel companies, and some are mere resellers of pre-packaged tours on behalf of Host Agencies.

                        However most will help you plan your trip, and make suggestions based on your interests, your budget, and your travel requirements, the benefit here being that they’re experts in booking travel, and know the best tricks for planning and booking a holiday.</p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;