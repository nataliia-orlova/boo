import React from 'react';

export default function ProductList({ products }) {
    return (
        <div className='product-list__gallery row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
            {products.map((product) => (
                <article key={product.id} className='card bg-white'>
                    <div className='card-body text-center d-flex flex-column'>
                        <img
                            className='img-fluid'
                            src={
                                process.env.PUBLIC_URL +
                                `/assets/img/products/${product.img}`
                            }
                            alt={product.title}
                        />
                        <hgroup className='py-2'>
                            <h4 className='card-title'>{product.title}</h4>
                            <p className='card-text'>{product.author}</p>
                            <span className='card-text'>
                                {product.price} &euro;
                            </span>
                        </hgroup>
                        <div className='d-grid gap-2 d-block justify-content-lg-center mt-auto pt-1'>
                            <button
                                className='btn btn-read-more btn-primary me-md-2 w-100'
                                type='button'
                            >
                                Read more
                            </button>
                            <button
                                className='btn btn-add-to-cart btn-warning w-100'
                                type='button'
                                data-id='{product.id}'
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
