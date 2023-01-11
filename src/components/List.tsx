import { Trash, FilePdf } from "phosphor-react";
import React, { useState, Fragment } from "react";

import { Popover, Dialog } from "@headlessui/react";
import { Table } from "./Table";
import { rip } from "./Gerador";

interface ListProps {
  item: rip;
  handleDelete: (type: string) => void;
  op: any;
}

export const List = ({ item, handleDelete, op }: ListProps) => {
  const { id, description, opName, ferramenta, cota, tolMax, tolMin, toleranciaMax, toleranciaMin } = item;
  let [isOpen, setIsOpen] = useState(false);

  const [opNumber, setOpNumber] = useState<number>();
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

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 bg-gray-400">
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-scroll bg-zinc-100 ">
          <Dialog.Panel className="w-auto h-full rounded bg-zinc-100">
            <Table op={op} item={item} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
