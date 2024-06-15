
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/home')
            .then((response) => {
                const data = response.data.forms;
                setFormData(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    const handleUpdateClick = (formId) => {
        navigate(`/update/${formId}`);
    };

    return (
        <div className='form'>
            <h1>Form Cards</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                formData.map(post => (
                    <div className='box' key={post.id}>
                        <strong>{post.name}</strong>
                        <button onClick={() => handleUpdateClick(post.id)}>Details</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Form;
