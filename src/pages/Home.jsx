import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <section className='bg-light bg-gradient p-5 text-center text-md-start'>
                <div className='container'>
                    <div className='d-md-flex justify-content-around align-items-center'>
                        <div>
                            <h1>
                                Explore the
                                <span className='text-warning'>
                                    amazing world
                                </span>
                                of books
                            </h1>
                            <p className='lead pe-md-5'>
                                Welcome to the world of Parrot Books! In our
                                shop you can find fascinating books and jump
                                into the world of advanture, magic, detective
                                stories - choose whatever you feel up to.
                            </p>

                            <button
                                type='button'
                                className='btn btn-warning btn-lg my-4'
                                onClick={() => navigate('/products')}
                            >
                                Choose a book
                            </button>
                        </div>
                        <img
                            src='./assets/img/book.jpg'
                            className='img-fluid rounded-circle hero-img'
                            alt='magical-book'
                            width='400px'
                        />
                    </div>
                </div>
            </section>

            <section className='bg-light bg-gradient py-5'>
                <div className='container'>
                    <div
                        id='carousel'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <div className='carousel-inner'>
                            <div className='carousel-item text-center active'>
                                <img
                                    src='./assets/img/slide-image-1.webp'
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src='./assets/img/slide-image-2.webp'
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src='./assets/img/slide-image-3.webp'
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carousel'
                            data-bs-slide='prev'
                        >
                            <span
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carousel'
                            data-bs-slide='next'
                        >
                            <span
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <Form />
            <Footer />
        </>
    );
}

export default Home;
