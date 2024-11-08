"use client";

import { Button } from "@/components/ui/button";

const Home = () => {
  // if(!trendingPodcasts) return <LoaderSpinner />

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5 text-slate-200 justify-end">
        <Button>Income</Button>
      </section>
    </div>
  );
};

export default Home;
