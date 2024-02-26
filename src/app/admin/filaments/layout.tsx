import MenuItem from "@/app/admin/filaments/_components/menu-item";

type AdminFilamentsLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AdminFilamentsLayout({ children }: AdminFilamentsLayoutProps) {
  return (
    <div className="container mx-auto flex gap-4 px-4 py-8">
      <div className="w-48 shrink-0">
        <nav className="flex flex-col">
          <MenuItem href="/admin/filaments/brands">Brands</MenuItem>
          <MenuItem href="/admin/filaments/types">Types</MenuItem>
          <MenuItem href="/admin/filaments/filaments">Filaments</MenuItem>
        </nav>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
