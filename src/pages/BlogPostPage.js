import React from 'react';
import {useParams} from "react-router-dom";
import posts from '../data/posts.json';

function BlogPostPage() {
    const { blogId } = useParams();

    const blogTitle = posts.find((posts) => {
        return posts.id === blogId;
    })

    return (
        <>
        <h2>Blog</h2>
            <h3>{blogTitle.title}</h3>
            <p>{blogTitle.content}</p>
        </>
    )
}

export default BlogPostPage;