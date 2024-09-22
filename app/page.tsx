import Hero from "./components/hero";
import Stack from "./components/stack";
import Work from "./components/work";

export default function Home() {
  return (
    <main className="flex px-4 my-20 gap-20 flex-col items-center">
      <div className="rays -z-10 fixed -inset-[10px] opacity-10" />

      <Hero />
      <Stack />
      <Work />
    </main>
  );
}
