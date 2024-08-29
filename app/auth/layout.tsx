export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,__var(--tw-gradient-stops))] from-sky-400 to-blue-800">{children}</div>
  );
}
