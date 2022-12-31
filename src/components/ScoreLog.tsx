import React from "react";
import { trpc } from "../utils/trpc";

export default function ScoreLog() {
  const { data: messages, isLoading } = trpc.guestbook.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-center text-3xl font-semibold">Score Log</h2>
        {messages?.map((message) => (
          <div key={message.name}>{message.message}</div>
        ))}

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
