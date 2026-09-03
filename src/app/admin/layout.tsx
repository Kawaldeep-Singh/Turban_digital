export const metadata = {
  title: "Admin Dashboard | Turban Digital",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 z-[99999] bg-white">
      {children}
    </div>
  );
}
