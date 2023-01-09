import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { List } from "./List";

export const Gerador = () => {
  const [nomeOp, setNomeOp] = useState<string>("");
  const [ferramenta, setFerramenta] = useState<string>("");

  const [cota, setCota] = useState<number>(4);
  const [tolMax, setTolMax] = useState<number>(1);
  const [tolMin, setTolMin] = useState<number>(1);

  const [multTolMax, setMultTolMax] = useState<number>(5);
  const [multTolMin, setMultTolMin] = useState<number>(5);

  const multiplicadorMax = tolMax / (multTolMax + 1);
  const multiplicadorMin = tolMin / (multTolMin + 1);

  const [op, setOp] = useState<[{}] | any | []>([]);

  type rip = {
    id: string;
    nomeOp: string;
    ferramenta: string;
    cota: number;
    tolMax: number;
    tolMin: number;
  };

  const createOp = (
    id: number,
    nomeOp: string,
    ferramenta: string,
    cota: number,
    tolMax: number,
    tolMin: number,
    toleranciaMax: number[],
    toleranciaMin: number[]
  ) => {
    setOp([
      ...op,
      {
        id: uuidv4(),
        nomeOp,
        ferramenta,
        cota,
        tolMax,
        tolMin,
        toleranciaMax,
        toleranciaMin,
      },
    ]);
  };

  const handleGenerator = () => {
    let max = cota + tolMax;
    let min = cota - tolMin;
    let c = 0;

    var tMax: number[] = [];
    var tMin: number[] = [];

    for (c = cota + multiplicadorMax; Number(c.toFixed(2)) <= max; c += multiplicadorMax) {
      //console.log("MAX", Number(c.toFixed(2)));
      tMax.push(Number(c.toFixed(2)));
    }

    // console.log("COTA", Number(cota.toFixed(2)));

    for (let c = cota - multiplicadorMin; Number(c.toFixed(2)) >= min; c -= multiplicadorMin) {
      //console.log("MIN", Number(c.toFixed(2)));
      tMin.push(Number(c.toFixed(2)));
    }

    createOp(1, nomeOp, ferramenta, cota, max, min, tMax, tMin);
  };

  console.log(op);

  return (
    <div className="p-4">
      <h1 className="text-xl font-medium mb-8">Gerador de Registro de Inspeção Periodica</h1>
      <form>
        <div className="grid gap-6 mb-6 sm:grid-cols-3">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
              Cota
            </label>
            <input
              onChange={(e) => setCota(Number(e.target.value))}
              type="number"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">
              Tol +
            </label>
            <input
              onChange={(e) => setTolMax(Number(e.target.value))}
              type="number"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
              Tol -
            </label>
            <input
              onChange={(e) => setTolMin(Number(e.target.value))}
              type="number"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
              Multiplicador Max
            </label>
            <input
              defaultValue={5}
              onChange={(e) => setMultTolMax(Number(e.target.value))}
              type="number"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">
              Multiplicador Min
            </label>
            <input
              defaultValue={5}
              onChange={(e) => setMultTolMin(Number(e.target.value))}
              type="url"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">
              Nome da Operaçao
            </label>
            <input
              onChange={(e) => setNomeOp(e.target.value)}
              type="text"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
            Ferramenta
          </label>
          <select
            defaultValue=""
            onChange={(e) => setFerramenta(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-blue-500 block w-full p-2.5 "
          >
            <option defaultValue=""></option>
            <option value="Paquimetro">Paquimetro</option>
            <option value="Subto">Subto</option>
            <option value="Micrometro">Micrometro</option>
            <option value="Trena">Trena</option>
            <option value="Calibrador">Calibrador / Com Acabamento</option>
            <option value="Tridimensional">Tridimensional</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGenerator}
            type="button"
            className="text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Adicionar
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-col mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Operaçao
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Ferramenta
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Cota
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Max
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Min
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  açoes
                </th>
              </tr>
            </thead>
            <tbody>
              {op.length !== 0 ? (
                op.map((item: rip, index: number) => (
                  <List key={item.id} opName={item.nomeOp} ferramenta={item.ferramenta} cota={item.cota} tolMax={item.tolMax} tolMin={item.tolMin} />
                ))
              ) : (
                <tr>
                  <td>
                    <span>Nenhuma OP Cadastrada</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
