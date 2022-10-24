import { useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import logoMain from '../assets/logo.png';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function BlogDetail() {
    const location = useLocation()
    const pathname = location.pathname;
    const pathSplit = pathname.split('/');
    const blogId = pathSplit[pathSplit.length - 1];
    const [data, setData] = useState(null);

    const envDevState = import.meta.env.DEV;
    const API_URL = envDevState ? "http://localhost:6200" : "https://rwzapi.mrpbylt.com/";

    useEffect(() => {
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
                console.log(value)
            })
        })
    }, []);

    return ( 
        <div>
            <div className="section-general">
                <div className="wrapper">
                    <div className="wrapper-inner">
                        <div className="wrapper-content">
                        {data &&data.map(({ id, title, content, createdAt, tags }) => (   
                            <div className='content-small' keys={id}>
                                <br/>
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
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail;
