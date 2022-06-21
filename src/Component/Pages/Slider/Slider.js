import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div>
             <Carousel fade>
                <Carousel.Item>
                    <img
                    className="slider-img d-block w-100"
                    src="https://img.freepik.com/free-photo/3d-rendering-treadmill-running-machine-black-background_460848-10592.jpg?w=740&t=st=1655191267~exp=1655191867~hmac=4fcd0fd87ca4338dd57834cba7261417274d79e9cde7c4447603c45985de8993"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Best Equipment Stock</h3>
                    <p>We found to be a very solid, sturdy bike, with nice, large toe baskets. And it produced a quiet ride.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="slider-img d-block w-100"
                    src="https://img.freepik.com/free-photo/3d-rendering-black-dumbbells-floor-dark-concept-fitness-room-with-training-equipments-back_67155-14961.jpg?w=900"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Latest Gym Assesories</h3>
                    <p>Find New and Heavy gym Assesories stock here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="slider-img d-block w-100"
                    src="https://img.freepik.com/free-photo/disassembled-barbell-medicine-ball-kettlebell-dumbbell-lying-floor-gym-sports-equipment-workout-with-free-weight-functional-training_175682-47.jpg?w=740"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            
        </div>
    );
};

export default Slider;