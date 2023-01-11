import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { List } from "./List";
import { Table } from "./Table";
import Select from "react-select";
import Moment from "moment";

export type rip = {
  id: string;
  opName: string;
  description: string;
  ferramenta: string;
  cota: number;
  tolMax: number;
  tolMin: number;
  toleranciaMax: any;
  toleranciaMin: any;
  data: string;
};

export const Gerador = () => {
  const [page, setPage] = useState(0);

  const [nomeOp, setNomeOp] = useState<any>("");
  const [processo, setProcesso] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [ferramenta, setFerramenta] = useState<any>("");

  const [cota, setCota] = useState<number>(4);
  const [tolMax, setTolMax] = useState<number>(1);
  const [tolMin, setTolMin] = useState<number>(1);

  const [multTolMax, setMultTolMax] = useState<number>(5);
  const [multTolMin, setMultTolMin] = useState<number>(5);

  const multiplicadorMax = tolMax / multTolMax;
  const multiplicadorMin = tolMin / multTolMin;

  const [op, setOp] = useState<[{}] | any | []>([]);

  const createOp = (
    opName: { value: "string"; key: string },
    description: string,
    ferramenta: { value: "string"; key: string },
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
        opName: nomeOp.value,
        description,
        ferramenta: ferramenta.value,
        cota,
        tolMax,
        tolMin,
        toleranciaMax,
        toleranciaMin,
        data: Moment().format(),
      },
    ]);
  };

  const handleDelete = (id: string) => {
    const newOp = op.filter((item: any) => item.id !== id);
    setOp(newOp);
  };

  const ferramentaOptions = [
    { key: uuidv4(), value: "Paquimetro", label: "Paquimetro" },
    { key: uuidv4(), value: "Subto", label: "Subto" },
    { key: uuidv4(), value: "Micrometro", label: "Micrometro" },
    { key: uuidv4(), value: "Trena", label: "Trena" },
    { key: uuidv4(), value: "Calibrador", label: "Calibrador" },
    { key: uuidv4(), value: "Tridimensional", label: "Tridimensional" },
  ];

  const maquinasOptions = [
    { value: "Policorte", label: "Policorte" },
    { value: "Serra-fita", label: "Serra-fita" },
    { value: "Torno Mazak", label: "Torno Mazak" },
    { value: "Torno Index", label: "Torno Index" },
    { value: "Torno Romi", label: "Torno Romi" },
    { value: "Centro D1250", label: "Centro D1250" },
    { value: "Centro D800", label: "Centro D800" },
    { value: "Centro Ibarmia", label: "Centro Ibarmia" },
    { value: "Fresadora 1", label: "Fresadora 1" },
    { value: "Fresadora 2", label: "Fresadora 2" },
    { value: "Torno Mec", label: "Torno Mec" },
    { value: "Retifica Plana", label: "Retifica Plana" },
    { value: "Retifica Cilindrica", label: "Retifica Cilindrica" },
  ];

  const processoOptions = [
    { key: uuidv4(), value: "Serra", label: "Serra" },
    { key: uuidv4(), value: "Torneamento", label: "Torneamento" },
    { key: uuidv4(), value: "Centro de Usinagem", label: "Centro de Usinagem" },
    { key: uuidv4(), value: "Fresamento", label: "Fresamento" },
    { key: uuidv4(), value: "Acabamento", label: "Acabamento" },
  ];
  const operacaoOptions = [
    { key: uuidv4(), value: "10", label: "OP 10" },
    { key: uuidv4(), value: "20", label: "OP 20" },
    { key: uuidv4(), value: "30", label: "OP 30" },
    { key: uuidv4(), value: "40", label: "OP 40" },
    { key: uuidv4(), value: "50", label: "OP 50" },
    { key: uuidv4(), value: "60", label: "OP 60" },
    { key: uuidv4(), value: "70", label: "OP 70" },
    { key: uuidv4(), value: "80", label: "OP 80" },
    { key: uuidv4(), value: "90", label: "OP 90" },
  ];

  const handleGenerator = () => {
    let max = cota + tolMax;
    let min = cota - tolMin;
    let c = 0;

    var tMax: number[] = [];
    var tMin: number[] = [];

    if (tolMax !== 0) {
      for (c = cota + multiplicadorMax; Number(c.toFixed(3)) <= max; c += multiplicadorMax) {
        tMax.push(Number(c.toFixed(3)));
      }
    }

    if (tolMin !== 0) {
      for (let c = cota - multiplicadorMin; Number(c.toFixed(3)) >= min; c -= multiplicadorMin) {
        tMin.push(Number(c.toFixed(3)));
      }
    }

    tMax.sort((a, b) => b - a);
    createOp(nomeOp, description, ferramenta, cota, max, min, tMax, tMin);
  };

  console.log(op.sort((p1: rip, p2: rip) => (p2.data > p1.data ? 1 : p2.data < p1.data ? -1 : 0)));

  return (
    <div className="p-4">
      {page === 0 ? (
        <>
          <h1 className="text-xl font-medium mb-8">Gerador de Registro de Inspeção Periodica</h1>
          <form>
            <div className="grid gap-6 mb-6 sm:grid-cols-5">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                  Cota
                </label>
                <input
                  onChange={(e) => setCota(Number(e.target.value))}
                  type="number"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                  M Max
                </label>
                <input
                  defaultValue={5}
                  onChange={(e) => setMultTolMax(Number(e.target.value))}
                  type="number"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">
                  M Min
                </label>
                <input
                  defaultValue={5}
                  onChange={(e) => setMultTolMin(Number(e.target.value))}
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="operation" className="block mb-2 text-sm font-medium text-gray-900">
                  Operação
                </label>
                <Select id="operation" defaultValue={nomeOp} onChange={setNomeOp} options={operacaoOptions} isClearable isSearchable />
              </div>
              <div className="mb-6">
                <label htmlFor="process" className="block mb-2 text-sm font-medium text-gray-900">
                  Processo
                </label>
                <Select id="process" defaultValue={processo} onChange={setProcesso} options={processoOptions} isClearable isSearchable />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                  Descrição
                </label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="ferramenta" className="block mb-2 text-sm font-medium text-gray-900">
                  Instrumento
                </label>
                <Select id="ferramenta" defaultValue={ferramenta} onChange={setFerramenta} options={ferramentaOptions} isClearable isSearchable />
              </div>
              <div className="flex gap-4 items-center">
                <button
                  onClick={handleGenerator}
                  type="button"
                  className="h-auto py-2 px-5 text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center "
                >
                  Adicionar
                </button>
              </div>
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
                      Descrição
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
                      <>
                        {console.log(item.id)}
                        <List op={op} key={item.id} item={item} handleDelete={handleDelete} />
                      </>
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
