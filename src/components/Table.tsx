import React, { useRef, useCallback } from "react";
import { rip } from "./Gerador";

import { useReactToPrint } from "react-to-print";

import { Printer } from "phosphor-react";

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
  const componentRef = useRef(null);

  let x: any[] = [];

  const tableGenerator = () => {
    // Linhas
    for (let i = 1; i <= 13; i++) {
      x.push(i);
    }
  };

  tableGenerator();

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
  });

  return (
    <>
      <div ref={componentRef} className="flex items-center justify-center h-full">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <table>
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
      </div>

      <button
        type="button"
        className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handlePrint}
      >
        <Printer size={32} weight="fill" />
      </button>
    </>
  );
};
