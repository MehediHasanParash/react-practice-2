import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response => Response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>this is home</h1>
            <h1>I have got {posts.length} posts</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;