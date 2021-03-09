import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setPost(data))
    }, [])


    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h3>this is post detail {id}</h3>
            <p>post id : {post.id}</p>
            <p>post title : {post.title}</p>
            <p>post body : {post.body}</p>
            <br />
            
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            } 
        </div>
    );
};

export default PostDetail;