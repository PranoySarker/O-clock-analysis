import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import smartWatch from '../../assets/smartWatch.png';
import useWatch from '../../hooks/useWatch';


const Home = () => {
    // const [watch, setWatch] = useWatch();
    return (
        <div>
            <div className='banner-section bg-light pb-5'>
                <Row>
                    <Col className='mt-5 pl-3' xl={6}>
                        <h1 className='mt-5 fw-bold text-success'>OClock</h1>
                        <h3 className='text-primary fw-bold'>Your Perfect Time Partner</h3>
                        <p className='fs-5 text-muted'>
                            OClock is a website where you can find a wide range of smartwatches.Top quality of wetches are there.You can buy them on basis of users reviews,ratings that they given here.If you purchase watches from our site feel free to give some review.

                        </p>
                        <Button className='text-light ' variant='primary'>Click For More!!</Button>
                    </Col>
                    <Col className='mt-5' xl={6}>
                        <img width={471} height={280} className='mt-3' src={smartWatch} alt="watch" />
                    </Col>
                </Row>
            </div>
            <div className='customer-review pt-5'>
                <h1 className='mt-5 fw-bold text-success'>Customer Reviews</h1>
                <h3>reviews:</h3>
            </div>
        </div >
    );
};

export default Home;