import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import watch from '../../assets/watch.png';


const Home = () => {
    return (
        <div>
            {/* <div>
                <h1>text</h1>
            </div>
            <div className=''>
                <img src={watch} alt="" />
            </div> */}
            <Row>
                <Col className='mt-5 pl-3' xl={6}>
                    <h1 className='mt-5 fw-bold text-success'>OClock</h1>
                    <h3 className='text-primary fw-bold'>Your Perfect time Partner</h3>
                    <p className='fs-5 text-muted'>
                        smartwatch, a small smartphonelike device worn on the wrist. The user can operate the smartwatch through a touch screen, physical buttons, or a combination of the two. Some smartwatches come with pedometers and heart-rate monitors to help users track their health.
                    </p>
                    <Button className='text-light ' variant='info'>Click For More!!</Button>
                </Col>
                <Col className='mt-5' xl={6}>
                    <img width={471} height={280} className='mt-3' src={watch} alt="watch" />
                </Col>
            </Row>
        </div >
    );
};

export default Home;