import helping from '../assets/helping.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../components/Footer';

function SectionExpert() {
    return (
        <div className="section-general gray">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <h3>Professional journey</h3>
                        <div className="section-expert--background">
                            <ul className="section-expert--list">
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Fullstack Developer (2016 - 2019)</div>
                                        <small>Easysoft Indonesia | PT easySoft Indonesia - Jakarta</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Technical Lead Engineer | Co-Founder (2018 - 2020)</div>
                                        <small>Scafol Indonesia | PT Aplikasi Konstruksi Global - Palembang</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Technical Advisor (2020 - 2022)</div>
                                        <small>Dezainla | Marcodigitalpartner - Palembang</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Web Developer (2021)</div>
                                        <small>Universitas Sriwijaya</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Techical Advisor (2021 - 2022)</div>
                                        <small>Ezkop Indonesia - Jakarta</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Technical Advisor - (2022)</div>
                                        <small>PT KAI (Balai Yasa Lahat)</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="section-expert--list-item">
                                        <div>Front End Developer (2020 - Present)</div>
                                        <small>Fairtech Pte, Ltd. - Singapore</small>
                                    </div>
                                </li>
                            </ul>
                            <div className='image-helping-wraps'>
                                <img className='image-helping' src={helping || <Skeleton count={1} duration={2} /> }/>
                                <LazyLoadImage
                                    className='image-helping'
                                    alt=''
                                    src={helping} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionExpert    

