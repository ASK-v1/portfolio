import Hero from "./components/hero";
import Stack from "./components/stack";
import Work from "./components/work";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="px-4 mt-4 sm:mt-8 flex flex-col items-center justify-center">
      <div className="rays -z-10 fixed -inset-[10px] opacity-10" />

      <Header />
      <main className="flex gap-32 mt-16 flex-col w-full items-center">
        <Hero />
        <Stack />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
