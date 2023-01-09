import React from "react";
import { rip } from "./Gerador";

interface TableProps {
  opName: string;
  ferramenta: string;
  cota: number;
  tolMax: number;
  tolMin: number;
  toleranciaMax: any;
  toleranciaMin: any;
}

export const Table = ({ opName, ferramenta, cota, tolMax, tolMin, toleranciaMax, toleranciaMin }: TableProps) => {
  let x: any[] = [];
  let y: any[] = [];

  const tableGenerator = () => {
    // Linhas
    for (let i = 1; i <= 13; i++) {
      x.push(i);
    }
    // Colunas
    for (let j = 1; j <= 10; j++) {
      y.push(j);
    }
  };

  tableGenerator();

  return (
    <div className="flex">
      {" "}
      <table>
        <tbody>
          {toleranciaMax.map((item: any) => (
            <tr key={item}>
              <td className="w-14 border border-zinc-900 text-center">{Number(item).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td className="w-14 border border-zinc-900 text-center bg-zinc-300">{Number(cota).toFixed(2)}</td>
          </tr>
          {toleranciaMin.map((item: any) => (
            <tr key={item}>
              <td className="w-14 border border-zinc-900 text-center">{Number(item).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Check Box */}
      <table className="flex-1">
        <tbody>
          {x.map((item, index) => (
            <tr>
              {y.map((item) => (
                <td className="w-14 border border-zinc-900 text-center">
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
