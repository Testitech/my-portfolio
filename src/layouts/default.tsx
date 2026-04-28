import { Link } from "@heroui/link";

import { Navbar } from "@/app/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3 border-t border-default-100">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/Testitech"
          title="Testitech"
        >
          <span className="text-default-600">Built by</span>
          <p className="text-primary">Testicode</p>
        </Link>
      </footer>
    </div>
  );
}
