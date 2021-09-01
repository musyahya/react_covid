import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const Home = () => {

    const [positif, setPostif] = useState()
    const [sembuh, setSembuh] = useState()
    const [meninggal, setMeninggal] = useState()
    const [global, setGlobal] = useState()

    useEffect(() => {
      getPositif();
    }, [])
    
    useEffect(() => {
      getSembuh();
    }, [])

    useEffect(() => {
      getMeninggal();
    }, [])

    useEffect(() => {
      getGlobal();
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

    function getGlobal() {
        axios
          .get("https://api.kawalcorona.com/")
          .then(function (response) {
            // console.log(response);
            setGlobal(response.data);
          })
          .catch(function (error) {
            // console.log(error);
          });
    }

    // console.log(global);

    return (
      <Container>
        <Row className="my-4">
          <Col md={4}>
            {positif && (
              <CardComponent
                title={positif.name}
                body={positif.value}
                bg="primary"
                text="white"
              />
            )}
          </Col>
          <Col md={4}>
            {sembuh && (
              <CardComponent
                title={sembuh.name}
                body={sembuh.value}
                bg="success"
                text="white"
              />
            )}
          </Col>
          <Col md={4}>
            {meninggal && (
              <CardComponent
                title={meninggal.name}
                body={meninggal.value}
                bg="danger"
                text="white"
              />
            )}
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={12}>
            {global && (
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Kasus Covid Global</Card.Title>
                  <Card.Text
                    style={{ height: "500px" }}
                    className="overflow-auto"
                  >
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Negara</th>
                          <th>Positif</th>
                          <th>Sembuh</th>
                          <th>Meninggal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {global.map((item, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.attributes.Country_Region}</td>
                            <td>{item.attributes.Confirmed}</td>
                            <td>{item.attributes.Recovered > 0 ? item.attributes.Recovered : 0}</td>
                            <td>{item.attributes.Deaths}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
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