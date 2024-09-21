import Hero from "./components/hero";
import Stack from "./components/stack";

export default function Home() {
  return (
    <main className="flex px-4 my-20 gap-20 flex-col items-center">
      <Hero />
      <Stack />
    </main>
  );
}
