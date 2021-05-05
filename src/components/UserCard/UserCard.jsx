import React from 'react';
import filledHeart from '../../assets/filledHeart.svg';
import unfilledHeart from '../../assets/unfilledHeart.svg';
import './userCard.css';

function UserCard({name, age, rating, description, avatar}) {
    const heartRating = [];

    const fillHeartRating = (rating) => {
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                heartRating.push(<img className="heart-icon" src={filledHeart} alt="Coração preenchido" />)
            } else {
                heartRating.push(<img className="heart-icon" src={unfilledHeart} alt="Coração não preenchido" />)
            }
        }
    };

    fillHeartRating(rating);

    return (
        <div className="card-container">
            <div className="user-details">
                <img src={avatar} alt={name} className="avatar"/>
                <p className="details-text">{name}, {age}</p>
                <span>{heartRating}</span>
            </div>
            <div className="user-description">
                {description}
            </div>
        </div>
    );
}

export default UserCard;