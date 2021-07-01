import React, { useEffect, useState } from "react";
import Post from '../Post/Post';
export default Posts;
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <div>
            {posts.map(value => <Post id={value.id} title={value.title} body={value.body}/> )}
        </div>
    )
}