import React from 'react'
import './Home.scss';
import {Container} from "react-bootstrap";
import Menu2 from "../../Components/Menu2";
import AlertsMsg from "../../Components/AlertsMsg";

export default function Home() {
    return (
        <>
            <Menu2 />
            <AlertsMsg title={"Welcome"} smallMsg={":)"} msg={"I do not collect data! Plus I don't know how!"} closeButton={true}/>

            <h1>Joshua Mckenna</h1>
        </>
    )
}