import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

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
                            <Link to={`/products/${product.id}`}>
                                Read More
                            </Link>

                            <button
                                onClick={() => handleAddToCart(product)}
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

export default ProductList;
