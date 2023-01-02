import { Button } from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { type Page } from "../types";
import { Leaderboard } from "@mui/icons-material";

interface FooterProps {
  onClick: (page: Page) => void;
}
export default function Footer({ onClick }: FooterProps) {
  return (
    <div>
      <div className="flex w-full">
        <Button
          aria-label="current"
          size="large"
          fullWidth
          onClick={() => {
            onClick("current");
          }}
        >
          <Leaderboard />
        </Button>
        <Button
          aria-label="Add"
          size="large"
          fullWidth
          onClick={() => {
            onClick("add");
          }}
        >
          <AddBoxIcon />
        </Button>
        <Button
          aria-label="Log"
          size="large"
          fullWidth
          onClick={() => {
            onClick("log");
          }}
        >
          <ListAltIcon />
        </Button>
      </div>
    </div>
  );
}
