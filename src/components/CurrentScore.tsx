import React from "react";

export default function CurrentScore() {
  return (
    <div className="flex h-full flex-col gap-8">
      <h2 className="text-center text-3xl font-semibold">Leaderboard</h2>
      <div className="mx-auto flex flex-col gap-4">
        <div className="flex justify-start gap-[5rem] text-2xl font-medium">
          <div className="grow">1. Jack Driscoll</div>
          <div>340</div>
        </div>
        <div className="flex justify-start gap-[5rem] text-2xl font-medium">
          <div className="grow">2. Cole Perler</div>
          <div>332</div>
        </div>
      </div>
    </div>
  );
}
