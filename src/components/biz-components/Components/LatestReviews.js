import { Rating, Stack } from '@mui/material'
import React from 'react'
import { CardTitle, Col, Row } from 'reactstrap'
import Review from '../../biz-components/Img/ReviewImg.png'

const LatestReviews = () => {
    return (
        <>
            <div className='create-post'>
                <CardTitle>
                    <div className='ReviewsHeading'>
                        <h3 >Latest Reviews</h3>
                    </div>
                </CardTitle>
                <Row>
                    <Col sm="8">
                        <div className='ReviewColSection'>
                            <div className='ReviewImgSection p-1'>
                                <img src={Review} alt="img" className='img-fluid' />
                            </div>
                            <div className='ml-2 '>
                                <span className='spaninfo'>We’re here to put an end to that. By asking specific, targeted questions in employee evaluations, managers can really dive into individual performance, employee motivations, and goals.</span>
                                <h3>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                                    </Stack>
                                </h3>
                            </div>


                        </div>

                    </Col>
                   

                </Row>



            </div>
            {/* <div className='create-post'>
                <CardTitle >
                    <div className='ReviewImgSection'>
                        <h3>Latest Reviews</h3>
                    </div>
                    <Row>
                        <Col>

                           

                        </Col>

                        <Col>
                        </Col>
                    </Row>
                </CardTitle>
                <Col>
                </Col>
            </div> */}
        </>
    )
}

export default LatestReviews