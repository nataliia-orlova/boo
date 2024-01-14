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
            </div>
        </footer>
    );
}
