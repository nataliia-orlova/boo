import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cartItems);

    const cartItemsQuantity =
        cart?.length && cart.length > 0 ? cart.length : '';

    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-4'>
                <div className='container hover'>
                    <p onClick={() => navigate('/')} className='navbar-brand'>
                        <span className='text-warning'>PARROT</span> BOOKS
                    </p>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navmenu'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navmenu'>
                        <ul className='navbar-nav ms-auto'>
                            <li
                                className='nav-item'
                                onClick={() => navigate('/products')}
                            >
                                <p className='nav-link'>Books</p>
                            </li>
                            <li
                                className='nav-item'
                                onClick={() => navigate('/blog')}
                            >
                                <p className='nav-link'>Blog</p>
                            </li>
                            <li
                                className='nav-item'
                                onClick={() => navigate('/about')}
                            >
                                <p className='nav-link'>About</p>
                            </li>
                            <li
                                className='nav-item'
                                onClick={() => navigate('/contact')}
                            >
                                <p className='nav-link'>Contact</p>
                            </li>
                        </ul>
                        <div className='navbar__search'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Search for ...'
                            />

                            <button className='navbar__icon-btn'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-search'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                                </svg>
                            </button>
                        </div>
                        <div className='nav__user-area'>
                            <button
                                className='nav__user-area-btn navbar__icon-btn'
                                onClick={() => navigate('/cart')}
                            >
                                <p className='nav-link hover'>Cart</p>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-bag'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z' />
                                </svg>
                                <div className='cart__counter'>
                                    {cartItemsQuantity}
                                </div>
                            </button>
                            <button className='nav__user-area-btn navbar__icon-btn '>
                                <p className='nav-link hover'>Log in</p>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-person'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
