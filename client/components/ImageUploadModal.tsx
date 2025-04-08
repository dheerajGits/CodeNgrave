"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment } from "react";
import ImageUpload from "./ImageUpload";

export default function ImageUploadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>
            <DialogPanel className=" transform flex flex-col overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
              <DialogTitle
                as="h3"
                className="text-xl font-bold leading-6 text-gray-900"
              >
                Select and Upload Image
              </DialogTitle>
              <ImageUpload isModal={true} code={""} setCode={() => {}} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
