import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className='bg-dark py-5 text-center text-white position-relative '>
            <div className='container'>
                <small>
                    Copyright &copy;{' '}
                    <span className='text-warning'>PARROT</span> BOOKS
                </small>
                <div
                    onClick={() => navigate('/products')}
                    className='position-absolute bottom-0 end-0 p-5'
                >
                    <i className='bi bi-arrow-up-circle h1 text-warning '></i>
                </div>
            </div>
        </footer>
    );
}
