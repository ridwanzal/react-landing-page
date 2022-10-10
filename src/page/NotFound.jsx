import '../styles/styles.scss';
import Footer from '../components/Footer';

function NotFound() { 
    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <h3>Page Not Found</h3>
                        <a href="/">Go back</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default NotFound;