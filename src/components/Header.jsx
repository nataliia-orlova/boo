import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.items);

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
                            <li
                                className='nav-item ps-4'
                                onClick={() => navigate('/cart')}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-bag-heart'
                                    viewBox='0 0 16 16'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132'
                                    />
                                </svg>
                                <div className='cart__counter'>
                                    {cartItemsQuantity}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
