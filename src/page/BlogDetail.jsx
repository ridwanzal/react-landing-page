import { useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import logoMain from '../assets/logo.png';

function BlogDetail() {
    const API_URL = "http://103.56.148.148:3000/";

    const location = useLocation()
    const pathname = location.pathname;
    console.log(pathname);
    const pathSplit = pathname.split('/');
    const blogId = pathSplit[pathSplit.length - 1];
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL + `blog/` + blogId)
        .then((response)=> {
            if(!response.ok){
                console.log(response.status)
            }
            return response.json();
        }).
        then((realData)=> {
            setData(realData);
        })
    }, []);

    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                    {data &&data.map(({ id, title, content, createdAt }) => (   
                        <div className='content-small'>
                            <h1>{title}</h1>
                            <div>Dibuat pada {createdAt}</div>
                            <div>
                            <div className='mt-2'>
                                <img className='main-logo' src={logoMain} alt="" width="20"/>&nbsp; M. Ridwan Zalbina
                            </div>
                            </div>
                            <br/>
                            <p>{content}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogDetail;
