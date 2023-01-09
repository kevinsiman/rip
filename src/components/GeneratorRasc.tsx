import React, { useState } from "react";
export function GeneratorRasc() {
  const [cota, setCota] = useState<number>(4);
  const [max, setMax] = useState<number>(2);
  const [min, setMin] = useState<number>(1);
  const [quant, setQuant] = useState<number>(5);

  const [toleranciaMax, setToleranciaMax] = useState<number[]>([]);
  const [toleranciaMin, setToleranciaMin] = useState<number[]>([]);

  let x: any[] = [];
  let y: any[] = [];

  const tableGenerator = () => {
    // Linhas
    for (let i = 1; i <= quant * 2; i++) {
      x.push(i);
    }
    // Colunas
    for (let j = 1; j <= 10; j++) {
      y.push(j);
    }
  };

  tableGenerator();

  const cotaGenerator = () => {
    var maxM = cota + max;
    var minM = cota - min;
    var divisorMax = max / quant;
    var divisorMin = min / quant;

    var tMax: number[] = [];
    var tMin: number[] = [];
    Number(divisorMax.toFixed(2));
    Number(divisorMin.toFixed(2));

    for (var cotamax = cota + divisorMax; cotamax <= maxM; cotamax += divisorMax) {
      console.log("Cota Max ===>", cotamax.toFixed(2));
      tMax.push(Number(cotamax.toFixed(2)));
    }

    console.log("Cota ===>", cota.toFixed(2));

    for (var cotamin = cota - divisorMin; cotamin >= minM; cotamin -= divisorMin) {
      console.log("Cota Min ===>", cotamin.toFixed(2));
      tMin.push(Number(cotamin.toFixed(2)));
    }

    setToleranciaMax(tMax);
    setToleranciaMin(tMin);
  };

  toleranciaMax.sort((a, b) => b - a);
  console.log(toleranciaMax);

  return (
    <div className="flex flex-col">
      <button onClick={cotaGenerator} className="bg-gray-200 hover:bg-gray-400 transition-all duration-75">
        Gerar
      </button>
      <div className="flex gap-4">
        {/*  Cota */}
        <div>
          <span>Cota</span>
          <input
            onChange={(e) => setCota(Number(e.target.value))}
            type="number"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
            required
          />
        </div>
        <div>
          <span>Max</span>
          <input
            type="number"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
            required
          />
        </div>
        <div>
          <span>Min</span>
          <input
            type="number"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
            required
          />
        </div>
        <div>
          <span>Min</span>
          <input
            type="number"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
            required
          />
        </div>
      </div>
      <div className="flex w[100vw] items-center justify-center gap-2"></div>
      <div className="flex">
        <table>
          <tbody>
            {toleranciaMax.map((item) => (
              <tr key={item}>
                <td className="w-14">{item}</td>
              </tr>
            ))}
            <tr>
              <td className="bg-gray-400">{Number(cota).toFixed(2)}</td>
            </tr>
            {toleranciaMin.map((item) => (
              <tr key={item}>
                <td>{item}</td>
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
                  <td className="text-center">o</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
