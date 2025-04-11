"use client";
import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import { VscSearch } from "react-icons/vsc";
import Input from "../../Atoms/Input/Input";
import Modal from "./Modal";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="dark"
        className="p-1.5! text-primary hover:bg-transparent text-lg!"
        onClick={() => setOpen(true)}
      >
        <VscSearch />
      </Button>

      {/* Modal */}
      <Modal
        open={open}
        onOpen={() => setOpen(false)}
        className="h-60 gap-2"
        closeButton={false}
      >
        <Input
          placeholder="Search music name ..."
          className="w-100 *:text-[0.85rem]! *:py-1"
        ></Input>
        <Button
          variant="dark"
          className="p-1.5! text-primary hover:bg-transparent text-lg!"
          onClick={() => setOpen(true)}
        >
          <VscSearch />
        </Button>
      </Modal>
    </>
  );
}
