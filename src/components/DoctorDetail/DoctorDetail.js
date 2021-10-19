import React from 'react';
import { useHistory, useParams } from 'react-router';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <h1>Doctor's Id: {doctorId} </h1>
            <h1>Feel free to hire me as a doctor of yours!!</h1>
            <button className="btn-success px-3 py-2" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default DoctorDetail;