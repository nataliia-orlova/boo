import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductDetails({ products }) {
    const { productId } = useParams();
    const product = products.find((p) => p.id === parseInt(productId, 10));

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <Header />
            <section className='bg-white p-5 text-center text-md-start'>
                <Link to='/products' className='btn btn-warning my-3'>
                    Go Back
                </Link>
                <Row>
                    <Col md={5}>
                        <Image
                            src={
                                process.env.PUBLIC_URL +
                                `/assets/img/products/${product.img}`
                            }
                            alt={product.title}
                            fluid
                        />
                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Title:</Col>
                                        <Col>
                                            <strong>{product.title}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Author:</Col>
                                        <Col>
                                            <strong>{product.author}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>
                                                {product.price} &euro;
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Description:</Col>
                                        <Col>
                                            <strong>
                                                {product.description}
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Button
                                        className='btn-block'
                                        type='button'
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </section>
            <Footer />
        </>
    );
}

export default ProductDetails;
