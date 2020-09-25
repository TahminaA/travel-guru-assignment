import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import sajek from '../../Image/Sajek.png';
import sreemongol from '../../Image/Sreemongol.png';
import  sundorbon from '../../Image/sundorbon.png';




const PlaceShow = () => {
    
    return (
        <div>
    <CardDeck className='card-deck'>
  <Card>
    <Card.Img variant="top" src={sajek} />
    
    <Card.Body>
      <Card.Title>Sajek</Card.Title>
      <Card.Text>
      Sajek is a union located in the north of Chittagong Hill Tracts. 
      </Card.Text>
      <Button variant="warning">Booking</Button>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={sreemongol} />
    <Card.Body>
      <Card.Title>Sreemongol</Card.Title>
      <Card.Text>
      Sreemangal, The Tea Capital of Bangladesh A large portion of world's .
      </Card.Text>
      <Button variant="warning">Booking</Button>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={sundorbon}/>
    <Card.Body>
      <Card.Title>Sundorbon</Card.Title>
      <Card.Text>
      The Sundarbans is a cluster of low-lying islands in the Bay of Bengal.
      </Card.Text>
      <Button variant="warning">Booking</Button>
     
    </Card.Body>
    
  </Card>
</CardDeck>
        </div>
    );
};

export default PlaceShow;