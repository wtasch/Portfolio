import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostList = (props) => {
    return (

      <div>
 
        {props.posts.map((post, index) => (
            <div key={index}>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <Link to={`/profile/post/edit/${index}`}>Edit Post</Link>
            </div>
        ))}       
    </div>
    )
}





export default PostList;