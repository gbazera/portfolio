function Hero() {
    return(
        <div className="container hero">
            <div className="rects">
                <div className="rect back"></div>
                <div className="rect mid"></div>
                <div className="rect front"></div>
            </div>
            <div className="right">
                <div className="top">
                    <p className="heading">hey, i'm <span>giorgi</span></p>
                    <p className="subheading">16 yo junior frontend developer</p>
                </div>
                <p className="scroll-down">scroll down</p>
            </div>
        </div>
    );
}

export default Hero;