import React from "react";

export const AddRipStep = () => {
  return (
    <form className="mt-5">
      <div className="grid gap-6 mb-6 sm:grid-cols-5">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
            Cota
          </label>
          <input
            min={0}
            onChange={(e) => setCota(Number(e.target.value))}
            type="number"
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            placeholder=""
            required
          />
        </div>

        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">
            Tol +
          </label>
          <input
            min={0}
            onChange={(e) => setTolMax(Number(e.target.value))}
            type="number"
            id="last_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            placeholder=""
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
            Tol -
          </label>
          <input
            min={0}
            onChange={(e) => setTolMin(Number(e.target.value))}
            type="number"
            id="company"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
            Multiplicador Max
          </label>
          <input
            min={0}
            defaultValue={5}
            onChange={(e) => setMultTolMax(Number(e.target.value))}
            type="number"
            id="phone"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">
            Multiplicador Min
          </label>
          <input
            min={0}
            defaultValue={5}
            onChange={(e) => setMultTolMin(Number(e.target.value))}
            type="url"
            id="website"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
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
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
            className="h-auto py-2 px-5 text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto text-center"
          >
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
};
