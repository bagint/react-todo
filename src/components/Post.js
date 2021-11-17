import React from 'react';

function Post({ post, index, onClick }) {

  function removePost(e, index) {
    onClick(e, index);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{post.title}</div>
        {post.content}
      </div>
      <button className="btn btn-danger" onClick={((e) => removePost(e, index))}>
        Delete
      </button>
    </li>
  );
}

export default Post;
