import React from "react";
import moiposts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let massivMapPost = props.massivPosta.map(elementMassiva => <Post messageposta={elementMassiva.messageposta} likesCount={elementMassiva.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.newTextArea(text);
    }

    return (
        <div className={moiposts.blockdlyavsehpostov}>
            <h3>Стена</h3>
            <div className={moiposts.newpost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    <button onClick={addPost} >Новый пост</button>
                </div>
            </div>
            <div className={moiposts.vseposts}> Последние выложенные посты
                {massivMapPost}

            </div>
        </div>
    )
}


export default MyPosts;