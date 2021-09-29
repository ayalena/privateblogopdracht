import React from 'react';
import posts from '../data/posts.json';
import {NavLink} from "react-router-dom";

function BlogOverviewPage() {

    const blogLink = posts.map((posts) => {
        return <li> <NavLink to={`/blog/${posts.id}`}> {posts.title} </NavLink> </li>
    })

    return (
        <>
            <h2>Blog Overview</h2>
            <p>Total Blog Posts: {posts.length}</p>
            <p>{blogLink}</p>
        </>
    )

}

export default BlogOverviewPage;