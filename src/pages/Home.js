import React from 'react';
import './Home.css';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';
import YouTube from '../img/youtube.png';

 const Home = () => {
    return (
        <div className="home">
            <div className="background-img">
            </div>
            <div className="home-text">
                <h1>SOCCA SERBIA</h1>
            </div>
            <div className="home-text-description">
                <p>
                    Najbolja biznis liga u Beogradu,<br/>
                    liga šampiona i svetsko prvenstvo svake godine

                </p>
            </div>
            <div className="button">
                <span>Postani član</span>
            </div>
            <div className="social-media-text">
                <span>Follow us</span>
            </div>
            <div className="social-media-icons">
                <img src={Facebook} alt=""/>
                <img src={Instagram} alt=""/>
                <img src={YouTube} alt=""/>
            </div>

        </div>
    )
}
export default Home
