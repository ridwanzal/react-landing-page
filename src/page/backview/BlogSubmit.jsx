import '../../styles/styles.scss';
import Footer from '../../components/Footer';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function BlogSubmit() { 
    const [title, setTitle] = useState("");
    const [errMsg, setErr] = useState({});
    const [content, setContent] = useState("");

    console.log('gagall')
    console.log(import.meta.env);
    console.log(import.meta.env.VITE_API_URL);

    function handleSubmit(event){
        event.preventDefault();
        let titleData = title;
        let contentData = content;
        
        if(titleData.toString() === ''){
            setErr({"name": "title"})
        }
        
        if(contentData.toString() === ''){
            setErr({"name": "content"})
        }

        const res = fetch('http://103.56.148.148:3000/blog/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                id: 0,
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
    }

    function renderError(msg){
        if(msg === errMsg.name){
            return (
                <>
                    <div className='error'>Mohon diisi</div> 
                </>
            );
        }
    }
    
    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <form onSubmit={handleSubmit} className="wrapper-content">
                    <div className='form-g'>
                        <label className='display-block'>Title:</label>
                        <input className='form-in' type="text" name="" value={title} placeholder="Buat judul artikel" onChange={(e) => setTitle(e.target.value)}/>
                        {renderError("title")}
                    </div>

                    <div className='form-g'>
                        <label className='display-block'>Content:</label>
                        <MDEditor
                            value={content}
                            onChange={setContent}
                        />
                        <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
                        {renderError("content")}
                    </div>

                    <input type="submit" className='btn default outline light' value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default BlogSubmit;