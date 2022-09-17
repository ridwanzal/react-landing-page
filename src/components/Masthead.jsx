function Masthead() {
    return (
            <div className="masthead-container">
                <div className="wrapper">
                    <div className="wrapper-inner topbottom masthead-container--content">
                        <div className="content">
                            <p>
                                Hello there, welcome to my page
                            </p>
                            <h1>
                           Software Engineer who work around fullstack development, but work as professional Front-End Developer.
                            </h1>
                            <p>
                                I live in Indonesia, working remotely from home. Fairtech is my current company, I've been working here for almost 3 years.
                                Help a lot of company to build their digital products.
                            </p>
                            <div className="social-list">
                                <div className="social-list--item">
                                    <a className="btn default light">Linkedin</a>
                                    <a className="btn default light">Instagram</a>
                                    <a className="btn default light">Email</a>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <img className="image-profile" src='./profile.jpeg'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Masthead

