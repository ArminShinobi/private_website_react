import profilePictureImg from '../../img/foreground/profile_picture.png';
import waterBackgroundImg from '../../img/background/water_background.jpg';

function About() {
  return (
    <div className="background-img" style={{ backgroundImage: `url(${waterBackgroundImg})` }}>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="row m-4">
          <div className="col-lg-6 mt-5">
            <img
              src={profilePictureImg}
              className="img-fluid mx-auto d-block img-thumbnail"
              alt={'Armin Bruckmann'}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <h2>About Me</h2>
            <h4>Hi! My name is Armin Bruckmann</h4>
            <p className="mt-4">
              I graduated from Peter Vischer Gymnasium in 2017 with a grade of 2.5.
            </p>
            <p>
              Currently, I am studying Computer Science at the technical college Georg Simon Ohm,
              Nuremberg Germany. I expect to finish my Bachelor&apos;s degree in the summer semester
              of 2022. I am writing my bachelor thesis in cooperation with GfK Media Measurement.
            </p>
            <p>
              I worked as a student trainee at GfK in Nuremberg, Germany from November 2019 to
              February 2022. I developed automated tests for a web application with my team in an
              agile environment using Robot Framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
