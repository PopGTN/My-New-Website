import React from 'react'
import './Home.scss';
import Menu from "../../Components/Menu";
import AlertsMsg from "../../Components/AlertsMsg";
import {Carousel, Container} from "react-bootstrap";
import {Helmet} from "react-helmet-async";

export default function Home() {


    return (<>
            <Helmet>
                <title>JoshuaMC | Homepage</title>
                <meta name="description" content="This is the Home Page of Joshua's site"/>
                <link rel="canonical" href="/"/>
            </Helmet>

        <Menu/>
            <Carousel style={{ width: '100%', height: '20% !important' }}>
                <Carousel.Item >
                    <img
                        className="d-block imageshead img1"
                        src={require("./images/image1.jpg?text=Ottawa&bg=20232a")}
                        alt="Ottawa"
                    />
                    <Carousel.Caption className="headerText">
                        <h1>Ottawa</h1>
                        <p>I love taking photos of anything.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imageshead img2"
                        src={require("./images/image2.jpg?text=Nova Scotia&bg=20232a")}
                        alt="Nova Scotia"
                    />

                    <Carousel.Caption className="headerText">
                        <h1>Nova Scotia</h1>
                        <p>I love the beachs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imageshead img3"
                        src={require("./images/image3.jpg?text=Nova Scotia&bg=20232a")}
                        alt="Nova Scotia"
                    />

                    <Carousel.Caption className="headerText">
                        <h1>Nova Scotia</h1>
                        <p>I love the beachs</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <main>
                <Container className='text-dark'>
                        <h2>About Me</h2>
                        <p>I am average 20 year old that loves computers, coding, photography, playing minecraft & gta, I run and own a minecraft server called ImperialSkies.</p>
                </Container>
            </main>
            <AlertsMsg title={"👋 Welcome 👋"} smallMsg={""} msg={"I do not collect data! 😊"}
                       closeButton={true}/>

        </>)
}