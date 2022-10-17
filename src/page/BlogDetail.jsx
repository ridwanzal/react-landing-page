import { useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

function BlogDetail() {
    const location = useLocation()
    const pathname = location.pathname;
    console.log(pathname);
    const pathSplit = pathname.split('/');
    const blogId = pathSplit[pathSplit.length - 1];
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/blog/`+ blogId)
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