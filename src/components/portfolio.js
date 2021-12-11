import './portfolio.css';

function Portfolio(){
    return(
        <div className="portfolio">
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2>Portfolio</h2>
                        <p className="mx-auto section-subtitle mt-3">
                            "Projects that I worked on in university and in my free time"
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-4 work-filter">
                <div className="col-lg-4 work_item webdesign wordpress">
                    <a href="https://github.com/ordass00/IT-Projekt" className="img-zoom">
                        <div className="work_box">
                            <div className="work_img">
                                <img src="../img/individumeal.png" className="img-fluid mx-auto d-block rounded" alt={""}/>
                            </div>
                            <div className="work_detail">
                                <p className="mb-2">Web Developing</p>
                                <h4 className="mb-0">Individumeal</h4>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 work_item WORK webdesign seo">
                    <a href="https://github.com/ordass00/Text-Analytics-Project-Elective-TH.OHM" className="img-zoom">
                        <div className="work_box">
                            <div className="work_img">
                                <img src="../img/cyberpunk_2077.png" className="img-fluid mx-auto d-block rounded" alt={""}/>
                            </div>
                            <div className="work_detail">
                                <p className="mb-2">Data Science</p>
                                <h4 className="mb-0">Cyberpunk 2077 Text Analytics</h4>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 work_item wordpress WORK webdesign">
                    <a href="" className="img-zoom">
                        <div className="work_box">
                            <div className="work_img">
                                <img src="../img/individumeal.png" className="img-fluid mx-auto d-block rounded" alt={""}/>
                            </div>
                            <div className="work_detail">
                                <p className="mb-2">Placeholder</p>
                                <h4 className="mb-0">Placeholder</h4>
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