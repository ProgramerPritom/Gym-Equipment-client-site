import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './EquipCollectionCard.css';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Auth/Loading/Spinner';

const EquipCollectionCard = ({equipment}) => {
    const [loading] = useAuthState(auth);
    const showDescription = equipment.description.slice(0,150);
    const seeMore = showDescription + ".....";
    const navigate = useNavigate();
    // console.log(equipment)
    // if (loading) {
    //     return <Spinner></Spinner>
    // }
    const handleUpdate = (id) => {
        navigate(`/manage/${id}`)
    }
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
            <Button onClick={() =>handleUpdate(equipment._id)} id='blog-btn' variant="primary">Manage Store</Button>
            </Card>
        </div>
    );
};

export default EquipCollectionCard;