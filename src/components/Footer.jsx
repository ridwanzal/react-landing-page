import { useState } from 'react';
import { printYear } from '../utils/commonUtils';
import viteLogo from '../../public/vite.svg';

function Footer() {
    const [data, setData] = useState(null);
    
    return (
        <div className="footer-container">
            <div className="wrapper">
                <div className="footer-content">
                    <div className="left">
                        @{printYear()} M. Ridwan Zalbina. All rights reserved
                    </div>
                    <div className="right">
                        <img height="16" src={viteLogo} />&nbsp;&nbsp; Build with React + Vite
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer