// app/layout.tsx
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#eee", padding: "1rem" }}>
          <nav>
            <Link href="/" style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <main style={{ padding: "1rem" }}>{children}</main>

        <footer style={{ background: "#eee", padding: "1rem" }}>
          <p>© 2025 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
