import React from 'react';
import { Accordion } from 'react-bootstrap';
import './AccordingPart.css';

const AccordingPart = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="according-area-img">
                            <img src="https://img10.hkrtcdn.com/12215/bnr_1221419_o.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="according-section-here">
                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Exercise ball</Accordion.Header>
                            <Accordion.Body>
                            The exercise or yoga ball is made with very soft elastic that is mainly a diameter of 35 to 85 centimetres. This hollow ball is filled with air. If you remove the valve stem the air pressure will get changed and then you can let the ball deflate or fill it with air.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sleeveless T-Shirts</Accordion.Header>
                            <Accordion.Body>
                            While your closet is probably stocked full of t-shirts you've collected since high school, that fabric doesn't always work as great fitness clothing. Not to mention, your high school logo probably isn't the fashion statement you're going for these days.
                            You can find nice fitness t-shirts that are slim-fitting and meant for working out in. Whether you like v-neck or crew-cut, plenty of t-shirts today will make you look great while you're getting your workout in.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AccordingPart;