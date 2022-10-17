import '../styles/styles.scss';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/blog`)
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
                  <h3>Blog</h3>
                  {loading && <div>A moment please...</div>}
                  {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                  )}
                    <div className='section-service'>
                      <ul className='section-service--list'>
                          {data &&
                          data.map(({ id, title, content, createdAt }) => (
                              <li key={id} data-mh className='item'>
                                  <div className='card padding-big'>
                                      <Link className='title block' to={"/blog/" + id}>{title}</Link>
                                      <div className='content'>{content.substr(0, 200)}</div>
                                      <div className='date'>{createdAt}</div>
                                  </div>
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
