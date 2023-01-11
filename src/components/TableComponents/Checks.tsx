import React from "react";

interface ChecksProps {
  toleranciaMax: any;
  toleranciaMin: any;
}

export const Checks = ({ toleranciaMax, toleranciaMin }: ChecksProps) => {
  let x: any[] = [];

  const tableGenerator = () => {
    // Linhas
    for (let i = 1; i <= 13; i++) {
      x.push(i);
    }
  };

  tableGenerator();

  return (
    <table className="flex-1">
      <tbody>
        {toleranciaMax.map((item: any) => (
          <tr>
            {x.map((item: any, index: number) => (
              <td className={`c${index} w-14 border border-zinc-900 text-center`}>o</td>
            ))}
          </tr>
        ))}
        <tr>
          {x.map((item: any, index: number) => (
            <td className={`c${index} w-14 bg-zinc-300 border border-zinc-900 text-center`}>o</td>
          ))}
        </tr>
        {toleranciaMin.map((item: any) => (
          <tr>
            {x.map((item: any, index: number) => (
              <td className={`c${index} w-14 border border-zinc-900 text-center`}>o</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
