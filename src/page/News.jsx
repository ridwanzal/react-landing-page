import '../styles/styles.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionProfile from '../components/SectionProfile';
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function News() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="section-general">
        <div className="wrapper">
            <div className="wrapper-inner">
              <div className="wrapper-content">
                <div className='section-service'>
                  <h3>Dev to feed</h3>
                  {loading && <div><Skeleton count={3} height={30} duration={10} /></div>}
                  {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                  )}
                  <ul className='section-service--list'>
                    {data &&
                      data.map(({ id, title, url }) => (
                        <li key={id} className='item'>
                          <span className='card card-shadow padding-big'>
                            <a className='title block' href={url} target="_blank">{title}</a>
                          </span>
                        </li>
                      ))}
                  </ul>
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
