import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
import Footer from '../components/Footer';

function Products({ products, handleSelect, handleFilter }) {
    return (
        <>
            <Header />
            <main>
                <section className='bg-light bg-gradient'>
                    <div className='product-list__content container py-5'>
                        <Filters handleFilter={handleFilter} />
                        <div className='product-list__display'>
                            <div className='applied-filter'></div>
                            <Sort handleSelect={handleSelect} />
                            <ProductList products={products} />
                        </div>
                    </div>
                </section>
                x
            </main>

            <Footer />
        </>
    );
}

export default Products;
