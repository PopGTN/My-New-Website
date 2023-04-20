import React from 'react';
import {Container} from "react-bootstrap";

import './About.scss';
import Menu from "../../Components/Menu";
import {Helmet} from "react-helmet-async";
function About() {
    return (
        <>
            <Helmet>
                <title>JoshuaMC | Homepage</title>
                <meta name="description" content="JoshuaMC | About"/>
                <link rel="canonical" href="/About"/>
            </Helmet>
            <Menu />
            <Container id="sidebar">
                <h1>About Me</h1>
            </Container>
        </>
    )
}
export default About;