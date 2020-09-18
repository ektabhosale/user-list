import React from 'react';

const ModalData = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        
        <table >
          <tr>
            <th>User Names</th>
          </tr>
          {/* <td > */}
          {posts.map(post => (
            
              <tr key={post.id} >{post.first_name} {post.last_name}</tr>
              
              ))}
            {/* </td> */}
           
  
</table>
      </div>
    </>
  );
};

export default ModalData;