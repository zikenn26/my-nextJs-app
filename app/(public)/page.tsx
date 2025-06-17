import Card from "../components/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/about">Go to About</Link>
      <Card title="Card 1" content="This is the first card." />
      <Card title="Card 2" content="This is the second card." />
    </div>
  );
}
