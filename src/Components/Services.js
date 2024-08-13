import React from 'react';

function Services() {
    return (
        <div className="container mt-4">
            <h2>Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/1047024/pexels-photo-1047024.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Dine In" />
                        <div className="card-body">
                            <h5 className="card-title">Dine In</h5>
                            <p className="card-text">Enjoy our delicious pizzas in a cozy, family-friendly atmosphere. Perfect for gatherings and celebrations!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/3721048/pexels-photo-3721048.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Take Out" />
                        <div className="card-body">
                            <h5 className="card-title">Take Out</h5>
                            <p className="card-text">Order your favorite pizzas for pick-up. Enjoy our meals at home or on the go!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/3053208/pexels-photo-3053208.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Delivery" />
                        <div className="card-body">
                            <h5 className="card-title">Delivery</h5>
                            <p className="card-text">Get your pizzas delivered right to your doorstep. Enjoy fresh and hot pizza without leaving your home!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
