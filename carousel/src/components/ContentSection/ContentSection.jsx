import React from 'react';

import './ContentSection.css';
import Carousel from '../Carousel/Carousel';

import img1 from './../../assets/img1.jpg';
import img2 from './../../assets/img2.jpg';
import img3 from './../../assets/img3.jpg';
import img4 from './../../assets/img4.jpg';
import img5 from './../../assets/img5.jpg';

const SLIDES = [img1, img2, img3, img4, img5];

const ContentSection = () => {
    return (
        <div className='content-section-container'>
            <div className='content-left content-clm'>
                <h2 className='content-heading'>This is the content heading</h2>
                <p className='content-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora blanditiis, cupiditate porro, mollitia quam, atque
                    maxime debitis esse illo unde possimus molestiae nulla
                    ratione eos ex facere natus officiis quasi!
                </p>
                <p className='content-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora blanditiis, cupiditate porro, mollitia quam, atque
                    maxime debitis esse illo unde possimus molestiae nulla
                    ratione eos ex facere natus officiis quasi!
                </p>
                <p className='content-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora blanditiis, cupiditate porro, mollitia quam, atque
                    maxime debitis esse illo unde possimus molestiae nulla
                    ratione eos ex facere natus officiis quasi!
                </p>
            </div>
            <div className='content-right content-clm'>
                <Carousel slides={SLIDES} />
            </div>
        </div>
    );
};

export default ContentSection;
