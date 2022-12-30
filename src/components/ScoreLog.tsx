import React from "react";

export default function ScoreLog() {
  return (
    <div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-center text-3xl font-semibold">Score Log</h2>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between gap-[1rem] text-2xl font-medium">
            <div className="grow">Round #</div>
            <div>Jack</div>
            <div>Cole</div>
          </div>
          <div className="flex justify-between gap-[1rem] text-2xl font-medium">
            <div className="grow">1</div>
            <div>340</div>
            <div>332</div>
          </div>
          <div className="flex justify-between gap-[1rem] text-2xl font-medium">
            <div className="grow">2</div>
            <div>340</div>
            <div>332</div>
          </div>
          <div className="flex justify-between gap-[1rem] text-2xl font-medium">
            <div className="grow">3</div>
            <div>340</div>
            <div>332</div>
          </div>
        </div>
      </div>
    </div>
  );
}
