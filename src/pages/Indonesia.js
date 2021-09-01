import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const Indonesia = () => {

    const [indonesia, setIndonesia] = useState()
    const [provinsi, setProvinsi] = useState()

    useEffect(() => {
       getIndonesia();
    }, [])

    useEffect(() => {
       getProvinsi();
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

    function getProvinsi() {
        axios
          .get("https://api.kawalcorona.com/indonesia/provinsi")
          .then(function (response) {
            // console.log(response);
            setProvinsi(response.data);
          })
          .catch(function (error) {
            // console.log(error);
          });
    }

    console.log(provinsi)

    return (
      <Container>
        <Row className="my-4">
          <Col md={4}>
            {indonesia &&
              indonesia.map((item) => (
                <CardComponent
                  title="Total Positif"
                  body={item.positif}
                  bg="primary"
                  text="white"
                />
              ))}
          </Col>
          <Col md={4}>
            {indonesia &&
              indonesia.map((item) => (
                <CardComponent
                  title="Total Sembuh"
                  body={item.sembuh}
                  bg="success"
                  text="white"
                />
              ))}
          </Col>
          <Col md={4}>
            {indonesia &&
              indonesia.map((item) => (
                <CardComponent
                  title="Total Meninggal"
                  body={item.sembuh}
                  bg="danger"
                  text="white"
                />
              ))}
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={12}>
            {provinsi && (
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
                          <th>Provinsi</th>
                          <th>Positif</th>
                          <th>Sembuh</th>
                          <th>Meninggal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {provinsi.map((item, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.attributes.Provinsi}</td>
                            <td>{item.attributes.Kasus_Posi}</td>
                            <td>{item.attributes.Kasus_Semb}</td>
                            <td>{item.attributes.Kasus_Meni}</td>
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

export default Indonesia;