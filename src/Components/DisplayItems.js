import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function DisplayItems() {
    const [displayitems, setDisplayItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get('http://localhost:5000/displayitems')
            .then(response => {
                setDisplayItems(response.data);
            })
            .catch(error => {
                console.error('There is an error in fetching the data', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/displayitems/${id}`)
            .then(response => {
                fetchItems(); // Refresh the list after deletion
            })
            .catch(error => {
                console.error('There is an error in deleting the data', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2>Item Lists</h2>
            <div className="row">
                {displayitems.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4">
                            <img src={item.image} height={400} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Price: Rs.{item.price}</p>
                                <p className="card-text">Type: {item.veg__non_veg}</p>
                                <p className="card-text">Size: {item.size}</p>
                                <p className="card-text">Ingredients: {item.ingredients}</p>
                                <p className="card-text">Cheese: {item.cheese}</p>
                                <p className="card-text">Description: {item.description}</p>
                                <button className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>DELETE</button>
                                <button className="btn btn-warning" onClick={() => navigate(`/update-items/${item.id}`)}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayItems;
