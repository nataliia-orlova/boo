import './scss/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { useState, useEffect } from 'react';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('There was a problem fetching the data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleSelect = (selectedIndex) => {
        const sortedProducts = [...products];

        if (selectedIndex === 1) {
            sortedProducts.sort((a, b) => b.rating - a.rating);
        } else if (selectedIndex === 2) {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (selectedIndex === 3) {
            sortedProducts.sort((a, b) => a.price - b.price);
        }

        setProducts(sortedProducts);
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/products'
                        element={
                            <Products
                                products={products}
                                handleSelect={handleSelect}
                            />
                        }
                    />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
