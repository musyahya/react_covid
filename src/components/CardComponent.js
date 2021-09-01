import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = (props) => {

    console.log(props);

    return (
      <Card bg={props.bg} text={props.text} className="shadow text-center">
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.value}</Card.Text>
        </Card.Body>
      </Card>
    );
};

export default CardComponent;