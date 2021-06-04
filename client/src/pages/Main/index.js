import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPostActionCreator } from '../../actions/searchPostAction'
import { Card } from '../../components/Card';

import './style.css';

const AllPostsPage = () => {
    const dispatch = useDispatch();

    const allPosts = useSelector(state => state.allPosts);
    const searchPost = useSelector(state => state.searchValue);

    const onChangeSearchInput = useCallback((event) => {
        dispatch(searchPostActionCreator(event.target.value))
    }, [dispatch]);

    const filteredPosts = allPosts && allPosts.filter(posts => {
        return posts.title.toLowerCase().includes(searchPost.toLowerCase())
    })
                 
    return (
        <div className="main-page">
            <div className='search-input'>
            <input            
            onChange={onChangeSearchInput}
            >
            </input>
            </div>            
            <div className='main-page-content'>
                {allPosts && filteredPosts.map((item) => {
                   return (
                       <div key={item._id} className='main-page-card'>
                           <Card 
                           title={item.title}
                           price={item.price}
                           description={item.description}
                           contacts={item.contacts}
                           />
                       </div>
                   )
                })}
            </div>
        </div>
    )
}

export default AllPostsPage;