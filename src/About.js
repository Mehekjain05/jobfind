import React from 'react';
import Common from './Common'; 
import bg from '../src/img/about.png'
function About () {
   return (
      <Common name = "Welcome to About Page"imgsrc={bg} visit="/contact" btname="Contact Now" />
   )
}
export default About;