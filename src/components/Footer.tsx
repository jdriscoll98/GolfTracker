import { Button, IconButton } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { type Page } from "../types";

interface FooterProps {
  active: Page;
  onClick: (page: Page) => void;
}
export default function Footer({ active, onClick }: FooterProps) {
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
          <HomeIcon />
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
