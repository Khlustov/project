import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../../components/Card';

import './style.css';

const UserPostsPage = () => {
    const posts = useSelector(state => state.posts);   

    return (
        <div className="user-posts-page">
           {posts && posts.map((item) => {
               return (
                   <div className="user-post-page-card">
                        <Card
                         key={item._id}
                         title={item.title}
                         price={item.price}
                         description={item.description}
                         contacts={item.contacts}
                        />
                   </div>
               )
           })}
        </div>
    )
}

export default UserPostsPage;