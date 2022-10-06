import '../styles/styles.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionProfile from '../components/SectionProfile';
import { useState, useEffect } from "react";


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
                <div className='section-news'>
                  <h4>Dev to feed</h4>
                  {loading && <div>A moment please...</div>}
                  {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                  )}
                  <ul>
                    {data &&
                      data.map(({ id, title, url }) => (
                        <li key={id}>
                          <a href={url} target="_blank">{title}</a>
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

export default News
