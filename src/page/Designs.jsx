import '../styles/styles.scss';
import comingSoon from '../assets/coming-soon.jpeg';
import { Image, Shimmer } from 'react-shimmer';
import Footer from '../components/Footer';

function Designs() { 
    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <div className='center'>
                            <h3>Page still in</h3>
                            <Image
                                    width="100%"
                                src={comingSoon}
                                fallback={<Shimmer width={'100%'} height={400} />}
                            />
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

export default Designs;