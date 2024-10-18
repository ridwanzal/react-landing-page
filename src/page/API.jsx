import '../styles/styles.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionProfile from '../components/SectionProfile';
import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/`)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response);
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
      <h1>API Posts</h1>
      {loading && <div>Loading...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default About
