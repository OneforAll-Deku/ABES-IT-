import React, { useState } from 'react';
import './Book.css';

const Book = ({ book }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="book-card">
      <div className="book-cover">
        <img 
          src={book.coverImage} 
          alt={`${book.title} cover`} 
          className="book-image"
        />
      </div>
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
        {book.price && <p className="book-price">${book.price}</p>}
        <p className="book-description">{book.description}</p>
      </div>
      <div className="book-actions">
        <button className="btn-decrement" onClick={decrementQuantity}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="btn-increment" onClick={incrementQuantity}>+</button>
        <button className="btn-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Book;