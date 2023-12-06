import './scss/styles.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
    const [initialProducts, setInitialProducts] = useState([]);
    let products = initialProducts;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInitialProducts(data);
            } catch (error) {
                console.error('There was a problem fetching the data: ', error);
            }
        };

        fetchData();
    }, []);

    const [sortedProducts, setSortedProducts] = useState(products);

    const handleSelect = (index) => {
        let currentValueIndex = index;
        if (currentValueIndex == 1) {
            setSortedProducts(products.sort((a, b) => b.rating - a.rating));
        } else if (currentValueIndex == 2) {
            setSortedProducts(products.sort((a, b) => b.price - a.price));
        } else if (currentValueIndex == 3) {
            setSortedProducts(products.sort((a, b) => a.price - b.price));
        }
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
