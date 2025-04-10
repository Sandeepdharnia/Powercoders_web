import React from "react";
import './homeMiddle.css';

const FoodCategory = ({ image, title, description }) => {
    
    return (
        <div className="story">
            <div className="appetizer">
                <img className="img_appetizer" src={image} alt={title} />
                <div className="appetizer_text">
                    <h3>{title}</h3>
                    {description.map((paragraph, index) => (
                        <p key={index}>{ paragraph}</p>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default FoodCategory;