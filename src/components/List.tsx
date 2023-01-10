import { Trash, FilePdf } from "phosphor-react";
import React, { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Table } from "./Table";
import { rip } from "./Gerador";

interface ListProps {
  item: rip;
  handleDelete: (type: string) => void;
}

export const List = ({ item, handleDelete }: ListProps) => {
  const { id, description, opName, ferramenta, cota, tolMax, tolMin, toleranciaMax, toleranciaMin } = item;
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
        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          {description}
        </th>
        <td className="text-center px-6 py-4 text-gray-900">
          <span className="bg-blue-200 text-blue-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{ferramenta}</span>
        </td>
        <td className="text-center px-6 py-4 text-gray-900">{cota}</td>
        <td className="text-center px-6 py-4 text-gray-900">{tolMax}</td>
        <td className="text-center px-6 py-4 text-gray-900">{tolMin}</td>
        <td className="text-center px-6 py-4 text-gray-900 flex justify-center gap-2">
          <FilePdf className="hover:cursor-pointer" onClick={openModal} size={20} weight="fill" />
          <Trash className="hover:cursor-pointer" onClick={() => handleDelete(id)} size={20} weight="fill" />
        </td>
      </tr>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="w-[100vw] relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" w-[100vw] fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full w-[100vw] items-center justify-center p-4 text-center">
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
                    description={description}
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
