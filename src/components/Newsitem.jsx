import '../styles/styles.scss';
import 'react-loading-skeleton/dist/skeleton.css';

function NewsItem(props) {
  return (
    <div>
        <ul className='section-service--list'>
            {props.listData &&
                props.listData.map(({ id, title, url }) => (
                <li key={id} className='item'>
                    <span className='card card-shadow padding-big'>
                    <a className='title block' href={url} target="_blank">{title}</a>
                    </span>
                </li>
                ))}
            </ul>
    </div>
  )
}

export default NewsItem;
