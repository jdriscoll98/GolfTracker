import { DeleteForever } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import { trpc } from "../utils/trpc";

export default function ScoreLog() {
  const { data: scores, isLoading } = trpc.round.getAll.useQuery();
  const { data: session } = useSession();
  const deleteScore = trpc.round.deleteScore.useMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-center text-3xl font-semibold">Score Log</h2>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between gap-[1rem] text-2xl font-medium">
            <div className="grow">Round #</div>
            <div>Jack</div>
            <div>Cole</div>
            {session ? <div>X</div> : null}
          </div>

          {scores?.map((score, index) => {
            return (
              <div
                className="flex items-center justify-between gap-[1rem] text-2xl font-medium"
                key={`${score.jackScore}-${score.coleScore}-${index}`}
              >
                <div className="grow">{index + 1}</div>
                <div>{score.jackScore}</div>
                <div>{score.coleScore}</div>
                {session ? (
                  <IconButton
                    onClick={() => {
                      deleteScore.mutate(
                        { id: score.id },
                        {
                          onSuccess: () => {
                            alert("Score deleted!");
                          },
                        }
                      );
                    }}
                  >
                    <DeleteForever color="error" />
                  </IconButton>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
