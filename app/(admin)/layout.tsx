import { notFound } from "next/navigation";
import { Sidebar } from "./admin/_components/sidebar";
import { getAdmin } from "@/actions/admin";
import Header from "@/components/Headers";

import { ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const admin = await getAdmin();

  // If user not found in our db or not an admin, redirect to 404
  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div className="h-full">
      <Header isAdminPage={true} />

      {/* Sidebar */}
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
  );
}
