import Link from "next/link";

export const metadata = {
  title: {
    template: "%s | Admin | Spooled",
    default: "Admin | Spooled",
  },
  robots: "noindex, nofollow",
};

type AdminLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <header className="bg-base-200 border-base-content/20 border-b">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <Link href="/admin" className="btn btn-ghost text-lg">
              Spooled Admin
            </Link>

            <Link href="/admin/filaments" className="btn btn-ghost">
              Filaments
            </Link>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
