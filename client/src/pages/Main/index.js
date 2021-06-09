import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/getAllPosts';
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
    });

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);
                 
    return (
        <div className="main-page">
            <div className="search-container">
            <input 
            type="text"
            placeholder="Найти объявление..." 
            className='search-input'          
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