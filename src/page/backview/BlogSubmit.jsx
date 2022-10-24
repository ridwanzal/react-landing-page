import '../../styles/styles.scss';
import Footer from '../../components/Footer';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

function BlogSubmit() { 
    const envDevState = import.meta.env.DEV;
    const API_URL = envDevState ? "http://localhost:6200" : "https://rwzapi.mrpbylt.com/";

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [errMsg, setErr] = useState({});

    function handleSubmit(event){
        event.preventDefault();
        let titleData = title;
        let contentData = content;
        let tagsData = tags;
        
        if(titleData.toString().trim() === ''){
            setErr({"name": "title"})
        }
        
        if(contentData.toString().trim() === ''){
            setErr({"name": "content"})
        }

        const res = fetch(API_URL + '/blog', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            body: new URLSearchParams({
                'title': titleData,
                'content': contentData
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
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
                    <div className="wrapper-blog-add">
                        <form onSubmit={handleSubmit} className="wrapper-content">
                            <div className='form-g'>
                                <label className='display-block'>Title:</label>
                                <input className='form-in'
                                    type="text" 
                                    name="" value={title} 
                                    placeholder="Buat judul artikel" 
                                    onChange={(e) => setTitle(e.target.value)}/>
                                {renderError("title")}
                            </div>

                            <div className='form-g'>    
                                <label className='display-block'>Tags:</label>
                                <textarea rows="5" className='form-in'  name="" value={tags} onChange={(e) => setTags(e.target.value)}></textarea>
                            </div>

                            <div className='form-g'>
                                <label className='display-block'>Content:</label>
                                <MDEditor
                                    value={content}
                                    onChange={setContent}
                                    previewOptions={{
                                        rehypePlugins: [[rehypeSanitize]],
                                    }}
                                />
                                <div className='form-md'>
                                    <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
                                </div>
                                {renderError("content")}
                            </div>


                            <input type="submit" className='btn default outline light' value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default BlogSubmit;