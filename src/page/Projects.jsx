import '../styles/styles.scss';
import { Image, Shimmer } from 'react-shimmer';
import Footer from '../components/Footer';

function Projects() { 
    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <div className='center'>
                            <h3>Page still in progress</h3>
                            <p className='incoming'>
                                Coming soon
                            </p>
                            <p>Thank you so much for visiting this page. We still working on it. Stay tune.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Projects;