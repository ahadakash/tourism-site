import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Doctor.css';



const Doctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        fetch(`https://chilling-witch-90234.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully Booked Offer');
                    reset();
                }
            })

    };


    const { doctorId } = useParams();
    console.log(doctorId);

    const [offer, setOffer] = useState({})

    useEffect(() => {

        fetch(`https://chilling-witch-90234.herokuapp.com/products/${doctorId}`)

            .then((res) => res.json())
            .then((data) => setOffer(data));

    }, []);


    return (
        <div>
            <Container>
                <h6 className="text-danger">Booking Id : {doctorId}</h6>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={offer.img} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{offer.name2}</Card.Title>
                                <Card.Text>
                                    Description : {offer?.specialist}
                                </Card.Text>
                                <Card.Text>
                                    Price :From $ {offer?.balance}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        Place order
                        <Card>
                            <Card.Body>
                                <form className="booking-form m-auto" onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} {...register("userName")} />

                                    {/* include validation with required or other standard HTML validation rules */}
                                    <input defaultValue={user.email} {...register("email")} />
                                    {/* errors will return when field validation fails  */}

                                    <input placeholder="Address" {...register("address", { required: true })} />
                                    {errors.address && <span className="error">This field is required</span>}
                                    <input placeholder="City"  {...register("city", { required: true })} />
                                    {errors.city && <span className="error">This field is required</span>}
                                    <input placeholder="Phone"  {...register("phone", { required: true })} />
                                    {errors.phone && <span className="error">This field is required</span>}
                                    {/* offer name */}
                                    <input defaultValue={offer?.name} {...register("name")} />
                                    <input defaultValue={offer?.price} {...register("price")} />

                                    <input className="btn btn-danger" type="submit" value="Place Order" />
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctor;