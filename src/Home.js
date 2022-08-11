import React from 'react';
import Common from './Common';
import { NavLink } from 'react-router-dom';
import bg from "../src/img/bg.png"
function Home() {
  return (
    <Common name = "Grow your business with"imgsrc={bg} visit="/contact" btname="Get Started" />
  )
}

export default Home;