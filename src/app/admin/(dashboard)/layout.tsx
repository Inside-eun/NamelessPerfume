import Link from "next/link";
import { logout } from "@/lib/actions/auth";

const navItems = [
  { href: "/admin", label: "대시보드" },
  { href: "/admin/hero", label: "Hero" },
  { href: "/admin/portfolio/commercial", label: "Commercial" },
  { href: "/admin/portfolio/custom-works", label: "Custom Works" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-ink/10 px-6 py-4 sm:px-10">
        <nav className="flex flex-wrap gap-5 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <form action={logout}>
          <button type="submit" className="text-sm text-muted hover:text-ink">
            로그아웃
          </button>
        </form>
      </header>
      <main className="flex flex-1 flex-col px-6 py-10 sm:px-10">
        {children}
      </main>
    </div>
  );
}
