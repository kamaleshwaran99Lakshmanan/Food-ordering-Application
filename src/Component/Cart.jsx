import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
  // Access the food array from the Redux store
  const foodData = useSelector((state) => state.foodData.food);

  console.log(foodData);  // Log the foodData to verify its content

  return (
    <div className="container-xxl">
      {foodData.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        foodData.map((item, index) => (
          <Card key={index} className="my-2">
            <Card.Body>
              <Card.Title>{item}</Card.Title>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cart;
