import React from 'react'
import './Contact.scss';
import {Container} from "react-bootstrap";
import Menu from "../../Components/Menu";
import {Helmet} from "react-helmet-async";

 function Contact() {
    return (
        <>
            <Helmet>
                <title>JoshuaMC | Homepage</title>
                <meta name="desciption" content="JoshuaMC | Contact"/>
                <link rel="canonical" href="/contact"/>
            </Helmet>
            <Menu />
            <Container>
                <h1>Socials</h1>

            </Container>

        </>
    )
}
export default Contact();