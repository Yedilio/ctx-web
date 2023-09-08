import {useEffect, useRef, useState} from "react";
import Loading from "../Loading";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((json: any) => {
        setPosts([json[0], json[3], json[2]] as any);
        setLoading(false);
      })
  }, []);

  return (
    <div className="posts">
      {loading ? <Loading/> : posts.map((post: any) => {
        return (
          <div className="posts-item" key={post.id}>
            <div className="posts-item-title">
              <span>{post.title}</span>
            </div>
            <div className="posts-item-body">
              <span>{post.body}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts;