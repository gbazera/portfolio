function Projects() {
    return(
        <div className="container projects">
            <div className="top">
                <p className="heading">projects</p>
                <div className="btns">
                    <button disabled><i className="bx bx-chevron-left"></i></button>
                    <button><i className="bx bx-chevron-right"></i></button>
                </div>
            </div>
            <div className="items">
                <a className="item">
                    <div className="img"></div>
                    <p className="title">project 1</p>
                </a>
                <a className="item">
                    <div className="img"></div>
                    <p className="title">project 2</p>
                </a>
            </div>
        </div>
    );
}

export default Projects;