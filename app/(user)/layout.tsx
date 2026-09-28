// We use a relative path here (../../) to guarantee Next.js finds the file
import Header from '../../components/user/Header';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* If this component is found, the header will render */}
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}