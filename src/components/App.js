import React, { useState } from 'react';
import Post from './Post';
import '../styles/App.scss';

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: 'Say Hi', content: 'Lorem ipsum dolor 1' },
    { id: 2, title: 'New course', content: 'Lorem ipsum dolor 2' },
    { id: 3, title: 'Test game', content: 'Lorem ipsum dolor 3' },
    { id: 4, title: 'Very simple', content: 'Lorem ipsum dolor 4' }
  ]);
  const [currentPost, setCurrentPost] = useState({ title: "", content: "" });

  function removePost(e, index) {
    let array = [...posts];
    array.splice(index, 1);
    setPost(array);
  }

  function addPost(e) {
    let array = [...posts];
    array.push(currentPost);
    setPost(array);
    setCurrentPost({ title: "", content: "" });
    e.preventDefault();
  }

  function handleChange(e, key) {
    let obj = { ...currentPost };
    obj[key] = e.target.value;
    setCurrentPost(obj);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <br />
          <form onSubmit={addPost}>
            <input type="text" className="form-control mb-2" placeholder="Title" value={currentPost.title} onChange={(e) => handleChange(e, "title")} required />
            <input type="text" className="form-control mb-2" placeholder="Content" value={currentPost.content} onChange={(e) => handleChange(e, "content")} required />
            <button className="btn btn-success" type="submit">Add</button>
          </form>
          <hr />
          <ol className="list-group list-group-numbered">
            {posts.map((post, index) =>
              <Post
                key={index}
                index={index}
                post={post}
                onClick={removePost} />
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
