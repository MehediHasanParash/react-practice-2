import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const showComments = id =>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2><strong>id: {id}</strong> {title}</h2>
            <p>{body}</p>
            <br/>
            <button onClick={() => showComments(id)}>Show comments </button>
        </div>
    );
};

export default Post;