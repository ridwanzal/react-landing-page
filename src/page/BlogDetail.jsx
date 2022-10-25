import { useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logoMain from '../assets/logo.png';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Footer from '../components/Footer';

function BlogDetail() {
    const location = useLocation()
    const pathname = location.pathname;
    const pathSplit = pathname.split('/');
    const blogId = pathSplit[pathSplit.length - 1];
    const [data, setData] = useState(null);
    const [dataExcept, setDataExcept] = useState(null);

    const envDevState = import.meta.env.DEV;
    const API_URL = envDevState ? "http://localhost:6200" : "https://rwzapi.mrpbylt.com/";

    useEffect(() => {

        // fetch blog details
        fetch(API_URL + '/blog/' + blogId)
        .then((response)=> {
            if(!response.ok){
                console.log(response.status)
            }
            return response.json();
        }).
        then((realData)=> {
            setData(realData);
            console.log(realData)
            let result = realData[0].tags.split(',').map(function(value){
                console.log(value);
            });
        });

        // fetch blog data except active details
        fetch(API_URL + '/blog/except/' + blogId)
        .then((response)=> {
            if(!response.ok){
                console.log(response.status)
            }
            return response.json();
        }).then((realData)=> {
            setDataExcept(realData);
            console.log(realData)
            let result = realData[0].tags.split(',').map(function(value){
                console.log(value);
            });
        });

    }, []);

    return ( 
        <div>
            <div className="section-general">
                <div className="wrapper">
                    <div className="wrapper-inner flex">
                        <div className="wrapper-content wrapper-content--contain">
                        {data &&data.map(({ id, title, content, createdAt, tags }) => (   
                            <div className='flex'>
                                <div className='content-small contain-wrap' keys={id}>
                                    <br/>
                                    <div className='blog-tags'>
                                        {tags.split(',').map(function(value){
                                            return <div>{value}</div>
                                        })}
                                    </div>
                                    <div className='mt-2'>
                                        <img className='main-logo' 
                                        src={logoMain} 
                                        alt="" 
                                        width="20"/>&nbsp; M. Ridwan Zalbina | {createdAt}
                                    </div>
                                    <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className='wrapper-content wrapper-content--contain'>
                            <div className='content-small contain-wrap'>
                                <h3>Other Post</h3>
                                <ul class="blog-list">
                                    {dataExcept && dataExcept.map(({ id, title, content, createdAt, tags }) => (   
                                        <Link className='title block' to={"/blog/" + id} target="_blank">
                                            <li>{title}</li>
                                        </Link>
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

export default BlogDetail;
