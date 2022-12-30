import { Button, Input } from "@mui/material";
import React from "react";

export default function AddNewScore() {
  return (
    <div className="flex h-full flex-col justify-evenly gap-[1rem]">
      <h2 className="text-center text-3xl font-semibold">Add New Score</h2>
      <div className="flex flex-col gap-[1rem]">
        <label className="text-xl font-medium">Jack</label>
        <Input />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <label className="text-xl font-medium">Cole</label>
        <Input />
      </div>
      <Button className="mx-auto">Add Score</Button>
    </div>
  );
}
