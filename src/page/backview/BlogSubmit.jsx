import '../../styles/styles.scss';
import Footer from '../../components/Footer';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function BlogSubmit() { 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let titleData = title;
        let contentData = content;

        console.log(titleData)
        console.log(contentData);
    }
    

    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <form onSubmit={handleSubmit} className="wrapper-content">
                    <div className='form-g'>
                        <label className='display-block'>Title:</label>
                        <input className='form-in' type="text" name="" value={title}  onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className='form-g'>
                        <label className='display-block'>Content:</label>
                        <MDEditor
                            value={content}
                            onChange={setContent}
                        />
                        <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>

                    <input type="submit" className='btn default outline light' value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default BlogSubmit;