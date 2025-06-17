"use client";
import { use, useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Client Side Fetched Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>
              <h3 style={{ color: "red" }}>{post.title}</h3>
            </strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
