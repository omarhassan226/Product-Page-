import React from 'react';
import ImageCarousel from './components/ImageCarousel1';
import ReviewSubmissionForm from './components/ReviewSubmissionForm';
import './leftSection.css';

const LeftSection = () => {
    return (
        <div>
            <div className="fade-in">
                <ImageCarousel />
            </div>
            <div className="fade-in">
                <ReviewSubmissionForm />
            </div>
        </div>
    );
}

export default LeftSection;
