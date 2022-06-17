import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './CatagoryCard.css';

const CatagoryCard = ({showEquipment}) => {
    const {_id} = showEquipment;
    const showDescription = showEquipment.description.slice(0,100);
    const seeMore = showDescription + ".....";
    const navigate = useNavigate();

    const handleNavigateManage = (id) =>{
        navigate(`/manage/${id}`);
    }


    
    return (
        <div>
            
            <Card style={{ width: '380px'}}>
            <Card.Img className='displayCard-img' variant="top" src={showEquipment.image} />
            <hr />
            <Card.Body>
                <Card.Title>{showEquipment.name}</Card.Title>
                <Card.Text>
                    
                {showDescription ===99 ? showDescription: seeMore}
                
                </Card.Text>
                
            </Card.Body>
            <div className="pricing-area">
                <p>${showEquipment.price}</p>
                <p>Q~{showEquipment.quantity}</p>
            </div>
            <ListGroup className="list-group-flush text-center">
            <ListGroup.Item>Supplier : {showEquipment.supplier}</ListGroup.Item>
            </ListGroup>
            <Button onClick={() => handleNavigateManage(_id)} id='blog-btn' variant="primary">Manage Store</Button>
            </Card>

            
        </div>
    );
};

export default CatagoryCard;
/**
 * showDescription ===0 ? showDescription, "more"
 */