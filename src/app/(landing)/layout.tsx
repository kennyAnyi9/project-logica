import Nav from "./_components/nav";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Nav />
      {children}
    </div>
  );
}
