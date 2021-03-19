import React from 'react'
import Card from 'react-bootstrap/Card';


function FeatureCard(props) {
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
}

export default FeatureCard;
