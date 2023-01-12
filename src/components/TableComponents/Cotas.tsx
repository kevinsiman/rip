import React from "react";

interface CotasProps {
  toleranciaMax: any;
  toleranciaMin: any;
  cota: number;
}

export const Cotas = ({ toleranciaMax, toleranciaMin, cota }: CotasProps) => {
  return (
    <table>
      <tbody>
        {toleranciaMax.map((item: any, index: number) => (
          <tr key={item}>
            <td style={{ width: "127.3px" }} className={`w-20 border border-zinc-900 text-center border-r-0 font-semibold`}>
              {Number(item).toFixed(2)}
            </td>
          </tr>
        ))}
        <tr>
          <td className="w-20 border border-zinc-900 text-center bg-zinc-300 border-r-0 font-semibold">{Number(cota).toFixed(2)}</td>
        </tr>
        {toleranciaMin.map((item: any) => (
          <tr key={item}>
            <td className="w-20 border border-zinc-900 text-center border-r-0 font-semibold">{Number(item).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
