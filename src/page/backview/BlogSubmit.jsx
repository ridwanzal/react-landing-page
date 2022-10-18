import '../../styles/styles.scss';
import Footer from '../../components/Footer';
import { useState } from 'react';

function BlogSubmit() { 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(){

    }
    

    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <form onSubmit={handleSubmit} className="wrapper-content">
                    <div className='form-g'>
                        <label className='display-block'>Title:</label>
                        <input className='form-in' type="text" name="" value=""/>
                    </div>

                    <div className='form-g'>
                        <label className='display-block'>Content:</label>
                        <textarea className='form-in' type="text" name="" rows="10"></textarea>
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