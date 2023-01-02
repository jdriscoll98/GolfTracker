import { Button, Input } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { trpc } from "../utils/trpc";

export default function AddNewScore() {
  const [jackScore, setJackScore] = React.useState("");
  const [coleScore, setColeScore] = React.useState("");

  const postScore = trpc.round.postScore.useMutation();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-full flex-col justify-evenly gap-[1rem]">
      <h2 className="text-center text-3xl font-semibold">Add New Score</h2>
      <div className="flex flex-col gap-[1rem]">
        <label className="text-xl font-medium">Jack</label>
        <Input
          type="number"
          value={jackScore}
          onChange={(e) => {
            setJackScore(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <label className="text-xl font-medium">Cole</label>
        <Input
          type="number"
          value={coleScore}
          onChange={(e) => {
            setColeScore(e.target.value);
          }}
        />
      </div>
      {session ? (
        <Button
          className="mx-auto"
          onClick={async () => {
            postScore.mutate(
              {
                jackScore: parseInt(jackScore),
                coleScore: parseInt(coleScore),
              },
              {
                onSuccess: () => {
                  setJackScore("");
                  setColeScore("");
                  alert("Score added!");
                },
              }
            );
          }}
        >
          Add Score
        </Button>
      ) : (
        <Button className="mx-auto" onClick={() => signIn("discord")}>
          Log in to add scores
        </Button>
      )}
    </div>
  );
}
