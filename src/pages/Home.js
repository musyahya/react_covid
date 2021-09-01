import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const Home = () => {

    const [positif, setPostif] = useState()
    const [sembuh, setSembuh] = useState()
    const [meninggal, setMeninggal] = useState()

    useEffect(() => {
      getPositif();
    }, [])
    
    useEffect(() => {
      getSembuh();
    }, [])

    useEffect(() => {
      getMeninggal();
    }, [])

    function getPositif() {
        axios
          .get("https://api.kawalcorona.com/positif")
          .then(function (response) {
            // console.log(response);
            setPostif(response.data);
          })
          .catch(function (error) {
            // console.log(error);
          })
    }

    function getSembuh() {
        axios
          .get("https://api.kawalcorona.com/sembuh")
          .then(function (response) {
            // console.log(response);
            setSembuh(response.data);
          })
          .catch(function (error) {
            // console.log(error);
          })
    }

    function getMeninggal() {
        axios
          .get("https://api.kawalcorona.com/meninggal")
          .then(function (response) {
            // console.log(response);
            setMeninggal(response.data);
          })
          .catch(function (error) {
            // console.log(error);
          })
    }

    // console.log(meninggal);

    return (
      <Container>
        <Row className="my-4">
          <Col md={4}>
            {positif && (
              <CardComponent data={positif} bg="primary" text="white" />
            )}
          </Col>
          <Col md={4}>
            {sembuh && (
              <CardComponent data={sembuh} bg="success" text="white" />
            )}
          </Col>
          <Col md={4}>
            {meninggal && (
              <CardComponent data={meninggal} bg="danger" text="white" />
            )}
          </Col>
        </Row>
      </Container>
    );
};

export default Home;