"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();
  const username = params?.username as string; // safely cast it

  return (
    <div>
      <h1>Welcome to {username}'s Page</h1>
      <p>Username: {username}</p>
    </div>
  );
}
