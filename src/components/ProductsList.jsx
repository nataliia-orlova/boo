import React from 'react';
import Products from './Products';
import Filter from './Filter';
import Sort from './Sort';

export default function ProductsList({ products, handleSelect }) {
    return (
        <main>
            <section className='bg-light bg-gradient'>
                <div className='product-list__content container py-5'>
                    <Filter />
                    <div className='product-list__display'>
                        <div className='applied-filter'></div>
                        <Sort handleSelect={handleSelect} />
                        <Products products={products} />
                    </div>
                </div>
            </section>
        </main>
    );
}
