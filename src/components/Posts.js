import React, { useState } from 'react';
import Modal from 'react-modal'
import '../Modal.css'

const Posts = ({ posts, loading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUsers, fetchSUser] = useState([]);
  const currentUser = selectedUsers.id
  console.log("selectedUsers");
  console.log(selectedUsers);
  console.log(currentUser);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>

        <table >
          <tr>
            <th>User Names</th>
          </tr >
          {/* <td > */}
          {posts.map(post => (
            <a className="click" onClick={() => { fetchSUser( post ); setModalIsOpen(true) }}>
              <tr className="click" key={post.id} ><img src={post.avatar}></img> {post.first_name} {post.last_name} </tr>
            </a>

          ))}
          {/* </td> */}


        </table>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>{selectedUsers.first_name} {selectedUsers.last_name}</h2>
          </div>
          <div className="modal-body">
          <h2>{selectedUsers.email}</h2>
          <img src={selectedUsers.avatar}></img>
            {/* <Posts  posts={selectedUser} loading={loading} /> */}
            
          </div>
          <div className="modal-footer">
            <h3></h3>
          </div>
          <button className="button" onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    </>
  );
};

export default Posts;