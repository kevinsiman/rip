import { Trash, FilePdf } from "phosphor-react";
import React, { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Table } from "./Table";

interface ListProps {
  opName: string;
  ferramenta: string;
  cota: number;
  tolMax: number;
  tolMin: number;
  toleranciaMax: any;
  toleranciaMin: any;
}

export const List = ({ opName, ferramenta, cota, tolMax, tolMin, toleranciaMax, toleranciaMin }: ListProps) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <tr className="bg-white border-b ">
        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          {opName}
        </th>
        <td className="text-center px-6 py-4 text-gray-900">{ferramenta}</td>
        <td className="text-center px-6 py-4 text-gray-900">{cota}</td>
        <td className="text-center px-6 py-4 text-gray-900">{tolMax}</td>
        <td className="text-center px-6 py-4 text-gray-900">{tolMin}</td>
        <td className="text-center px-6 py-4 text-gray-900 flex justify-center gap-2">
          <FilePdf className="hover:cursor-pointer" onClick={openModal} size={20} weight="fill" />
          <Trash className="hover:cursor-pointer" onClick={() => alert("Implementando")} size={20} weight="fill" />
        </td>
      </tr>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900"></Dialog.Title>
                  <Table
                    opName={opName}
                    ferramenta={ferramenta}
                    cota={cota}
                    tolMax={tolMax}
                    tolMin={tolMin}
                    toleranciaMax={toleranciaMax}
                    toleranciaMin={toleranciaMin}
                  />

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
