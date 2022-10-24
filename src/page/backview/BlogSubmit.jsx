import '../../styles/styles.scss';
import Footer from '../../components/Footer';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import {Routes, Route, useNavigate} from 'react-router-dom';

function BlogSubmit() { 
    const envDevState = import.meta.env.DEV;
    const API_URL = envDevState ? "http://localhost:6200" : "https://rwzapi.mrpbylt.com/";

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [errMsg, setErr] = useState({});
    const navigate = useNavigate();

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

        if(tagsData.toString().trim() === ''){
            setErr({"name": "tags"})
        }

        fetch(API_URL + '/blog', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            body: new URLSearchParams({
                'title': titleData,
                'content': contentData,
                'tags': tagsData
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            console.log(responseJson.affectedRows)
            if(responseJson.affectedRows === 1){
                navigate('/blog/');
            }
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
                                    onChange={(e) => setTitle(e.target.value)} required/>
                                {renderError("title")}
                            </div>

                            <div className='form-g'>    
                                <label className='display-block'>Tags:</label>
                                <textarea rows="5" className='form-in'  name="" onChange={(e) => setTags(e.target.value)} required>{tags}</textarea>
                            </div>

                            <div className='form-g'>
                                <label className='display-block'>Content:</label>
                                <MDEditor
                                    value={content}
                                    onChange={setContent}
                                    previewOptions={{
                                        rehypePlugins: [[rehypeSanitize]],
                                    }}

                                    required
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
        <Footer></Footer>
        </>
    );
}

export default BlogSubmit;