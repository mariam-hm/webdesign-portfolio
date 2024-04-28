"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

export const ImageDialog = ({ image }) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-xl rounded bg-transparent">
          <Image src={image} alt={"quote-details-before"} quality={100} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
