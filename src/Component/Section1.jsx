import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import data from '../../JSON/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/Slice';  // Ensure the path to your slice is correct

function Section1() {
    // Access the Redux state
    const reduxFoodData = useSelector((state) => state.foodData.food);
    // Local state to store recent searches
    const [foodData, setFoodData] = useState(reduxFoodData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Sync local state with Redux state whenever Redux state changes
        setFoodData(reduxFoodData);
    }, [reduxFoodData]);

    const handleClick = (item) => {
        dispatch(add(item.name));  // Dispatch the add action
        setFoodData((prevState) => [...prevState, item.name]);  // Update local state with new item
        navigate('/Cart');  // Navigate to the Cart page
    };

    return (
        <div className="container my-5">
            <div className="recent-searches me-2">
                <h4><b>Recent Searches :</b></h4>
                {foodData.map((food, index) => (
                    <Link to="/Cart" key={index}>
                        <button className='btn btn-warning m-2'>{food}</button>
                    </Link>
                ))}
            </div>
            <Row className='g-4'>
                {data.items.map((item, index) => (
                    <Col key={index} xs={12} md={6} lg={3}>
                        <Card className='shadow'>
                            <Card.Img variant="top" src={item.image} className='cover' />
                            <Card.Body className='text-center'>
                                <Card.Title>{item.name}</Card.Title>
                                <div className="btn btn-warning" onClick={() => handleClick(item)}>
                                    Add to cart
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Section1;
