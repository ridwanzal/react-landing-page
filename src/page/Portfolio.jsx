import '../styles/styles.scss';
import { Image, Shimmer } from 'react-shimmer'

function Portfolio() { 
    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <h3>This is portfolio</h3>
                            <Image
                                 width="100%"
                                src='https://source.unsplash.com/random/800x600'
                                fallback={<Shimmer width={'100%'} height={900} />}
                            />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Portfolio;