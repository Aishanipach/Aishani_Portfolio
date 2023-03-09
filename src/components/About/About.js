import React from 'react'
import { Container } from "react-bootstrap"
import "./About.css"
import { Image } from "react-bootstrap";
import icons from "../images/icons.png"
function About() {
    return (
        <Container style={{ marginTop: "35vh", textAlign: "left" }} >
            <h1 className='linear-wipe'> Always Curious.</h1>

            <Image src={icons} style={{ width: "350px" }} fluid></Image>


            <h5 style={{ fontWeight: "300", marginTop: "2.8rem", fontSize: "16px" }}>Coding on ReactJS and dreaming on ReactJS. Specializing in designing, building, shipping<br /> and scaling applications serving 100,000+ users with blazing fast- efficiency using modern technologies. <br /></h5>
            <h5 className="mn" style={{ margin: "2rem 0", fontSize: "16px" }}><a style={{ color: "#fafafa", textDecoration: "none" }} href="https://www.linkedin.com/in/aishanipachauri/">Connect with me -&gt; <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.9 43.4">
                <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg></a></h5>
        </Container>
    )
}

export default About
