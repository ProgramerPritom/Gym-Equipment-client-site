import React, { useState } from 'react';
import { CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            
            <HashLoader color={'5563EC'} loading={loading} css={override} size={80} />
        </div>
    );
};

export default Spinner;