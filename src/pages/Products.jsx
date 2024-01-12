import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Footer from '../components/Footer';

function Products({ products, handleSelect }) {
    return (
        <>
            <Header />
            <main>
                <section className='bg-light bg-gradient'>
                    <div className='product-list__content container py-5'>
                        <Filter />
                        <div className='product-list__display'>
                            <div className='applied-filter'></div>
                            <Sort handleSelect={handleSelect} />
                            <ProductList products={products} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Products;
