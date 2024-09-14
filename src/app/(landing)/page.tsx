import Archives from "./_components/archives";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-20 pt-10">
      <Hero />
      <Archives />
    </main>
  );
}
