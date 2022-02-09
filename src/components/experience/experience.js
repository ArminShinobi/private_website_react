import WaterAndFireBackgroundImg from '../../img/background/water_and_fire_background.jpg';

function Experience() {
  return (
    <div
      className="background-img"
      style={{ backgroundImage: `url(${WaterAndFireBackgroundImg})` }}>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="col-lg-12 text-center">
          <h2 style={{ marginTop: '5rem' }}>Experience</h2>
          <h6>
            Over the course of time, I have learned and worked with many programming languages and
            tools.
            <br /> I also earned some certificates
          </h6>
        </div>
        <div className="col-lg-4 m-3">
          <h2>Programming languages</h2>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript/Typescript</li>
            <li>PHP</li>
            <li>C#</li>
          </ul>
          <h2>Tools</h2>
          <ul>
            <li>Git in combination with GitHub/Stash</li>
            <li>MySQL in combination with MariaDB</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Jira</li>
            <li>Robot Framework</li>
          </ul>
          <h2>Certificates</h2>
          <ul>
            <li>Crash Course on Python</li>
            <li>Docker for absolute beginners</li>
            <li>Neural Networks and Deep Learning</li>
            <li>
              Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
