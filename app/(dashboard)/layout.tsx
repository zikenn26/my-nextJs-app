export const metadata = {
  title: "Dashboard | Item Manager",
  description: "Manage your items in one place using Next.js.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#ddd", padding: "1rem" }}>
        <p>📂 Dashboard Sidebar</p>
        <ul>
          <li>
            <a href="/dashboard">Dashboard Home</a>
          </li>
          <li>
            <a href="/dashboard/settings">Settings</a>
          </li>
        </ul>
      </aside>
      <main style={{ padding: "1rem", flex: 1 }}>{children}</main>
    </div>
  );
}
