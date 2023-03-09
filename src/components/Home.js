import React from 'react'
import { Container } from 'react-bootstrap'

import CardGrids from './CardGrids';

function Home() {
  return (
    <Container className="text-light" style={{ marginTop: "30vh" }} >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h5> Hi I am Aishani 👋</h5>
        <h5 style={{ fontWeight: "300" }}>Web developer & UX engineer</h5>
        <div style={{ display: "flex", flexDirection: "row" }}>


        </div>
      </div>
      <CardGrids />
    </Container>
  )
}

export default Home

// <img src={git} style={{width:"16px", height:"16px"}}></img>
