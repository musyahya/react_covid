import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';

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

    console.log(meninggal);

    return (
      <Container>
        <Row className="my-4">
          <Col md={4}>
            {positif && (
              <Card>
                <Card.Body>
                  <Card.Title>{positif.name}</Card.Title>
                  <Card.Text>
                   {positif.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col md={4}>
            {sembuh && (
              <Card>
                <Card.Body>
                  <Card.Title>{sembuh.name}</Card.Title>
                  <Card.Text>
                   {sembuh.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col md={4}>
            {meninggal && (
              <Card>
                <Card.Body>
                  <Card.Title>{meninggal.name}</Card.Title>
                  <Card.Text>
                   {meninggal.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
};

export default Home;