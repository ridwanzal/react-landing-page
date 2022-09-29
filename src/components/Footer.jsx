import { printYear } from '../utils/commonUtils';
function Footer() {

    return (
        <div className="footer-container">
            <div className="wrapper">
                <div className="footer-content">
                    <div className="left">
                        @{printYear()} M. Ridwan Zalbina. All rights reserved
                    </div>
                    <div className="right">
                        <img height="16" src="./vite.svg" />&nbsp;&nbsp; Build with React + Vite
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer