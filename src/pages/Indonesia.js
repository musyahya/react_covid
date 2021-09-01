import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const Indonesia = () => {

    const [indonesia, setIndonesia] = useState()

    useEffect(() => {
       getIndonesia();
    }, [])

    function getIndonesia() {
        axios
          .get("https://api.kawalcorona.com/indonesia")
          .then(function (response) {
            // console.log(response);
            setIndonesia(response.data);
          })
          .catch(function (error) {
            // console.log(error);
          });
    }

    console.log(indonesia)

    return (
        <Container>
            <Row className="my-4">
                <Col md={4}>
                    {
                        indonesia && indonesia.map((item) => (
                            <CardComponent title="Total Positif" body={item.positif} bg="primary" text="white" />
                        ))
                    }
                </Col>
                <Col md={4}>
                    {
                        indonesia && indonesia.map((item) => (
                            <CardComponent title="Total Sembuh" body={item.sembuh} bg="success" text="white" />
                        ))
                    }
                </Col>
                <Col md={4}>
                    {
                        indonesia && indonesia.map((item) => (
                            <CardComponent title="Total Meninggal" body={item.sembuh} bg="danger" text="white" />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Indonesia;