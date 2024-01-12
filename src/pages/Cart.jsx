import Header from '../components/Header';
import Footer from '../components/Footer';

function Cart() {
    return (
        <>
            <Header />
            <aside class='bg-light cart'>
                <div class='cart__container bg-light'>
                    <h2>Your Cart</h2>
                    <ul class='cart__products' id='cart-products'></ul>
                </div>
            </aside>
            <Footer />
        </>
    );
}

export default Cart;
