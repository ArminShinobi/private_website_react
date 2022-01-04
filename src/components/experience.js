import './experience.css';

function Experience(){
    return(
        <div className="experience">
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2 style={{"margin-top":" 5rem"}}>Experience</h2>
                        <p>Over the course of time, I have learned and worked with many programming languages and tools.
                            <br /> I also earned some certificates</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mt-3">
                        <h2>Programming languages</h2>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript/Typescript</li>
                            <li>PHP</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mt-3">
                        <h2 className="align-items-center">Tools</h2>
                        <ul>
                            <li>Robot Framework</li>
                            <li>Git in combination with GitHub/Stash</li>
                            <li>Bootstrap</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mt-3">
                        <h2 className="align-items-center">Certificates</h2>
                        <ul>
                            <li>Crash Course on Python</li>
                            <li>Docker for absolute beginners</li>
                            <li>Neural Networks and Deep Learning</li>
                            <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Experience;