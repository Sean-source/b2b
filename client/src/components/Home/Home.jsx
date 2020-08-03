import React from 'react';
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="tennis-pros">
                <div className="title">
                    <h4>Title</h4>
                </div>
                <div className="contents">
                    <div className="pro-details">
                        <div className="pro-img"></div>
                        <div className="pro-description"></div>
                    </div>
                    <div className="pro-details">
                        <div className="pro-img"></div>
                        <div className="pro-description"></div>
                    </div>
                    <div className="pro-details">
                        <div className="pro-img"></div>
                        <div className="pro-description"></div>
                    </div>
                </div>
            </div>
            <div className="calendar"></div>
        </div>
    );
}

export default Home;