import profilePictureImg from '../../img/foreground/profile_picture.jpeg';
import waterBackgroundImg from '../../img/background/water_background.jpg';

function About() {
    return (
        <div className="background-img" style={{'backgroundImage': `url(${waterBackgroundImg})`}}>
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="row m-4">
                    <div className="col-lg-6 mt-3">
                        <img src={profilePictureImg} className="img-fluid mx-auto d-block img-thumbnail" alt={""}/>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <h2>About Me</h2>
                        <h4>Hi! My name is Armin Bruckmann</h4>
                        <p>I graduated from Peter Vischer Gymnasium in 2017 with a grade of 2.5.</p>
                        <p>Currently I am studying computer science at the technical college Georg Simon Ohm. I expect to
                            finish my bachelor's degree in the summer semester of 2022. </p>
                        <p>I have been working as a student trainee at GfK since November 2019. I am developing automated
                            tests for a web application with my team using Robot Framework.</p>
                    </div>
                </div>
            </div>
        </div>);
}

export default About;