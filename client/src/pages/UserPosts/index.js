import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostIdActionCreator } from '../../actions/getPostId';
import { getUserPosts } from '../../actions/getUserPosts';
import { Card } from '../../components/Card';

import './style.css';

const UserPostsPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const email = useSelector(state => state.email);
        
    const savePostId = useCallback((event) => {
        dispatch(getPostIdActionCreator(event.target.parentNode.firstElementChild.firstElementChild.innerText));
    }, [dispatch]);

   useEffect(() => {
       dispatch(getUserPosts(email));
   }, [dispatch, email]);

    return (
        <div className="user-posts-page">
           {posts && posts.map((item) => {
               return (
                   <div className="user-post-page-card" key={item._id}>
                        <Card 
                         id={item._id}                        
                         title={item.title}
                         price={item.price}
                         description={item.description}
                         contacts={item.contacts}
                        />
                        <button onClick={savePostId}>Удалить</button>
                   </div>
               )
           })}
        </div>
    )
}

export default UserPostsPage;