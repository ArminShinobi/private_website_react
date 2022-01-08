import individumealImg from '../../img/foreground/individumeal.png';
import cyberpunkImg from '../../img/foreground/cyberpunk_2077.png';
import personalWebsiteImg from '../../img/foreground/personal_website.png';
import sandBackgroundImg from "../../img/background/sand_background.jpg";
import './portfolio.css';

function Portfolio() {
    return (
        <div className="background-img" style={{'backgroundImage': `url(${sandBackgroundImg})`}}>
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h2 style={{"margin-top": "5rem"}}>Portfolio</h2>
                        <p>
                            Projects that I worked on in university and in my free time
                        </p>
                    </div>
                </div>
                <div className="row mt-4 mx-4 work-filter">
                    <div className="col-lg-4 work_item wordpress WORK webdesign">
                        <a href="https://github.com/ArminShinobi/private_website_react" className="img-zoom">
                            <div className="work_box">
                                <div className="work_img">
                                    <img src={personalWebsiteImg} className="img-fluid mx-auto d-block rounded"
                                         alt={"Personal Website"}/>
                                </div>
                                <div className="work_detail">
                                    <p className="mb-2">Web Development</p>
                                    <h4 className="mb-0">Personal Website</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 work_item webdesign wordpress">
                        <a href="https://github.com/ordass00/IT-Projekt" className="img-zoom">
                            <div className="work_box">
                                <div className="work_img">
                                    <img src={individumealImg} className="img-fluid mx-auto d-block rounded"
                                         alt={"Individumeal IT Project"}/>
                                </div>
                                <div className="work_detail">
                                    <p className="mb-2">Web Development</p>
                                    <h4 className="mb-0">Individumeal</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 work_item WORK webdesign seo">
                        <a href="https://github.com/ordass00/Text-Analytics-Project-Elective-TH.OHM"
                           className="img-zoom">
                            <div className="work_box">
                                <div className="work_img">
                                    <img src={cyberpunkImg} className="img-fluid mx-auto d-block rounded"
                                         alt={"Cyberpunk IT Project"}/>
                                </div>
                                <div className="work_detail">
                                    <p className="mb-2">Data Science</p>
                                    <h4 className="mb-0">Cyberpunk 2077 Text Analytics</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;