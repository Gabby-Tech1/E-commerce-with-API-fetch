import React from 'react';

const RemoveFromCartLink = ({ cartsCount, onRemoveFromCart }) => {
  return (
    <button className='pr-6 font-semibold hover:text-gray-700' onClick={onRemoveFromCart} disabled={cartsCount === 0}>
      Remove from Cart
    </button>
  );
};

export default RemoveFromCartLink;