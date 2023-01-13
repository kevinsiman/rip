import React from "react";
import { HeaderType } from "../Gerador";

interface HeaderFormStep {
  headerInfo: HeaderType;
  setHeaderInfo: (type: HeaderType) => void;
}

export const HeaderFormStep = ({ setHeaderInfo, headerInfo }: HeaderFormStep) => {
  return (
    <div className="flex justify-center">
      <form className="mt-5">
        <div className="grid gap-6 mb-6 sm:grid-cols-3 just">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
              Elaborador
            </label>
            <input
              onChange={(e) => setHeaderInfo({ ...headerInfo, elaborador: e.target.value })}
              type="text"
              id="first_name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              placeholder=""
              required
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">
              Liberado
            </label>
            <input
              onChange={(e) => setHeaderInfo({ ...headerInfo, liberado: e.target.value })}
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder=""
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
              Ordem de Produção
            </label>
            <input
              onChange={(e) => setHeaderInfo({ ...headerInfo, op: e.target.value })}
              type="text"
              id="company"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
              Quantidade
            </label>
            <input
              min={0}
              defaultValue={0}
              onChange={(e) => setHeaderInfo({ ...headerInfo, qtd: Number(e.target.value) })}
              type="number"
              id="phone"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">
              Peça
            </label>
            <input
              onChange={(e) => setHeaderInfo({ ...headerInfo, peca: e.target.value })}
              type="url"
              id="website"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
              Cliente
            </label>
            <input
              onChange={(e) => setHeaderInfo({ ...headerInfo, cliente: e.target.value })}
              type="text"
              id="description"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};
