import React from "react";

interface DeskbarProps {
  opName: string;
  description: string;
  ferramenta: string;
}

export const Deskbar = ({ opName, description, ferramenta }: DeskbarProps) => {
  return (
    <table>
      <tr>
        <td style={{ width: "193px" }} className="px-1 border  text-right border-zinc-900 font-semibold bg-zinc-300 border-t-0">
          INSTRUMENTO:
        </td>
        <td style={{ width: "184px" }} className="px-1 border border-zinc-900 border-t-0 font-semibold text-red-600">
          {ferramenta?.toLocaleUpperCase()}
        </td>
        <td style={{ width: "186px" }} className="px-1 border text-right border-zinc-900 font-semibold bg-zinc-300 border-t-0">
          DESCRICÃO:
        </td>
        <td className="px-1 border border-zinc-900 border-t-0 font-semibold text-red-600">{description?.toLocaleUpperCase()}</td>
        <td style={{ width: "56px" }} className="px-1 border text-center border-zinc-900 border-t-0 font-semibold text-red-600">
          OP {opName?.toLocaleUpperCase()}
        </td>
      </tr>
    </table>
  );
};
