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
              In 2017, I graduated from Peter Vischer Gymnasium with a grade of 2.5. My academic
              journey led me to the Technical College Georg Simon Ohm in Nuremberg, where I earned
              my Bachelor&apos;s degree in Computer Science in the winter semester of 2022 with a
              grade of 2.0. During this time, I collaborated on projects, including a
              Bachelor&apos;s thesis with GfK Media Measurement.
            </p>
            <p>
              Simultaneously, I gained hands-on experience as a student trainee at GfK from November
              2019 to February 2022. In this role, I developed automated tests for web applications
              using Robot Framework.
            </p>
            <p>
              Later, from April to October 2022, I worked as a working student at Viind. There, I
              focused on enhancing the central management frontend, improving the user experience,
              and boosting system efficiency using Next.js, React, and TypeScript.
            </p>
            <p>
              In December 2022, I began my journey at S.L Trans as a working student, later
              transitioning into a software developer role. My ongoing project involves creating an
              independent platform for company management. I am using a cutting-edge tech stack,
              including React and AWS Amplify Studio, which includes services like AppSync,
              DynamoDB, S3, and Cognito. This platform automates work processes and enhances overall
              efficiency, thanks to close collaboration with the CEO and the related department.
              Scrum methodologies ensure timely feature delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
