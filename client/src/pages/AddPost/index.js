import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
    changePostTitle,
    changePostPrice,
    changePostDescription,
    changePostContacts,
    addPost,
    changePostPicture
} from '../../actions/addPostActions';
import { ROUTES } from '../../constants';

import './style.css'

const AddPostPage = () => {

    const dispatch = useDispatch();
    
    const email = useSelector(state => state.email);
    const postPicture = useSelector(state => state.postPicture);
    const postTitle = useSelector(state => state.postTitle);
    const postPrice = useSelector(state => state.postPrice);
    const postDescription = useSelector(state => state.postDescription);
    const postContacts = useSelector(state => state.postContacts);
    const status = useSelector(state => state.addingPostStatus)

    const onChangePostPicture = useCallback((event) => {
        dispatch(changePostPicture(event.target.value));
    }, [dispatch]);

    const onChangePostTitle = useCallback((event) => {
        dispatch(changePostTitle(event.target.value));
    }, [dispatch]);

    const onChangePostPrice = useCallback((event) => {
        dispatch(changePostPrice(event.target.value));
    }, [dispatch]);

    const onChangePostDescription = useCallback((event) => {
        dispatch(changePostDescription(event.target.value));
    }, [dispatch]);

    const onChangePostContacts = useCallback((event) => {
        dispatch(changePostContacts(event.target.value));
    }, [dispatch]);

    const add = useCallback(() => {
        dispatch(addPost(email, postPicture, postTitle, postPrice, postDescription, postContacts));
    }, [dispatch, email, postPicture, postTitle, postPrice, postDescription, postContacts]);

    
    
    return (
        <div className="add-post-page">
            <div className="add-page-modal">
                <form className="add-form">
                    <input
                    className="add-form-input"
                    type="text"
                    placeholder="Название товара"
                    value={postTitle}
                    onChange={onChangePostTitle}
                    >
                    </input>
                    <input
                    className="add-form-input"
                    type="text"
                    placeholder="Цена"
                    value={postPrice}
                    onChange={onChangePostPrice}
                    >
                    </input>
                    <input
                    className="add-form-input"
                    type="text"
                    placeholder="Описание"
                    value={postDescription}
                    onChange={onChangePostDescription}
                    >
                    </input>
                    <input                    
                    className="add-form-input"
                    type="tel"
                    placeholder="Контактный номер"
                    value={postContacts}
                    onChange={onChangePostContacts}
                    >
                    </input>
                </form>
                <div className="add-form-buttons">
                    <Link className="link" to={ROUTES.MAIN}>
                      <button 
                      className="add-form-button"
                      >
                        Отмена
                    </button>
                    </Link>
                    <button 
                    className="add-form-button"
                    onClick={add}
                    >
                    ОК
                    </button>
                </div>
            </div>
            {status && <Redirect to={ROUTES.MAIN}/>}
        </div>
    )

}

export default AddPostPage