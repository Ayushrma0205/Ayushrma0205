import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    const handleDisplayItems = () => {
        navigate('/display-items'); // Navigate to the Display Items page
    };

    const handleContactUs = () => {
        navigate('/contact-us'); // Navigate to the Contact Us page
    };

    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Pizza Store"
                            width="500"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to our Pizza Store !!!</h1>
                        <p className="lead">We're your go-to destination for mouthwatering, handcrafted pizzas made with the finest ingredients. From classic Margherita to our signature creations, every pizza is baked to perfection in our brick oven. Whether you're dining in, taking out, or ordering for delivery, we're committed to bringing you a delicious experience with every bite. Explore our menu and taste the difference at Pizza Store today!</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={handleDisplayItems}>Display Items</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleContactUs}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="text-truncate">
                    <h1><b>Our Latest Updates</b></h1>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="Pepperoni" />
                        <div className="card-body">
                            <h5 className="card-title">Pepperoni</h5>
                            <p className="card-text">Pepperoni is a popular Italian-American sausage, typically made from pork and beef, spiced with paprika, garlic, and black pepper.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="Margherita" />
                        <div className="card-body">
                            <h5 className="card-title">Margherita</h5>
                            <p className="card-text">Margherita is a classic Italian pizza topped with tomatoes, mozzarella, basil, olive oil, and salt, representing the colors of Italy’s flag.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/25315530/pexels-photo-25315530/free-photo-of-fresh-pizza-in-a-box.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="Quattro Formaggi" />
                        <div className="card-body">
                            <h5 className="card-title">Quattro Formaggi</h5>
                            <p className="card-text">Quattro Formaggi pizza features four cheeses, typically mozzarella, gorgonzola, fontina, and parmesan, offering a rich, creamy, and savory flavor blend.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
