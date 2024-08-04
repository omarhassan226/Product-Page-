/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';

const ReviewsContext = createContext();

export const useReviews = () => useContext(ReviewsContext);

export const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([
        { name: 'Omar.H', answer: 'Very good product! Highly recommend.', rating: 5, image: 'https://i.pravatar.cc/300?img=60' },
        { name: 'Aymon❤️❤', answer: 'Excellent quality and fast shipping.', rating: 4, image: 'https://i.pravatar.cc/300?img=2' },
        { name: 'Waleed❤️❤', answer: 'Amazing value for the price. Worth every penny!', rating: 5, image: 'https://i.pravatar.cc/300?img=3' },
        { name: 'Ali.M❤️❤', answer: 'Exceeded my expectations. Will buy again!', rating: 5, image: 'https://i.pravatar.cc/300?img=4' },
        { name: 'Omar.G❤️❤', answer: 'Very satisfied with the product. Good quality.', rating: 4, image: 'https://i.pravatar.cc/300?img=8' },
        { name: 'Rafaat.H❤️❤', answer: 'Great customer service and fast delivery.', rating: 4, image: 'https://i.pravatar.cc/300?img=6' },
        { name: 'Zoz❤️❤', answer: 'Product arrived in perfect condition and works well.', rating: 5, image: 'https://i.pravatar.cc/300?img=7' },
        { name: 'Mariam❤️❤', answer: 'High-quality materials and excellent design.', rating: 5, image: 'https://i.pravatar.cc/300?img=5' },
        { name: 'Yasmen❤️❤', answer: 'Very pleased with the performance of this product.', rating: 4, image: 'https://i.pravatar.cc/300?img=20' },
        { name: 'Aya❤️❤', answer: 'Fast delivery and well-packaged.', rating: 4, image: 'https://i.pravatar.cc/300?img=21' },
        { name: 'Sohila❤️❤', answer: 'Works as expected. Happy with the purchase.', rating: 4, image: 'https://i.pravatar.cc/300?img=24' },
        { name: 'Shimaa❤️❤', answer: 'Five stars! Excellent product and service.', rating: 5, image: 'https://i.pravatar.cc/300?img=23' },
        { name: 'Nadine❤️❤', answer: 'Great product at a great price. Highly recommend.', rating: 4, image: 'https://i.pravatar.cc/300?img=28' },
        { name: 'Areeg❤️❤', answer: 'Very satisfied with the purchase. Will buy again.', rating: 5, image: 'https://i.pravatar.cc/300?img=27' },
        { name: 'Samar❤️❤', answer: 'Good quality and fast shipping. Very happy.', rating: 4, image: 'https://i.pravatar.cc/300?img=15' },
        { name: 'Abrar❤️❤', answer: 'Top-notch quality. Exceeded expectations.', rating: 5, image: 'https://i.pravatar.cc/300?img=16' },
        { name: 'Esraa❤️❤', answer: 'Product is as described. Will buy again.', rating: 4, image: 'https://i.pravatar.cc/300?img=26' },
        { name: 'Nada❤️❤', answer: 'Excellent performance. Very pleased with the purchase.', rating: 5, image: 'https://i.pravatar.cc/300?img=25' },
        { name: 'Sara❤️❤', answer: 'Absolutely love this product. Worth every cent.', rating: 5, image: 'https://i.pravatar.cc/300?img=19' },
    ]);

    const addReview = (review) => {
        setReviews([...reviews, review]);
    };

    return (
        <ReviewsContext.Provider value={{ reviews, addReview }}>
            {children}
        </ReviewsContext.Provider>
    );
};
