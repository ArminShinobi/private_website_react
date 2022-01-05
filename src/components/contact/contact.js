import './contact.css';
import pencilBackgroundImg from "../../img/background/pencil_background.jpg";
import {useRef, useState} from 'react'
import {API} from 'aws-amplify'
import {createCandidate} from '../../graphql/mutations'
import {Col, Row, Toast} from "react-bootstrap";

const Contact = () => {
    const initialRef = useRef()
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [showSuccess, setShowSuccess] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
        const {name, email, message} = formState
        if (name && email && message) {
            try {
                await API.graphql({
                    query: createCandidate,
                    variables: {
                        input: {
                            name,
                            email,
                            message
                        },
                    },
                })
                setShowSuccess(true)
            } catch (err) {
                setShowError(true)
                console.log('error', err)
            }
        } else {
            setShowWarning(true);
        }
    }

    return (
        <div className="background-img" style={{'backgroundImage': `url(${pencilBackgroundImg})`}}>
            <Row>
                <Col xs={6}>
                    <Toast bg="success" onClose={() => setShowSuccess(false)} show={showSuccess} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Success</strong>
                        </Toast.Header>
                        <Toast.Body>Thank you for contacting me. I will get back to you as soon as
                            possible.</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Toast bg="warning" onClose={() => setShowWarning(false)} show={showWarning} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Warning</strong>
                        </Toast.Header>
                        <Toast.Body>Please verify all fields are filled out.</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Toast bg="danger" onClose={() => setShowError(false)} show={showError} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body>Sorry, something went wrong.<br/> Please try again later or contact me under
                            armin.bruckmann@icloud.com.</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2>Contact</h2>
                            <p className="mx-auto section-subtitle mt-3">
                                Please feel free to contact me if you have any questions or comments.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name"
                                       ref={initialRef}
                                       value={formState.name}
                                       onChange={(e) =>
                                           setFormState({...formState, name: e.target.value})
                                       }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email"
                                       value={formState.email}
                                       onChange={(e) =>
                                           setFormState({...formState, email: e.target.value})
                                       }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3"
                                          placeholder="Enter your message"
                                          value={formState.message}
                                          onChange={(e) =>
                                              setFormState({...formState, message: e.target.value})
                                          }
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <input className="btn btn-lg btn-primary m-2" type="button"
                                       onClick={handleContactFormSubmit}
                                       value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact