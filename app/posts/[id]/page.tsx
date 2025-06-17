interface Post {
  id: number;
  title: string;
  body: string;
}
export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const post: Post = await res.json();
  return (
    <div>
      <h2>Post #{post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
