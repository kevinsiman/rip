import { Trash } from "phosphor-react";
import React from "react";

interface ListProps {
  opName: string;
  ferramenta: string;
  cota: number;
  tolMax: number;
  tolMin: number;
}

export const List = ({ opName, ferramenta, cota, tolMax, tolMin }: ListProps) => {
  return (
    <tr className="bg-white border-b ">
      <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {opName}
      </th>
      <td className="text-center px-6 py-4 text-gray-900">{ferramenta}</td>
      <td className="text-center px-6 py-4 text-gray-900">{cota}</td>
      <td className="text-center px-6 py-4 text-gray-900">{tolMax}</td>
      <td className="text-center px-6 py-4 text-gray-900">{tolMin}</td>
      <td className="text-center px-6 py-4 text-gray-900 flex justify-center">
        <Trash size={20} weight="fill" />
      </td>
    </tr>
  );
};
