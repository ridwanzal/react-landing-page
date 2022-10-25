import '../styles/styles.scss';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Blog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const envDevState = import.meta.env.DEV;
  const API_URL = envDevState ? "http://localhost:6200" : "https://rwzapi.mrpbylt.com/";
  
  useEffect(() => {
    fetch(API_URL + '/blog')
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
                  <h3>{ 'Blog' }</h3>
                  {loading && <div>{ <Skeleton count={1} height={30} duration={10} />}</div>}
                  {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                  )}
                    <div className='section-service'>
                      <ul className='section-service--list'>
                          {data &&
                          data.map(({ id, title, content, createdAt }) => (
                              <li key={id} data-mh className='item'>
                                  <span className='card card-shadow padding-big'>
                                      <Link className='title block' to={"/blog/" + id}>{title}</Link>
                                      <div className='date'>{createdAt}</div>
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

export default Blog;
