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
    const [toastState, setToastState] = useState({
        show: false,
        header: '',
        message: '',
        variant: ''
    })

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
                setToastState({
                    show: true,
                    header: 'Success',
                    message: 'Your message has been sent successfully! \n I will get back to you as soon as possible.',
                    variant: 'success'
                })
            } catch (err) {
                setToastState({
                    show: true,
                    header: 'Error',
                    message: 'Sorry, something went wrong. \n Please try again later or contact me with the error ' +
                        'message under \n armin.bruckmann@icloud.com. \n Error: ' + err.message,
                    variant: 'danger'
                })
            }
        } else {
            setToastState({
                show: true,
                header: 'Warning',
                message: 'Please verify that all fields are filled out.',
                variant: 'warning'
            })
        }
    }

    return (
        <div className="background-img" style={{'backgroundImage': `url(${pencilBackgroundImg})`}}>
            <Row>
                <Col xs={6} style={{"marginTop": "3.5rem"}}>
                    <Toast bg={toastState.variant} onClose={() => setToastState({...toastState, show: false})}
                           show={toastState.show} delay={3000} autohide style={{"position": "absolute"}}>
                        <Toast.Header>
                            <strong className="me-auto">{toastState.header}</strong>
                        </Toast.Header>
                        <Toast.Body style={{"whiteSpace": "pre-line"}}>{toastState.message}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="col-lg-12 text-center">
                    <h2>Contact</h2>
                    <p>
                        Please feel free to contact me if you have any questions or comments.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <form onSubmit={handleContactFormSubmit}>
                            <div className="form-group mt-4">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name"
                                       required={true}
                                       autoComplete={"name"}
                                       minLength={2}
                                       maxLength={50}
                                       size={30}
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
                                       required={true}
                                       autoComplete={"email"}
                                       minLength={5}
                                       maxLength={45}
                                       value={formState.email}
                                       onChange={(e) =>
                                           setFormState({...formState, email: e.target.value})
                                       }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5"
                                          placeholder="Enter your message"
                                          required={true}
                                          minLength={10}
                                          maxLength={1000}
                                          value={formState.message}
                                          onChange={(e) =>
                                              setFormState({...formState, message: e.target.value})
                                          }
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type={'submit'} className="btn btn-lg btn-primary m-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact