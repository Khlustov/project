import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts } from '../../actions/getUserPosts';

import './style.css'
const UserPostsPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.userPosts);
    // const email = useSelector(state => state.email);

    

    return (
        <div>
           {posts}
        </div>
    )

}

export default UserPostsPage