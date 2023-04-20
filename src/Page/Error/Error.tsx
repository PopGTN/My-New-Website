import React from "react";
import Menu from "../../Components/Menu";
import {Container, Alert} from "react-bootstrap";
import {Helmet} from "react-helmet-async";


function Error() {
    return (<>
        <Helmet>
            <title>JoshuaMC | Homepage</title>
            <meta name="description" content="ERROR | PAGE NOTE FOUND"/>
            <link rel="canonical" href="/error"/>
        </Helmet>
        <Menu/>
        <Container fluid className="p-10">
            <h1 style={{"fontSize": "5em"}}>ERROR | PAGE NOT FOUND</h1>
        </Container>
    </>);
}

export default Error;