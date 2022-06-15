import React from 'react';
import { Button } from 'react-bootstrap';
import './Collection.css';

const Collection = () => {
    return (
        <div>
            <div className="collection-area">


                <div className="cloth-area p-3">
                <div className="img-area-colection">
                    <img className='rounded' src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_v4.jpg?v=1575866635" alt="" />
                </div>
                <div className="text-section">
                    <p>New Collection</p>
                    <h3>Women Clothes</h3>
                    <Button>Shop now</Button>
                </div>
                </div>


                <div className="Equipment-area p-3">
                <div className="img-area-colection rounded">
                    <img className='rounded' src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_v4.1.jpg?v=1575866818" alt="" />
                </div>
                <div className="text-section-2">
                    <p>New Collection</p>
                    <h3>Gym Equipment</h3>
                    <Button>Shop now</Button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Collection;