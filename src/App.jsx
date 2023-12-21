import './scss/styles.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Form from './components/Form';
import Footer from './components/Footer';

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
            <Header />
            <ProductsList products={products} handleSelect={handleSelect} />
            <Form />
            <Footer />
        </>
    );
}

export default App;
