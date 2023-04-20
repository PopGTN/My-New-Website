import React from 'react';
import {Container} from "react-bootstrap";

import './About.scss';
import Menu2 from "../../Components/Menu2";
function About() {
    return (
        <>
            <Menu2 />
            <Container id="sidebar">
                <h1>About Me</h1>
            </Container>
        </>
    )
}
export default About;