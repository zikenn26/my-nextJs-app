async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function ServerPostsPage() {
  const posts = await getPosts();
  return (
    <div>
      <h2>Server-Fetched Posts (SSR)</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
