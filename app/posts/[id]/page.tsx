interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div>
      <h1>Post ID: {params.id}</h1>
    </div>
  );
}
