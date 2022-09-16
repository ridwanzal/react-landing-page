function Masthead() {
    return (
            <div className="masthead-container">
                <div className="wrapper">
                    <div className="masthead-container--content">
                        <div className="content">
                            <img className="image-profile" src='./profile.jpeg'/>
                        </div>
                        <div className="content">
                            <p className="text-big">
                                Hello there, welcome to my page
                            </p>
                            <h1>My name is M. Ridwan Zalbina</h1>
                            <p className="text-description">
                                I'm a software engineer who creates digital products,
                                designs, writes about frontend, backend and fullstack    
                                developments. Check out my projects and articles I've written on subjects like design, security, front end development, or learn more about me.
                            </p>
                            <div className="social-list">
                                <div className="social-list--item">
                                    <a className="btn default light">Linkedin</a>
                                    <a className="btn default light">Instagram</a>
                                    <a className="btn default light">Email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Masthead

