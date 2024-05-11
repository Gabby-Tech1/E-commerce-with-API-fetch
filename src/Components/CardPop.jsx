import React from 'react'

const CardPop = ({ cartItems, onClose, onIncreaseQuantity, onRemoveItem }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
    return (
      <div className="cart-popup">
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="50" height="50" />
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => onIncreaseQuantity(item)}>Increase Quantity</button>
              <button onClick={() => onRemoveItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    )
  }
  

export default CardPop