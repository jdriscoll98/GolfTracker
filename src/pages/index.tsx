import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AddNewScore from "../components/AddNewScore";
import CurrentScore from "../components/CurrentScore";
import Footer from "../components/Footer";
import ScoreLog from "../components/ScoreLog";
import { type Page } from "../types";

const Home: NextPage = () => {
  const [selectedPage, setSelectedPage] = useState<Page>("current");
  return (
    <>
      <Head>
        <title>Golf Tracker</title>
        <meta name="description" content="Golf Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#233329] to-[#63D471]">
        <div className="h-[85vh] w-[90vw] overflow-hidden rounded-lg bg-white p-8 shadow-lg sm:h-[30rem] sm:w-[30rem]">
          <div className="flex h-full w-full flex-col justify-between gap-[1rem] sm:justify-evenly">
            <h1 className="text-center text-4xl font-bold">Golf Tracker</h1>

            <div className="grow">
              {selectedPage === "current" && <CurrentScore />}
              {selectedPage === "add" && <AddNewScore />}
              {selectedPage === "log" && <ScoreLog />}
            </div>

            <Footer onClick={(page: Page) => setSelectedPage(page)} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
