import '../../styles/styles.scss';
import Footer from '../../components/Footer';
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Designs() { 
    const [errMsg, setErrMsg] = useState({});
    const [isSubmitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    
    let authData = [
        {
            credential: 'ridwanzal',
            password : 123
        },
        {
            credential: 'aryan',
            password: 123
        }
    ];
    
    let errors = {
        credential : 'Invalid credential',
        password: 'Wrong password'
    };

    const renderErrMsg = function(name){
        if(name === errMsg.name){
            return ( <div className='error'>{errMsg.message}</div> );
        }
    }
    
    const submitLogin = (ev) => {
        ev.preventDefault();
        let {credential, password} = document.forms[0];
        let authenticated = authData.find(user => user.credential === credential.value);
        console.log(authenticated)
        
        if(authenticated){
            if(authenticated.password.toString() === password.value.toString()) {
                setSubmitted(true);
                navigate('/about');
            }else{
                setErrMsg({ name: "password", message: errors.password });
            }
        }else{
            setErrMsg({ name: "credential", message: errors.credential });
        }
    }

    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <form onSubmit={submitLogin} className="wrapper-content">
                        <h3>Login</h3>
                        <div className='form-g'>
                            <input className='form-in' name="credential" placeholder='Email/username' required/>
                            {renderErrMsg("credential")}
                        </div>
                        <br/>
                        <div className='form-g'>
                            <input className='form-in' name="password" placeholder='Password' required/>
                            {renderErrMsg("password")}
                        </div>
                        <br/>
                        <input type="submit" className='btn default outline light' value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Designs;