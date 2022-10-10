import '../../styles/styles.scss';
import { Image, Shimmer } from 'react-shimmer';
import Footer from '../../components/Footer';

function Designs() { 
    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <h3>Login</h3>
                        <div className='form-g'>
                            <input className='form-in' placeholder='Email/username'></input>
                        </div>
                        <br/>
                        <div className='form-g'>
                            <input className='form-in' placeholder='Password'></input>
                        </div>
                        <br/>
                        <button type="submit" className='btn default outline light'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Designs;