import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './EquipCollectionCard.css';

const EquipCollectionCard = ({equipment}) => {
    const showDescription = equipment.description.slice(0,150);
    const seeMore = showDescription + ".....";
    // console.log(equipment)
    return (
        <div>
            <Card className='equipCollectionCard' style={{ width: '380px'}}>
            <Card.Img className='displayCard-img' variant="top" src={equipment.image} />
            <hr />
            <Card.Body>
                <Card.Title>{equipment.name}</Card.Title>
                <Card.Text>
                    
                {equipment.description === 140? showDescription : seeMore}
                
                </Card.Text>
                
            </Card.Body>
            <div className="pricing-area">
                <p>${equipment.price}</p>
                <p>Q~{equipment.quantity}</p>
            </div>
            <ListGroup className="list-group-flush text-center">
            <ListGroup.Item>Supplier : {equipment.supplier}</ListGroup.Item>
            </ListGroup>
            <Button id='blog-btn' variant="primary">Manage Store</Button>
            </Card>
        </div>
    );
};

export default EquipCollectionCard;