import React, { useRef } from "react";
import { rip } from "./Gerador";

import ReactToPrint from "react-to-print";

interface TableProps {
  opName: string;
  description: string;
  ferramenta: string;
  cota: number;
  tolMax: number;
  tolMin: number;
  toleranciaMax: any;
  toleranciaMin: any;
}

export const Table = ({ opName, ferramenta, cota, tolMax, tolMin, toleranciaMax, toleranciaMin, description }: TableProps) => {
  const compRef = useRef<any>();

  let x: any[] = [];

  const tableGenerator = () => {
    // Linhas
    for (let i = 1; i <= 13; i++) {
      x.push(i);
    }
  };

  tableGenerator();

  return (
    <div className="flex">
      <table>
        <tr>
          <td
            style={{ letterSpacing: "4px" }}
            className="w-10 text-lg text-zinc-900 font-bold bg-zinc-300 border border-zinc-900 text-center border-r-0"
          >
            <div className="-rotate-90 w-11">{ferramenta}</div>
          </td>
          <td
            style={{ letterSpacing: "4px" }}
            className="w-14 text-lg text-zinc-900 font-bold bg-zinc-300 border border-zinc-900 text-center border-r-0"
          >
            <div className="-rotate-90 w-11 text-center">{description}</div>
          </td>
        </tr>
      </table>
      <div className="flex">
        <table ref={compRef}>
          <tbody>
            {toleranciaMax.map((item: any) => (
              <tr key={item}>
                <td className="w-14 border border-zinc-900 text-center border-r-0">{Number(item).toFixed(3)}</td>
              </tr>
            ))}
            <tr>
              <td className="w-14 border border-zinc-900 text-center bg-zinc-300 border-r-0">{Number(cota).toFixed(3)}</td>
            </tr>
            {toleranciaMin.map((item: any) => (
              <tr key={item}>
                <td className="w-14 border border-zinc-900 text-center border-r-0">{Number(item).toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Check Box */}
        <table className="flex-1">
          <tbody>
            {toleranciaMax.map((item: any) => (
              <tr>
                {x.map((item, index) => (
                  <td className="w-14 border border-zinc-900 text-center">
                    <input name={index.toString()} type="radio" />
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              {x.map((item, index) => (
                <td className="w-14 bg-zinc-300 border border-zinc-900 text-center">
                  <input name={index.toString()} type="radio" />
                </td>
              ))}
            </tr>
            {toleranciaMin.map((item: any) => (
              <tr>
                {x.map((item, index) => (
                  <td className="w-14 border border-zinc-900 text-center">
                    <input name={index.toString()} type="radio" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
