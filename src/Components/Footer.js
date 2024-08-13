import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-light pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We are passionate about delivering the best pizza experience with quality ingredients and excellent service.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light">Home</Link></li>
                            <li><Link to="/about" className="text-light">About</Link></li>
                            <li><Link to="/services" className="text-light">Services</Link></li>
                            <li><Link to="/contactus" className="text-light">Contact Us</Link></li>
                            <li><Link to="/displayitems" className="text-light">Display Items</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: support@pizzastore.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Pizza Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
