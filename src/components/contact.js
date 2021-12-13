import './contact.css';

function Contact(){
  return (
    <div className="contact">
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
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact;