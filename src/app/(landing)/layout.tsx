import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full p-0 sm:p-5 lg:h-screen">
      <div className="flex h-full w-full flex-wrap justify-between rounded-2xl sm:border lg:divide-x">
        <div className="w-full p-2 md:p-8 lg:w-2/5">
          <Hero />
        </div>
        <div
          id="tab-section"
          className="relative mx-auto mt-6 w-full max-w-4xl p-2 md:p-8 lg:mt-0 lg:h-full lg:w-3/5 lg:overflow-y-scroll"
        >
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
}
