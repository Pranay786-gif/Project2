import React  from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
const About=()=>{
    return (
        <div className="app">
            
            <ReactBootStrap.Card>
  <ReactBootStrap.Card.Header>Quote</ReactBootStrap.Card.Header>
  <ReactBootStrap.Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
            <h2>
            <Link to= {`./Home.js`}>Home</Link>
            </h2>
        </div>
    )

}
export default About;