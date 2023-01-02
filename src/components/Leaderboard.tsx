import React from "react";
import { trpc } from "../utils/trpc";

export default function Leaderboard() {
  const { data: scores, isLoading } = trpc.round.getAll.useQuery();

  const jackScores = scores?.map((score) => score.jackScore);
  const coleScores = scores?.map((score) => score.coleScore);

  const jackTotal = jackScores?.reduce((a, b) => a + b, 0);
  const coleTotal = coleScores?.reduce((a, b) => a + b, 0);

  const getWinner = () => {
    if (jackTotal && coleTotal) {
      if (jackTotal <= coleTotal) {
        return `Jack: ${jackTotal}`;
      } else if (coleTotal < jackTotal) {
        return `Cole: ${coleTotal}`;
      }
    }
    return "No scores yet";
  };

  const getLoser = () => {
    if (jackTotal && coleTotal) {
      if (jackTotal <= coleTotal) {
        return `Cole: ${coleTotal}`;
      } else if (coleTotal < jackTotal) {
        return `Jack: ${jackTotal}`;
      }
    }
    return "No scores yet";
  };

  return (
    <div className="flex h-full flex-col gap-[4rem]">
      <h2 className="text-center text-3xl font-semibold">Leaderboard</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-[4rem]">
            <h1 className="text-center text-5xl">1. {getWinner()}</h1>
            <h1 className="text-center text-2xl">2. {getLoser()}</h1>
          </div>
        </>
      )}
    </div>
  );
}
