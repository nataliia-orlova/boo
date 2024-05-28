import Header from '../components/Header';
import Footer from '../components/Footer';
import ClickCounter from '../components/ClickCounter';
import { useSelector } from 'react-redux';
import { removeFromCart, selectTotalPrice } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function Cart() {
    const cart = useSelector((state) => state.cart.cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const totalPrice = useSelector(selectTotalPrice);

    // const totalAmount = cart.reduce(
    //     (total, product) => total + product.price * product.quantity,
    //     0
    // );

    return (
        <>
            <Header />
            <main className='bg-white cart'>
                {cart.length === 0 && (
                    <div className='cart-cta'>
                        <h1>Your cart is empty</h1>
                        <button
                            type='button'
                            className='btn btn-warning btn-lg my-4 cart__btn--cta'
                            onClick={() => navigate('/products')}
                        >
                            Find a book
                        </button>
                    </div>
                )}
                <div className='cart__container bg-white'>
                    <ul className='cart__items'>
                        {cart.map((product) => (
                            <li className='cart__item' key={product.id}>
                                <img
                                    className='cart__item-img img-fluid'
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/assets/img/products/${product.img}`
                                    }
                                    alt={product.title}
                                />
                                <div className='cart__item-info'>
                                    <div className='cart__item-title'>
                                        <div className='cart__item-title--primary'>
                                            {product.title}{' '}
                                        </div>
                                        <div className='cart__item-title--secondary'>
                                            {product.author}
                                        </div>
                                        <div className='cart__item-title--light'>
                                            {product.price}&euro;
                                        </div>
                                    </div>

                                    <div className='cart__item-actions'>
                                        <ClickCounter />
                                        <button
                                            className='cart__btn--remove btn btn-danger'
                                            onClick={() =>
                                                handleRemoveFromCart(product)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='cart__summary'>
                        <div className='cart__summary--info'>
                            <span>Total quantity:</span>
                            <span>NUM</span>
                        </div>
                        <div className='cart__summary--info'>
                            <span>Total price:</span>
                            <span>{totalPrice}</span>
                        </div>
                        <button className='btn btn-danger'>Order</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Cart;
