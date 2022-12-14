import '../styles/styles.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionProfile from '../components/SectionProfile';
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NewsItem from '../components/Newsitem';


function News() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = 'https://dev.to/api/articles/';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setTimeout(function(){
          setData(actualData);
         }, 1000)
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      }).finally(() => {
        setTimeout(function(){
          setLoading(false);
        }, 1000)
      });
  }, []);

  return (
    <div>
      <div className="section-general opt-height">
        <div className="wrapper">
            <div className="wrapper-inner">
              <div className="wrapper-content">
                <div className='section-service'>
                  <h3>Dev to feed</h3>
                  {loading && 
                  <div>{ 
                      <div className='flex-item'>
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <br/>
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <br/>
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <Skeleton count={1} height={10} duration={10} />
                        <br/>
                      </div>
                    }
                  </div>}
                  {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                  )}
                  <NewsItem listData={data}></NewsItem>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default News;
