import { type PageProps } from "next";

export default function PostPage({ params }: PageProps) {
  return (
    <div>
      <h1>Post ID: {params.id}</h1>
    </div>
  );
}
