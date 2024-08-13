import React from 'react';

function Home() {
    return (
        <div className="container mt-4">
            <h1>Welcome to Pizza Shop</h1>
            <p>Discover the best pizzas made with the freshest ingredients.</p>
            <img 
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/indian-paneer-pizza-recipe.jpg" 
                alt="Pizza"
                className="img-fluid"
                style={{ borderRadius: '10px', marginTop: '20px' }}
            />
            <p className="mt-4">
                Whether you’re in the mood for a classic cheese pizza, a loaded veggie delight, or a meaty extravaganza, 
                our menu has something for everyone. Check out our menu and order your favorite pizza today!
            </p>
            <a href="/display-items" className="btn btn-primary mt-3">Explore Our Menu</a>
        </div>
    );
}

export default Home;
