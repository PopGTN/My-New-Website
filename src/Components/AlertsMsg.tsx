import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function AlertsMsg(props: any) {
    const [showA, setShowA] = useState(true);

    let isFunc: boolean = false;
    const toggleShowA = () => setShowA(!showA);
    return (
            <ToastContainer className="p-3" position="bottom-end">
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                            src={props.image}
                            className="rounded me-2"
                            alt={props.alt}
                        />
                        <strong className="me-auto">{props.title}</strong>
                        <small>{props.smallMsg}</small>
                    </Toast.Header>
                    <Toast.Body>{props.msg}</Toast.Body>
                </Toast>
            </ToastContainer>
    );
}

export default AlertsMsg;