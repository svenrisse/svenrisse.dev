export default function ProjectPage() {
  return (
    <main className="relative w-full border-4 p-0 sm:p-5 lg:h-screen">
      <div className="flex h-full w-full flex-wrap justify-between rounded-2xl sm:border lg:divide-x">
        <div className="relative w-full p-2 md:p-8 lg:w-2/5"></div>
        <div
          id="tab-section"
          className="relative w-full overflow-y-scroll p-2 md:p-8 lg:h-full lg:w-3/5"
        ></div>
      </div>
    </main>
  );
}
