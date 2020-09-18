import React, { useState, useEffect } from 'react';
import Posts from './Posts'
import axios from 'axios';
import Pagination from './Pagination'
import '../App.css'
import '../Modal.css'
import Modal from 'react-modal'
Modal.setAppElement('#root')


// import '../Modal.css'
// import '../App.css';

const MainComp = () => {
    const [posts, setPosts] = useState([]);
    const [selectedUsers, fetchSUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://reqres.in/api/users?page=1');
            setPosts(res.data.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);
    console.log("posts");
    console.log(posts);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const currentUser = selectedUsers.first_name
    // const selectedUser = posts

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className='main-div'>
            {/* <h1 className='header'>User List</h1> */}
            <div className="content click">

                {/* <a className="click" onClick={(value) => setModalIsOpen(true)}> */}
                <Posts posts={currentPosts} loading={loading} />
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
            {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button> */}


        </div>
    );
};

export default MainComp;